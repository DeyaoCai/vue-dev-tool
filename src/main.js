// 内部项目样式
import '@common/assets/iconfont/iconfont.css'
import '@common/assets/iconfont/iconfont.js'

// 项目集成
import {init} from 'wxm-app'
import appTrain from "app-train";
  import appFlight from "app-flight";
  import appHotel from "app-hotel";
  import appCar from "app-car";

init([appTrain,appFlight,appHotel,appCar]);