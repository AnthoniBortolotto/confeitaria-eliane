import { Lead } from '../entities/Lead'

export interface ILeadGateway {
  save(lead: Lead): Promise<void>
}
