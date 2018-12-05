# Change Log

This project uses [semver](http://semver.org/).

## 0.3.5 &mdash; 12/5/18

- Fix the one selector per line
- Fix indenting with multiple selectors
- Fix comments indenting and adding extra new lines

## 0.3.4 &mdash; 3/16/16

- Fix fail on empty input with checks for setting `css.first.raws.before = ''`.

## 0.3.1 - 0.3.3 &mdash; 3/16/16

- Update readme and changelog.
- Fix "files" field not being an array.
- Fix `/dist` not being included with package by adding `/dist` to "files" in `package.json`.

## 0.3.0 &mdash; 3/16/16

Switch codebase to es6 with Babel transpilation. Optimize logic into one tree traversal.

**ADD**
- smart spacing and indentation around rules and declarations
- only target top-level rules and comment for enforced empty linebreak

## 0.2.0 &mdash; 3/11/16

Restructure logic for easy extending.

**ADD**
- prepend newline to @rules (previously only affected non-@rules)

## 0.1.1 &mdash; 3/10/16

Switch from AVA to Mocha for tests because Travis-CI was throwing strange errors I don't feel like tracking down.

## 0.1.0 &mdash; 3/10/16

Initial release.

**ADD**
- newlines between rules
- one selector per line
