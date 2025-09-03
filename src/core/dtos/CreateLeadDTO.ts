import { nameRegex, quantityRegex, phoneRegex } from '../utils/regex'

export interface CreateLeadDTO {
  nome: string
  telefone: string
  pedido: string
  quantidade: string
  dataHoraColeta: string
}

export class CreateLeadErrorsDTO {
  nome: string = ''
  telefone: string = ''
  pedido: string = ''
  quantidade: string = ''
  dataHoraColeta: string = ''

  static create(): CreateLeadErrorsDTO {
    return new CreateLeadErrorsDTO()
  }
}

export class CreateLeadDTOValidator {
  static validateAll(dto: CreateLeadDTO): { isValid: boolean; errors: CreateLeadErrorsDTO } {
    const errors = CreateLeadErrorsDTO.create()

    errors.nome = this.validateNome(dto.nome)
    errors.telefone = this.validateTelefone(dto.telefone)
    errors.pedido = this.validatePedido(dto.pedido)
    errors.quantidade = this.validateQuantidade(dto.quantidade)
    errors.dataHoraColeta = this.validateDataHoraColeta(dto.dataHoraColeta)

    const hasErrors = Object.values(errors).some((error) => error !== '')

    return {
      isValid: !hasErrors,
      errors,
    }
  }

  static validateNome(nome: string): string {
    if (!nome.trim()) {
      return 'Nome é obrigatório'
    }
    if (!nameRegex.test(nome)) {
      return 'Nome inválido'
    }
    return ''
  }

  static validateTelefone(telefone: string): string {
    if (!telefone.trim()) {
      return 'Telefone é obrigatório'
    }
    if (!phoneRegex.test(telefone)) {
      return 'Telefone inválido'
    }
    return ''
  }

  static validatePedido(pedido: string): string {
    if (!pedido.trim()) {
      return 'Pedido é obrigatório'
    }

    return ''
  }

  static validateQuantidade(quantidade: string): string {
    if (!quantidade.trim()) {
      return 'Quantidade é obrigatória'
    }
    if (!quantityRegex.test(quantidade)) {
      return 'Quantidade inválida'
    }
    return ''
  }

  static validateDataHoraColeta(dataHoraColeta: string): string {
    if (!dataHoraColeta.trim()) {
      return 'Data e hora da coleta são obrigatórias'
    }

    const dateTime = new Date(dataHoraColeta)
    const now = new Date()

    if (isNaN(dateTime.getTime())) {
      return 'Data e hora inválidas'
    }

    if (dateTime <= now) {
      return 'A data e hora devem ser futuras'
    }

    const oneMonthFromNow = new Date()
    oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1)
    if (dateTime > oneMonthFromNow) {
      return 'A data não pode ser mais de 1 mês no futuro'
    }

    return ''
  }
}
