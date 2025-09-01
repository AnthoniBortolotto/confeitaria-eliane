<script setup lang="ts">
import { ref } from 'vue'
import MainLayout from './components/templates/MainLayout.vue'

const ofertaSemana = ref('bombom de morango')
const bannerImage = ref('./banner-bombom-de-morango.jpg')
</script>

<template>
  <MainLayout :oferta-semana="ofertaSemana" :banner-image="bannerImage"> </MainLayout>
</template>

<style scoped></style>
