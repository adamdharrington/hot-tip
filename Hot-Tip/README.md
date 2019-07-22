[![Hot-Tip](https://github.com/adamdharrington/hot-tip/raw/v2-rc/examples/src/images/hot-tip-sm.png?raw=true)](https://github.com/adamdharrington/hot-tip)

## Hot-Tip - A stress-free redux/react tooltip solution

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

## Build Hot-Tip

```shell
yarn build
# or in watch mode
yarn develop
```

## Examples

[Examples are available here](https://adamdharrington.github.io/hot-tip/).

The examples provided can be used as a demonstration of package in action or as
a development environment. Check out the source code and follow the instructions
in the examples directory to run them locally.

## Why Hot-Tip?

We weren't happy with tooltip solutions that looked like react components but under the cover used the DOM api directly (or heaven forbid jQuery).

### Hot-Tip:

- Using React? Hot-Tip's only dependencies are CSS (or SASS), React, ReactDom & Prop-Types
- Hot-Tip uses the context api and React synthetic events so it is as fast as you app and never gets out of sync with the DOM (which means no more orphaned tooltips)
- Tooltips are accessible and ARIA AA compliant out of the box
- Hot-Tip does only one thing, it positions and displays tooltips
- Positioning is responsive, if you're close to frame boundaries Hot-Tip responds in a predictable way (see examples)
- Hot-Tip bundles in at about 40kb (10kb compressed)

## Accessibility

Hot-Tip is designed according to the [WAI-ARAI authoring practices](https://www.w3.org/TR/wai-aria-practices-1.1/#tooltip) and used guidelines by [Atlan at accede-web](https://www.accede-web.com/en/guidelines/rich-interface-components/tooltips-aria/) to ensure best practice.

Used correctly Hot-Tip should be AAA accessibility compliant out of the box.

## Positioning

Hot-Tip has four basic positions _Top_, _Left_, _Right_, and _Bottom_.
Extra Long tips

There is a maximum width of 200px for a tooltip.

Overflow and wrapping is handled differently for each position Top, Left, Right, and Bottom.

**Position auto-adjustments**

Hot Tip will do some magic to make sure your tooltips are always visible even if the target is close to a page boundary. All positioning utils are available as a named import.

```javascript
import {positionUtils} from 'hot-tip'
```

## API

Hot-Tip exposes three modules: a context provider, a Hot-Tip component and some utility functions. The two components are _HotTipProvider_ and _HotTip_.

The _positionUtils_ just provide access to the same positioning calculations that Hot-Tip uses in case they are useful elsewhere in an application (why not?).

As the `HotTip` component is the part you'll be reaching for most regularly it is also the default export which means you can import it easily using whatever name you want:

```javascript
import HotTip from 'hot-tip'
;<HotTip tip="I'm a tooltip">hover here</HotTip>
// or

import Hover from 'hot-tip'
;<Hover tip="I'm a tooltip">hover here</Hover>

// specify a preferred tooltip position (may be overridden if it would not be visible)
import HotTip from 'hot-tip'
;<HotTip tip="I'm a tooltip" position="right">
  hover here
</HotTip>
```

## Styling

Hot-Tip can be styled a few ways, by using Sass or CSS. How you import the
styles will depend on your build configuration:

- importing Sass into existing Sass stylesheets
- importing Sass via a webpack loader
- embedding CSS directly into your app
- importing CSS via a webpack loader

### Sass imports & variables

If you're using node-sass to compile your Sass just ensure you use the
`--includePaths` flag to include node_modules for module resolution.

If you import into an existing Sass stylesheet you have the added benefit of
being able to set (override) some of the variables declared by hot-tip; just
ensure that you declare any overrides befor importing the styles.

i.e.

```scss
$ht-background-color: rgba(220, 220, 220, 0.9);
$ht-text-color: #222222;
$ht-font-size: 14px;
$ht-pointer-width: 5px;
$ht-pointer-length: 10px;
$ht-fixed-padding: 5px;
$ht-pointer-adjustment: 30px;
$ht-border-radius: 4px;
@import 'hot-tip/dist/styles-light.scss';
```

For a full list of overrides available please review the source.

### Webpack

With Webpack you could import a CSS file directly from any JS file or if you
also use the sass-loader you could import a SCSS file directly. Just reference
the correct file from the hot-tip/dist/ directory

```javascript
import 'hot-tip/dist/styles-dark.css'
// or via sass-loader
import 'hot-tip/dist/styles-dark.scss'
```

## Upgrading from version 1.x

Since v2 there is no longer a dependency on Redux, this made sense to remove given the recent improvements to the Context API and React Hooks.

To upgrade please see the [upgrade guide](../upgrading.md).
