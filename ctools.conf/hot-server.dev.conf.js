'use strict';
const path = require('path');
const cwd = process.cwd();
const buildConf = require('./webpack.conf.js');
// 工作空间根目录

let prodBuildPath;// 植入别名

if (buildConf.getTemplateConfs){
  prodBuildPath = path.join(cwd, `./build`);// 植入别名
} else {
  prodBuildPath = path.join(cwd, `./${buildConf.mainRepertory}/build`);
}

let alias;
try {
  alias = require('./alias.json');
} catch (e){ alias = {} }
let ctoolsWebpackConf;
try {
  ctoolsWebpackConf = require('./webpack.conf.json');
} catch (e){ ctoolsWebpackConf = {} }
const baseWebpackConfig = require(path.join(prodBuildPath,`./webpack.base.conf.js`));
if (baseWebpackConfig.resolve) {
  Object.keys(alias.resolve.alias).forEach(item=>{
    baseWebpackConfig.resolve.alias[item] = alias.resolve.alias[item];
  })
  Object.keys(ctoolsWebpackConf.resolve.alias).forEach(item=>{
    baseWebpackConfig.resolve.alias[item] = ctoolsWebpackConf.resolve.alias[item];
  })
} else {
  baseWebpackConfig.resolve = alias.resolve;
  Object.keys(ctoolsWebpackConf.resolve.alias).forEach(item=>{
    baseWebpackConfig.resolve.alias[item] = ctoolsWebpackConf.resolve.alias[item];
  })
}
// 如果需要 可以 修改入口文件
// buildConf.getTemplateConfs 在getCodes 时 会根据键值去获取模块，用来生成新的入口文件（这个模块一个返回 {pathBasedOnRoot, content}列表）

module.exports = require(path.join(prodBuildPath, './webpack.dev.conf.js'));
