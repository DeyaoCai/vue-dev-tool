const mainRepertory = `vuc-dev-platform`;
// const mainRepertory = `vuc`;

const defaultBranch = `master`;
const repertoryPath = `sections`;
const outPutPath = `./${repertoryPath}/Tape-frontend`;
const repertoryList = [
  {
    repertory: "https://gitee.com/all-raines/Tape-frontend.git",
    branch: defaultBranch,
    disabled: false,
  },{
    repertory: "https://github.com/DeyaoCai/proxy.git",
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
  }, {
    repertory: "https://github.com/DeyaoCai/vuc-dev-platform.git",
    branch: defaultBranch,
    disabled: false,
  },
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
    // 开启服务
    devCdy: "webpack-dev-server --inline --progress --config ctools.conf/webpack.dev.conf.cdy.js",
    // 拉取代码 // 开发ctools 工具时使用
    getCodes: "node ./sections/ctools/bin/mergePackgeJson.js getCodes",
    getDemo: "node ./sections/ctools/bin/mergePackgeJson.js getDemo",
    build: "node ./ctools.conf/build.dev.conf.cdy.js",
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
  outPutPath,
  repertoryList,
  packageJson,
  repertoryPath,
};
