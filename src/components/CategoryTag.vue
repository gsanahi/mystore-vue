<template>
  <n-tag :bordered="false" type="success">
    <slot></slot>
  </n-tag>
</template>

<script>
import { defineComponent } from "vue";
import { NTag } from "naive-ui";

export default defineComponent({
  name: "CategoryTag",
  components: {
    NTag,
  },
});
</script>
