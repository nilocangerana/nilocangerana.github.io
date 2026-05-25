<script setup>
import { useData } from 'vitepress'

const { isDark } = useData()

function toggle() {
  isDark.value = !isDark.value
}
</script>

<template>
  <button class="switch" @click="toggle" :aria-pressed="isDark">
    <div class="track">
      <div class="thumb" :class="{ dark: isDark }">
        <span class="icon">{{ isDark ? '🌙' : '☀️' }}</span>
      </div>
    </div>
  </button>
</template>

<style scoped>
.switch {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
}

/* outer track */
.track {
  width: 46px;
  height: 24px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  position: relative;
  display: flex;
  align-items: center;
}

/* moving knob */
.thumb {
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  position: absolute;
  left: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s ease;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
}

/* when dark mode is active → slide right */
.thumb.dark {
  transform: translateX(22px);
}

.icon {
  font-size: 12px;
  line-height: 1;
}
</style>