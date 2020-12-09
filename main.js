const core = require('@actions/core');
const github = require('@actions/github');

try {
    const regex = core.getInput('regex');
    const ignore_branches = core.getInput('ignore_branches');
    const ignore_users = core.getInput('ignore_users');
    const allowed_prefixes = core.getInput('allowed_prefixes');
    const issue_tracker = core.getInput('issue_tracker');
} catch (error) {
    core.setFailed(error.message);
}
