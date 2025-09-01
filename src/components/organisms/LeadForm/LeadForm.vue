<script setup lang="ts">
import { ref, reactive } from 'vue'
import {
  Lead,
  type CreateLeadDTO,
  CreateLeadDTOValidator,
  CreateLeadUseCase,
  PhoneMasks,
} from '@/core'
import { HttpLeadGateway } from '@/core/infrastructure/HttpLeadGateway'
import { CreateLeadErrorsDTO } from '@/core/dtos/CreateLeadDTO'

interface Props {
  apiUrl?: string
  ofertaSemana: string
}

const props = withDefaults(defineProps<Props>(), {
  apiUrl: 'https://api.exemplo.com',
})

const emit = defineEmits<{
  success: []
  error: CreateLeadErrorsDTO
}>()

const isLoading = ref(false)
const formData = reactive<CreateLeadDTO>({
  nome: '',
  telefone: '',
  pedido: props.ofertaSemana,
  quantidade: '',
})

const errors = ref<CreateLeadErrorsDTO>(CreateLeadErrorsDTO.create())

async function handleSubmit() {
  isLoading.value = true

  try {
    const validationResult = CreateLeadDTOValidator.validateAll(formData)
    if (!validationResult.isValid) {
      errors.value = validationResult.errors
      return
    }

    const lead = Lead.create(formData.nome, formData.telefone, formData.pedido, formData.quantidade)

    const leadRepository = new HttpLeadGateway(props.apiUrl)
    const createLeadUseCase = new CreateLeadUseCase(leadRepository)

    await createLeadUseCase.createLead(lead)

    // Submit success, reset form
    Object.assign(formData, {
      nome: '',
      telefone: '',
      quantidade: '',
    })

    emit('success')
  } catch {
    //Implement default error message
  } finally {
    isLoading.value = false
  }
}

function hasFieldError(field: keyof CreateLeadErrorsDTO) {
  return !!errors.value[field]
}

function handleFieldBlur(field: keyof CreateLeadErrorsDTO) {
  if (field === 'nome') {
    errors.value.nome = CreateLeadDTOValidator.validateNome(formData.nome)
  }
  if (field === 'telefone') {
    errors.value.telefone = CreateLeadDTOValidator.validateTelefone(formData.telefone)
  }
  if (field === 'pedido') {
    errors.value.pedido = CreateLeadDTOValidator.validatePedido(formData.pedido)
  }
  if (field === 'quantidade') {
    errors.value.quantidade = CreateLeadDTOValidator.validateQuantidade(formData.quantidade)
  }
}

function handlePhoneInput(event: Event) {
  const target = event.target as HTMLInputElement
  const value = target.value

  formData.telefone = PhoneMasks.phone(value)
}

function handlePhoneKeydown(event: KeyboardEvent) {
  const allowedKeys = [
    'Backspace',
    'Delete',
    'Tab',
    'Escape',
    'Enter',
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp',
    'ArrowDown',
  ]
  const isNumber = /^[0-9]$/.test(event.key)

  if (!isNumber && !allowedKeys.includes(event.key)) {
    event.preventDefault()
  }
}
</script>

<template>
  <section class="lead-form-section">
    <div class="container">
      <div class="form-header">
        <h2>Faça seu Pedido</h2>
        <p>Preencha o formulário abaixo e entraremos em contato para confirmar seu pedido</p>
      </div>

      <form @submit.prevent="handleSubmit" class="lead-form">
        <div class="form-row">
          <div class="form-group">
            <label for="nome" class="form-label">Nome Completo *</label>
            <input
              id="nome"
              v-model="formData.nome"
              type="text"
              class="form-input"
              :class="{ error: hasFieldError('nome') }"
              @blur="handleFieldBlur('nome')"
              placeholder="Digite seu nome completo"
              required
            />
            <span v-if="hasFieldError('nome')" class="error-message">
              {{ errors.nome }}
            </span>
          </div>

          <div class="form-group">
            <label for="telefone" class="form-label">Telefone *</label>
            <input
              id="telefone"
              v-model="formData.telefone"
              type="tel"
              class="form-input"
              :class="{ error: hasFieldError('telefone') }"
              @input="handlePhoneInput"
              @keydown="handlePhoneKeydown"
              @blur="handleFieldBlur('telefone')"
              placeholder="(11) 99999-9999"
              maxlength="15"
              required
            />
            <span v-if="hasFieldError('telefone')" class="error-message">
              {{ errors.telefone }}
            </span>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="quantidade" class="form-label">Quantidade *</label>
            <input
              id="quantidade"
              v-model="formData.quantidade"
              type="text"
              class="form-input"
              :class="{ error: hasFieldError('quantidade') }"
              @blur="handleFieldBlur('quantidade')"
              placeholder="Ex: 3 unidades, 2 quilos, etc."
              required
            />
            <span v-if="hasFieldError('quantidade')" class="error-message">
              {{ errors.quantidade }}
            </span>
          </div>
        </div>

        <div class="form-actions">
          <button type="submit" class="submit-button" :disabled="isLoading">
            <span v-if="isLoading">Enviando...</span>
            <span v-else>Enviar Pedido</span>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.lead-form-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.form-header {
  text-align: center;
  margin-bottom: 3rem;
}

.form-header h2 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 600;
}

.form-header p {
  font-size: 1.1rem;
  color: #6c757d;
  line-height: 1.6;
}

.lead-form {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.form-input {
  padding: 0.75rem 1rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #f8f9fa;
}

.form-input:focus {
  outline: none;
  border-color: #007bff;
  background: white;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

.form-input.error {
  border-color: #dc3545;
  background: #fff5f5;
}

.form-input.error:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
}

.error-message {
  color: #dc3545;
  font-size: 0.85rem;
  margin-top: 0.25rem;
  font-weight: 500;
}

.form-actions {
  text-align: center;
  margin-top: 2rem;
}

.submit-button {
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 200px;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 123, 255, 0.3);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.form-errors {
  margin-top: 1.5rem;
  padding: 1rem;
  background: #fff5f5;
  border: 1px solid #fed7d7;
  border-radius: 8px;
}

.form-errors ul {
  margin: 0;
  padding-left: 1.5rem;
}

.error-item {
  color: #c53030;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

.error-item:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .lead-form {
    padding: 1.5rem;
  }

  .container {
    padding: 0 1rem;
  }

  .form-header h2 {
    font-size: 2rem;
  }
}
</style>
