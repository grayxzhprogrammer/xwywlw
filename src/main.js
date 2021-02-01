import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper);

import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
Vue.use(VideoPlayer)

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  //完全显示的时候加载
  preLoad: 1,
  //失败时显示的图片
  error: require('./assets/img/error.png'),
  //加载时显示的GIF图
  loading: require('./assets/img/loading.gif'),
  //尝试加载几次
  attempt: 1
});

import VueAMap  from 'vue-amap';
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '4f7aea358fc1f724015adb69b9cf8303',
  plugin: [
      "AMap.Autocomplete", //输入提示插件
    'AMap.PlaceSearch',//POI搜索插件
    "AMap.Scale", //右下角缩略图插件 比例尺
      'AMap.Scale',//输入提示插件
    'AMap.OverView', //地图鹰眼插件
    'AMap.ToolBar',//地图工具条
    'AMap.MapType',//类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
    "AMap.PolyEditor", //编辑 折线多，边形
    'AMap.Geolocation',//定位控件，用来获取和展示用户主机所在的经纬度位置
    'AMap.Geocoder'
  ],
  v: '1.4.4'// 高德 sdk 版本，默认为 1.4.4
});
// 导入富文本编辑器
// import VueQuillEditor from 'vue-quill-editor'
// 导入富文本编辑器样式
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'
// import Quill from 'quill'
// 将富文本编辑器，注册为全局可用组件
// Vue.use(VueQuillEditor)

Vue.config.productionTip = false;

//设置超时时间
axios.defaults.timeout = 5000
//设置api地址
//全局定义axios
axios.defaults.baseURL = 'http://localhost:80/'
Vue.prototype.$http = axios

// 图片服务器地址
Vue.prototype.imgserver = 'http://www.xwyzn.com/'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
