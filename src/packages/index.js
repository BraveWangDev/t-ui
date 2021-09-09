import Test from './test/test.vue';

const install = (Vue) => {
  Vue.component(Test.name, Test)
}

// 通过 script 标签方式引入组件库：<script src="tasly-ui"></script>
if(typeof window.Vue !== 'undefined'){
  install(Vue);// 调用 install 方法,实现全局注册
}

export default {
  install
}