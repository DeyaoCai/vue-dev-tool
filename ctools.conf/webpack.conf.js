const fs = require("fs");
const path = require("path");
const cwd = process.cwd();
function getProcessArgvCommon(entryReg, defaultEntry) {
    process.argv.some(item =>
      entryReg.test(item) && (defaultEntry = item.replace(entryReg, ""))
    );
    return defaultEntry;
}

 function getProcessArgv(entryReg) {
   return function(argvEntry){
     return getProcessArgvCommon(entryReg, argvEntry);
   }
 }

let entryConfig;
try {
  entryConfig = require(path.join(__dirname, "./ctools.conf.entry.json"));
} catch (e) {
  entryConfig ={};
}
// const defEntry = "vucConf";
// const defEntry = "vucPcConf";
// const defEntry =  "platFormConf";
 const defEntry = "temConf";
// const defEntry =  "temPcConf";

const entry = getProcessArgv(/--entry-/)(defEntry);
const confList = fs.readdirSync(path.join(__dirname, "./bizConfs"));

const outputEntryMap = {
  temPcConf: "temPcConf.js",
  temConf: "temConf.js",
  vucConf: "vucConf.js",
  vucPcConf: "vucPcConf.js",
  platFormConf: "platFormConf.js",
};
confList.forEach(item => {
  outputEntryMap[item.replace(/\.[^\.]+$/, "")] = `./${item}`;
});
module.exports = require(path.join(__dirname, "bizConfs", outputEntryMap[entryConfig.entry] || outputEntryMap[entry]));
