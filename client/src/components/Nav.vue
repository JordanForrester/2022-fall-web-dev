<script setup lang="ts">
    import { ref } from 'vue';
    import { RouterLink } from "vue-router";
    
    let isActive = ref(false);
</script>

<template>
    <nav class="navbar is-black" role="navigation" aria-label="main navigation" >

        <div class="container">
        <div class="navbar-brand">
          
          <a class="navbar-item">

            ReviewStation
            
          </a>
      
          <a :class="{ 'is-active': isActive }" @click="isActive = !isActive" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu"  :class="{ 'is-active': isActive }">
          <div class="navbar-start">
            <router-link to="/" class="navbar-item">
              Home
            </router-link>
      
            <router-link class="navbar-item" to="/merch" style="">
              Merch Store
            </router-link>

            <div class="navbar-item" style="margin-left:100px;">
              
                <div class="feild">
                      <input class="input" type="search" placeholder="Explore Review Station!">
                </div>
              
            
            </div>

            <div class="navbar-item" >
              <button class="button">
                Search
              </button>
            </div>

            <router-link class="navbar-item" to="/store" style="margin-left:190px;">
              About Us
            </router-link>
            

           

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>
      
              <div class="navbar-dropdown">
                <a class="navbar-item">
                  Developer Verification
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>
      
          <div class="navbar-end">
            <div class="navbar-item">

              
            </div>
          </div>
        </div>
        </div>
      </nav>

</template>

<style>
    .router-link-active {
        
        border-bottom: #535356 5px solid;
    }


</style>