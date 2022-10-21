<script setup lang="ts">
    import { reactive } from 'vue';
    const items = [
        { name: 'Shirt', cost: 16 },
        { name: 'Hoddie', cost: 50 },
        { name: 'Sweatpants', cost: 25},
    ]
    const cart = reactive( [
        { name: 'Shirt', cost: 16, qty: 1 },
        
    ])
    function addToCart(item: any) {
        cart.push({ ...item, qty: 1 });
    }
</script>



<template>
    <div class="box" style="background-color:hsl(224, 44%, 17%); margin-top: 25px;">
        
        <div class="box">
            Random Epic T-shirt: $15.99
            <div class="media-left">
                <figure class="image is-96x96">
                    <img src="https://m.media-amazon.com/images/I/B1b+IdTI5hS._CLa%7C2140%2C2000%7C510jTO0tkIL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX522_.png" alt="Image">
                </figure>
                <div class="button" style="margin-top:30px;">
                    Add to cart
                </div>

                <div class="button" style="margin-top:30px;">
                    Remove
                </div>
             </div>


            
             
        </div>
    </div>
</template>