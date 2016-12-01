import Vue from 'vue'
import Vuex from 'vuex'
import { navData } from './data/navdata.js'


Vue.use(Vuex)
const state = {
	//导航列表名称数组
  navlist: navData
}
export default new Vuex.Store({
  state
})
