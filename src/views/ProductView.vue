<template>
  <spinner-load :show="loading">
    <product-details
      v-if="aProduct != null"
      :product="aProduct"
    ></product-details>
  </spinner-load>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ProductDetails from "@/components/ProductDetails.vue";
import SpinnerLoad from "@/components/SpinnerLoad.vue";
import { Product } from "@/models/product";
import productsService from "@/services/productsService";

export default defineComponent({
  name: "A-product",
  components: {
    ProductDetails,
    SpinnerLoad,
  },
  data(): { aProduct: Product | null } {
    return {
      aProduct: null,
    };
  },
  methods: {
    async fetchProduct(id: number) {
      this.loading = true;
      const product = await productsService.oneProduct(id);
      this.aProduct = product;
      this.loading = false;
    },
  },
  mounted() {
    const id = Number(this.$route.params.id);
    this.fetchProduct(id);
  },
  setup() {
    return {
      loading: ref(false),
    };
  },
});
</script>
