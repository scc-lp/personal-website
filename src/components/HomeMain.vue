<template>
    <div class="home-main-container">
        <div class="top-banner">
            <div class="introduce">
                <div class="title">
                    <div class="title-name">你好👋，我叫邵长城</div>
                    <div class="sub-title">
                        一名<span style="color: #FFB400;">前端</span>开发
                    </div>
                </div>
                <div class="info">
                    深耕 Vue.js 生态的前端开发工程师，擅长使用 Vue 3、TypeScript 及 Vite
                    构建高性能响应式应用。具备良好的工程化思维，追求从逻辑实现到视觉平滑的极致体验。热衷于钻研组件化开发与性能优化，能独立负责从页面重构到复杂交互的完整链路。我主张代码的简洁与严谨，致力于在业务挑战中用技术驱动价值提升，打造易用且稳定的数字化产品。
                </div>
            </div>
            <div class="pic">
                <img src="@/assets/1.png" alt="">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.home-main-container {
    width: 100%;
    height: 100%;
    padding: 0 20px;
    box-sizing: border-box;

    .top-banner {
        width: 100%;
        height: 460px;
        background-color: #fff;
        display: flex;
        align-items: center;

        .introduce {
            width: 60%;
            height: 100%;
            padding-left: 80px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .title {
                font-size: 60px;
                font-weight: bold;
                line-height: 1.5;
                margin-bottom: 10px;
            }

            .info {
                color: #767676;
                font-size: 22px;
            }
        }

        .pic{
            flex: 1;
            box-sizing: border-box;
            padding-left: 80px;
            img{
                height: 460px;
            }
        }
    }
}
</style>
