const core = require('@actions/core');
// const github = require('@actions/github');

async function run() {
    try {
        const regex = core.getInput('regex');
        console.log(regex);
        const ignore_branches = core.getInput('ignore_branches');
        console.log(ignore_branches);
        const ignore_users = core.getInput('ignore_users');
        console.log(ignore_users);
        const allowed_prefixes = core.getInput('allowed_prefixes');
        console.log(allowed_prefixes);
        const issue_tracker = core.getInput('issue_tracker');
        console.log(issue_tracker);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
