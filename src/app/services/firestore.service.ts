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
   * @param _caminho - Parâmetro com o caminho da coleção
   * - Exemplo: "caminho"
   */
  constructor(private firestore: AngularFirestore) {}

  public listar() {
    return this.firestore
      .collection(this._caminho)
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
  public gravar(item: any) {
    // Verifica se tem um UID
    console.log(item.uid);
    if (item.uid) {
      // Se existir, trata-se de uma atualização
      const url = this._caminho + '/' + item.uid;
      console.log(url);
      this.firestore.doc(url).update({ ...item });
    } else {
      // cria uma nova entrada
      this.firestore.collection(this._caminho).add({ ...item });
    }
  }
  /**
   * Método utilizado para deletar um dado específico
   */
  public deletar(uid: string) {
    const url = this._caminho + '/' + uid;
    this.firestore.doc(url).delete();
  }
}
