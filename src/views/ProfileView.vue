<template>
  <div>Profile</div>
  <UserCard :user="user.name"></UserCard>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserCard from "@/components/userCard.vue";
import { User } from "@/models/users";

export default defineComponent({
  name: "userCard",
  components: {
    UserCard,
  },
  setup() {
    const user: User = {
      id: 1,
      email: "john@mail.com",
      password: "changeme",
      name: "Jhon",
      role: "customer",
      avatar: "https://api.lorem.space/image/face?w=640&h=480&r=3214",
      creationAt: "2023-01-24T21:13:17.000Z",
      updatedAt: "2023-01-24T21:13:17.000Z",
    };

    return {
      user,
    };
  },
});
</script>
