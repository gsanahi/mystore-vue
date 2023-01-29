<template>
  <n-card title="Login">
    <spinner-load :show="loading">
      <div class="card-content">
        <div class="form-group">
          <n-auto-complete
            v-model:value="email"
            :options="options"
            placeholder="Email"
            required="true"
          />
        </div>
        <div class="form-group">
          <n-input
            v-model:value="password"
            type="password"
            show-password-on="mousedown"
            placeholder="Password"
            @keyup.enter="handleLogin"
            :maxlength="15"
          />
        </div>
        <n-button
          strong
          secondary
          block
          round
          type="primary"
          @click="handleLogin"
          >Login</n-button
        >
        <n-alert v-if="error" title="Error" type="error">
          {{ error }}
        </n-alert>
      </div>
    </spinner-load>
  </n-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { NAlert, NAutoComplete, NButton, NCard, NInput } from "naive-ui";
import SpinnerLoad from "./SpinnerLoad.vue";

// Código de: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export default defineComponent({
  components: { NAlert, NAutoComplete, NButton, NCard, NInput, SpinnerLoad },
  setup() {
    const emailRef = ref("");
    const passRef = ref("");

    return {
      email: emailRef,
      password: passRef,
      loading: ref(false),
      error: ref(""),
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
    handleLogin() {
      this.error = "";
      if (!this.email || !validateEmail(this.email)) {
        this.error = "Email Inválido";
        return;
      }
      if (!this.password) {
        this.error = "Contraseña Inválida";
        return;
      }
      this.loading = true;
      this.$store
        .dispatch("user/login", { email: this.email, password: this.password })
        .then(() => this.$router.push({ name: "home" }))
        .catch((error) => {
          if (error.response?.status === 401) {
            this.error = "Email o contraseña inválida";
          } else {
            this.error = error.message;
          }
        })
        .finally(() => (this.loading = false));
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

.form-group,
.n-button {
  margin: 1rem;
  width: 60%;
}

.n-alert {
  width: 60%;
}
</style>
