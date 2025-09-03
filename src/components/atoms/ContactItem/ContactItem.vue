<template>
  <p class="contact-item">
    <img class="contact-icon" :src="icon" />
    {{ text }}
  </p>
</template>

<script setup lang="ts">
interface Props {
  icon: string
  text: string
}

defineProps<Props>()
</script>

<style scoped>
.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #adb5bd;
  margin: 0;
}

.contact-icon {
  width: 20px;
  text-align: center;
  filter: brightness(0) invert(1);
}
</style>
