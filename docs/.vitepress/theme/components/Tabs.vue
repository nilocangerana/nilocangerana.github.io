<script setup>
import { ref } from 'vue'

const tab = ref('one')
</script>

<template>
  <div>
    <div class="tabs">
      <button @click="tab = 'one'">Overview</button>
      <button @click="tab = 'two'">Gameplay</button>
      <button @click="tab = 'three'">Systems</button>
    </div>

    <div v-if="tab === 'one'">
      <slot name="one" />
    </div>

    <div v-if="tab === 'two'">
      <slot name="two" />
    </div>

    <div v-if="tab === 'three'">
      <slot name="three" />
    </div>
  </div>
</template>