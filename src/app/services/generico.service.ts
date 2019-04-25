import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export abstract class GenericoRestService<T> {
  constructor(protected http: HttpClient, protected url: string) {}

  listar(): Observable<T[]> {
    return this.http.get(this.url) as Observable<T[]>;
  }

  listarPorId(id: any): Observable<T> {
    return this.http.get(`${this.url}/${id}`) as Observable<T>;
  }

  salvar(T: any) {
    return !T.id ? (this.http.post(this.url, T) as Observable<T>) : this.editar(T);
  }

  editar(T: any) {
    return this.http.put(`${this.url}/${T.id}`, T) as Observable<T>;
  }

  deletar(id: any) {
    return this.http.delete(`${this.url}/${id}`) as Observable<T>;
  }
}
