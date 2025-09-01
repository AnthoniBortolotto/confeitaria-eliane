<script setup lang="ts">
interface Props {
  size?: 'small' | 'medium' | 'large'
  fontWeight?: 'normal' | 'medium' | 'bold'
  color?: 'primary' | 'secondary' | 'white' | 'dark'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
  fontWeight: 'normal',
  color: 'white',
})
</script>

<template>
  <p
    :class="[
      'base-text',
      `base-text--${props.size}`,
      `base-text--${props.fontWeight}`,
      `base-text--${props.color}`,
    ]"
  >
    <slot />
  </p>
</template>

<style scoped>
.base-text {
  margin: 0;
  line-height: 1.5;
}

.base-text--small {
  font-size: 1rem;
}

.base-text--medium {
  font-size: 1.25rem;
}

.base-text--large {
  font-size: 1.5rem;
}

.base-text--normal {
  font-weight: 400;
}

.base-text--medium {
  font-weight: 500;
}

.base-text--bold {
  font-weight: 600;
}

.base-text--primary {
  color: #e91e63;
}

.base-text--secondary {
  color: #ff9800;
}

.base-text--white {
  color: white;
}

.base-text--dark {
  color: #333;
}
</style>
