const mainRepertory = `tem-app-common`;
const alias = {
  "app-train": {src: `/src`, name: ``},
  "app-flight": {src: `/src`, name: ``},
  "app-hotel": {src: `/src`, name: ``},
  "app-car": {src: `/src`, name: ``},
  "app-expense": {src: `/src`, name: ``},
  "app-common": {src: `/src`, name: ``},
  "wxm-app": {src: ``, name: ``},
};
const masterBranch = `master`;
const defaultBranch = `master`;
const issuesBranch = `master`;
// const issuesBranch = `ISSUES-5785`;
const repertoryList = [
  {// 公共工具组件库
    repertory: "http://gitserver.zt.com/etravel/tem-app-wxm.git",
    branch: issuesBranch,
  },
  {// 火车项目
    repertory: "http://gitserver.zt.com/etravel/tem-app-train.git",
    branch: issuesBranch,
    disabled: true,
  },
  {// 飞机项目
    repertory: "http://gitserver.zt.com/etravel/tem-app-flight.git",
    branch: issuesBranch,
    disabled: true,
  },
  {// 酒店项目
    repertory: "http://gitserver.zt.com/etravel/tem-app-hotel.git",
    branch: issuesBranch,
    disabled: true,
  },
  {// 用车项目
    repertory: "http://gitserver.zt.com/etravel/tem-app-car.git",
    branch: issuesBranch,
    disabled: true,
  },
  {// 费控项目
    repertory: "http://gitserver.zt.com/ec/ec-app-expense.git",
    branch: issuesBranch,
    disabled: false,
  },
  {// 入口项目
    repertory: "http://gitserver.zt.com/etravel/tem-app-common.git",
    branch: defaultBranch,
    disabled: false,
  }
];
const packageJson = {
  name: "app-common",
  version: "0.0.0",
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
    getCodes: "node ./sections/ctools/bin/mergePackgeJson.js getCodes --entry-temConf",
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
