const core = require('@actions/core');
const github = require('@actions/github');
const standards = require('./standards');

async function run() {
    let branch;
    const event = github.context.eventName;
    if (event === 'push')
        branch = github.context.payload.ref.replace('refs/heads/', '')
    else if (event === 'pull_request') {
        branch = github.context.payload.pull_request.head.ref;
    }
    core.info(`Run branch action for ${branch}`);

    const user = github.context.payload.actor;
    core.info(`Created by user ${user}`);

    try {

        const ignore_users = core.getInput('ignore_users');
        if (standards.ignoredUser(ignore_users, user)) {
            core.info(`Skip action ${user} is in the ignored list | ${ignore_users}`);
            return
        }

        const ignore_branches = core.getInput('ignore_branches');
        if (standards.ignoredBranch(ignore_branches, branch)) {
            core.info(`Skip action ${branch} is in the ignored list | ${ignore_branches}`);
            return
        }

        const regex = core.getInput('regex');
        if (!standards.validateRegex(regex, branch)) {
            core.setFailed(`Branch ${branch} failed on regex test ${regex}`);
            return
        }

        const allowed_prefixes = core.getInput('allowed_prefixes');
        if (!standards.allowedPrefixes(allowed_prefixes, branch)) {
            core.setFailed(`Branch ${branch} failed because the name has not a valid prefix ${allowed_prefixes}`);
            return
        }

        const issue_tracker = core.getInput('issue_tracker');
        if (!standards.includesIssue(issue_tracker, branch)) {
            core.setFailed(`Branch ${branch} failed because the name does not contains the issue tracker id ${issue_tracker}`);
            return
        }
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
