import { Lead } from '../entities/Lead'
import type { ILeadService } from '../interfaces/ILeadService'
import type { ILeadRepository } from '../interfaces/ILeadRepository'

export class CreateLeadUseCase implements ILeadService {
  constructor(private readonly leadRepository: ILeadRepository) {}

  async createLead(lead: Lead): Promise<void> {
    try {
      await this.leadRepository.save(lead)
    } catch (error) {
      throw new Error(
        `Erro ao criar lead: ${error instanceof Error ? error.message : 'Erro desconhecido'}`,
      )
    }
  }
}
