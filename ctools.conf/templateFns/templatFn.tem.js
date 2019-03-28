const fs = require("fs");
const cwd = process.cwd();
const path = require("path");
const buildConf = require("../webpack.conf.js");
const rootPath = path.join(__dirname, buildConf.repertoryPath);
const mainPath = path.join(cwd, buildConf.mainRepertory);
console.log(mainPath)
function join(paths){return path.join(__dirname, paths)};
const excludeList = [`wxm-pc`, `wxm-app`, `ctools`];
module.exports = function getTemplateConfs(list, smallHump) {
  const names = list.map(item => item.name).filter(item => !excludeList.includes(item));
  const baseContent = fs.readFileSync(join(`../mainJsTemplate/mainJsTemp.tem.js`));
  const midContent = names.map(item =>
    `import ${smallHump(item)} from "${item}";`
  ).join("\n  ");
  const tailContent = `init([${ names.map(item => smallHump(item)).join(",") }]);`;
  const excludes = [""]
  const retData = fs.readdirSync(mainPath).filter(item =>
    fs.statSync(path.join(mainPath, item)).isFile()
  ).map(item => {

    return ({
      outPutPath: item,
      inputPath: path.join(mainPath, item),
      // content: fs.readFileSync(path.join(mainPath, item))
    })
  });
  return retData.concat([{
    outPutPath: `src/main.js`,
    content: `${baseContent}${midContent}\n\n${tailContent}`
  }]);
};
