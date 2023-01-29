<template>
  <n-card :title="product.title" hoverable>
    <template #cover>
      <img :src="product.images[0]" />
    </template>
    <p class="description">
      {{ product.description }}
    </p>
    <n-space>
      <n-button size="large">
        <template #icon>
          <n-icon>
            <MoneyBillWave />
          </n-icon>
        </template>
        ${{ product.price }}
      </n-button>
    </n-space>
    <router-link :to="{ name: 'product', params: { id: product.id } }"
      ><n-button tertiary round type="info">More Info</n-button></router-link
    >
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

<style>
.n-space {
  margin: 1rem 0;
}

.description {
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.n-card-header__main {
  height: 58px;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
