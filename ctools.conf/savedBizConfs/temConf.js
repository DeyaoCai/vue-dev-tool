module.exports = {
  "alias": {
    "app-train": {"src": "/src", "name": ""},
    "app-flight": {"src": "/src", "name": ""},
    "app-hotel": {"src": "/src", "name": ""},
    "app-car": {"src": "/src", "name": ""},
    "app-common": {"src": "/src", "name": ""},
    "wxm-app": {"src": "", "name": ""}
  },
  "repertoryList": [{
    "repertory": "https://github.com/DeyaoCai/ctools.git",
    "branch": "master",
    "disabled": true
  }, {
    "repertory": "http://gitserver.zt.com/etravel/tem-app-wxm.git",
    "branch": "ISSUES-5785"
  }, {
    "repertory": "http://gitserver.zt.com/etravel/tem-app-train.git",
    "branch": "ISSUES-5785",
    "disabled": true
  }, {
    "repertory": "http://gitserver.zt.com/etravel/tem-app-flight.git",
    "branch": "ISSUES-5785",
    "disabled": false
  }, {
    "repertory": "http://gitserver.zt.com/etravel/tem-app-hotel.git",
    "branch": "ISSUES-5785",
    "disabled": true
  }, {
    "repertory": "http://gitserver.zt.com/etravel/tem-app-car.git",
    "branch": "ISSUES-5785",
    "disabled": true
  }, {"repertory": "http://gitserver.zt.com/etravel/tem-app-common.git", "branch": "master", "disabled": true}],
  "packageJson": {
    "main": "./src/main.js",
    "name": "app-common",
    "version": "2018.12.26-11-04-58",
    "description": "在途通用项目",
    "author": "pyy123 <133812813@qq.com>",
    "private": false,
    "dependencies": {},
    "devDependencies": {},
    "engines": {"node": ">= 6.0.0", "npm": ">= 3.0.0"},
    "browserslist": ["> 1%", "last 2 versions", "not ie <= 8"],
    "scripts": {
      "ctoolsGetCodes": "cdevtools getCodes",
      "ctoolsGetDemo": "cdevtools getDemo",
      "devCdy": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
      "getCodes": "node ./sections/ctools/bin/mergePackgeJson.js getCodes",
      "getDemo": "node ./sections/ctools/bin/mergePackgeJson.js getDemo",
      "ht": "node ./sections/electron-pc-desktop/proxy/ht.js",
      "desktopServe": "node ./sections/electron-pc-desktop/app.js",
      "desktop": "electron ./sections/electron-pc-desktop/main.js",
      "updatePackageJson": "node ./sections/ctools/bin/mergePackgeJson.js updatePackageJson",
      "testCtools": "node ./sections/ctools/bin/ctools.js watch",
      "testCtoolsRead": "node ./sections/ctools/bin/ctools.js read--vucUi-cdyUtilsAndVucUi",
      "watch": "node ./script/watch.js",
      "push": "push --todev",
      "read": "ctools read",
      "ndev": "webpack-dev-server --inline --progress --config build/webpack.ndev.conf.js",
      "unit": "cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run"
    }
  },
  "repertoryPath": "sections",
  "getTemplateConfs": "templatFn.tem.js"
}
