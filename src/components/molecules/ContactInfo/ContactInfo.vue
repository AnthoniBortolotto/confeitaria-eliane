<template>
  <div class="contact-info">
    <ContactItem
      v-for="contact in contacts"
      :key="contact.text"
      :icon="contact.icon"
      :text="contact.text"
    />
  </div>
</template>

<script setup lang="ts">
import ContactItem from '../../atoms/ContactItem/ContactItem.vue'

interface Contact {
  icon: string
  text: string
}

interface Props {
  contacts: Contact[]
}

defineProps<Props>()
</script>

<style scoped>
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
