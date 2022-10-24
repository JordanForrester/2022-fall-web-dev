<script setup lang="ts">
    import { reactive } from 'vue';
    const items = [
        { name: 'Epic T-shirt:', cost: 16, image: 'https://m.media-amazon.com/images/I/B1b+IdTI5hS._CLa%7C2140%2C2000%7C510jTO0tkIL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX522_.png' },
        { name: 'Epic Sweatpants:', cost: 32, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzsrrocCKVf1lEiIB_GxpSC-IRSN10zhl88-kQo5Ua0iQTJRVnxMVUa5DHjbcesUQAGoM&usqp=CAU' },
        { name: 'Revenge Hoddie:', cost: 70, image: 'https://i.ebayimg.com/images/g/FcMAAOSwSnJhAE-e/s-l500.png' },
        
    ]
    const cart = reactive( [
        { name: 'Epic T-shirt:', cost: 16, qty: 1 },
        
    ])
    function addToCart(item: any) {
        cart.push({ ...item, qty: 1 });
    }

    function removeCart(item: any){

        
    }

</script> 



<template>
    




    <div class="box" style="background-color:hsl(247, 11%, 67%); margin-top: 25px;">
        <div class="block">



        <tr v-for="item in items" :key="item.name">
        <div class="box" style="margin-top: 5px;">
            {{item.name}} ${{item.cost}}
            <div class="media-left">
                <figure class="image is-96x96">
                    <img :src=item.image alt="Image">
                </figure>
                <div class="button" style="margin-top:30px;" :key="item.name" @click="addToCart(item)">
                    Add to cart
                </div>

                <div class="button" style="margin-top:30px;" :key="item.name" @click="removeCart(item)">
                    Remove
                </div>
             </div>     
        </div>        
    </tr>
        

        
        <table class="table is-bordered" style="margin-top: 15px;">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Cost</th>
                    <th>Quantity</th>
                </tr>
            </thead>

        <tr v-for="item in cart" :key="item.name">
           
                <td>{{ item.name }}</td>
                <td>${{ item.cost }}</td>
                <td><input v-model="item.qty" /></td>
                <td>${{ item.cost * item.qty }}</td>
            
        </tr>
        <tr>
            <td colspan="3">Total</td>
            <td>${{ cart.reduce((total, item) => total + item.cost * item.qty, 0) }}</td>
        </tr>





        </table>

    </div>
    </div>








</template>


