<script setup lang="ts">
import BaseTitle from '../atoms/BaseTitle.vue'
import BaseText from '../atoms/BaseText.vue'

interface Props {
  title: string
  subtitle: string
}

defineProps<Props>()
</script>

<template>
  <div class="banner-content">
    <BaseTitle :level="1" size="xl" color="white" class="banner-title">
      {{ title }}
    </BaseTitle>
    <BaseText size="large" fontWeight="bold" color="white" class="banner-offer">
      {{ subtitle }}
    </BaseText>
  </div>
</template>

<style scoped>
.banner-content {
  text-align: center;
  padding: 20px;
}

.banner-title {
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.banner-offer {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  background: rgba(255, 255, 255, 0.2);
  padding: 10px 20px;
  border-radius: 25px;
  backdrop-filter: blur(10px);
  display: inline-block;
}
</style>
