// 内部项目样式
import '@common/assets/iconfont/iconfont.css'
import '@common/assets/iconfont/iconfont.js'

// 项目集成
import {init} from 'wxm-app'
import appTrain from "app-train";
  import appFlight from "app-flight";

init([appTrain,appFlight]);