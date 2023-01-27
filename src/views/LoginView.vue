<template>
  <LogIn />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LogIn from "@/components/LogIn.vue";

export default defineComponent({
  name: "logIn",
  components: {
    LogIn,
  },
  setup() {
    return {
      LogIn,
    };
  },
});
</script>
