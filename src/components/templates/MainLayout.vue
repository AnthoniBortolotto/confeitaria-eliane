<script setup lang="ts">
import AboutSection from '../organisms/AboutSection/AboutSection.vue'
import Banner from '../organisms/Banner/Banner.vue'
import LeadForm from '../organisms/LeadForm/LeadForm.vue'
import SiteFooter from '../organisms/Footer/SiteFooter.vue'
import ToastNotification from '../atoms/ToastNotification/ToastNotification.vue'

interface Props {
  ofertaSemana: string
  bannerImage: string
}

defineProps<Props>()
</script>

<template>
  <main class="main-layout">
    <Banner
      :background-image="bannerImage"
      title="Oferta da Semana"
      :subtitle="ofertaSemana"
      height="400px"
    />

    <LeadForm :oferta-semana="ofertaSemana" />

    <AboutSection />

    <SiteFooter />

    <ToastNotification />
  </main>
</template>

<style scoped>
.main-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  padding: 2rem;
  padding-bottom: 0;
  flex: 1;
}
</style>
