<template>
  <n-card title="Card with Cover">
    <template #cover>
      <img :src="product.images[0]" />
    </template>
    {{ user.name }}
  </n-card>
</template>

<style scoped>
.n-card {
  max-width: 300px;
}
</style>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { NCard } from "naive-ui";
import type { User } from "@/models/users";

export default defineComponent({
  name: "userCard",
  props: {
    user: { type: Object as PropType<User>, required: true },
  },
  components: {
    NCard,
  },
});
</script>
