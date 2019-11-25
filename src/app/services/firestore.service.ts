import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}
  /**
   * Método utilizado para listar por meio a uma condicional de Where
   * @param campo campo da condição
   * @param tipo asc|desc
   */
  public listarOrd(caminho: string, campo: string, tipo: any) {
    return this.firestore
      .collection(caminho, ref => ref.orderBy(campo, tipo))
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
   * Método utilizado para listar por meio a uma condicional de Where
   * @param campo campo da condição
   * @param cond a condição em si só
   * @param value o valor correspondente
   */
  public listarCond(caminho: string, campo: string, cond: any, value: any) {
    return this.firestore
      .collection(caminho, ref => ref.where(campo, cond, value))
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
   * Método utilizado para a listagem
   */
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
      this.firestore
        .doc(url)
        .update({ ...item })
        .catch(error => {
          if (error.code === 'not-found') {
            this.firestore.collection(caminho).add({ ...item });
          }
        });
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
