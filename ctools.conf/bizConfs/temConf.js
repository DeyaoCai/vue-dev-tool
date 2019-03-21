const fs = require("fs");
const cwd = process.cwd();

const excludeList = [`wxm-app`];
function getMainJsTemplateConf(list, smallHump) {
  const names = list.map(item => item.name).filter(item => !excludeList.includes(item));
  const baseContent = fs.readFileSync(`${cwd}/ctools.conf/mainJsTemplate/mainJsTemp.tem.js`);
  const midContent = names.map(item =>
    `import ${smallHump(item)} from "${item}";`
  ).join("\n  ");
  const tailContent = `init([${ names.map(item => smallHump(item)).join(",") }]);`;

  return {
    outPutPath: `/src/main.js`,
    content: `${baseContent}${midContent}\n\n${tailContent}`
  }
}

const alias = {
  "app-train": {src: `/src`, name: ``},
  "app-common": {src: `/src`, name: ``},
  "wxm-app": {src: ``, name: ``},
};
const defaultBranch = `master`;
const repertoryList = [
  {
    repertory: "https://github.com/DeyaoCai/ctools.git",
    branch: defaultBranch,
  },
  {
    repertory: "http://gitserver.zt.com/etravel/tem-app-wxm.git",
    branch: null,
  },
  {
    repertory: "http://gitserver.zt.com/etravel/tem-app-train.git",
    branch: null,
  },
  {
    repertory: "http://gitserver.zt.com/etravel/tem-app-common.git",
    branch: null,
  }
];
const packageJson = {
  name: "app-common",
  version: "2018.12.26-11-04-58",
  description: "在途通用项目",
  author: "pyy123 <133812813@qq.com>",
  private: false,
  dependencies: {},
  devDependencies: {},
  engines: {
    node: ">= 6.0.0",
    npm: ">= 3.0.0"
  },
  browserslist: [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ],
  scripts: {
    // 拉取代码
    ctoolsGetCodes: "cdevtools getCodes",
    ctoolsGetDemo: "cdevtools getDemo",
    // 开启服务
    devCdy: "webpack-dev-server --inline --progress --config build/webpack.dev.conf.cdy.js",
    // 拉取代码 // 开发ctools 工具时使用
    getCodes: "node ./sections/ctools/bin/mergePackgeJson.js getCodes",
    getDemo: "node ./sections/ctools/bin/mergePackgeJson.js getDemo",
    ht: "node ./sections/electron-pc-desktop/proxy/ht.js",
    desktopServe: "node ./sections/electron-pc-desktop/app.js",
    desktop: "electron ./sections/electron-pc-desktop/main.js",
    // 单独的更新 package.json
    updatePackageJson: "node ./sections/ctools/bin/mergePackgeJson.js updatePackageJson",
    testCtools: "node ./sections/ctools/bin/ctools.js watch",
    testCtoolsRead: "node ./sections/ctools/bin/ctools.js read--vucUi-cdyUtilsAndVucUi",
    watch: "node ./script/watch.js",
    push: "push --todev",
    read: "ctools read",
    ndev: "webpack-dev-server --inline --progress --config build/webpack.ndev.conf.js",
    unit: "cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run",
  }
};
module.exports = {
  alias,
  repertoryList,
  packageJson,
  repertoryPath: `sections`,
  getMainJsTemplateConf,
};
