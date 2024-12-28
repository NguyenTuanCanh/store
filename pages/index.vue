<template>
    <Suspense>
        <template #default>
            <div class="grid grid-cols-1 gap-4 p-6 md:grid md:grid-cols-3 lg:grid xl:grid-cols-4">
                <ProductCards />
            </div>
        </template>

        <template #fallback>
            <div class="grid grid-cols-1 gap-4 p-6 md:grid md:grid-cols-3 lg:grid xl:grid-cols-4">
                <ProductCardSkeleton v-for="n of 16" :key="n" />
            </div>
        </template>
    </Suspense>
</template>
