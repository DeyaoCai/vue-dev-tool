'use strict';
const cProcess =require("child_process");
cProcess.execSync("npm run getCodes");
const path = require('path');
const buildConf = require('./webpack.conf.js');
const cwd = process.cwd();
const midPath = `./${buildConf.repertoryPath}/${buildConf.mainRepertory}`
const mainRootPath = path.join(cwd, midPath);
const prodConfigPath = path.join(mainRootPath, `./config`);
const prodBuildPath = path.join(mainRootPath, `./build`);
const config =  require(prodConfigPath);

config.build.index = path.join(cwd, buildConf.outPutPath, `./index.html`);
config.build.assetsRoot = path.join(cwd, buildConf.outPutPath);
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
require(path.join(prodBuildPath, './build.js'));