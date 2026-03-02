<template>
  <div class="knowleage-container">
    <div class="title">知识库</div>
    <div class="konwleage-content">
      <div class="konwleage-item" v-for="item in konwleageList" :key="item.name">
        <div class="name">{{ item.name }}</div>
        <div class="detail">{{ item.detail }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import konwleageList from '@/data/konwleage';
</script>

<style scoped>
.knowleage-container {
  padding: 20px;

  .title {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 30px;
    text-align: center;
  }

  .konwleage-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 30px;

    .konwleage-item {
      width: 20%;
      padding: 20px;
      box-sizing: border-box;
      border-radius: 5px;
      background-color: #fff;
      cursor: pointer;
      transition: 0.5s;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

      &:hover{
        transform: translateY(-10px);
      }

      .name{
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      
      .detail{
        font-size: 16px;
        line-height: 1.5;
      }
    }
  }
}
</style>