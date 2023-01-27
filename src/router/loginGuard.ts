import store from "@/store";
import { RouteLocation } from "vue-router";

const loginGuard = (to: RouteLocation, from: RouteLocation, next: any) => {
  const isLoggedIn: boolean = store.getters["user/isLoggedIn"];
  if (isLoggedIn) {
    next();
  } else {
    next({ name: "login" });
  }
};

export default loginGuard;
