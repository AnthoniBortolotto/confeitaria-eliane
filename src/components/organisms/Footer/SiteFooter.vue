<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-content">
        <FooterSection
          title="Confeitaria Eliane"
          description="Doces artesanais feitos com amor e ingredientes de qualidade para tornar seus momentos mais especiais."
        />

        <FooterSection subtitle="Contato">
          <ContactInfo :contacts="contactData" />
        </FooterSection>

        <FooterSection subtitle="Horário de Funcionamento">
          <ScheduleInfo :schedules="scheduleData" />
        </FooterSection>
      </div>

      <FooterBottom />
    </div>
  </footer>
</template>

<script setup lang="ts">
import FooterSection from '../../molecules/FooterSection/FooterSection.vue'
import ContactInfo from '../../molecules/ContactInfo/ContactInfo.vue'
import ScheduleInfo from '../../molecules/ScheduleInfo/ScheduleInfo.vue'
import FooterBottom from '../../molecules/FooterBottom/FooterBottom.vue'

const contactData = [
  { icon: '/icons/whatsapp.svg', text: '(49) 984133347' },
  { icon: '/icons/email.svg', text: 'eliane@gmail.com' },
  { icon: '/icons/place.svg', text: 'Jardinópolis, SC' },
]

const scheduleData = [
  { text: 'Segunda a Sexta: 17h às 20h' },
  { text: 'Sábado: 10h às 14h' },
  { text: 'Domingo: 10h às 14h' },
]
</script>

<style scoped>
.site-footer {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  padding: 3rem 0 1rem;
  margin-top: auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .site-footer {
    padding: 2rem 0 1rem;
  }

  .container {
    padding: 0 1rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
