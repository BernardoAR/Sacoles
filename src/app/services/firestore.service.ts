import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}
  public listar(caminho: string) {
    return this.firestore
      .collection(caminho)
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
  public gravar(item: any, caminho: string) {
    // Verifica se tem um UID
    if (item.uid) {
      // Se existir, trata-se de uma atualização
      const url = `${caminho}/${item.uid}`;
      this.firestore.doc(url).update({ ...item });
    } else {
      // cria uma nova entrada
      this.firestore.collection(caminho).add({ ...item });
    }
  }
  /**
   * Método utilizado para deletar um dado específico
   */
  public deletar(uid: string, caminho: string) {
    const url = `${caminho}/${uid}`;
    this.firestore.doc(url).delete();
  }
}
