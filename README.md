<p align="center">
    <a href="https://www.iviewui.com">
        <img width="200" src="https://file.iviewui.com/view-ui-logo-new.svg">
    </a>
</p>

<h1>
ViewUI
    <h3>A high quality UI Toolkit built on Vue.js.</h3>
</h1>

> 该项目即为原先的 iView。iView 作者将在此仓库继续开发 iView 4.0 和后续版本，以及维护工作。新的组件库命名为 ViewUI，原仓库 iView 作者不再提交内容。
> 
> This project is the original iView. The iView author will continue to develop iView 4.0 and subsequent releases, as well as maintenance work, in this repository. The new component library is named ViewUI, and the iView author will no longer continue to submit content in the original repository.

[![](https://img.shields.io/travis/iview/iview.svg?style=flat-square)](https://travis-ci.org/iview/iview)
[![View UI](https://img.shields.io/npm/v/view-design.svg?style=flat-square)](https://www.npmjs.org/package/view-design)
[![NPM downloads](http://img.shields.io/npm/dm/iview.svg?style=flat-square)](https://npmjs.org/package/view-design)
[![NPM downloads](https://img.shields.io/npm/dt/iview.svg?style=flat-square)](https://npmjs.org/package/view-design)
![JS gzip size](http://img.badgesize.io/https://unpkg.com/iview/dist/iview.min.js?compression=gzip&label=gzip%20size:%20JS&style=flat-square)
![CSS gzip size](http://img.badgesize.io/https://unpkg.com/iview/dist/styles/iview.css?compression=gzip&label=gzip%20size:%20CSS&style=flat-square)
[![Join the chat at https://gitter.im/iview/iview](https://img.shields.io/badge/chat-on_gitter-30b392.svg?style=flat-square)](https://gitter.im/iview/iview?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Backers on Open Collective](https://opencollective.com/iview/tiers/backer/badge.svg?label=backer&color=brightgreen)](#backers)
[![Sponers on Open Collective](https://opencollective.com/iview/tiers/sponsor/badge.svg?label=sponsor&color=brightgreen)](#sponers)


## Docs

**[4.x](https://www.iviewui.com)**

## Features

- Dozens of useful and beautiful components.
- Friendly API. It's made for people with any skill level.
- Extensive documentation and demos.
- It is quite beautiful.
- Supports both Vue.js 2 and Vue.js 1.

### Install View UI

Using npm:
```
npm install fuxi-view-design --save
```

Using a script tag for global use:

```html
<script type="text/javascript" src="iview.min.js"></script>
<link rel="stylesheet" href="dist/styles/iview.css">
```

You can find more info [on the website](https://www.iviewui.com/docs/guide/install-en).

## Usage

```vue
<template>
    <Slider v-model="value" range />
</template>
<script>
    export default {
        data () {
            return {
                value: [20, 50]
            }
        }
    }
</script>
```

Using css via `import`:

```js
import 'fuxi-view-design/dist/styles/iview.css';
```

## Compatibility

- Supports Vue.js 2.x
- Supports Vue.js 1.x - [visit 1.0 docs](http://v1.iviewui.com/)
- Supports SSR
- Supports [Nuxt.js](https://nuxtjs.org/)
- Supports TypeScript
- Supports [Electron](http://electron.atom.io/)
- Most components and features support IE9 and above browsers, some components and features do not support IE

## Community

If you want to contribute or have questions or bugs to report:

**Questions:** Find other users at the [Gitter chat](https://gitter.im/iview/iview) or post on [StackOverflow using `[iview-ui]` tag](https://stackoverflow.com/questions/tagged/iview-ui)  
**Bugs:** [File a issue here](https://github.com/iview-design/iview/issues) - please provide a example so we can help you better  
**Contribute:** Contact us in [Gitter chat](https://gitter.im/iview/iview), WeChat or via mail to `admin@aresn.com`. PRs welcome!


## Ecosystem Links

- [Developer](https://dev.iviewui.com)
- [Run](https://run.iviewui.com)

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, FViewDesign
