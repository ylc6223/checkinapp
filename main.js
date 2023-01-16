import App from './App'
// import http from "./utils/request.js"
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
// Vue.prototype.http = http
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
	// app.config.globalProperties.http = http;
	return {
		app
	}
}
// #endif