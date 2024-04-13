<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </header>
  <div>
    <RouterView />
  </div>
</template>

<style scoped>
  @import './assets/main.css';
</style>