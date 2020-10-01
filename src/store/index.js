import Vuex from "vuex";
import Vue from "vue";
import module from "./module/module";


Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    module
  }
});
