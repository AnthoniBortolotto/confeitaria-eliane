<template>
  <p class="schedule-item">{{ text }}</p>
</template>

<script setup lang="ts">
interface Props {
  text: string
}

defineProps<Props>()
</script>

<style scoped>
.schedule-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #adb5bd;
  margin: 0;
}
</style>
