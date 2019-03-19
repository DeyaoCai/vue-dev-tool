const toolConf = {
  inputPath: ["./src/tools",],
  outputPath: "./src/tools.js",
  fileReg: /\.(js)$/,
  importReg: /\/src/,
  exportReg: "",
  succMsg: "write tools success!",
  exportMode: "es6",
}
const compConf = {
  inputPath: ["./src/tools", "./src/components",],
  outputPath: "./src/comps.js",
  fileReg: /\.(vue|js)$/,
  importReg: /\/src/,
  exportReg: "",
  succMsg: "write comps success!",
  exportMode: "es6",
}
const unitConf = {
  inputPath: ["./src/tools", "./src/components", "./src/units",],
  outputPath: "./src/units.js",
  fileReg: /\.(vue|js)$/,
  importReg: /\/src/,
  exportReg: "",
  succMsg: "write units success!",
  exportMode: "es6",
}
const wrapConf = {
  inputPath: ["./src/tools", "./src/components", "./src/units","./src/wrap"],
  outputPath: "./src/wrap.js",
  fileReg: /\.(vue|js)$/,
  importReg: /\/src/,
  exportReg: "",
  succMsg: "write units success!",
  exportMode: "es6",
}
const wrapUnitConf = {
  inputPath: ["./src/tools", "./src/components", "./src/units","./src/wrap","./src/wrapUnit"],
  outputPath: "./src/wrapUnit.js",
  fileReg: /\.(vue|js)$/,
  importReg: /\/src/,
  exportReg: "",
  succMsg: "write units success!",
  exportMode: "es6",
}
const viewConf = {
  inputPath: "./src/views",
  outputPath: "./src/router/conf.js",
  fileReg: /\.vue/,
  importReg: /\/src/,
  exportReg: ".",
  succMsg: "write views success!",
  exportMode: "vueView",
  // bizType: "",
}
const interfaceConf = {
  inputPath: ["./serve/interfaces",],
  outputPath: "./serve/interfaces.js",
  fileReg: /\.(js)$/,
  importReg: /\/serve/,
  exportReg: "",
  succMsg: "write interfaces success!",
  exportMode: "node",
}
const utilsConf = {
  inputPath: ["./sections/utils/src"],
  outputPath: "./sections/utils/index.js",
  fileReg: /\.js$/,
  importReg: /\/sections\/utils/,
  exportReg: "",
  succMsg: "write utils success!",
  exportMode: "es6",
}

const vucUiConf = {
  inputPath: ["./sections/vuc-ui/src/components"],
  outputPath: "./sections/vuc-ui/index.js",
  fileReg: /\.(vue|js)$/,
  importReg: /\/sections\/vuc-ui/,
  exportReg: "",
  succMsg: "write vucUi success!",
  exportMode: "es6",
}
module.exports = {
  read: {
    vucUi: [
      vucUiConf
    ],
    cdyUtilsAndVucUi: [
      utilsConf,
      vucUiConf,
    ],
    ori: [
      // toolConf,
      // compConf,
      // unitConf,
      // wrapConf,
      // wrapUnitConf,
      // viewConf,
      // interfaceConf
    ]
  }
};
