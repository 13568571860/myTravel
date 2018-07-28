// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Banner from 'vue-awesome-swiper'
import 'css/reset.css'
import 'css/border.css'
import 'swiper/dist/css/swiper.css'
import 'css/iconfont.css'
import 'css/common.styl'

Vue.config.productionTip = false
Vue.use(Banner)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
