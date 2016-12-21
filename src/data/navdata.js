//  导航配置文件
/*   引入store.js
 * 
 * name： 导航项名称
 * Jurisdiction： 权限
 * stateList： 主项状态
 * list： 次项列表
 * 
 * 
 * */

export const navData = [{
		name: '上游通道管理',
		Jurisdiction: true,
		stateList: true,
		list: [{
			name: '通道基础信息',
			Url: '/channelInfo',
			Jurisdiction: true,
		}, {
			name: '中信回传数据查询',
			Url: '/form_wizards',
			Jurisdiction: true,
		}, {
			name: '上游消息历史查询',
			Url: '/wysiwyg',
			Jurisdiction: false,
		}, {
			name: '上游机构用户信息',
			Url: '/gwCustomer',
			Jurisdiction: true,
		}, {
			name: '中信对账',
			Url: '/citicPayBill',
			Jurisdiction: true,
		}, {
			name: '中信对账汇总',
			Url: '/citicPaySummary',
			Jurisdiction: true,
		}, {
			name: '对账差异汇总',
			Url: '/accountBalance',
			Jurisdiction: true,
		}, {
			name: '对账差异明细',
			Url: '/detailAccountBalance',
			Jurisdiction: true,
		}]
	}, {
		name: '基础数据',
		Jurisdiction: true,
		stateList: false,
		list: [{
			name: '机构管理',
			Url: '/general_forms',
			Jurisdiction: true,
		}, {
			name: '机构商户',
			Url: '/form_layouts',
			Jurisdiction: true,

		}, {
			name: '机构上游用户对应关系',
			Url: '/form_validation',
			Jurisdiction: true,

		}, {
			name: '机构冻结流水查询',
			Url: '/orgFreezon',
			Jurisdiction: true,

		}, {
			name: '机构费率信息',
			Url: '/orgRateInfo',
			Jurisdiction: true,

		}, {
			name: '机构结算单查询',
			Url: '/orgSettleHistory',
			Jurisdiction: true,

		}, {
			name: '机构交易流水',
			Url: '/orgTradeHistory',
			Jurisdiction: true,

		}, {
			name: '机构子账户',
			Url: '/orgSubAccount',
			Jurisdiction: true,

		}, {
			name: '机构结算银行信息',
			Url: '/orgSettleBank',
			Jurisdiction: true,

		}, {
			name: '机构账户资金流水',
			Url: '/orgCapital',
			Jurisdiction: true,

		}, {
			name: '机构订单流水',
			Url: '/orgOrderRequest',
			Jurisdiction: true,

		}, {
			name: '机构限额',
			Url: '/orgLimitAmount',
			Jurisdiction: true,

		}]
	}]
	//导航图标
	/*
	 * 
	 * iconlist： 主项图标
	 * icon_within： 次项图标
	 * icon_jj： “+” “-” 状态图标
	 * */
export const iconData = {
	iconlist: ['<use xlink:href="#icon-home"></use>', '<use xlink:href="#icon-edit"></use>'],
	icon_within: '<use xlink:href="#icon-playfill"></use>',
	icon_jj: ['<use xlink:href="#icon-plus"></use>', '<use xlink:href="#icon-jianhao"></use>']
}

// 动画 配置