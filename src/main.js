import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 全量引入

// import * as CloudUI from 'cloud-ui.vusion/dist';
// import 'cloud-ui.vusion/dist/index.css';
// // 如需引入其他主题，将上面的路径替换为如下不同的主题样式
// import 'cloud-ui.vusion/dist/theme-dark.css';

// Vue.use(CloudUI); // 全局安装组件库中的组件、指令等


// 按需引入

import { install, ULinearLayout, UText } from 'cloud-ui.vusion';
import 'cloud-ui.vusion/src/styles/theme.css' // css变量引入
install(Vue, { ULinearLayout, UText });

new Vue({
  render: h => h(App),
}).$mount('#app')
