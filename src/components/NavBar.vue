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
  UserAlt as UserAlt,
  UserCheck as UserCheck,
} from "@vicons/fa";
import { RouterLink } from "vue-router";
import store from "@/store";

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
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
    icon: renderIcon(UserAlt),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: { name: "login" },
        },
        { default: () => "Login" }
      ),
    key: "login",
    icon: renderIcon(UserCheck),
  },
];

export default defineComponent({
  components: { NMenu },
  setup() {
    const isLoggedIn = store.getters["user/isLoggedIn"];
    
    return {
      activeKey: ref<string | null>(null),
      menuOptions,
      isLoggedIn,
    };
  },
});
</script>

<style scoped>
.n-menu {
  background-color: rgb(33, 119, 60);
  padding: 2rem;
  width: 100%;
}
</style>
