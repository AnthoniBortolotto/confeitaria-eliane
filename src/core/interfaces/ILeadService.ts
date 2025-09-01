import { Lead } from '../entities/Lead'

export interface ILeadService {
  createLead(lead: Lead): Promise<void>
}
