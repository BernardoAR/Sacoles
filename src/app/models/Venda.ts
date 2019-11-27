import { SacolesVenda } from './SacolesVenda';

export class Venda {
  data: Date;
  quem: string;
  pago = false;
  isento = false;
  sacoles: SacolesVenda;
}
