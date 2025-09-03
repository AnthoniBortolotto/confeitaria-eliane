import type { IConfigService } from '../interfaces/IConfigService'

/**
 * Configuração da aplicação seguindo os princípios SOLID
 * Responsabilidade única: gerenciar configurações da aplicação
 * Aberto para extensão, fechado para modificação
 */
export class AppConfig implements IConfigService {
  private static instance: AppConfig
  private readonly config: Record<string, string>

  private constructor() {
    this.config = {
      apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'https://api.exemplo.com',
    }
  }

  /**
   * Singleton pattern para garantir uma única instância de configuração
   */
  static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig()
    }
    return AppConfig.instance
  }

  /**
   * Obtém a URL base da API
   */
  getApiBaseUrl(): string {
    return this.config.apiBaseUrl
  }

  /**
   * Obtém uma configuração específica
   */
  get(key: string): string | undefined {
    return this.config[key]
  }

  /**
   * Obtém todas as configurações (para debug)
   */
  getAll(): Record<string, string> {
    return { ...this.config }
  }
}
