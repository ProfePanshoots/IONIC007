import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IJugador } from 'src/app/interfaces/ijugador';
import { IJugadores } from 'src/app/interfaces/ijugadores';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  constructor(private httpClient: HttpClient) { }

  listJugadores(): Observable<IJugadores> {
    return this.httpClient.get<IJugadores>(`${environment.apiURL}/jugadores`);
  }

  addJugador(jugador: IJugador): Observable<IJugador> {
    return this.httpClient.post<IJugador>(`${environment.apiURL}/jugadores`, jugador);
  }

  getJugador(id: Number): Observable<IJugadores> {
    return this.httpClient.get<IJugadores>(`${environment.apiURL}/jugadores/?id=${id}`);
  }

  updateJugador(jugador: any): Observable<IJugadores> {
    return this.httpClient.put<IJugadores>(`${environment.apiURL}/jugadores/${jugador.id}`, jugador);
  }

  deleteJugador(jugador: any): Observable<IJugadores> {
    return this.httpClient.delete<IJugadores>(`${environment.apiURL}/jugadores/${jugador.id}`);
  }
}
