import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  // Busca todos os produtos (pelúcias e tcg) de uma vez
  getTodosOsProdutos(): Observable<any[]> {
    const pelucias$ = this.http.get<any[]>(`${this.apiUrl}/produtos/pelucias`);
    const tcg$ = this.http.get<any[]>(`${this.apiUrl}/produtos/tcg`);

    // forkJoin combina as duas chamadas em uma só resposta
    return forkJoin([pelucias$, tcg$]).pipe(
      map(([pelucias, tcg]) => [...pelucias, ...tcg]) // Junta os dois arrays
    );
  }
}
