const fs = require("fs");
const cwd = process.cwd();

function getMainJsTemplateConf() {
  const baseContent = fs.readFileSync(`${cwd}/ctools.conf/mainJsTemplate/mainJsTemp.vuc.js`);
  return {
    outPutPath: `/src/main.js`,
    content: baseContent
  }
}

const alias = {
  "vuc": {src: `/src`, name: ``},
  "vuc-ui": {src: `/src`, name: ``},
  "cdy-utils": {src: ``, name: ``},
  "ctools": {src: ``, name: ``},
};
const defaultBranch = `master`;
const repertoryList = [
  {
    repertory: "https://github.com/DeyaoCai/vuc.git",
    branch: defaultBranch,
  },
  {
    repertory: "https://github.com/DeyaoCai/vuc-ui.git",
    branch: defaultBranch,
  },
  {
    repertory: "https://github.com/DeyaoCai/cdy-utils.git",
    branch: defaultBranch,
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
    getCodes: "node ./sections/ctools/bin/mergePackgeJson.js getCodes --branch-ISSUES-5765",
    // 开启服务
    devCdy: "webpack-dev-server --inline --progress --config build/webpack.dev.conf.cdy.js",
    // 单独的更新 package.json
    updatePackageJson: "node ./tem-biz/ctools/bin/mergePackgeJson.js updatePackageJson",

    testCtools: "node ./sections/ctools/bin/ctools.js watch",
    testCtoolsRead: "node ./sections/ctools/bin/ctools.js read--vucUi-cdyUtilsAndVucUi",
    watch: "node ./script/watch.js",
    push: "push --todev",
    read: "ctools read",
    dev: "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    ndev: "webpack-dev-server --inline --progress --config build/webpack.ndev.conf.js",
    unit: "cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run",
    test: "npm run unit",
    lint: "eslint --ext .js,.vue src test/unit",
    build: "node build/build.js"
  }
};
module.exports = {
  alias,
  repertoryList,
  packageJson,
  repertoryPath: `sections`,
  getMainJsTemplateConf
};
