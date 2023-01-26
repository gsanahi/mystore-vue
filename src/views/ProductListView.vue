<template>
  <div>Product list</div>
  <n-grid cols="2 m:4 l:5" responsive="screen" :x-gap="24" :y-gap="24">
    <n-grid-item><product-card :product="product"></product-card></n-grid-item>
    <n-grid-item><product-card :product="product"></product-card></n-grid-item>
    <n-grid-item><product-card :product="product"></product-card></n-grid-item>
    <n-grid-item><product-card :product="product"></product-card></n-grid-item>
    <n-grid-item><product-card :product="product"></product-card></n-grid-item>
    <n-grid-item><product-card :product="product"></product-card></n-grid-item>
    <n-grid-item><product-card :product="product"></product-card></n-grid-item>
  </n-grid>
  <div>
    <footer>
      <n-pagination v-model:page="page" :page-count="100" />
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { NGrid, NGridItem } from "naive-ui";
import ProductCard from "@/components/ProductCard.vue";
import { Product } from "@/models/product";

export default defineComponent({
  name: "ProductList",
  components: {
    NGrid,
    NGridItem,
    ProductCard,
  },
  setup() {
    const product: Product = {
      id: 120,
      title: "Recycled Bronze Table",
      price: 291,
      description:
        "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      images: [
        "https://api.lorem.space/image/furniture?w=640&h=480&r=1424",
        "https://api.lorem.space/image/furniture?w=640&h=480&r=2449",
        "https://api.lorem.space/image/furniture?w=640&h=480&r=8292",
      ],
      creationAt: "2023-01-23T20:27:59.000Z",
      updatedAt: "2023-01-23T20:27:59.000Z",
      category: {
        id: 3,
        name: "titulo cambiado",
        image: "https://api.lorem.space/image/furniture?w=640&h=480&r=4725",
        creationAt: "2023-01-23T20:27:59.000Z",
        updatedAt: "2023-01-24T08:02:25.000Z",
      },
    };

    return {
      product,
      page: ref(2),
    };
  },
});
</script>
