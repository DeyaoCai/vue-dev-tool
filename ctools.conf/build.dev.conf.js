'use strict';
const path = require('path');
const cwd = process.cwd();
const buildConf = require('./webpack.conf.js');
const midPath = `./${buildConf.repertoryPath}/${buildConf.mainRepertory}`
const mainRootPath = path.join(cwd, midPath);
const prodBuildPath = path.join(mainRootPath, `./build`);
const prodConfigPath = path.join(mainRootPath, `./config`);

// 修改 build 时的输出路径 可以自动部署到服务器
const config =  require(prodConfigPath);
config.build.index = path.join(cwd, buildConf.outPutPath, `./index.html`);
config.build.assetsRoot = path.join(cwd, buildConf.outPutPath);

// 植入build时别名
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
// 执行build
require(path.join(prodBuildPath, './build.js'));
