<template>
  <n-spin :show="show">
    <slot></slot>
    <template #icon
      ><n-icon><Redo /></n-icon
    ></template>
    <template #description> Cargando.. </template>
  </n-spin>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NIcon, NSpin } from "naive-ui";
import { Redo } from "@vicons/fa";

export default defineComponent({
  name: "SpinnerLoad",
  components: { NIcon, NSpin, Redo },
  props: {
    show: { type: Boolean },
  },
});
</script>
