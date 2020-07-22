import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

// import router from './router/index'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    name: null,
    super: {
      access_list: {
        menus: [],
      },
    },
    user: null,
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.name = userData.name;
      state.super = userData.super;
    },
    // storeUser(state, user) {
    //   state.user = user;
    // },
  },
  actions: {
    // async signup({ commit, dispatch }, authData) {
    //   await axios
    //     .post('https://dev.api.hoonian.com/api/agent/signup', {
    //       name: authData.name,
    //       account_number: authData.account_number,
    //       password: authData.password,
    //     })
    //     .then((res) => {
    //       console.log(res),
    //         commit('authUser', {
    //           token: res.data.data.access_token,
    //           name: res.data.data.agent.name,
    //         }),
    //         dispatch('storeUser', authData);
    //     })
    //     .catch((err) => console.log(err));
    // },
    async login({ commit }, authData) {
      await axios
        .post('https://dev.api.hoonian.com/api/agent/login', {
          phone_number: authData.phone_number,
          password: authData.password,
        })
        .then((res) => {
          console.log(res),
            commit('authUser', {
              token: res.data.data.access_token,
              name: res.data.data.agent.name,
              super: res.data.data,
            });
          //   localStorage.setItem('token', res.data.data.access_token);
        })
        .catch((err) => console.log(err));
    },
    // tryAutoLogin({ commit }) {
    //   const token = localStorage.getItem('token');
    //   if (!token) {
    //     return;
    //   }

    //   const userName = localStorage.getItem('userName');
    //   commit('authUser', {
    //     token: token,
    //     userName: userName,
    //   });
    // },
    // async storeUser({ state }, userData) {
    //   if (!state.idToken) {
    //     return;
    //   }
    //   axios
    //     .post(
    //       'https://dev.api.hoonian.com/api/agent/profile?id=2c5ea4c0-4067-11e9-8bad-9b1deb4d3b7d',
    //       userData
    //     )
    //     .then((res) => res)
    //     .catch((err) => console.log(err));
    // },
    // async fetchUser({ commit, state }) {
    // async fetchUser({ state }) {
    //   if (!state.idToken) {
    //     return;
    //   }
    //   axios
    //     .get(
    //       'https://dev.api.hoonian.com/api/agent/profile?id=2c5ea4c0-4067-11e9-8bad-9b1deb4d3b7d'
    //     )
    //     .then((res) => {
    //       res;
    //   console.log(res);
    //   const data = res.data.data;
    //   const users = [];
    //   for (let key in data) {
    //     const user = data[key];
    //     user.id = key;
    //     users.push(user);
    //   }
    //   console.log(users);
    //   commit('storeUser', users[0]);
    // })
    // .catch((error) => console.log(error));
    // },
  },
  getters: {
    user(state) {
      return state.name;
    },
    super(state) {
      return state.super;
    },
    isAuthenticated(state) {
      return state.idToken !== null;
    },
  },
});
