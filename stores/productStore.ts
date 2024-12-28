import type { Product } from "~/types";

export const useProductStore = defineStore("productStore", () => {
    const products = ref<Product[]>([]);

    const fetchProducts = async () => {
        try {
            const response = await $fetch<Product[]>('/api/products');
            response.forEach((product: Product) => {
                products.value.push(product)
            });
        } catch(error) {
            if(error instanceof Error) {
                console.log(error.message)
            }
        }
    };

    return {
        products,
        fetchProducts
    }
});

