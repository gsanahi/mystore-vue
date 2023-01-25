<template>
  <n-card :title="product.title" hoverable>
    <template #cover>
      <img :src="product.images[0]" />
    </template>
    {{ product.description }}
    <template #money>
      <n-space>
        <n-button size="large">
          <template #icon>
            <n-icon>
              <MoneyBillWave />
            </n-icon>
          </template>
          {{ product.price }}
        </n-button>
      </n-space>
    </template>
  </n-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { NCard } from "naive-ui";
import { MoneyBillWave as MoneyBillWave } from "@vicons/fa";
import type { Product } from "@/models/product";

export default defineComponent({
  name: "ProductCard",
  props: {
    product: { type: Object as PropType<Product>, required: true },
  },
  components: {
    NCard,
    MoneyBillWave,
  },
});
</script>

<style scoped>
.money {
  background-color: blue;
}
</style>
