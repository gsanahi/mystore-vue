<template>
  <n-card title="Login">
    <div class="card-content">
      <div class="form-group">
        <n-auto-complete
          v-model:value="email"
          :options="options"
          placeholder="Email"
        />
      </div>
      <div class="form-group">
        <n-input
          v-model:value="password"
          type="password"
          show-password-on="mousedown"
          placeholder="Password"
          :maxlength="15"
        />
      </div>
      <n-button strong secondary block round type="primary" @click="handleLogin(email, password)">Login</n-button>
    </div>
  </n-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { NAutoComplete, NButton, NCard, NInput } from "naive-ui";

export default defineComponent({
  components: { NAutoComplete, NButton, NCard, NInput },
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

<style scoped>
.n-card {
  max-width: 50%;
}

.card-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.form-group, .n-button {
  margin: 1rem;
  width: 60%;
}
</style>