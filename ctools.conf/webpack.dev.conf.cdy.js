'use strict';
const path = require('path');
const buildConf = require('./webpack.conf.js');
const cwd = process.cwd();
const midPath = `./${buildConf.repertoryPath}/${buildConf.mainRepertory}`
const mainRootPath = path.join(cwd, midPath);
const prodBuildPath = path.join(mainRootPath, `./build`);
let ctoolsWebpackConf;
try {
  ctoolsWebpackConf = require('./webpack.conf.json');
} catch (e){ ctoolsWebpackConf = {} }
const baseWebpackConfig = require(path.join(prodBuildPath,`./webpack.base.conf.js`));
console.log(baseWebpackConfig.resolve)
if (baseWebpackConfig.resolve) {
  Object.keys(ctoolsWebpackConf.resolve.alias).forEach(item=>{
    baseWebpackConfig.resolve.alias[item] = ctoolsWebpackConf.resolve.alias[item];
  })
} else {
  baseWebpackConfig.resolve = ctoolsWebpackConf.resolve;
}
module.exports = require(path.join(prodBuildPath, './webpack.dev.conf.js'));
