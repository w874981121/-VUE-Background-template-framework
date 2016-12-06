<template>
  <div id="app">
  	<!--SVG-icon 注入-->
    <div v-show="false" v-html="iconSvg"></div>
    <!---->
    <top></top>
    <div class="content" v-bind:style="{ height: height }">
    	<div class="navbox">
        <NavigationLeft :iconData="iconData" :navData="navData"> </NavigationLeft>
      </div>
      <div class="viewbox">
      	<router-view> </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { iconSvg } from './vuex/data/iconfonts.js'
import NavigationLeft from './components/NavigationLeft.vue'
import Top from './components/Top.vue'

export default {
	/*
  		 * iconData：引用图标标签
  		 */
	data () {
  	return {
      iconSvg: iconSvg,
      height: window.innerHeight-60+'px'
  	}
 },
  //组件注入
  components: {
    NavigationLeft,
    Top
  },
  	/*
  	 * navData： store引入的导航数据表
  	 * iconData: 导航icon
  	 */
  	
  computed: {
    navData () {
      return this.$store.state.navlist
    },
    iconData () {
    	return this.$store.state.iconDataobj
    }
  }
}
</script>

<style>
#app {
  font-family: "microsoft yahei", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
.navbox,.viewbox{
	float: left;
	height: 100%;
}



.icon {
  /* 通过设置 font-size 来改变图标大小 */
  width: 1em;
  height: 1em;
  /* 图标和文字相邻时，垂直对齐 */
  vertical-align: top;
  display: inline-block;
  transform:translateY(-50%);
  -ms-transform:translateY(-50%); 	/* IE 9 */
  -moz-transform:translateY(-50%); 	/* Firefox */
  -webkit-transform:translateY(-50%); /* Safari 和 Chrome */
  -o-transform:translateY(-50%); 	/* Opera */
  /* 通过设置 color 来改变 SVG 的颜色/fill */
  fill: currentColor;
  /* path 和 stroke 溢出 viewBox 部分在 IE 下会显示
  normalize.css 中也包含这行 */
  overflow: hidden;
}
</style>
