import Vue from 'vue'
import Vuex from 'vuex'
import { navData, iconData } from './data/navdata.js'


Vue.use(Vuex)
const state = {
	//导航列表名称数组
  navlist: navData,
    //引用图标标签
  iconDataobj: iconData
}
export default new Vuex.Store({
  state
})
