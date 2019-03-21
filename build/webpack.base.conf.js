'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

var env = process.env.NODE_ENV;
var webpackConfig = {
  context: path.resolve(__dirname, '../'),
  entry: {
    //"babel-polyfill":"babel-polyfill",
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: (env === 'production' || env === 'dev' || env === 'test' || env === 'uat' || env === 'gray')
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@common': resolve('src'),
      '@flight':'app-flight/src',
      '@hotel':'app-hotel/src',
      '@train':'app-train/src',
      '@car':'app-car/src',
      '@er':'app-expense/src'
    }
  },
  module: {
    rules: [
      /*...(config.dev.useEslint ? [createLintingRule()] : []),*/
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('node_modules/webpack-dev-server/client'),resolve('node_modules/wxm-app/src'),resolve('node_modules/app-flight/src'),resolve('node_modules/app-hotel/src'), resolve('node_modules/app-train/src'), resolve('node_modules/app-car/src'), resolve('node_modules/app-expense/src')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}

const vuxLoader = require('vux-loader')
module.exports = vuxLoader.merge(webpackConfig, {
  plugins: ['vux-ui','duplicate-style',{
    name: 'less-theme',
    path: 'node_modules/wxm-app/src/assets/vux-theme.less'
  }]
})
