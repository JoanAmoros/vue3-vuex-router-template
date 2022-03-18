import { createApp } from "vue";
import App from './views/App'
import router from './routes'
import store from './store'

let app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')