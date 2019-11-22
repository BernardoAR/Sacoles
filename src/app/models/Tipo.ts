import { FirestoreService } from '../services/firestore.service';

export class Tipo extends FirestoreService {
  nome: string;
  valor: number;
  constructor() {
    super('tipo');
  }
}
