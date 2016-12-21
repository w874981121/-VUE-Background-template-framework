<!--*
	checkbox:
	spantxt.txt  为外层配置项传递参数
	
	
*-->

<template>
	<div class="label_check_box">

		<!--<svg class="icon"></svg>-->
		<span class="left" v-if="spantxt.leftAndRight==='left'">{{spantxt.txt+"："}}</span>
		<label>
			<svg class="icon" v-html="satateSvg(checkedState)"></svg>
			<input type="checkbox" v-model="checkedState" @click.stop="updateValue($event.target.checked)" />
		</label>
		<span class="right" v-if="spantxt.leftAndRight==='right'">{{spantxt+"："}}</span>
	</div>
</template>
<script>

	export default {
		name: "spanInputcheckbox",
		data(){
			return {
				checkedState: this.value
			}
		},
		props: ["spantxt", "value"],
		watch: {
			"value": function (){
				if(this.value=="true"){
					this.checkedState=true
				}else{
					this.checkedState=false
				}
			}
		},
		methods: {
			updateValue: function(checked) {
				this.$emit('input', checked)
			},
			satateSvg: function(b) {
				const iconSvg_satate = ["<use xlink:href='#icon-square'></use>", "<use xlink:href='#icon-squarecheck'></use>"];
				return iconSvg_satate[b ? 1 : 0]
			}
		}
	}
</script>

<style lang="scss" scope>
	$pl: 40px;
	.label_check_box {
		display: flex;
		display: -webkit-flex;
		flex-flow: row nowrap;
		align-items: center;
		height: 30px;
		margin: 10px;
		.left {
			display: block;
			flex-grow: 0;
			width: 80px;
			height: 30px;
			line-height: 30px;
			text-align: right;
			padding-right: 10px;
			padding-left: $pl;
			font-size: 14px;
		}
		label {
			display: block;
			position: relative;
			height: 30px;
			input {
				display: block;
				position: absolute;
				opacity: 1;
				top: 50%;
				width: 20px;
				height: 20px;
				border: none;
				left: 0;
			}
			.icon {
				margin-top: 15px;
				font-size: 20px;
				color:#666666;
			}
		}
	}
</style>