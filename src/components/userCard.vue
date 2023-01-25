<template>
  <n-card title="User profile">
    <template #cover>
      <img :src="user.avatar" />
      <ul>
        <li :name="user.name">Name</li>
        <li :email="user.email">Email</li>
        <li :role="user.role">Role</li>
      </ul>
    </template>
  </n-card>
</template>

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
