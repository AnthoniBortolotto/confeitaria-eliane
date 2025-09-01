import { PhoneMasks } from '../utils/phoneMask'

export class Lead {
  constructor(
    private readonly _nome: string,
    private readonly _telefone: string,
    private readonly _pedido: string,
    private readonly _quantidade: string,
  ) {}

  get nome(): string {
    return this._nome
  }

  get telefone(): string {
    return this._telefone
  }

  get telefoneNumeros(): string {
    return PhoneMasks.unMaskPhone(this._telefone)
  }

  get pedido(): string {
    return this._pedido
  }

  get quantidade(): string {
    return this._quantidade
  }

  static create(nome: string, telefone: string, pedido: string, quantidade: string): Lead {
    if (!nome || nome.trim().length === 0) {
      throw new Error('Nome é obrigatório')
    }

    if (!telefone || telefone.trim().length === 0) {
      throw new Error('Telefone é obrigatório')
    }

    if (!pedido || pedido.trim().length === 0) {
      throw new Error('Pedido é obrigatório')
    }

    if (!quantidade || quantidade.trim().length === 0) {
      throw new Error('Quantidade é obrigatória')
    }

    return new Lead(nome.trim(), telefone.trim(), pedido.trim(), quantidade.trim())
  }

  toJSON() {
    return {
      nome: this._nome,
      telefone: this._telefone,
      telefoneNumeros: this.telefoneNumeros,
      pedido: this._pedido,
      quantidade: this._quantidade,
    }
  }
}
