const fs = require("fs");
const cProcess = require("child_process");

const cb = makeExecLater(function () {
  cProcess.execSync("ctools read");
  console.log(`exec success, ${Date.now()}`);
});
fs.watch("./sections/utils/src", cb);

function makeExecLater(fn) {
  let time = 0;
  return function () {
    const thisTime = time = `${Date.now()} ${Math.random()}`;
    setTimeout(() => {
      if (thisTime === time) fn.apply(null, arguments);
    }, 340)
  }
}
