<template>
  <n-card :title="product.title" hoverable>
    <template #cover>
      <img :src="product.images[0]" />
    </template>
    {{ product.description }}
    <n-space>
      <n-button size="large">
        <template #icon>
          <n-icon>
            <MoneyBillWave />
          </n-icon>
        </template>
        {{ product.price }}
      </n-button>
      <router-link :to="{ name: 'product', params: { id: product.id } }"
        ><n-button tertiary round type="info">More Info</n-button></router-link
      >
    </n-space>
  </n-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { NButton, NCard, NSpace, NIcon } from "naive-ui";
import { MoneyBillWave as MoneyBillWave } from "@vicons/fa";
import type { Product } from "@/models/product";

export default defineComponent({
  name: "ProductCard",
  props: {
    product: { type: Object as PropType<Product>, required: true },
  },
  components: {
    NButton,
    NCard,
    NSpace,
    NIcon,
    MoneyBillWave,
  },
});
</script>

<style scoped>
.money {
  background-color: blue;
}
</style>
