/**
 * Interface para serviços de configuração
 * Seguindo o princípio da Inversão de Dependência (DIP)
 */
export interface IConfigService {
  getApiBaseUrl(): string
  get(key: string): string | undefined
}
