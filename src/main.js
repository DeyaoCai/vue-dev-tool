// 内部项目样式
import '@common/assets/iconfont/iconfont.css'
import '@common/assets/iconfont/iconfont.js'

// 项目集成
import {init} from 'wxm-pc'
import appTrain from "app-train";
  import appFlight from "app-flight";
  import appCar from "app-car";
  import appExpense from "app-expense";
  import appCommon from "app-common";

init([appTrain,appFlight,appCar,appExpense,appCommon]);
