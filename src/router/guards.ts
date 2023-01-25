/* eslint-disable @typescript-eslint/no-explicit-any */
import { RouteLocation } from "vue-router";

const haveRoleGuard = (to: RouteLocation, from: RouteLocation, next: any) => {
  console.log(to, from, next);

  const userRole = localStorage.getItem("userRole");
  next();
  // if (userRole === "Admin") {
  //   next();
  // } else {
  //   alert("Necesitas loguearte para acceder");
  //   next({ name: "login" });
  // }
};

export default haveRoleGuard;
