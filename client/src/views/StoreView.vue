<script setup lang="ts">
    import { isLoading } from "@/stores/session";
    import { computed, reactive, ref, watch } from "vue";
    import { RouterLink } from "vue-router";
    import { getProducts, type Product } from "../stores/products";

    const products = reactive([] as Product[]);
    getProducts().then( x=> products.push(... x.products));

</script> 



<template>
    




    <div class="container" style="background-color:hsl(247, 11%, 67%); margin-top: 25px; width: 100vw; height: 100vw;">

        <div class="columns">

            <RouterLink v-for="product in products" :key="product._id"
            class="column"
             :class="{ 'is-disabled': isLoading }" :to="`/product/${product._id}`">

        <div class="box">
            <b>{{product.name}}</b>

            <figure class="image is-64x64">
                <img :src="product.image" alt = "image unable to load" >
            </figure> 
            
            <strong>{{product.price}}</strong>
            
        </div>
        </RouterLink>

        </div>
        
        



        
        

        
        

       
    </div>








</template>



<style scoped>
   
   

    .product{
        height: 100vh;
        width: 100vw;
    }
   


   
</style>


