<template>
  <div class="card-container">
    <n-card :title="`${user.name}`">
      <n-image width="500" :src="user.avatar" />
      <ul>
        <li>Name: {{ user.name }}</li>
        <li>Email: {{ user.email }}</li>
        <li>Role: {{ user.role }}</li>
      </ul>
    </n-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { NCard, NImage } from "naive-ui";
import type { User } from "@/models/users";

export default defineComponent({
  name: "UserCard",
  props: {
    user: { type: Object as PropType<User>, required: true },
  },
  components: {
    NCard,
    NImage,
  },
});
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.n-card {
  max-width: 600px;
}
</style>
