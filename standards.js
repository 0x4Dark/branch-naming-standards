const validateRegex = (input, branch) => {
    const regexExpression = RegExp(input);
    if (input.length > 0) {
        return regexExpression.test(branch);
    }
    return true;
}

const inList = (list, branch) => {
    return list.length > 0 && list.split(',').some((branchName) => branch === branchName);
}

const allowedPrefixes = (prefixes, branch) => {
    if (prefixes.length > 0) {
        return prefixes.split(',').some((branchName) => branch.startsWith(branchName))
    }
    return true;
}

const includesIssue = (id, branch) => {
    if (id.length > 0) {
        return branch.includes(id);
    }
    return true;
}


module.exports.validateRegex = validateRegex
module.exports.ignoredBranch = inList
module.exports.ignoredUser = inList
module.exports.allowedPrefixes = allowedPrefixes
module.exports.includesIssue = includesIssue
