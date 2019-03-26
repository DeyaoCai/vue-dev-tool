// 内部项目样式
import '@common/assets/iconfont/iconfont.css'
import '@common/assets/iconfont/iconfont.js'

// 项目集成
import {init} from 'wxm-pc'
import wxmPc from "wxm-pc";
import pcExpense from "pc-expense";
// import pcCommon from "pc-common";

init([
  wxmPc,
  pcExpense,
  // pcCommon
]);
