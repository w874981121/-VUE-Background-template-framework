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
//vue主体引入
import Vue from 'vue'
//路由组件引入
import VueRouter from 'vue-router'
/* 页面组件引入 */
//登陆组件
import Login from '../page/login.vue'
//主体组件
import Content from '../page/content.vue'
//one
import ChannelInfo from '../page/one/channelInfo.vue'   //通道基础信息
import Form_wizards from '../page/one/form_wizards.vue'  //中信回传数据查询
import Wysiwyg from '../page/one/wysiwyg.vue'  //上游消息历史查询
import GwCustomer from '../page/one/gwCustomer.vue'  //上游机构用户信息
import CiticPayBill from '../page/one/citicPayBill.vue'  //中信对账
import CiticPaySummary from '../page/one/citicPaySummary.vue' //中信对账汇总
import AccountBalance from '../page/one/accountBalance.vue'   //对账差异汇总
import DetailAccountBalance from '../page/one/detailAccountBalance.vue'  //对账差异明细
//two
import General_forms from '../page/two/general_forms.vue'   //机构管理
import Form_layouts from '../page/two/form_layouts.vue'   //机构商户
import Form_validation from '../page/two/form_validation.vue'   //机构上游用户对应关系
import OrgFreezon from '../page/two/orgFreezon.vue'   //机构冻结流水查询
import OrgRateInfo from '../page/two/orgRateInfo.vue'   //机构费率信息
import OrgSettleHistory from '../page/two/orgSettleHistory.vue'   //机构结算单查询
import OrgTradeHistory from '../page/two/orgTradeHistory.vue'   //机构交易流水
import OrgSubAccount from '../page/two/orgSubAccount.vue'   //机构子账户
import OrgSettleBank from '../page/two/orgSettleBank.vue'   //机构结算银行信息
import OrgCapital from '../page/two/orgCapital.vue'   //机构账户资金流水
import OrgOrderRequest from '../page/two/orgOrderRequest.vue'   //机构订单流水
import OrgLimitAmount from '../page/two/orgLimitAmount.vue'   //机构限额

/**安装路由功能**/
Vue.use(VueRouter)
/*path:(参数为路径)**component：(参数为模块名)****/

/* routes path路径名设置尽量避免两个路径字段前办部分相同，会造成 点击后样式类多处添加。 */
const routes = [
  { path: '/', component: Login },  //登陆模块
  { path: '/content', component: Content, children:[
    { path: '/channelInfo', component: ChannelInfo },
    { path: '/form_wizards', component: Form_wizards },
    { path: '/wysiwyg', component: Wysiwyg },
    { path: '/gwCustomer', component: GwCustomer },
    { path: '/citicPayBill', component: CiticPayBill },
    { path: '/citicPaySummary', component: CiticPaySummary },
    { path: '/accountBalance', component: AccountBalance },
    { path: '/detailAccountBalance', component: DetailAccountBalance },
    { path: '/general_forms', component: General_forms },
    { path: '/form_layouts', component: Form_layouts },
    { path: '/form_validation', component: Form_validation },
    { path: '/orgFreezon', component: OrgFreezon },
    { path: '/orgRateInfo', component: OrgRateInfo },
    { path: '/orgSettleHistory', component: OrgSettleHistory },
    { path: '/orgTradeHistory', component: OrgTradeHistory },
    { path: '/orgSubAccount', component: OrgSubAccount  },
    { path: '/orgSettleBank', component: OrgSettleBank },
    { path: '/orgCapital', component: OrgCapital },
    { path: '/orgOrderRequest', component: OrgOrderRequest },
    { path: '/orgLimitAmount', component: OrgLimitAmount }
  ]}
]
//路径配置项    设置为固定量，在main文件引入注入全局
export const router = new VueRouter({ routes })
//
///**跳转的权限设置**/
//router.beforeEach((to, from, next) => {
//  next()//执行跳转
//})