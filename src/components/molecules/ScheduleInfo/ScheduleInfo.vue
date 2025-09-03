<template>
  <div class="schedule-info">
    <ScheduleItem v-for="schedule in schedules" :key="schedule.text" :text="schedule.text" />
  </div>
</template>

<script setup lang="ts">
import ScheduleItem from '../../atoms/ScheduleItem/ScheduleItem.vue'

interface Schedule {
  text: string
}

interface Props {
  schedules: Schedule[]
}

defineProps<Props>()
</script>

<style scoped>
.schedule-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
