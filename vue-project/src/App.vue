<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="app-bar">
      <div class="menu-icon">☰</div> 
      <div class="project_title">
        <img src="//images.squarespace-cdn.com/content/v1/644a289cd8c0b42f41a8474f/d48644be-e0bd-4a3f-97e2-f9e4e7e5466e/fysiofresh-logo-text.png?format=1500w" alt="Logo" />
      </div>
    </nav>
  </header>
  <div class="page">
    <RouterView />
  </div>
</template>

<style scoped>
  @import './assets/main.css';
 /*  @import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");
  svg {
    font-family: "Russo One", sans-serif;
    width: 50vw; height: 3rem;
  }
  svg text {
    animation: stroke 5s infinite alternate;
    stroke-width: 2;
    stroke: #365FA0;
    font-size: 50px;
  }
  @keyframes stroke {
    0%   {
      fill: rgba(72,138,204,0); stroke: rgba(54,95,160,1);
      stroke-dashoffset: 25%; stroke-dasharray: 0 50%; stroke-width: 2;
    }
    70%  {fill: rgba(72,138,204,0); stroke: rgba(54,95,160,1); }
    80%  {fill: rgba(72,138,204,0); stroke: rgba(54,95,160,1); stroke-width: 3; }
    100% {
      fill: rgba(72,138,204,1); stroke: rgba(54,95,160,0);
      stroke-dashoffset: -25%; stroke-dasharray: 50% 0; stroke-width: 0;
    }
  }

  .wrapper {background-color: #FFFFFF};
 */
  header {
    position: relative;
    background-color: #ffffff;
    padding: 1rem;
    height: 4rem;
  }
  .project_title img{
    height: auto;
    width: 5rem;
    margin: auto;
  }
  .page {
    background-color:peachpuff;
    overflow-y: hidden;
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
</style>