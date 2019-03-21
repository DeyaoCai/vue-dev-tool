// 内部项目样式
import '@common/assets/iconfont/iconfont.css'
import '@common/assets/iconfont/iconfont.js'

// 项目集成
import {init} from 'wxm-app'
import ctools from "ctools";
  import appTrain from "app-train";
  import appCommon from "app-common";

init([ctools,appTrain,appCommon]);