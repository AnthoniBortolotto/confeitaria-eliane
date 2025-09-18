import { ref } from 'vue'

export interface Toast {
  id: string
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
  duration?: number
}

const toasts = ref<Toast[]>([])

export function useToast() {
  const removeToast = (id: string) => {
    const index = toasts.value.findIndex((toast) => toast.id === id)
    if (index > -1) {
      toasts.value.splice(index, 1)
    }
  }

  const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast: Toast = {
      id,
      duration: 3000,
      ...toast,
    }

    toasts.value.push(newToast)

    if (newToast.duration && newToast.duration > 0) {
      setTimeout(() => {
        removeToast(id)
      }, newToast.duration)
    }

    return id
  }

  const clearAllToasts = () => {
    toasts.value = []
  }

  const success = (message: string, duration?: number) => {
    return addToast({ message, type: 'success', duration })
  }

  const error = (message: string, duration?: number) => {
    return addToast({ message, type: 'error', duration })
  }

  const warning = (message: string, duration?: number) => {
    return addToast({ message, type: 'warning', duration })
  }

  const info = (message: string, duration?: number) => {
    return addToast({ message, type: 'info', duration })
  }

  return {
    toasts: toasts.value,
    addToast,
    removeToast,
    clearAllToasts,
    success,
    error,
    warning,
    info,
  }
}
