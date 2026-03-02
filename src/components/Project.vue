<template>
    <div class="project-container">
        <div class="title">项目经验</div>
        <div class="subTitle">
            仅展示深度完整参与的项目
        </div>
        <div class="project-box">
            <div class="project-item" v-for="item in projectList" :key="item.name">
                <div class="name">{{ item.name }}</div>
                <div class="description">{{ item.description }}</div>
                <div class="techStack-container">
                    <div class="techStack" v-for="tech in item.techStack" :key="tech">{{ tech }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import projectList from '@/data/project';
</script>

<style scoped lang="scss">
.project-container {
    padding: 0 20px;
    width: 100%;
    height: 100px;
    box-sizing: border-box;

    .title {
        font-size: 30px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 10px;
    }

    .subTitle {
        font-size: 16px;
        font-weight: 400;
        text-align: center;
        color: #767676;
    }

    .project-box {
        margin-top: 30px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 2%;

        .project-item {
            width: 32%;
            box-sizing: border-box;
            padding: 20px;
            background-color: #fff;
            margin-bottom: 30px;
            position: relative;

            .name {
                font-size: 20px;
                font-weight: bold;
                margin-bottom: 10px;
            }

            .description {
                font-size: 16px;
                font-weight: 400;
                color: #767676;
                margin-bottom: 20px;
                height: 150px;
            }

            .techStack-container {
                display: flex;
                position: absolute;
                bottom: 20px;

                .techStack {
                    font-size: 16px;
                    font-weight: 400;
                    margin-right: 5px;
                    background-color: #FFB400;
                    padding: 5px 10px;
                    border-radius: 5px;
                }
            }
        }
    }
}
</style>