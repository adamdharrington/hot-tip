[![HotTip](https://github.com/adamdharrington/hot-tip/raw/v2-rc/examples/src/images/hot-tip-sm.png?raw=true)](https://github.com/adamdharrington/hot-tip)

## HotTip - A stress-free redux/react tooltip solution

[![CircleCI](https://circleci.com/gh/adamdharrington/hot-tip.svg?style=shield)](https://circleci.com/gh/adamdharrington/hot-tip)
[![codecov](https://codecov.io/gh/adamdharrington/hot-tip/branch/v2-rc/graph/badge.svg)](https://codecov.io/gh/adamdharrington/hot-tip)
[![npm version](https://badge.fury.io/js/hot-tip.svg)](https://npmjs.com/package/hot-tip)
[![npm](https://img.shields.io/npm/dm/hot-tip.svg)](https://npmjs.com/package/hot-tip)
[![license](https://img.shields.io/github/license/adamdharrington/hot-tip.svg)](https://github.com/adamdharrington/hot-tip/blob/master/LICENCE)

## Install

Install with npm or yarn:

```bash
yarn add hot-tip
npm install --save hot-tip
```

## Examples

The examples provided can be used as a demonstration of package in action or as
a development environment. Check out the source code and follow the instructions
in the examples directory to run them locally.

## Why HotTip?

We weren't happy with tooltip solutions that looked like react components but under the cover used the DOM api directly (or heaven forbid jQuery). HotTip

- Using React? HotTip's only dependencies are react, react-dom & prop-types
- HotTip uses the context api and React synthetic events so it is as fast as you app and never gets out of sync with the DOM (no more orphaned tooltips)
- Tooltips are accessible and AAA compliant out of the box
- HotTip does only one thing, it positions and displays tooltips
- Positioning is responsive, if you're close to frame boundaries HotTip responds in a predictable way (see examples)
- HotTip bundles in at about 40kb (10kb compressed)

## Licence & Contribute

HotTip is on an MIT licence so it can be used anywhere with almost no restrictions.

To contribute please read the [CONTRIBUTING](CONTRIBUTING.md) file.
