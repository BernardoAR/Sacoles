import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  /**
   * Construtor do service para utilizar várias classes ao mesmo tempo
   * @param firestore - Parâmetro AngularFireStore
   * @param caminho - Parâmetro com o caminho da coleção
   * - Exemplo: "caminho"
   */
  constructor(private firestore: AngularFirestore, private caminho: string) { }

  public listar() {
    return this.firestore.collection(this.caminho).snapshotChanges().pipe(
      map(item => {
        return item.map((doc: any) => {
          const dados = doc.payload.data();
          dados.id = doc.payload.uid;
          return dados
        })
      }));
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
   * @param uid
   */
  public deletar(uid: string) {
    const url = this.caminho + '/' + uid;
    this.firestore.doc(url).delete();
  }
}
