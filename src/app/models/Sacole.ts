import { Sabor } from './Sabor';
import { Tipo } from './Tipo';

export class Sacole {
  quantidade: number;
  isento?: boolean;
  sabor: Sabor;
  tipo: Tipo;
}
