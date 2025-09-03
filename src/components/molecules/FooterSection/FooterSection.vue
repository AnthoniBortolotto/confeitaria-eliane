<template>
  <div class="footer-section">
    <h3 v-if="title" class="footer-title">{{ title }}</h3>
    <h4 v-if="subtitle" class="footer-subtitle">{{ subtitle }}</h4>
    <p v-if="description" class="footer-description">{{ description }}</p>
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
  description?: string
}

defineProps<Props>()
</script>

<style scoped>
.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #f8f9fa;
}

.footer-subtitle {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #e9ecef;
}

.footer-description {
  line-height: 1.6;
  color: #adb5bd;
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .footer-title {
    font-size: 1.3rem;
  }

  .footer-subtitle {
    font-size: 1rem;
  }
}
</style>
