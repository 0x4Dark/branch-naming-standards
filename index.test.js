const standards = require('./standards');

test('test regex', () => {
    expect(standards.validateRegex('^[a-zA-Z]+\\/[a-zA-Z]*$', 'foo/bar')).toBeTruthy();
    expect(standards.validateRegex('^[a-zA-Z]+\\/[a-zA-Z]*$', 'foo-bar')).toBeFalsy();
    expect(standards.validateRegex('', 'foo/bar')).toBeTruthy();
})

test('test ignoredBranch', () => {
    expect(standards.ignoredBranch('master,development', 'development')).toBeTruthy();
    expect(standards.ignoredBranch('master,development', 'test')).toBeFalsy();
    expect(standards.ignoredBranch('master', 'development')).toBeFalsy();
    expect(standards.ignoredBranch('', 'development')).toBeFalsy();
})

test('test ignoredUser', () => {
    expect(standards.ignoredUser('foo,bar', 'foo')).toBeTruthy();
    expect(standards.ignoredUser('foo,bar', 'test')).toBeFalsy();
    expect(standards.ignoredUser('foo', 'bar')).toBeFalsy();
    expect(standards.ignoredUser('', 'bar')).toBeFalsy();
})

test('test allowedPrefixes', () => {
    expect(standards.allowedPrefixes('feature,bugfix', 'feature/test-123')).toBeTruthy();
    expect(standards.allowedPrefixes('feature', 'bugfix/test-123')).toBeFalsy();
})

test('test includesIssue', () => {
    expect(standards.includesIssue('JIRA', 'feature/JIRA-123')).toBeTruthy();
    expect(standards.includesIssue('JIRA', 'bugfix/test-123')).toBeFalsy();
    expect(standards.includesIssue('', 'bugfix/test-123')).toBeTruthy();
})
