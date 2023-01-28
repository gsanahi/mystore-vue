<template>
  <UserCard v-if="user != null" :user="user"></UserCard>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserCard from "@/components/UserCard.vue";
import { User } from "@/models/users";
import userService from "@/services/userService";

export default defineComponent({
  name: "userCard",
  components: {
    UserCard,
  },
  data(): { user: User | null } {
    return {
      user: null,
    };
  },
  methods: {
    async fetchUser() {
      const accessToken = this.$store.getters["user/accessToken"];
      const user = await userService.getUser(accessToken);
      this.user = user;
    },
  },
  mounted() {
    this.fetchUser();
  },
});
</script>
