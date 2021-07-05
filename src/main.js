import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import i18n from './language/i18n'
import router from './router'
import 'element-plus/lib/theme-chalk/index.css'

createApp(App)
.use(ElementPlus)
.use(i18n)
.use(router)
.mount('#app');
