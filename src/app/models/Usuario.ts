/**
 * Modelo de dados padrao para usuarios do sistema
 */
export class Usuario {
  nome = '';
  email = '';
  senha = '';
  /**
   * Retorna verdadeiro quando todas as prorpiedades possuem valor
   */
  get valid(): boolean {
    return this.nome !== '' && this.email !== '' && this.senha !== '';
  }
}
