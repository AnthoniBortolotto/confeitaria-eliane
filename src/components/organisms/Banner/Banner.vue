<script setup lang="ts">
import BannerContent from '@/components/molecules/BannerContent/BannerContent.vue'

defineOptions({
  name: 'WeeklyBanner',
})

interface Props {
  backgroundImage: string
  title: string
  subtitle: string
  height?: string
}

const props = withDefaults(defineProps<Props>(), {
  height: '400px',
})
</script>

<template>
  <div class="banner-container">
    <div
      class="banner"
      :style="{ height: props.height, backgroundImage: `url(${backgroundImage})` }"
    >
      <div class="banner-overlay"></div>
      <div class="banner-content">
        <BannerContent :title="title" :subtitle="subtitle" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-container {
  width: 100%;
  margin: 0;
  padding: 0;
}

.banner {
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.banner-content {
  position: relative;
  z-index: 2;
}
</style>
