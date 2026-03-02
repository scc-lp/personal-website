import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './Theme.css'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import { useThemeStore } from './stores/theme'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })

// 初始化主题
const themeStore = useThemeStore()
document.documentElement.setAttribute('data-theme', themeStore.theme)

app.mount('#app')
