<template>
  <div id="app">
  	<!--SVG-icon 注入-->
    <div v-show="false" v-html="iconSvg"></div>
    <!---->
    <router-view></router-view>
    
  </div>
</template>

<script>
import { iconSvg } from './data/iconfonts.js'

export default {
	/*
		 * iconData：引用图标标签
		 */
	data () {
	  return {
      iconSvg: iconSvg,
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
