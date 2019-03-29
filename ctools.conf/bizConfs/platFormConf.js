module.exports = {
  "mainRepertory": "electron-pc-desktop",
  "outPutPath": "./work-space-platform/proxy/expresServer/www",
  "repertoryList": [{
    "repertory": "https://github.com/DeyaoCai/electron-pc-desktop.git",
    "branch": "master",
    "disabled": false
  }, {
    "repertory": "https://gitee.com/all-raines/Tape-frontend.git",
    "branch": "master",
    "disabled": false
  }, {
    "repertory": "https://github.com/DeyaoCai/proxy.git",
    "branch": "master",
    "disabled": false
  }, {"repertory": "https://github.com/DeyaoCai/ctools.git", "branch": "master", "disabled": false}],
  "packageJson": {
    "name": "vuc-group",
    "version": "0.0.0",
    "description": "",
    "author": "deyaocai",
    "private": false,
    "dependencies": {},
    "devDependencies": {},
    "engines": {"node": ">= 6.0.0", "npm": ">= 3.0.0"},
    "browserslist": ["> 1%", "last 2 versions", "not ie <= 8"],
    "scripts": {
      "devCdy": "webpack-dev-server --inline --progress --config ctools.conf/webpack.dev.conf.js",
      "getCodes": "node ./sections/ctools/bin/mergePackgeJson.js getCodes",
      "getDemo": "node ./sections/ctools/bin/mergePackgeJson.js getDemo",
      "build": "node ./ctools.conf/build.dev.conf.js",
      "proxy": "node ./sections/proxy/app.js",
      "appExpress": "node ./sections/proxy/appExpress.js",
      "ht": "node ./sections/electron-pc-desktop/proxy/ht.js",
      "desktop": "electron ./sections/electron-pc-desktop/main.js",
      "updatePackageJson": "node ./sections/ctools/bin/mergePackgeJson.js updatePackageJson",
      "testCtools": "node ./sections/ctools/bin/ctools.js watch",
      "testCtoolsRead": "node ./sections/ctools/bin/ctools.js read--vucUi-cdyUtilsAndVucUi",
      "watch": "node ./sections/ctools/bin/watch.js",
      "read": "node ./sections/ctools/bin/ctools.js read",
      "unit": "cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run",
      "push": "push --todev",
      "ctoolsGetCodes": "cdevtools getCodes",
      "ctoolsGetDemo": "cdevtools getDemo"
    }
  },
  "repertoryPath": "work-space-platform"
}
