<template>
  <div class="container">
    <div class="complete-user">
      <n-auto-complete
        v-model:value="value"
        :input-props="{
          autocomplete: 'disabled',
        }"
        :options="options"
        placeholder="User"
      />
    </div>
    <div class="complete-mail">
      <n-auto-complete
        v-model:value="value"
        :input-props="{
          autocomplete: 'disabled',
        }"
        :options="options"
        placeholder="Email"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { NAutoComplete } from "naive-ui";

export default defineComponent({
  components: { NAutoComplete },
  setup() {
    const valueRef = ref("");
    return {
      value: valueRef,
      options: computed(() => {
        return ["@gmail.com", "@mail.com", "@qq.com"].map((suffix) => {
          const prefix = valueRef.value.split("@")[0];
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
