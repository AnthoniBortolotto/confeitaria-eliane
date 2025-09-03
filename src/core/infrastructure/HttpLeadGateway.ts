import type { ILeadGateway } from '../interfaces/ILeadGateway'
import type { IConfigService } from '../interfaces/IConfigService'
import { Lead } from '../entities/Lead'

export class HttpLeadGateway implements ILeadGateway {
  constructor(private readonly configService: IConfigService) {}

  async save(lead: Lead): Promise<void> {
    try {
      const response = await fetch(`${this.configService.getApiBaseUrl()}/leads`, {
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
