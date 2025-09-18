<script setup lang="ts">
import { useToast, type Toast } from '@/composables/useToast'

defineOptions({
  name: 'ToastNotification',
})

const { toasts, removeToast } = useToast()

const getToastIcon = (type: Toast['type']) => {
  switch (type) {
    case 'success':
      return '✓'
    case 'error':
      return '✕'
    case 'warning':
      return '⚠'
    case 'info':
      return 'ℹ'
    default:
      return 'ℹ'
  }
}

const getToastClass = (type: Toast['type']) => {
  return `toast toast--${type}`
}
</script>

<template>
  <div class="toast-container">
    <TransitionGroup name="toast" tag="div">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        :class="getToastClass(toast.type)"
        @click="removeToast(toast.id)"
      >
        <div class="toast__icon">
          {{ getToastIcon(toast.type) }}
        </div>
        <div class="toast__content">
          <p class="toast__message">{{ toast.message }}</p>
        </div>
        <button
          class="toast__close"
          @click.stop="removeToast(toast.id)"
          aria-label="Fechar notificação"
        >
          ×
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
}

.toast {
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 300px;
  max-width: 400px;
  position: relative;
  overflow: hidden;
}

.toast:hover {
  transform: translateX(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.toast--success {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border-left: 4px solid #047857;
}

.toast--error {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  border-left: 4px solid #b91c1c;
}

.toast--warning {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
  border-left: 4px solid #b45309;
}

.toast--info {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  border-left: 4px solid #1d4ed8;
}

.toast__icon {
  font-size: 20px;
  font-weight: bold;
  margin-right: 12px;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.toast__content {
  flex: 1;
  min-width: 0;
}

.toast__message {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  word-wrap: break-word;
}

.toast__close {
  background: none;
  border: none;
  color: inherit;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  margin-left: 12px;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s ease;
}

.toast__close:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

/* Animações */
.toast-enter-active {
  transition: all 0.3s ease-out;
}

.toast-leave-active {
  transition: all 0.3s ease-in;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.toast-move {
  transition: transform 0.3s ease;
}

/* Responsividade */
@media (max-width: 480px) {
  .toast-container {
    left: 10px;
    right: 10px;
    top: 10px;
  }

  .toast {
    min-width: auto;
    max-width: none;
  }
}
</style>
