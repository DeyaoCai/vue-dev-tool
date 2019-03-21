const fs = require("fs");
const cwd = process.cwd();
const path = require("path");
function join(paths){
  return path.join(cwd, paths)
}
const conf = require("../webpack.conf.js");

module.exports = function getTemplateConfs() {
  return [
    {
      outPutPath: `/config/index.js`,
      content: fs.readFileSync(path.join(`${cwd}`,conf.buildPath, "../../config/index.js"))
    }, {
      outPutPath: `/config/prod.env.js`,
      content: fs.readFileSync(path.join(`${cwd}`,conf.buildPath, "../../config/prod.env.js"))
    }, {
      outPutPath: `/config/dev.env.js`,
      content: fs.readFileSync(path.join(`${cwd}`,conf.buildPath, "../../config/dev.env.js"))
    }, {
      outPutPath: `/build/vue-loader.conf.js`,
      content: fs.readFileSync(path.join(`${cwd}`,conf.buildPath, "../vue-loader.conf.js"))
    }, {
      outPutPath: `/build/webpack.base.conf.js`,
      content: fs.readFileSync(path.join(`${cwd}`,conf.buildPath, "../webpack.base.conf.js"))
    }, {
      outPutPath: `/build/utils.js`,
      content: fs.readFileSync(path.join(`${cwd}`,conf.buildPath, "../utils.js"))
    }, {
      outPutPath: `/build/${conf.buildPath.split(/\//).pop()}`,
      content: fs.readFileSync(path.join(`${cwd}`,conf.buildPath))
    }, {
      outPutPath: `/src/main.js`,
      content: fs.readFileSync(join(`../ctools.conf/mainJsTemplate/mainJsTemp.vuc.js`))
    }, {
      outPutPath: `/index.html`,
      content: fs.readFileSync(join(`../ctools.conf/indexHtmlTemplate/index.vuc.html`))
    }
  ]
};
