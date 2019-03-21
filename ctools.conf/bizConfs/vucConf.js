const alias = {
  "vuc": {src: `/src`, name: ``},
  "vuc-ui": {src: `/src`, name: ``},
  "cdy-utils": {src: ``, name: ``},
  "ctools": {src: ``, name: ``},
};
// const mainRepertory = `vuc-dev-platform`;
const mainRepertory = `vuc`;
const buildPath = `./${mainRepertory}/build/webpack.dev.conf.ctools.js`;
const  configPath = `./${mainRepertory}/config`;
const defaultBranch = `master`;
const repertoryList = [
  {
    repertory: "https://github.com/DeyaoCai/vuc-dev-platform.git",
    branch: defaultBranch,
    disabled: false,
  },
  {
    repertory: "https://github.com/DeyaoCai/ctools.git",
    branch: defaultBranch,
    disabled: false,
  },
  {
    repertory: "https://github.com/DeyaoCai/ctools.git",
    branch: defaultBranch,
    disabled: false,
  },
  {
    repertory: "https://github.com/DeyaoCai/electron-pc-desktop.git",
    branch: defaultBranch,
    disabled: false,
  },
  {
    repertory: "https://github.com/DeyaoCai/vuc.git",
    branch: defaultBranch,
    disabled: false,
  },
  {
    repertory: "https://github.com/DeyaoCai/vuc-ui.git",
    branch: defaultBranch,
    disabled: false,
  },
  {
    repertory: "https://github.com/DeyaoCai/cdy-utils.git",
    branch: defaultBranch,
    disabled: false,
  }
];
const packageJson = {
  name: "vue-dev-tool",
  version: "0.0.0",
  description: "kaifapingtai",
  author: "deyaocai",
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
    devCdy: "webpack-dev-server --inline --progress --config ctools.conf/webpack.dev.conf.cdy.js",
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
  buildPath,
  configPath,
  repertoryList,
  packageJson,
  repertoryPath: `sections`,
  // getTemplateConfs: "templatFn.vuc.js",
};
