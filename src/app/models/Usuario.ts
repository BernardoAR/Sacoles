import { FirestoreService } from '../services/firestore.service';

/**
 * Modelo de dados padrao para usuarios do sistema
 */
export class Usuario extends FirestoreService {
  nome = '';
  email = '';
  senha = '';
  constructor() {
    super('usuario');
  }
  /**
   * Retorna verdadeiro quando todas as prorpiedades possuem valor
   */
  get valid(): boolean {
    return this.nome !== '' && this.email !== '' && this.senha !== '';
  }
}
