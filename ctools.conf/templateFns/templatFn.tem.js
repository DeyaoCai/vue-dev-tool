const fs = require("fs");
const cwd = process.cwd();
const path = require("path");
function join(paths){
  return path.join(cwd, paths)
}
const excludeList = [`wxm-app`, `ctools`];
module.exports = function getTemplateConfs(list, smallHump) {
  const names = list.map(item => item.name).filter(item => !excludeList.includes(item));
  const baseContent = fs.readFileSync(join(`../ctools.conf/mainJsTemplate/mainJsTemp.tem.js`));
  const midContent = names.map(item =>
    `import ${smallHump(item)} from "${item}";`
  ).join("\n  ");
  const tailContent = `init([${ names.map(item => smallHump(item)).join(",") }]);`;
  return [{
    outPutPath: `/src/main.js`,
    content: `${baseContent}${midContent}\n\n${tailContent}`
  }, {
    outPutPath: `/index.html`,
    content: fs.readFileSync(join(`../ctools.conf/indexHtmlTemplate/index.tem.html`))
  }];
};
