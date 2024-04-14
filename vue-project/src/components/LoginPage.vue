<script setup lang="ts">
    import { RouterLink } from 'vue-router'
</script>

<template> 
    <div>
        <h1>Login</h1>
        <form>
            <label for="username">Username</label>
            <input type="text" id="username" name="username" />
            <label for="password">Password</label>
            <input type="password" id="password" name="password" />
            <button type="submit" @click="$router.push('/')">Login</button>
        </form>
        <RouterLink to="/">Register</RouterLink>
    </div>
</template>