/*
 *导航路径配置页面 
 * 
 * 引入用到的所有组件 
 * 
 * 
 * 文件引入main 页
 * 
 * 
 * */

import Vue from 'vue'
import VueRouter from 'vue-router'
/* 页面组件引入 */
//one
import ChannelInfo from '../page/one/channelInfo.vue'   //通道基础信息
import Form_wizards from '../page/one/form_wizards.vue'  //中信回传数据查询
import Wysiwyg from '../page/one/wysiwyg.vue'  //上游消息历史查询
import GwCustomer from '../page/one/gwCustomer.vue'  //上游机构用户信息
import CiticPayBill from '../page/one/citicPayBill.vue'  //中信对账
import CiticPaySummary from '../page/one/citicPaySummary.vue' //中信对账汇总
import AccountBalance from '../page/one/accountBalance.vue'   //对账差异汇总
import AccountBalanceDetail from '../page/one/accountBalanceDetail.vue'  //对账差异明细
//two
import General_forms from '../page/two/general_forms.vue'   //通道基础信息
import Form_layouts from '../page/two/form_layouts.vue'   //通道基础信息
import Form_validation from '../page/two/form_validation.vue'   //通道基础信息
import OrgFreezon from '../page/two/orgFreezon.vue'   //通道基础信息
import OrgRateInfo from '../page/two/orgRateInfo.vue'   //通道基础信息
import OrgSettleHistory from '../page/two/orgSettleHistory.vue'   //通道基础信息
import OrgTradeHistory from '../page/two/orgTradeHistory.vue'   //通道基础信息
import OrgSubAccount from '../page/two/orgSubAccount.vue'   //通道基础信息
import OrgSettleBank from '../page/two/orgSettleBank.vue'   //通道基础信息
import OrgCapital from '../page/two/orgCapital.vue'   //通道基础信息
import OrgOrderRequest from '../page/two/orgOrderRequest.vue'   //通道基础信息
import OrgLimitAmount from '../page/two/orgLimitAmount.vue'   //通道基础信息

/**安装路由功能**/
Vue.use(VueRouter)

const routes = [
  { path: '/channelInfo', component: ChannelInfo },
  { path: '/form_wizards', component: Form_wizards },
  { path: '/wysiwyg', component: Wysiwyg },
  { path: '/gwCustomer', component: GwCustomer },
  { path: '/citicPayBill', component: CiticPayBill },
  { path: '/citicPaySummary', component: CiticPaySummary },
  { path: '/accountBalance', component: AccountBalance },
  { path: '/accountBalanceDetail', component: AccountBalanceDetail },
  { path: '/general_forms', component: General_forms },
  { path: '/form_layouts', component: Form_layouts },
  { path: '/form_validation', component: Form_validation },
  { path: '/orgFreezon', component: OrgFreezon },
  { path: '/orgRateInfo', component: OrgRateInfo },
  { path: '/orgSettleHistory', component: OrgSettleHistory },
  { path: '/orgTradeHistory', component: OrgTradeHistory },
  { path: '/orgSubAccount', component: OrgSubAccount },
  { path: '/orgSettleBank', component: OrgSettleBank },
  { path: '/orgCapital', component: OrgCapital },
  { path: '/orgOrderRequest', component: OrgOrderRequest },
  { path: '/orgLimitAmount', component: OrgLimitAmount }
]
//路径配置项    设置为固定量，在main文件引入注入全局
export const router = new VueRouter({ routes })