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
const issuesBranch = `test`;
// const issuesBranch = `ISSUES-5785`;
const repertoryList = [
  {
    repertory: "https://github.com/DeyaoCai/ctools.git",
    branch: defaultBranch,
    disabled: true,
  },{
    repertory: "http://gitserver.zt.com/etravel/tem-pc-wxm.git",
    branch: defaultBranch,
    disabled: false,
  },
  {
    repertory: "http://gitserver.zt.com/ec/ec-pc-expense.git",
    branch: defaultBranch,
  },
  // {
  //   repertory: "http://gitserver.zt.com/front/tem-pc-train.git",
  //   branch: masterBranch,
  //   disabled: false,
  // },
  {
    repertory: "http://gitserver.zt.com/etravel/tem-pc-common.git",
    branch: defaultBranch,
    disabled: true,
  }
];
const packageJson = {
  main: "./src/main.js",
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
  repertoryPath: `sections`,
  getTemplateConfs: "templatFn.tem.js",
};
