import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
// import env from './env'

let mock = true
if (mock) {
  require('./mock/api')
}
axios.defaults.baseURL = '/api'
// axios.defaults.baseURL = env.baseURL
axios.defaults.timeout = 8000;
axios.interceptors.response.use((response) => {
  let res = response.data
  if (res.status == 0) {
    return res.data
  } else if (res.status == 10) {
    window.location.href = "/#/login"
  } else {
    alert(res.msg)
  }
}, (error) => {
  // let res = error.response;
  return Promise.reject(error);
})


Vue.use(VueAxios, axios)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
