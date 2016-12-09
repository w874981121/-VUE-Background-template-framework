<template>
<div id="content">
	<top class="top"></top>
    <div class="content">
      <div class="navbox">
        <NavigationLeft :iconData="iconData" :navData="navData"> </NavigationLeft>
      </div>
      <div class="viewbox" v-bind:style="{ width: vwindth }">
      	<router-view> </router-view>
      </div>
    </div>
    <div class="footer">
    	6666
    </div>
</div>
</template>
<script type="text/javascript">
  import NavigationLeft from '../components/NavigationLeft.vue'
  import Top from '../components/Top.vue'

export default {
	/*
  		 * iconData：引用图标标签
  		 */
	data () {
  	return {
//    iconSvg: iconSvg,
//    vwindth: window.innerWidth-220+'px'
  	}
  },
  methods: {},
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
<style type="text/css">
.top{
	position:absolute; 
	top:0;
}
.content{
	position:absolute; 
	width:100%; 
	top:60px; 
	bottom:0;
}


.navbox{
  position: absolute;
  top: 0px;
  left: 0;
  height: 100%;
}
.viewbox{
	padding-left:220px;
	height: 100%;
	overflow-x: hidden;
	overflow-y: auto;
}
.footer{
	width: 100%;
	height: 30px;
	text-align: center;
	background: #0074D9;
}
</style>