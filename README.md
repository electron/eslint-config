# @electron-internal/eslint-config [![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/@electron-internal/eslint-config.svg
[npm-url]: https://npmjs.org/package/@electron-internal/eslint-config

This module is a reusable eslint config that the Electron team uses across our
projects for consistency.  It is loosely based on `standard` but with several
deviations, most notably we enforce semicolon usage.

## Installation

```bash
yarn add eslint eslint-plugin-node @electron-internal/eslint-config --dev
```

```json5
// .eslintrc.json
{
  "extends": "@electron-internal"
}
```
