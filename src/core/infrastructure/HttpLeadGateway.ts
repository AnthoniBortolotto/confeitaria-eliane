import type { ILeadGateway } from '../interfaces/ILeadGateway'
import { Lead } from '../entities/Lead'

export class HttpLeadGateway implements ILeadGateway {
  //Refatorar depois
  constructor(private readonly apiUrl: string) {}

  async save(lead: Lead): Promise<void> {
    try {
      const response = await fetch(`${this.apiUrl}/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(lead.toJSON()),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
    } catch (error) {
      throw new Error(
        `Erro ao salvar lead: ${error instanceof Error ? error.message : 'Erro desconhecido'}`,
      )
    }
  }
}
