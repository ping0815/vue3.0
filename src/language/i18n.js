//语言
import { createI18n } from 'vue-i18n'		//引入vue-i18n组件
// import { 引入的组件 export 出来的 变量} from 'vue-i18n'
import messages from './index'
const i18n = createI18n({
    locale: localStorage.lang || 'ch',
    messages
})

export default i18n;