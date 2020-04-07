# vusion-app-example

vusion组件库按需引入示例。

注意：Webpack 配置需要完全跟随 Vusion 体系配置。

``` bash
npm install && npm run serve
```

## 1. 安装两个必要的 loader

``` bash
npm i --save-dev vusion-loader icon-font-loader
npm i --save cloud-ui.vusion
```

## 2. 添加配置 vue.config.js

``` js
const IconFontPlugin = require('icon-font-loader').Plugin;

function chainCSSOneOfs(config, chainOneOf) {
    // 'postcss' 留给用户自定义吧
    ['css', 'scss', 'sass', 'less', 'stylus'].forEach((rule) => {
        const ruleCSS = config.module.rule(rule);
        chainOneOf(ruleCSS.oneOf('vue-modules'), true);
        chainOneOf(ruleCSS.oneOf('vue'), false);
        chainOneOf(ruleCSS.oneOf('normal-modules'), true);
        chainOneOf(ruleCSS.oneOf('normal'), false);
    });
}

module.exports = {
    chainWebpack(config) {
        config.module.rule('vue')
            .test(/\.vue([\\/]index\.js)?$/)
            .use('vusion-loader')
            .loader('vusion-loader');

        config.plugin('css-sprite').use(IconFontPlugin, [])

        chainCSSOneOfs(config, (oneOf) => {
            oneOf.use('icon-font-loader')
                .loader('icon-font-loader')
                .end();
        });
    }
};
```

3. 按需注册组件以及引入css变量

``` js
import { install, ULinearLayout, UText } from 'cloud-ui.vusion';
import 'cloud-ui.vusion/src/styles/theme.css' // css变量引入
install(Vue, { ULinearLayout, UText });
```

更多：https://vusion.github.io/cloud-ui/components/quickstart