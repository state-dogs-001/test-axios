import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataList: ""
  },
  actions: {
    getApi({ commit }) {
      axios
        .get("https://api.jikan.moe/v3/search/anime?q=Fate/Zero&page=1")
        .then(res => {
          let dataList = res.data;
          commit("SET_POST", dataList);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mutations: {
    SET_POST(state, dataList) {
      state.dataList = dataList;
    }
  }
});
