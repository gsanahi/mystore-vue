import axios from "axios";
import { Module } from "vuex";

interface IUserState {
  isLoggedIn: boolean;
}

const initialState = { isLoggedIn: false };

type LoginFields = { email: string; password: string };
type LoginResponse = { access_token: string; refresh_token: string };

export const user: Module<IUserState, unknown> = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, { email, password }: LoginFields) {
      console.log("[action] Loggin in");
      console.log({ email, password });
      axios
        .post<LoginResponse>("https://api.escuelajs.co/api/v1/auth/login", {
          email,
          password,
        })
        .then((response) => {
          console.log({ response });
          console.log("[action] Login success");
          commit("loginSucceed");
        })
        .catch((error) => {
          console.error(error);
          console.log("[action] Login error");
          commit("loginFailed");
        });
    },
  },
  mutations: {
    loginSucceed(state) {
      console.log("[mutation] Login succeed");
      state.isLoggedIn = true;
    },
    loginFailed(state) {
      console.log("[mutation] Login failed");
      state.isLoggedIn = false;
    },
  },
};
