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
// const defEntry = "vucConf";
const defEntry = "vucPcConf";
// const defEntry =  "platFormConf";
//  const defEntry = "temConf";
// const defEntry =  "temPcConf";

const entry = getProcessArgv(/--entry-/)(defEntry);
module.exports = require({
  temPcConf: "./bizConfs/temPcConf.js",
  temConf: "./bizConfs/temConf.js",
  vucConf: "./bizConfs/vucConf.js",
  vucPcConf: "./bizConfs/vucPcConf.js",
  platFormConf: "./bizConfs/platFormConf.js",
}[entry]);
