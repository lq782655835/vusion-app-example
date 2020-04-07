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