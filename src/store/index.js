import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      counter: 13,
      isLoggedIn: false,
      responseData: null,
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
    setResponseData(state, data) {
      state.responseData = data;
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
    async fetchData({ commit }, { url, params }) {
      try {
        console.log("fetchData");
        const response = await axios.get(url, { params });
        console.log("response: " + response.data);
        commit("setResponseData", response.data);

        return response.data;
      } catch (error) {
        throw error;
      }
    },
    async postData({ commit }, { url, data }) {
      try {
        const response = await axios.post(url, data);
        commit("setResponseData", response.data);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    async putData({ commit }, { url, data }) {
      try {
        const response = await axios.put(url, data);
        commit("setResponseData", response.data);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    async deleteData({ commit }, { url }) {
      try {
        const response = await axios.delete(url);
        commit("setResponseData", response.data);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  },
  modules: {},
});
