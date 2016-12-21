<style lang="scss" scope>
  .Navigation-left{
  	width: 220px;
  	background: #1d2939;
  	height: 100%;
  	overflow-y: auto;
  	color: #8f939e;
  	.box{
  	  padding: 0 10px;
   	  overflow: hidden;
   	  .h3{
  	    font-size:16px;
  	    font-weight: initial;
  	    line-height: 36px;
  	    height: 36px;
  	    padding:0 10px;
  	    margin-top: 10px;
  	    cursor: pointer;
  	    .icon{
  	      margin-top: 18px;
  	      font-size:20px;
  	    }
  	    .font_{
  	      font-size: 14px;
  	      float:right;
        }
        &:hover{
        	background: #fff;
  	      color: #1d2939;
  	      border-radius: 4px ;
        }
  	  }
  	  .h3hover{
  	    background: #fff;
  	    color: #1d2939;
  	    border-radius: 4px;
      }
      ul{
  	    padding: 0;
      }
      li{
  	    list-style: none;
  	    padding: 5px 15px;
  	    .a{
  	      width: 100%;
  	      height: 20px;
  	      line-height: 20px;
  	      font-size: 12px;
  	      color: #fff; 
  	      text-decoration: none;
  	      display: inline-block;
  	      cursor: pointer;
  	      &:hover{
  	      	background: #fff;
  	        color: #333333;
            border-radius:3px ;
  	      }
  	    }
  	    .router-link-active{
  	      background: #fff;
  	      color: #333333;
  	      border-radius:3px ;
        }
        .icon{/*次级导航 icon属性--margin-top为上级导航的一半时为居中--*/
  	      color: #8f939e;
  	      font-size: 12px;
  	      margin:10px 5px;
          &:hover{
          	color: #fff;
          }
  	    }
      }
      
  	}
  	
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
		    <ul v-show="i.stateList">
		    	<li v-for="list in i.list" v-if="list.Jurisdiction">
		    		<router-link class="a" :to='list.Url'>
		    			<svg class="icon" v-html="iconData.icon_within"></svg>
		    			{{list.name}}
		    		</router-link>
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
/**跳转的权限设置**/
export default {
	name:"navigationleft",
  methods: {
    stateSwitch: function (index) {
    	let st = this.navData[index].stateList, i = 0, navDatas = this.navData.length
    	for(;i < navDatas;i++){
        this.navData[i].stateList=false;
    	}
    	  this.navData[index].stateList=!st;
    },
    stateIcon: function (state,index) {
    	return state ? this.iconData.icon_jj[1] : this.iconData.icon_jj[0]
    }
  },
  props: ['iconData', 'navData']
}
</script>
