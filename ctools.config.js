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
  inputPath: ["./sections/cdy-utils/src"],
  outputPath: "./sections/cdy-utils/index.js",
  fileReg: /\.js$/,
  importReg: /\/sections\/cdy-utils/,
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

const wxmApp = [
  {
    inputPath: ["./sections/tem-app-wxm/src/tools"],
    outputPath: "./sections/tem-app-wxm/src/tools.js",
    fileReg: /\.(vue|js)$/,
    importReg: /\/sections\/tem-app-wxm\/src/,
    exportReg: "",
    succMsg: "write wxmApp tools success!",
    exportMode: "es6",
  },
  {
    inputPath: ["./sections/tem-app-wxm/src/tools", "./sections/tem-app-wxm/src/components/base"],
    outputPath: "./sections/tem-app-wxm/src/baseComponents.js",
    fileReg: /\.(vue|js)$/,
    importReg: /\/sections\/tem-app-wxm\/src/,
    exportReg: "",
    succMsg: "write wxmApp baseComponents success!",
    exportMode: "es6",
  },
  {
    inputPath: ["./sections/tem-app-wxm/src/tools", "./sections/tem-app-wxm/src/components/base", "./sections/tem-app-wxm/src/components/units"],
    outputPath: "./sections/tem-app-wxm/src/units.js",
    fileReg: /\.(vue|js)$/,
    importReg: /\/sections\/tem-app-wxm\/src/,
    exportReg: "",
    succMsg: "write wxmApp units success!",
    exportMode: "es6",
  },
  {
    inputPath: ["./sections/tem-app-wxm/src/tools", "./sections/tem-app-wxm/src/components/base", "./sections/tem-app-wxm/src/components/units","./sections/tem-app-wxm/src/components/wrap"],
    outputPath: "./sections/tem-app-wxm/src/wrap.js",
    fileReg: /\.(vue|js)$/,
    importReg: /\/sections\/tem-app-wxm\/src/,
    exportReg: "",
    succMsg: "write wxmApp wrap success!",
    exportMode: "es6",
  },
  {
    inputPath: ["./sections/tem-app-wxm/src/tools", "./sections/tem-app-wxm/src/components/base", "./sections/tem-app-wxm/src/components/units","./sections/tem-app-wxm/src/components/wrap", "./sections/tem-app-wxm/src/components/wrapUnit"],
    outputPath: "./sections/tem-app-wxm/src/wrapUnit.js",
    fileReg: /\.(vue|js)$/,
    importReg: /\/sections\/tem-app-wxm\/src/,
    exportReg: "",
    succMsg: "write wxmApp wrapUnit success!",
    exportMode: "es6",
  },
];
module.exports = {
  read: {
    // wxmApp,
    vucUi: [
      // vucUiConf
    ],
    cdyUtilsAndVucUi: [
      utilsConf,
      // vucUiConf,
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
