<template>
	<div class="label_text_box">
		<span>{{spantxt.txt+"："}}</span>
		<input :tabindex="tabindex" type="text" :value="value" v-on:input="updateValue($event.target.value)" />
	</div>
</template>
<script>
	export default {
		name: "spanInputText",
		props: ["spantxt", "value", "tabindex"],
		methods: {
			updateValue: function(value) {
				this.$emit('input', value)
			}
		}
	}
</script>

<style lang="scss" scope>
$pl: 40px;
	.label_text_box {
		display: flex;
		display: -webkit-flex;
		flex-flow:row nowrap; 
		justify-content:center;
		align-items:center;
		height: 30px;
		margin: 10px;
		span{
			display: block;
			flex-grow:0;
			width: 80px;
			height: 30px;
			line-height: 30px;
			text-align: right;
			padding-right: 10px;
			padding-left: $pl;
		}
		input{
			display: block;
			padding-left: 10px;
			margin-right: $pl;
			flex-grow:1;
			height: 28px;
			border: 1px solid #ccc;
		}
	}
</style>