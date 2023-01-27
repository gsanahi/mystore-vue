import authService from "@/services/authService";
import axios from "axios";
import type { Module } from "vuex";

interface IUserState {
  isLoggedIn: boolean;
}

const initialState = { isLoggedIn: false };

type LoginFields = { email: string; password: string };


export const user: Module<IUserState, unknown> = {
  namespaced: true,
  state: initialState,
  actions: {
    async login({ commit }, { email, password }: LoginFields) {
      console.log("[action] Loggin in");
      console.log({ email, password });
      
      try {
        const token = await authService.login(email, password)
        commit("loginSucceed");
      } catch (error) {
        // TODO: Manejar error
        commit("loginFailed");
      }
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
