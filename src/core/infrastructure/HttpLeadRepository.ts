import type { ILeadRepository } from '../interfaces/ILeadRepository'
import { Lead } from '../entities/Lead'

export class HttpLeadRepository implements ILeadRepository {
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
