<template>
  <n-config-provider :theme="darkTheme">
    <n-layout>
      <nav-bar />
      <div class="container">
        <router-view />
      </div>
    </n-layout>
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { darkTheme, NConfigProvider, NLayout } from "naive-ui";
import type { GlobalTheme } from "naive-ui";
import NavBar from "./components/NavBar.vue";

export default defineComponent({
  components: { NavBar, NConfigProvider, NLayout },
  setup() {
    return {
      darkTheme,
      theme: ref<GlobalTheme | null>(null),
    };
  },
});
</script>

<style>
.container {
  background-color: rgb(16, 16, 20);
  padding: 4rem;
}
</style>
