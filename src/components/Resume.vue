<template>
  <div class="resume-container">
    <div class="personalProfile">
      <div class="avatar">
        <img src="@/assets/1.png" alt="">
      </div>
      <div class="name">邵长城</div>
      <div class="work">前端开发</div>
      <div class="link">
        <div v-for="item in linkList" :key="item.name" class="link-item">
          <el-tooltip class="box-item" effect="dark" :content="item.content" placement="top">
            <img :src="item.iconLight" alt="">
          </el-tooltip>
        </div>
      </div>
    </div>
    <div class="info">
      <div v-for="(item, index) in personInfo" :key="index" class="info-item">
        <div class="info-item__key">{{ item.key }}</div>
        <div class="info-item__value">{{ item.value }}</div>
      </div>
    </div>
    <div class="skillTag">
      <div class="skillTitle">技能标签</div>
      <div v-for="(item, index) in skills" :key="index" class="skillTag__item">{{ item }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { linkList, personInfo, skills } from '@/data/personInfo';
</script>

<style scoped lang="scss">
.resume-container {
  width: 305px;
  height: 100%;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;

  .personalProfile {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-bottom: 2px solid #F0F0F6;
    padding-bottom: 30px;
    margin-bottom: 30px;

    .avatar {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      display: block;
      background-color: #f5f5f5;
      overflow: hidden;
      padding-top: 15px;
      padding-left: 5px;
      box-sizing: border-box;
      margin-bottom: 20px;

      img {
        width: 150px;
      }
    }

    .name {
      font-size: 24px;
      font-weight: bold;
    }

    .work {
      font-size: 18px;
      margin: 15px 0;
    }

    .link {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;

      .link-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        background-color: #FFB400;
        border-radius: 50%;
        cursor: pointer;

        img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .info {
    font-size: 16px;
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: 2px solid #F0F0F6;

    .info-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;

      &__key {
        background-color: #FFB400;
        padding: 0 5px;
      }
    }
  }

  .skillTag{
    font-size: 16px;

    .skillTitle{
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .skillTag__item{
      display: inline-block;
      background-color: #FFB400;
      padding: 0 5px;
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
}
</style>
