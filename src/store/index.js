import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      counter: 13,
      isLoggedIn: false,
    };
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCOunter(state, getters) {
      const finalConuter = getters.finalConuter;
      if (finalConuter < 0) {
        return 0;
      }
      if (finalConuter > 100) {
        return 100;
      }
      return finalConuter;
    },
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    incrementPayload(state, payload) {
      console.log("state: " + state.counter);
      console.log("value: " + payload.value);
      state.counter = state.counter + payload.value;
    },
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    increment(context, payload) {
      context.commit("incrementPayload", payload);
    },
    login(context, payload) {
      context.commit("setAuth", { isAuth: true });
    },
    logout(context, payload) {
      context.commit("setAuth", { isAuth: false });
    },
  },
  modules: {},
});
