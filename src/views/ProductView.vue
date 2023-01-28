<template>
  <product-details
    v-if="aProduct != null"
    :product="aProduct"
  ></product-details>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductDetails from "@/components/ProductDetails.vue";
import { Product } from "@/models/product";
import productsService from "@/services/productsService";

export default defineComponent({
  name: "A-product",
  components: {
    ProductDetails,
  },
  data(): { aProduct: Product | null } {
    return {
      aProduct: null,
    };
  },
  methods: {
    async fetchProduct(id: number) {
      const product = await productsService.oneProduct(id);
      this.aProduct = product;
    },
  },
  mounted() {
    const id = Number(this.$route.params.id);
    this.fetchProduct(id);
  },
});
</script>
