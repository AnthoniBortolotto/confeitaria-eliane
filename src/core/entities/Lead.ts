import { PhoneMasks } from '../utils/phoneMask'
import type { CreateLeadDTO } from '../dtos/CreateLeadDTO'

export class Lead {
  constructor(
    private readonly _nome: string,
    private readonly _telefone: string,
    private readonly _pedido: string,
    private readonly _quantidade: string,
    private readonly _dataHoraColeta: string,
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

  get dataHoraColeta(): string {
    return this._dataHoraColeta
  }

  static create(dto: CreateLeadDTO): Lead {
    return new Lead(
      dto.nome.trim(),
      dto.telefone.trim(),
      dto.pedido.trim(),
      dto.quantidade.trim(),
      dto.dataHoraColeta.trim(),
    )
  }

  toJSON() {
    return {
      nome: this._nome,
      telefone: this._telefone,
      telefoneNumeros: this.telefoneNumeros,
      pedido: this._pedido,
      quantidade: this._quantidade,
      dataHoraColeta: this._dataHoraColeta,
    }
  }
}
