<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import session, { login, logout } from '../stores/session'

    
</script>
<script lang="ts">

   
</script>
<template>
    <div class="buttons" v-if="session.user == null">
        
        <RouterLink class="button is-light" to="login">
            Log in
        </RouterLink>
    </div>
    <div v-else class="profile">
        <img :src="session.user.profile_picture" />
        <span>
            {{session.user.name}} ({{session.user.email}})            
        </span>

        (<a @click="logout()">
            Log out
        </a>)
    </div>

</template>


<style scoped>
    .profile {
        display: flex;
        align-items: center
    }
    .profile img {

        border-radius: 50%;
        margin-right: 10px;
        margin-left: 10px;
    }
</style>