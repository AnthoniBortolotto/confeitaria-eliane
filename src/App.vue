<script setup lang="ts">
import { ref } from 'vue'
import MainLayout from './components/templates/MainLayout.vue'

const ofertaSemana = ref('Donuts')
const bannerImage = ref('./banner-donut.jpg')
</script>

<template>
  <MainLayout :oferta-semana="ofertaSemana" :banner-image="bannerImage"> </MainLayout>
</template>

<style scoped></style>
