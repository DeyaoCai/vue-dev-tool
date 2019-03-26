const fs = require("fs");
const cwd = process.cwd();
const path = require("path");
function join(paths){
  return path.join(cwd, paths)
}
const excludeList = [`wxm-pc`, `ctools`];
module.exports = function getTemplateConfs(list, smallHump) {

  const names = list.map(item => item.name).filter(item => !excludeList.includes(item));
  let baseContent = fs.readFileSync(join(`../ctools.conf/mainJsTemplate/mainJsTemp.pcTem.js`), {encoding: "utf-8"});
  const testReg = /<-ctools-replace-tag-[0-9]*>/;
  const contents = [];
  contents.push(names.map(item =>
    `import ${smallHump(item)} from "${item}";`
  ).join("\n"));
  contents.push("" && `$tool.pushRoutes(${names.map(item => `${smallHump(item)}.routes`).join(",")});`);
  contents.push(
`init({
  routes: ${smallHump(names[1])}.routes,
  lang_static: ${smallHump(names[0])}.lang_static,
  pageTxts: ${smallHump(names[0])}.pageTxts,
  vuexConfig: {
    common: ${smallHump(names[1])}.vuexConfig,
    expense: ${smallHump(names[0])}.vuexConfig
}
});`
  );

  while (testReg.test(baseContent)) {
    baseContent =  baseContent.replace(testReg, contents.shift()  || "");
  }
  return [{
    outPutPath: `/src/main.js`,
    content: baseContent,
  }, {
    outPutPath: `/index.html`,
    content: fs.readFileSync(join(`../ctools.conf/indexHtmlTemplate/index.tem.html`))
  }];
};

//
// import '@common/assets/iconfont/iconfont.css'
// import '@common/assets/iconfont/iconfont.js'
// import {init} from 'wxm-pc'
// //费控模块
// import expense from 'pc-expense'
// import config from './config'
//
// //合并模块配置
// $tool.pushRoutes(config.routes, expense.routes)
//
// init({
//   routes: config.routes,
//   lang_static: expense.lang_static,
//   pageTxts: expense.pageTxts,
//   vuexConfig: {
//     common: config.vuexConfig,
//     expense: expense.vuexConfig
//   }
// })
