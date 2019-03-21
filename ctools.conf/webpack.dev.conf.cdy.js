'use strict';
const path = require('path');
const portfinder = require('portfinder');
const merge = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const buildConf = require('./webpack.conf.js');
const utils = require('./utils');
const config =  require(path.join(__dirname, `../${buildConf.repertoryPath}/${buildConf.configPath}`));
const baseWebpackConfig = buildConf.getTemplateConfs ?
  require(path.join(__dirname, `../build/${buildConf.buildPath.split(/\//).pop()}`)):
  require(path.join(__dirname, `../${buildConf.repertoryPath}/${buildConf.buildPath}`));

let ctoolsWebpackConf;
try {
  ctoolsWebpackConf = require('./webpack.conf.json');
} catch (e){ ctoolsWebpackConf = {} }
const devWebpackConfig = merge(baseWebpackConfig, ctoolsWebpackConf);

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port;
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port;
      devWebpackConfig.devServer.port = port;

      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
          ? utils.createNotifierCallback()
          : undefined
      }));
      resolve(devWebpackConfig)
    }
  })
});
