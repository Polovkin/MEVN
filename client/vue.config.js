const path = require('path');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg')
const imageMinPngquant = require('imagemin-pngquant');

module.exports = {
  configureWebpack: {
    devtool: "source-map",
    plugins: [
      new ImageminPlugin({
        plugins: [
          imageminMozjpeg({
            quality: 85,
          }),
          imageMinPngquant({
            quality: [0.65, 0.90],
            speed: 4,
          }),
        ]
      })
    ]
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/assets/scss/core/base.scss'),
      ]
    },
  },
  assetsDir: 'assets',
  productionSourceMap: false,
  css: {
    sourceMap: true,
  },
  transpileDependencies: [
    "vuetify"
  ]
}
