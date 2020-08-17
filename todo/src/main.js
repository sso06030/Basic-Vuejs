import Vue from "vue";
import App from "./App.vue";

//index.js면 생략 가능
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  //store 추가
  store,
  render: (h) => h(App),
}).$mount("#app");
