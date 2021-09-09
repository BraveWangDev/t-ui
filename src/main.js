import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 使用组件库：调用 install 方法
import tUI from './packages/index'
Vue.use(tUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
