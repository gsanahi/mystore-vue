<template>
  <div class="container">
    <div class="complete-user">
      <n-auto-complete
        v-model:value="email"
        :options="options"
        placeholder="Email"
      />
    </div>
    <div class="complete-mail">
      <n-input
        v-model:value="password"
        type="password"
        show-password-on="mousedown"
        placeholder="Password"
        :maxlength="15"
      />
    </div>
    <button @click="handleLogin(email, password)">Login</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { NAutoComplete, NInput } from "naive-ui";

export default defineComponent({
  components: { NAutoComplete, NInput },
  setup() {
    const emailRef = ref("");
    const passRef = ref("");

    return {
      email: emailRef,
      password: passRef,
      options: computed(() => {
        return ["@gmail.com", "@mail.com", "@qq.com"].map((suffix) => {
          const prefix = emailRef.value.split("@")[0];
          return {
            label: prefix + suffix,
            value: prefix + suffix,
          };
        });
      }),
    };
  },
  methods: {
    handleLogin(email: string, password: string) {
      this.$store.dispatch("user/login", { email, password });
    },
  },
});
</script>
