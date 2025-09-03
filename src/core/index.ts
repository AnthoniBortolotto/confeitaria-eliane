// Entities
export { Lead } from './entities/Lead'

// Interfaces
export type { ILeadService } from './interfaces/ILeadService'
export type { ILeadRepository } from './interfaces/ILeadRepository'
export type { IConfigService } from './interfaces/IConfigService'

// Use Cases
export { CreateLeadUseCase } from './use-cases/CreateLeadUseCase'

// DTOs
export type { CreateLeadDTO } from './dtos/CreateLeadDTO'
export { CreateLeadDTOValidator, CreateLeadErrorsDTO } from './dtos/CreateLeadDTO'

// Infrastructure
export { HttpLeadRepository } from './infrastructure/HttpLeadRepository'
export { HttpLeadGateway } from './infrastructure/HttpLeadGateway'

// Config
export { AppConfig } from './config/AppConfig'

// Utils
export { PhoneMasks } from './utils/phoneMask'
