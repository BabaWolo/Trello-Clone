<script setup lang="ts">
    
</script>

<template> 
    <div>
        <h1>Login</h1>
        <form>
        <input type="text" placeholder="Username" id="username" name="username" />
        <input type="password" placeholder="Password" id="password" name="password" />
        <button type="submit">Login</button>
        </form>
    </div>
</template>

<style scoped>
    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: flex-end;
        height: 50vh;
        width: 20vw;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3), 0 0 10px rgba(0, 0, 0, 0.3);
        background-image: linear-gradient(to top, #ffc2c2e2, #ffbcbc);
        color: #333;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-55%, -50%);
        border-radius: 10px;
    }
    h1 {
        color: #000000;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
    }
    input::placeholder {
        color: #000000;
        font-size: small;
        font-weight: 600;
    }
    input {
        padding: 0.5rem;
        font-size: 1rem;
        background-image: linear-gradient(to top, rgba(255, 162, 162, 0.599), #ffbdbd);
        border-radius: 10px;
        margin: 10px;
    }
    button {
        padding: 0.5rem;
        font-size: 1rem;
        background-image: linear-gradient(to top, rgba(255, 162, 162, 0.599), #ffbdbd);
        color: black;
        border: none;
        cursor: pointer;
        width: 5vw;
        align-self: center;
        border-radius: 10px;
        margin-bottom: 40px;
        margin-top: 4vh;
    }
    button:hover {
        background-image: linear-gradient(to top, rgba(255, 162, 162, 0.4), #ffc2c2);
    }
    input:not(:focus):hover {
        background-image: linear-gradient(to top, rgb(255, 162, 162, 0.4), #ffc2c2);
    }
    input:focus {
        background-image: linear-gradient(to top, rgba(255, 162, 162), #ffbdbd);
        outline: none;
    }
    input:focus::placeholder {
        color: transparent;
    }
</style>