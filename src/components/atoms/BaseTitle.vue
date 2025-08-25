<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  size?: 'small' | 'medium' | 'large' | 'xl'
  color?: 'primary' | 'secondary' | 'white' | 'dark'
}

const props = withDefaults(defineProps<Props>(), {
  level: 1,
  size: 'large',
  color: 'white',
})

const tagName = computed(() => `h${props.level}`)
</script>

<template>
  <component :is="tagName" :class="['base-title', `base-title--${size}`, `base-title--${color}`]">
    <slot />
  </component>
</template>

<style scoped>
.base-title {
  margin: 0;
  font-weight: bold;
  line-height: 1.2;
}

.base-title--small {
  font-size: 1.5rem;
}

.base-title--medium {
  font-size: 2rem;
}

.base-title--large {
  font-size: 2.5rem;
}

.base-title--xl {
  font-size: 3rem;
}

.base-title--primary {
  color: #e91e63;
}

.base-title--secondary {
  color: #ff9800;
}

.base-title--white {
  color: white;
}

.base-title--dark {
  color: #333;
}
</style>
