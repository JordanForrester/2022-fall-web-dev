<script setup lang="ts">
    import { login } from '@/stores/session';
    import { ref } from 'vue';

    const email = ref('');
    const password = ref('');
    const name = ref('');

</script>

<template>
    <div>
        <form class="box" @submit.prevent="login(name, email, password)">
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                <input class="input" type="text" placeholder="Enter Username" v-model="name">
                </div>
            </div>

            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                <input class="input" type="email" placeholder="Please enter a valid email" v-model="email">
                </div>
            </div>

            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                <input class="input" type="password" placeholder="Create a password" v-model="password">
                </div>
            </div>

            <button class="button is-primary" style="background-color:black; color:white;">Sign in</button>
        </form>


    </div>
</template>


<style scoped>

</style>