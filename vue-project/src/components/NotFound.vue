<script setup lang="ts">
    import { RouterLink } from 'vue-router'
</script>
<template>
    <div>
        <h1>Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
    </div> 
    <nav>
        <RouterLink to="/home"><v-icon>mdi-home</v-icon></RouterLink> 
    </nav>
</template>
