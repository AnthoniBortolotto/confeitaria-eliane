export interface CreateLeadDTO {
  nome: string
  telefone: string
  pedido: string
  quantidade: string
}

export class CreateLeadErrorsDTO {
  nome: string = ''
  telefone: string = ''
  pedido: string = ''
  quantidade: string = ''

  static create(): CreateLeadErrorsDTO {
    return new CreateLeadErrorsDTO()
  }
}

export class CreateLeadDTOValidator {
  static validate(dto: CreateLeadDTO): { isValid: boolean; errors: string[] } {
    const errors: string[] = []

    if (!dto.nome || dto.nome.trim().length === 0) {
      errors.push('Nome é obrigatório')
    }

    if (!dto.telefone || dto.telefone.trim().length === 0) {
      errors.push('Telefone é obrigatório')
    }

    if (!dto.pedido || dto.pedido.trim().length === 0) {
      errors.push('Pedido é obrigatório')
    }

    if (!dto.quantidade || dto.quantidade.trim().length === 0) {
      errors.push('Quantidade é obrigatória')
    }

    return {
      isValid: errors.length === 0,
      errors,
    }
  }

  static validateAll(dto: CreateLeadDTO): { isValid: boolean; errors: CreateLeadErrorsDTO } {
    const errors = CreateLeadErrorsDTO.create()

    errors.nome = this.validateNome(dto.nome)
    errors.telefone = this.validateTelefone(dto.telefone)
    errors.pedido = this.validatePedido(dto.pedido)
    errors.quantidade = this.validateQuantidade(dto.quantidade)

    const hasErrors = Object.values(errors).some((error) => error !== '')

    return {
      isValid: !hasErrors,
      errors,
    }
  }

  static validateNome(nome: string): string {
    if (!nome || nome.trim().length === 0) {
      return 'Nome é obrigatório'
    }
    return ''
  }

  static validateTelefone(telefone: string): string {
    if (!telefone || telefone.trim().length === 0) {
      return 'Telefone é obrigatório'
    }
    return ''
  }

  static validatePedido(pedido: string): string {
    if (!pedido || pedido.trim().length === 0) {
      return 'Pedido é obrigatório'
    }
    return ''
  }

  static validateQuantidade(quantidade: string): string {
    if (!quantidade || quantidade.trim().length === 0) {
      return 'Quantidade é obrigatória'
    }
    return ''
  }
}
