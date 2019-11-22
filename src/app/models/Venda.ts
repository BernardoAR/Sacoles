import { Sacole } from './Sacole';
import { FirestoreService } from '../services/firestore.service';

export class Vendas extends FirestoreService {
  quantidade: number;
  data: Date;
  quem: string;
  pago: boolean;
  sacole: Sacole;
  constructor() {
    super('vendas');
  }
}
