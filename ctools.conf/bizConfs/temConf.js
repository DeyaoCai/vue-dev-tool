const alias = {
  "app-train": {src: `/src`, name: ``},
  "app-flight": {src: `/src`, name: ``},
  "app-hotel": {src: `/src`, name: ``},
  "app-car": {src: `/src`, name: ``},
  "app-common": {src: `/src`, name: ``},
  "wxm-app": {src: ``, name: ``},
};
const masterBranch = `master`;
const defaultBranch = `master`;
const issuesBranch = `ISSUES-5785`;
const repertoryList = [
  {
    repertory: "https://github.com/DeyaoCai/ctools.git",
    branch: masterBranch,
    disabled: true,
  },
  {
    repertory: "http://gitserver.zt.com/etravel/tem-app-wxm.git",
    branch: issuesBranch,
  },
  {
    repertory: "http://gitserver.zt.com/etravel/tem-app-train.git",
    branch: issuesBranch,
    disabled: true,
  },
  {
    repertory: "http://gitserver.zt.com/etravel/tem-app-flight.git",
    branch: issuesBranch,
    disabled: false,
  },
  {
    repertory: "http://gitserver.zt.com/etravel/tem-app-hotel.git",
    branch: issuesBranch,
    disabled: true,
  },
  {
    repertory: "http://gitserver.zt.com/etravel/tem-app-car.git",
    branch: issuesBranch,
    disabled: true,
  },
  {
    repertory: "http://gitserver.zt.com/etravel/tem-app-common.git",
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
  getTemplateConfs: "templatFn.tem.js",
};
