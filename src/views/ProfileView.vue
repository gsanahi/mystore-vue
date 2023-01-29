<template>
  <spinner-load :show="loading">
    <UserCard v-if="user != null" :user="user"></UserCard>
  </spinner-load>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SpinnerLoad from "@/components/SpinnerLoad.vue";
import UserCard from "@/components/UserCard.vue";
import { User } from "@/models/users";
import userService from "@/services/userService";

export default defineComponent({
  name: "userCard",
  components: {
    SpinnerLoad,
    UserCard,
  },
  data(): { user: User | null } {
    return {
      user: null,
    };
  },
  setup() {
    return {
      loading: ref(false),
    };
  },
  methods: {
    async fetchUser() {
      this.loading = true;
      const accessToken = this.$store.getters["user/accessToken"];
      const user = await userService.getUser(accessToken);
      this.user = user;
      this.loading = false;
    },
  },
  mounted() {
    this.fetchUser();
  },
});
</script>
