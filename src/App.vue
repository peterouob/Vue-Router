<script setup>
import {RouterView,RouterLink} from 'vue-router'

</script>

<template>
  <main>
    <div class="container">
      <div>
        <br>
        <RouterLink to="/">Home</RouterLink>
        <br>
        <RouterLink to="/about">About</RouterLink>
        <!--      <RouterLink to="/car">Car</RouterLink>-->
      </div>
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
</style>