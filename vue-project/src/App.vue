<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="app-bar">
      <div class="menu-icon">☰</div> 
      <div class="header-title">
        <img src="//images.squarespace-cdn.com/content/v1/644a289cd8c0b42f41a8474f/d48644be-e0bd-4a3f-97e2-f9e4e7e5466e/fysiofresh-logo-text.png?format=1500w" />
      </div>
      <div class="icons">
        <RouterLink to="/home"><v-icon>mdi-home</v-icon></RouterLink>
        <div class="search-icon"><v-icon>mdi-search-web</v-icon></div>
        <div class="settings-icon">⚙️</div>
      </div>
    </nav>
  </header>
  <div class="page">
    <RouterView />
  </div>
</template>

<style scoped>
  @import './assets/main.css';
  header {
    position: relative;
    background-color: #ffffff;
    padding: 0.5rem;
    height: 4rem;
  }
  .page {
    background-color:peachpuff;
    overflow-y: auto;
    overflow-x: auto;
    height: calc(100vh - 4rem);
  }
  .app-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .icons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1vw;
    margin-right: 1vw;    
  }
  .menu-icon {
    margin-left: 1vw;    
  }
  .header-title img{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1vw;
    width: auto;
    height: 3rem;
  }
</style>