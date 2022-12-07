<script setup lang="ts">
    import { isLoading } from "@/stores/session";
    import { ref } from "vue";
    import { useRoute } from "vue-router";

    import { getProduct, type Product } from "../stores/products";

    const route = useRoute();
    
    const product = ref(null as Product | null);

    getProduct(route.params.id as string).then(x => {
        product.value = x
        console.log('The fetch returned');
    });

    console.log('The fetch was called');

</script>

<template>
    <div v-if="product" class="section">
        <div class="product-image">
            <img :src="product.image" :alt="product.name" />
        </div>
        <div class="product-info">
            <h3 class="title">{{ product.name }}</h3>
            <p class="price subtitle">
                <span class="currency">$</span>
                <span class="amount">{{ product.price }}</span>
            </p>
            <p>{{ product.desc }}</p>

        </div>
    </div>
    
    <div v-else class="section">
        <h2 class="title">Product not found</h2>
    </div>
</template>

<style scoped>
    .section {
        display: flex;
    }
   
</style>