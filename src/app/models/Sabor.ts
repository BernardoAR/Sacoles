import { FirestoreService } from '../services/firestore.service';

export class Sabor extends FirestoreService {
  nome: string;
  constructor() {
    super('sabor');
  }
}
