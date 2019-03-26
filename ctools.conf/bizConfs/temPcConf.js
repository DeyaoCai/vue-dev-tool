const mainRepertory = `tem-pc-common`;
const alias = {
  "pc-train": {src: `/src`, name: ``},
  "pc-flight": {src: `/src`, name: ``},
  "pc-hotel": {src: `/src`, name: ``},
  "pc-car": {src: `/src`, name: ``},
  "pc-common": {src: `/src`, name: ``},
  "wxm-pc": {src: ``, name: ``},
};
const masterBranch = `master`;
const defaultBranch = `test`;
// const issuesBranch = `test`;
const issuesBranch = `dev`;
const repertoryList = [
  {// tem pc 公共工具组件库
    repertory: "http://gitserver.zt.com/etravel/tem-pc-wxm.git",
    branch: defaultBranch,
    disabled: false,
  },
  {// 费控
    repertory: "http://gitserver.zt.com/ec/ec-pc-expense.git",
    branch: defaultBranch,
    disabled: true,
  },
  {// 火车
    repertory: "http://gitserver.zt.com/front/tem-pc-train.git",
    branch: issuesBranch,
    disabled: false,
  },
  {// 入口
    repertory: "http://gitserver.zt.com/etravel/tem-pc-common.git",
    branch: defaultBranch,
    disabled: false,
  }
];
const packageJson = {
  name: "tem-pcs",
  version: "0",
  description: "",
  author: "",
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
    // 开启服务
    devCdy: "webpack-dev-server --inline --progress --config ctools.conf/webpack.dev.conf.js",
    // 拉取代码 // 开发ctools 工具时使用
    getCodes: "node ./sections/ctools/bin/mergePackgeJson.js getCodes --entry-temPcConf",
    getDemo: "node ./sections/ctools/bin/mergePackgeJson.js getDemo",
    build: "node ./ctools.conf/build.dev.conf.js",
    proxy: "node ./sections/proxy/app.js",
    ht: "node ./sections/electron-pc-desktop/proxy/ht.js",
    desktop: "electron ./sections/electron-pc-desktop/main.js",
    // 单独的更新 package.json
    updatePackageJson: "node ./sections/ctools/bin/mergePackgeJson.js updatePackageJson",
    testCtools: "node ./sections/ctools/bin/ctools.js watch",
    testCtoolsRead: "node ./sections/ctools/bin/ctools.js read--vucUi-cdyUtilsAndVucUi",
    watch: "node ./sections/ctools/bin//watch.js",
    read: "node ./sections/ctools/bin/ctools.js read",
    unit: "cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run",
    // 拉取代码
    push: "push --todev",
    ctoolsGetCodes: "cdevtools getCodes",
    ctoolsGetDemo: "cdevtools getDemo",
  }
};
module.exports = {
  mainRepertory,
  alias,
  repertoryList,
  packageJson,
  repertoryPath: `tem-apps`,
  // getTemplateConfs: "templatFn.tem.js",
};
