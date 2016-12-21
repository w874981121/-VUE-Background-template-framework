<template>
	<div id="login">
		<div class="login_box">
			<h2>统一认证鉴权服务</h2>
			<p>{{spantxt.rememberPstring.state}}</p>
			<SpaninputText :tabindex="1"  :spantxt="spantxt.accountstring" v-model.trim="spantxt.accountstring.field"></SpaninputText>
			<SpaninputText :tabindex="2"  :spantxt="spantxt.passwordstring" v-model.trim="spantxt.passwordstring.field"></SpaninputText>
			<SpanInputCheckbox :spantxt="spantxt.rememberPstring" v-model.trim="spantxt.rememberPstring.state"></SpanInputCheckbox>
			<button type="submit" @click="land">登陆</button>
		</div>
	</div>
</template>

<script type="text/javascript">
    import { router } from '../route/route.js'
	import SpaninputText from '../components/BasicsTags/SpanInputText.vue' //文本
	import SpanInputCheckbox from '../components/BasicsTags/SpanInputCheckbox.vue' //复选框
   let storage = window.localStorage;   

	export default {
		data() {
			return {
				spantxt: { //input组件数据
					accountstring: {
						field: "",
						txt: "账户"
					},
					passwordstring: {
						field: "",
						txt: "密码"
					},
					rememberPstring: {   //checkbox
						state: false,     //勾选状态
						leftAndRight:"left",  //选项文字在checkbox 左边或者右边   选项"left"/"right"
						txt: "记住密码"
					}
				},
				login: {
					accountstring: false,
					passwordstring: false
				}
			}
		},
		watch: {
			"spantxt.rememberPstring.state": function (){
//				console.log("666")
			}
		},
		mounted () {
			this.spantxt.accountstring.field=storage["accountstring"];
			this.spantxt.passwordstring.field=storage["passwordstring"];
			this.spantxt.rememberPstring.state=storage["rememberPstring"];
		},
		methods:{
			Verification () {
				this.login.accountstring = this.spantxt.accountstring.field==="123" ? true : false
				this.login.passwordstring = this.spantxt.passwordstring.field==="123" ? true : false
				if(!this.login.accountstring){
					alert("账号错误！")
					return false
				}
				if(!this.login.passwordstring){
					alert("密码错误！")
					return false
				}
				if(this.spantxt.rememberPstring.state){
					this.storageData(true);
				}else{
					this.storageData(false);
				}
				this.$store.commit('Success')   // 调用vuex方法，修改login为成功状态
				return true
			},
			land () {
				if(this.Verification()){    //账号状态是否验证通过
					router.push('/channelInfo')
				}else{
					this.$store.commit('fail')   // 调用vuex方法，修改login为成功状态
				}
			},
			storageData (state) {
				if(state){
					storage["accountstring"] = this.spantxt.accountstring.field;  //存储账号
				    storage["passwordstring"] = this.spantxt.passwordstring.field;  //存储密码
				    storage["rememberPstring"] = true;
				}else{
					storage["accountstring"] = this.spantxt.accountstring.field;  //存储账号
					storage["passwordstring"] = " ";  //存储密码
					storage["rememberPstring"] = false;
				}
			}
		},
		components: {
			SpaninputText,
			SpanInputCheckbox
		}

	}
</script>

<style lang="scss" scoped>
	#login {
		width: 100%;
		height: 100%;
		background: #880000;
		.login_box {
			width: 400px;
			height: 300px;
			background: #fff;
			position: absolute;
			border-radius: 4px;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			h2 {
				text-align: center;
				height: 40px;
				line-height: 40px;
				margin-top: 30px;
			}
			p{
				height: 16px;
				line-height: 16px;
				font-size:12px ;
				color: red;
				text-align: center;
			}
			button{
				width: 60%;
				height: 30px;
				margin: 20px auto;
				display: block;
				background: #880000;
				color: #fff;
				border: none;
				border-radius:4px;
				&:active{
					background: #690101;
				}
			}
		}
	}
</style>