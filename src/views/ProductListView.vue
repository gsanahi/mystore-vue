<template>
  <div class="input-container">
    <n-input-group>
      <n-input :style="{ width: '50%' }" placeholder="Buscar productos" />
      <n-button type="primary"> Search </n-button>
    </n-input-group>
  </div>
  <n-grid cols="2 m:4 l:5" responsive="screen" :x-gap="24" :y-gap="24">
    <n-grid-item v-for="product in products" :key="product.id"
      ><product-card :product="product"></product-card
    ></n-grid-item>
  </n-grid>
  <div>
    <footer>
      <n-pagination v-model:page="page" :page-count="100" />
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { NButton, NInput, NInputGroup, NGrid, NGridItem } from "naive-ui";
import ProductCard from "@/components/ProductCard.vue";
import { Product } from "@/models/product";
import productsService from "@/services/productsService";

export default defineComponent({
  name: "ProductList",
  components: { NButton, NInput, NInputGroup, NGrid, NGridItem, ProductCard },
  data() {
    const products: Product[] = [];
    return {
      products,
    };
  },
  setup() {
    return {
      page: ref(2),
    };
  },
  methods: {
    async fetchProducts() {
      const products = await productsService.allProducts();
      this.products = products;
    },
  },
  mounted() {
    this.fetchProducts();
  },
});
</script>

<style scoped>
.input-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 2rem 0;
}
</style>
