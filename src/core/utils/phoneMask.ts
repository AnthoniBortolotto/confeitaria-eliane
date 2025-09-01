export class PhoneMasks {
  /**
   * Aplica máscara de telefone no formato (99) 999999999
   * @param value - Valor a ser formatado (apenas números)
   * @returns Valor formatado
   */
  static phone(value: string): string {
    const numbers = value.replace(/\D/g, '')
    const limitedNumbers = numbers.slice(0, 11)

    if (limitedNumbers.length <= 2) {
      return `(${limitedNumbers}`
    } else if (limitedNumbers.length <= 7) {
      return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2)}`
    } else {
      return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2, 7)}-${limitedNumbers.slice(7)}`
    }
  }

  /**
   * Remove a máscara do telefone, retornando apenas números
   * @param value - Valor com máscara
   * @returns Apenas números
   */
  static unMaskPhone(value: string): string {
    return value.replace(/\D/g, '')
  }

  /**
   * Verifica se o valor está completamente formatado
   * @param value - Valor a ser verificado
   * @returns true se está completamente formatado
   */
  static isPhoneComplete(value: string): boolean {
    const numbers = this.unMaskPhone(value)
    return numbers.length === 11
  }
}
