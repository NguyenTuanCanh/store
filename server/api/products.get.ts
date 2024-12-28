import type { Product } from "~/types";

export default defineEventHandler(async (event) => {
    const { baseUrl } = useRuntimeConfig(event)
    const response = await $fetch<Product>(`https://fakestoreapi.com/products`, {
        method: 'GET'
    });
    return response;
})