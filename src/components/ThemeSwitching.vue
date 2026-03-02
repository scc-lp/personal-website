<template>
    <div class="theme-switching-container">
        <label for="switch" class="toggle">
            <input type="checkbox" class="input" id="switch" />
            <div class="icon icon--moon" @click="handleClick('dark')">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <div class="icon icon--sun" @click="handleClick('light')">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z">
                    </path>
                </svg>
            </div>
        </label>
    </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '../stores/theme'

const themeStore = useThemeStore()

function handleClick(theme: string) {
    themeStore.setTheme(theme)
}
</script>

<style scoped>
.toggle {
    /* 将原本的行内样式移到这里，并缩小尺寸 */
    width: 30px;
    height: 30px;
    /* 阴影等比缩小，避免在小按钮上看起来像一坨黑色的脏东西 */
    box-shadow: 0 0 20px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 50%;
    display: grid;
    place-items: center;
    /* 这个属性已经完美保证了里面的内容绝对居中 */
    cursor: pointer;
    line-height: 1;
}

.input {
    display: none;
}

/* 新增：专门控制 SVG 图标的大小 */
.icon {
    color: #000;
    grid-column: 1 / 1;
    grid-row: 1 / 1;
    transition: transform 500ms;
}

.icon svg {
    /* 原本 56px 对应 32px，现在 30px 对应约 17px，这里用 16px 视觉效果最好 */
    width: 16px;
    height: 16px;
    display: block;
    /* 消除 SVG 底部自带的默认空白间隙 */
    fill: currentColor;
}

.icon--moon {
    transition-delay: 200ms;
}

.icon--sun {
    transform: scale(0);
}

#switch:checked+.icon--moon {
    transform: rotate(360deg) scale(0);
}

#switch:checked~.icon--sun {
    transition-delay: 200ms;
    transform: scale(1) rotate(360deg);
}
</style>