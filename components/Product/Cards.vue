<script setup lang='ts'>
const productStore = useProductStore();
const { products } = storeToRefs(productStore)
await productStore.fetchProducts()
</script>

<template>
    <ProductCard v-for="product in products" :key="product.id" :id="product.id" :title="product.title"
        :description="product.description" :price="product.price" :category="product.category" :image="product.image"
        :rating="product.rating" />
</template>