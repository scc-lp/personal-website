<template>
  <div class="about">
    <h1>About Page</h1>
    <p>This is the about page.</p>
    <router-link to="/">Go to Home</router-link>
  </div>
</template>

<script setup lang="ts">
// About page component
</script>

<style scoped>
.about {
  padding: 20px;
}

router-link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #008CBA;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

router-link:hover {
  background-color: #007B9E;
}
</style>