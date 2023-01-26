<template>
  <div class="container">
    <div class="complete-user">
      <n-auto-complete
        v-model:value="email"
        :options="options"
        placeholder="Email"
      />
      {{ email }}
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
});
</script>

{ email: "", options: [{label: "@gmail.com", value: "@gmail.com"}, {label:
"@mail.com", value: "@mail.com"}] } { email: "a", options: [{label:
"a@gmail.com", value: "a@gmail.com"}, {label: "a@mail.com", value:
"a@mail.com"}] }
