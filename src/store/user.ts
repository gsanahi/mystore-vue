import authService from "@/services/authService";
import type { Module } from "vuex";

interface IUserState {
  accessToken: string | null;
}

const initialState: IUserState = { accessToken: null };

type LoginFields = { email: string; password: string };

export const user: Module<IUserState, unknown> = {
  namespaced: true,
  state: initialState,
  actions: {
    async login({ commit }, { email, password }: LoginFields) {
      console.log("[action] Loggin in");
      console.log({ email, password });

      try {
        const token = await authService.login(email, password);
        commit("loginSucceed", token);
      } catch (error) {
        // TODO: Manejar error
        commit("loginFailed");
      }
    },
  },
  mutations: {
    loginSucceed(state: IUserState, token: string) {
      console.log("[mutation] Login succeed");
      state.accessToken = token;
    },
    loginFailed(state) {
      console.log("[mutation] Login failed");
      state.accessToken = null;
    },
  },
};
