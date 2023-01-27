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
body {
  background-color: rgb(16, 16, 20);
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
</style>
