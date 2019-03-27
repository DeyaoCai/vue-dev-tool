// 内部项目样式
import '@common/assets/iconfont/iconfont.css'
import '@common/assets/iconfont/iconfont.js'

// 项目集成
import {init} from 'wxm-app'
import appExpense from "app-expense";
  import appCommon from "app-common";

init([appExpense,appCommon]);
