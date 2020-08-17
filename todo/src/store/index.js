import Vue from "vue";
import Vues from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  //data()
  //데이터가 들어가는 곳
  state: {},
  //데이터를 바꾸는 곳
  mutations: {},
  //methods()
  //함수가 들어가는 곳
  //비동기적인 일을 처리함
  //mutation에게 데이터를 바꿔달라고 요청
  actions: {},
  //computed와 비슷
  getters: {},
});
