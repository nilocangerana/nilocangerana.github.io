<template>
  <div class="section">
    <div class="header" @click="isOpen = !isOpen">
      <span class="arrow" :class="{ open: isOpen }">▶</span>
      {{ title }}
    </div>

    <div v-show="isOpen" class="content">
      <div class="inner">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  title: String
})

const isOpen = ref(false)
</script>

<style scoped>
.section {
  border: 2px solid #485357;
  margin-bottom: 10px;
  border-radius: 12px;
  overflow: hidden;
  background: #111;
}

.header {
  padding: 15px;
  background: #263f49;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ddd;
}

.header:hover {
  background: #385864;
}

.arrow {
  transition: transform 0.2s ease;
  color: #aaa;
}

.arrow.open {
  transform: rotate(90deg);
}

.content {
  background: #1f333b;
}

.inner {
  padding: 15px;
  color: #ccc;
  font-family: monospace;
}

:deep(.header-anchor) {
  display: none !important;
}

.inner :deep(hr) {
  border: none;
  height: 1px;
  background-color: #485357;
  margin: 12px 0;
}

.inner :deep(h2) {
  border-top: none !important;
  padding-top: 0 !important;
  margin-top: 0 !important;
}

/* markdown tweaks */
.inner h2, .inner h3 {
  margin-top: 10px;
  color: #eee;
}

.inner p {
  margin: 6px 0;
}

.inner li {
  margin: 4px 0;
}

.inner :deep(video) {
  width: 50%;
  border-radius: 10px;
  display: block;
}

.inner :deep(.video-full) {
  width: 80%;
  border-radius: 10px;
  display: block;
  margin: 0 auto;
  margin-bottom: 16px;
}

.inner :deep(.video-row) {
  display: flex;
  gap: 16px;
}

.inner :deep(.video-row video) {
  flex: 1;
  border-radius: 8px;
}

.inner :deep(img) {
  padding: 6px;
  margin: 6px;
  border-radius: 8px;
  transition: transform 0.2s ease;
  cursor: pointer;
}

.inner :deep(img:hover) {
  transform: scale(1.05);
}

</style>
