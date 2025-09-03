<template>
  <div class="footer-bottom">
    <FooterDivider />
    <p class="copyright">© {{ currentYear }} Confeitaria Eliane. Todos os direitos reservados.</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import FooterDivider from '../../atoms/FooterDivider/FooterDivider.vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer-bottom {
  text-align: center;
}

.copyright {
  color: #6c757d;
  font-size: 0.9rem;
  margin: 0;
}
</style>
