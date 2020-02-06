import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入 rem 的 js, 动态的设置了, 不同屏幕的html根元素的 font-size
import 'lib-flexible'

// 导入通用的样式
import './styles/base.css'
// 导入字体图标
import './styles/iconfont.css'

// 导入axios
import axios from 'axios'

// 导入vant
import Vant from 'vant'
import 'vant/lib/index.css'

// 导入自己封装的组件
import HmButton from './components/hm-button.vue'
import HmInput from './components/hm-input.vue'
Vue.config.productionTip = false
// 使用vant这个UI组件库的插件，会把vant中所有的组件都全局的注册
Vue.use(Vant)
Vue.use(axios)
Vue.component('HmButton', HmButton)
Vue.component('HmInput', HmInput)

// axios优化
Vue.prototype.$axios = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
