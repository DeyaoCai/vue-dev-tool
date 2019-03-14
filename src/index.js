import vuc from "../sections/vuc/src/index.js";
const ret = {
  store: [], router: [], callback: [],
};
Object.keys(vuc).forEach(item => {
  if (["store", "router" , "callback"].includes(item)) {
    ret[item] = ret[item].concat(vuc[item]);
  } else {
    ret[item] = vuc[item];
  }
});
export default ret;
