import { Sabor } from './Sabor';
import { Tipo } from './Tipo';
import { FirestoreService } from '../services/firestore.service';

export class Sacole extends FirestoreService {
  quantidade: number;
  isento?: boolean;
  sabor: Sabor;
  tipo: Tipo;
  constructor() {
    super('sacole');
  }
}
