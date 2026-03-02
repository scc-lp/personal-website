<template>
  <div class="home-container">
    <div class="resume">
      <Resume />
    </div>
    <div class="center">
      <HomeMain />
      <Project />
    </div>
    <div class="nav">
      <Nav />
    </div>
  </div>
</template>

<script setup lang="ts">
import Resume from '../components/Resume.vue'
import Nav from '../components/Nav.vue'
import HomeMain from '../components/HomeMain.vue'
import Project from '../components/Project.vue'

</script>

<style scoped lang="scss">
.home-container {
  width: 100%;
  height: 100%;
  display: flex;

  .resume {
    width: 305px;
    height: 100%;
  }

  .center{
    flex: 1;
    overflow-y: auto;
    // background-color: green;
  }

  .nav {
    width: 108px;
    height: 100%;
  }
}
</style>