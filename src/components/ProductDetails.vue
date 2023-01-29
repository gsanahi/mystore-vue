<template>
  <n-card :title="product.title" hoverable>
    <div class="category-tag">
      <category-tag>{{ product.category.name }}</category-tag>
    </div>
    <template #cover>
      <n-carousel show-arrow>
        <img
          v-for="img in product.images"
          :key="img"
          class="carousel-img"
          :src="img"
        />
      </n-carousel>
    </template>
    {{ product.description }}
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
  </n-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { NButton, NCard, NCarousel, NSpace, NIcon } from "naive-ui";
import { MoneyBillWave as MoneyBillWave } from "@vicons/fa";
import CategoryTag from "@/components/CategoryTag.vue";
import type { Product } from "@/models/product";

export default defineComponent({
  name: "ProductDetails",
  props: {
    product: { type: Object as PropType<Product>, required: true },
  },
  components: {
    NButton,
    NCard,
    NCarousel,
    NSpace,
    NIcon,
    MoneyBillWave,
    CategoryTag,
  },
});
</script>

<style scoped>
.n-card {
  max-width: 40%;
}

.category-tag {
  display: block;
  margin-bottom: 1rem;
}

.n-space {
  margin-top: 1rem;
}
</style>
