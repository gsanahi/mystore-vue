<template>
  <div v-if="isLoggedIn">
    <n-menu
      v-model:value="activeKey"
      mode="horizontal"
      :options="menuOptions"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, h, ref, Component } from "vue";
import { NIcon, NMenu } from "naive-ui";
import type { MenuOption } from "naive-ui";
import {
  Home as HomeIcon,
  UserAlt as UserAltIcon,
  SignOutAlt as SignOutAltIcon,
} from "@vicons/fa";
import { RouterLink } from "vue-router";
import store from "@/store";
import router from "@/router";

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

function logout() {
  store.dispatch("user/logout");
  router.push({ name: "login" });
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: { name: "home" },
        },
        { default: () => "List Products" }
      ),
    key: "home",
    icon: renderIcon(HomeIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: { name: "profile" },
        },
        { default: () => "Profile" }
      ),
    key: "profile",
    icon: renderIcon(UserAltIcon),
  },
  {
    label: () =>
      h(
        "a",
        {
          onClick: logout,
        },
        { default: () => "Logout" }
      ),
    key: "logout",
    icon: renderIcon(SignOutAltIcon),
  },
];

export default defineComponent({
  components: { NMenu },
  computed: {
    isLoggedIn() {
      return store.getters["user/isLoggedIn"];
    },
  },
  setup() {
    return {
      activeKey: ref<string | null>(null),
      menuOptions,
    };
  },
});
</script>

<style scoped>
.n-menu {
  background-color: rgb(69, 197, 109);
  padding: 2rem;
  width: 100%;
}
</style>
