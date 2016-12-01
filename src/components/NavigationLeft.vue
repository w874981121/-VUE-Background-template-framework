<style type="text/css">
  .Navigation-left{
  	width: 220px;
  	background: #1d2939;
  	height: 100%;
  	overflow-y: auto;
  	color: #8f939e;
  	padding: 10px 0;
  	}
  .Navigation-left .box{
  	padding: 0 10px;
  	}
  .Navigation-left .box .h3{
  	font-size:16px;
  	font-weight: initial;
  	line-height: 36px;
  	height: 36px;
  	padding:0 10px;
  	cursor: pointer;
  	}
  	/*一级导航 icon属性*/
  .Navigation-left .box .h3 .icon{
  	margin-top: 18px;
  	font-size:20px;
  	}
  .Navigation-left .box .h3 .font_{
  	font-size: 14px;
  	float:right;
  }
  .Navigation-left .box .h3:hover{
  	background: #fff;
  	color: #1d2939;
  	border-radius: 4px ;
  	}
  .Navigation-left .box .h3hover{
  	background: #fff;
  	color: #1d2939;
  	border-radius: 4px;
  }
  .Navigation-left .box ul{
  	padding: 0;
  	}
  .Navigation-left .box li{
  	list-style: none;
  	padding: 5px 15px;
  	}
  .Navigation-left a{
  	width: 100%;
  	height: 20px;
  	line-height: 20px;
  	font-size: 12px;
  	color: #fff; 
  	text-decoration: none;
  	display: inline-block;
  	}
  	/*次级导航 icon属性--margin-top为上级导航的一半时为居中--*/
  .Navigation-left .box li .icon{
  	color: #8f939e;
  	font-size: 12px;
  	margin:10px 5px;
  	}
  .Navigation-left .box li .icon:hover{
  	color: #fff;
  	}
  	
</style>
  
<template>
	<div class="Navigation-left">
		<div class="box" v-for="(i, index) in navData" >
		    <h3 :class="['h3', {h3hover: i.stateList}]" v-on:click="stateSwitch(index)">
		    	<svg class="icon" v-html="iconData.iconlist[index]"></svg>
                {{i.name}}
                <svg class="icon font_" v-html="stateIcon(i.stateList,index)"></svg>
		    </h3>
		    <ul v-if="i.stateList">
		    	<li v-for="list in i.list" v-bind:key='list.id' v-if="list.Jurisdiction">
		    		<a href="/">
		    			<svg class="icon" v-html="iconData.icon_within">
		    				
		    			</svg>
		    			{{list.name}}
		    		</a>
		    	</li>
		    </ul>
		</div>
	</div>
</template>
  
<script>
/*
iconData：图标数据
navData：导航数据表
通过使用的组件层传递数据。
stateSwitch: 导航的开合状态修改
stateIcon：“+” ： “-” icon的状态修改
*/
export default {
  methods: {
    stateSwitch: function (index) {
    	var st=this.navData[index].stateList;
    	for(var i=0,navDatas=this.navData.length;i<navDatas;i++){
          this.navData[i].stateList=false;
    	}
    	this.navData[index].stateList=!st;
    },
    stateIcon: function (state,index) {
    	return state ? this.iconData.icon_jj[1] : this.iconData.icon_jj[0]
    }
  },
  props: ['iconData', 'navData'],
}
</script>
