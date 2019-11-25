import { SacolesVenda } from './SacolesVenda';

export class Venda {
  data: Date;
  quem: string;
  pago: boolean;
  isento?: boolean;
  sacoles: SacolesVenda;
}
