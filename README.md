# Branch Naming Standards
![branch-naming-standards](https://github.com/markheumueller/branch-naming-standards/workflows/tests/badge.svg)
GitHub action for branching standards & conventions.action

## Usage
```yaml
uses: markheumueller/branch-naming-standards@v1.0.0
  with:
    regex: '^[a-zA-Z]+\/[a-zA-Z]*$'
    ignore_branches: 'master'
    ignore_users: 'markheumueller'
    allowed_prefixes: 'feature,bugfix,hotfix'
    issue_tracker: 'JIRA'
```

## License
License is `GNU Affero General Public License v3.0`
