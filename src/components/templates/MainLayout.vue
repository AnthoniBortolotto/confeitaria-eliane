<script setup lang="ts">
import AboutSection from '../organisms/AboutSection/AboutSection.vue'
import Banner from '../organisms/Banner/Banner.vue'
import LeadForm from '../organisms/LeadForm/LeadForm.vue'
import SiteFooter from '../organisms/Footer/SiteFooter.vue'

interface Props {
  ofertaSemana: string
  bannerImage: string
}

defineProps<Props>()
</script>

<template>
  <div class="main-layout">
    <Banner
      :background-image="bannerImage"
      title="Oferta da Semana"
      :subtitle="ofertaSemana"
      height="400px"
    />

    <LeadForm :oferta-semana="ofertaSemana" />

    <AboutSection />

    <main class="main-content">
      <slot />
    </main>

    <SiteFooter />
  </div>
</template>

<style scoped>
.main-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  padding: 2rem;
  flex: 1;
}
</style>
