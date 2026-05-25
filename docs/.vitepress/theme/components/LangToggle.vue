<script setup>
import { useRoute, useRouter } from 'vitepress'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()

// detect language from current path
const isPT = computed(() => route.path.startsWith('/pt'))

function toggleLang() {
  const newPath = isPT.value
    ? route.path.replace(/^\/pt/, '') || '/'
    : `/pt${route.path}`

  router.go(newPath)
}
</script>

<template>
  <button class="switch" @click="toggleLang">
    <div class="track">
      <div class="thumb" :class="{ right: isPT }">
        <span class="lang">
        {{ isPT ? 'PT' : 'EN' }}
        </span>
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

.track {
  width: 52px;
  height: 24px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  position: relative;
}

.thumb {
  width: 20px;
  height: 20px;
  background: rgb(0, 0, 0);
  border-radius: 50%;
  position: absolute;
  left: 2px;
  top: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s ease;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
}

.thumb.right {
  transform: translateX(26px);
}

.flag {
  font-size: 14px;
}
</style>