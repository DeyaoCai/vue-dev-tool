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
const defEntry = "vucConf";
 // const defEntry = "temConf";
const entry = getProcessArgv(/--entry-/)(defEntry);
module.exports = require({
  temConf: "./bizConfs/temConf.js",
  vucConf: "./bizConfs/vucConf.js"
}[entry]);
