import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  /**
   * Caminho
   */
  private _caminho: string;
  /**
   * Seta o caminho
   */
  set caminho(value: string) {
    this._caminho = value;
  }
  /**
   * Construtor do service para utilizar várias classes ao mesmo tempo
   * @param caminho - Parâmetro com o caminho da coleção
   * - Exemplo: "caminho"
   */
  constructor(private firestore: AngularFirestore) {}

  public listar() {
    return this.firestore
      .collection(this.caminho)
      .snapshotChanges()
      .pipe(
        map(item =>
          item.map(itens => {
            const uid = itens.payload.doc.id;
            const dados = itens.payload.doc.data();
            return { uid, ...dados };
          })
        )
      );
  }
  /**
   * Método utilizado para a gravação de um item qualquer
   * @param item objeto a ser gravado
   */
  public gravar(item: object) {
    this.firestore.collection(this.caminho).add(item);
  }
  /**
   * Método utilizado para atualizar os itens
   * @param item objeto que irá ser atualizado
   * @param uid Unique ID do objeto que irá utilizar
   */
  public atualizar(item: object, uid: string) {
    const url = this.caminho + '/' + uid;
    this.firestore.doc(url).update(item);
  }
  /**
   * Método utilizado para deletar um dado específico
   */
  public deletar(uid: string) {
    const url = this.caminho + '/' + uid;
    this.firestore.doc(url).delete();
  }
}
