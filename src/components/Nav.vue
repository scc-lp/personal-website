<template>
  <div class="nav-container">
    <ThemeSwitching class="ThemeSwitching" />
    <div class="nav-item">
      <div v-for="item in navList" :key="item.name" class="nav-item__item"
        :class="{ 'nav-item__item--active': item.name === activeItem }" @mouseenter="showTooltip(item.name)"
        @mouseleave="hideTooltip(item.name)" @click="handleClick(item.name)">
        <el-tooltip effect="dark" placement="top" manual :visible="visibleTooltips[item.name]" :show-after="500">
          <template #content>
            <span>{{ item.name }}</span>
          </template>
          <img :src="isDark ? item.iconDark : item.iconLight" :alt="item.name" class="nav-item__icon" />
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import navList from '@/data/nav.ts';
import ThemeSwitching from './ThemeSwitching.vue';
import { useThemeStore } from '@/stores/theme';
import { computed, ref } from 'vue';

const themeStore = useThemeStore();
const isDark = computed(() => themeStore.isDark);
const activeItem = ref<string>('');

const visibleTooltips = ref<Record<string, boolean>>({});
const tooltipTimers = ref<Record<string, number>>({});

function showTooltip(name: string) {
  // 清除之前的定时器
  if (tooltipTimers.value[name]) {
    clearTimeout(tooltipTimers.value[name]);
  }
  // 设置1.5秒延迟
  tooltipTimers.value[name] = window.setTimeout(() => {
    visibleTooltips.value[name] = true;
  }, 500);
}

function hideTooltip(name: string) {
  // 清除定时器
  if (tooltipTimers.value[name]) {
    clearTimeout(tooltipTimers.value[name]);
    delete tooltipTimers.value[name];
  }
  visibleTooltips.value[name] = false;
}

function handleClick(name: string) {
  activeItem.value = name;
}
</script>

<style scoped lang="scss">
.nav-container {
  width: 108px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--nav-bg);

  .ThemeSwitching {
    margin-top: 50px;
  }
}

.nav-item {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  &__item {
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #F0F0F6;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  &__item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &__item--active {
    background-color: #FFB400;
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(255, 180, 0, 0.4);
  }

  &__item--active::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    animation: ripple 0.6s ease-out;
  }

  &__icon {
    width: 24px;
    height: 24px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
  }

  &__item--active .nav-item__icon {
    transform: scale(1.15);
  }

  &__name {
    font-size: 14px;
    color: var(--text-color);
  }
}

@keyframes ripple {
  0% {
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    width: 100px;
    height: 100px;
    opacity: 0;
  }
}
</style>
