<template>
  <div>
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
        "List Products"
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
        "Profile"
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
        "Login"
      ),
    key: "login",
    icon: renderIcon(UserCheck),
  },
];

export default defineComponent({
  components: { NMenu },
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
  background-color: rgb(33, 119, 60);
  padding: 2rem;
  width: 100%;
}
</style>
