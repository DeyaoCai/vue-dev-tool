'use strict';
const path = require('path');
const cwd = process.cwd();
const buildConf = require('./webpack.conf.js');
// 工作空间根目录
const mainRootPath = path.join(cwd, `./${buildConf.repertoryPath}/${buildConf.mainRepertory}`);
const prodBuildPath = path.join(mainRootPath, `./build`);

// 植入别名
let ctoolsWebpackConf;
try {
  ctoolsWebpackConf = require('./webpack.conf.json');
} catch (e){ ctoolsWebpackConf = {} }
const baseWebpackConfig = require(path.join(prodBuildPath,`./webpack.base.conf.js`));
if (baseWebpackConfig.resolve) {
  Object.keys(ctoolsWebpackConf.resolve.alias).forEach(item=>{
    baseWebpackConfig.resolve.alias[item] = ctoolsWebpackConf.resolve.alias[item];
  })
} else {
  baseWebpackConfig.resolve = ctoolsWebpackConf.resolve;
}
// 如果需要 可以 修改入口文件
// buildConf.getTemplateConfs 在getCodes 时 会根据键值去获取模块，用来生成新的入口文件（这个模块一个返回 {pathBasedOnRoot, content}列表）
if (buildConf.getTemplateConfs){
  baseWebpackConfig.entry.app = path.join(cwd, "./src/main.js");
}
module.exports = require(path.join(prodBuildPath, './webpack.dev.conf.js'));
