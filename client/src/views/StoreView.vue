<script setup lang="ts">
    import { isLoading } from "@/stores/session";
    import { computed, reactive, ref, watch } from "vue";
    import { RouterLink } from "vue-router";
    import { getProducts, type Product } from "../stores/products";

    const products = reactive([] as Product[]);
    getProducts().then( x=> products.push(...x.products));

</script> 



<template>
    




    <div class="box" style="background-color:hsl(247, 11%, 67%); margin-top: 25px;">
        <RouterLink v-for="product in products" :key="product._id"
        class="product" :class="{ 'is-disabled': isLoading }"
                        :to="`/product/${product._id}`">


            <div class="product-image">
            <img :src="product.image" :alt="product.name" />
            </div>



        
        
        </RouterLink>
        
        



        
        

        
        

       
    </div>








</template>


