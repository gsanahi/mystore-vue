<template>
  <div class="input-container">
    <n-input-group>
      <n-input
        :style="{ width: '50%' }"
        placeholder="Buscar productos"
        v-model:value="search"
        @keyup.enter="onSearch"
      />
      <n-button @click="onSearch" type="primary"> Search </n-button>
    </n-input-group>
  </div>
  <div>
    <n-grid
      v-if="products.length"
      cols="2 m:4 l:5"
      responsive="screen"
      :x-gap="24"
      :y-gap="24"
    >
      <n-grid-item v-for="product in products" :key="product.id"
        ><product-card :product="product"></product-card
      ></n-grid-item>
    </n-grid>
    <n-result
      v-else-if="page === 1"
      status="500"
      title="No se encontraron productos"
      description="No se encontraron productos prueba buscando otro."
    ></n-result>
    <n-result
      v-else
      status="404"
      title="No hay mas productos"
      description="No se encontraron más productos, prueba yendo a otra página o buscando otro producto."
    >
    </n-result>
  </div>
  <div>
    <!-- Uso 10 páginas porque la API no nos devuelve la cantidad total de elementos -->
    <n-pagination v-model:page="page" :page-count="10" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import {
  NButton,
  NInput,
  NInputGroup,
  NGrid,
  NGridItem,
  NPagination,
  NResult,
} from "naive-ui";
import ProductCard from "@/components/ProductCard.vue";
import { Product } from "@/models/product";
import productsService from "@/services/productsService";

const LIMIT = 5;

export default defineComponent({
  name: "ProductList",
  components: {
    NButton,
    NInput,
    NInputGroup,
    NGrid,
    NGridItem,
    NPagination,
    NResult,
    ProductCard,
  },
  data() {
    const products: Product[] = [];
    return {
      products,
    };
  },
  setup() {
    return {
      search: ref(""),
      page: ref(1),
    };
  },
  methods: {
    async fetchProducts() {
      const products = await productsService.findProducts(
        this.search,
        (this.page - 1) * LIMIT,
        LIMIT
      );
      this.products = products;
    },
    onSearch() {
      this.page = 1;
      this.fetchProducts();
    },
  },
  mounted() {
    this.fetchProducts();
  },
  watch: {
    page() {
      this.fetchProducts();
    },
  },
});
</script>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 2rem 0;
}

.n-result,
.n-pagination {
  margin: 6rem;
}
</style>
