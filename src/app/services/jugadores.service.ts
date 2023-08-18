import { Injectable } from '@angular/core';
import { Jugador } from '../pages/jugadores/jugadores.model';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  jugadores: Jugador[] = [
    {
      id: '1',
      nombre: 'Koby Bryant',
      imagen: 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_05/3204601/200128-kobe-bryant-cover-section-tease.jpg',
      fecha: '1978 - 2020',
      descripcion: 'AAA'
    },
    {
      id: '2',
      nombre: 'Shaquille Oneal',
      imagen: 'https://fichadeportiva.com/wp-content/uploads/2019/07/shaquille-oneal-la-lakers-e1562813023790.png?w=845',
      fecha: '2023',
      descripcion: 'BBB'
    },
    {
      id: '3',
      nombre: 'Tracy McGrady',
      imagen: 'https://wallpapers.com/images/hd/tracy-mcgrady-8fzkcmhv61mnr0h5.jpg',
      fecha: '2023',
      descripcion: 'CCC'
    },
  ]

  constructor() { }

  // METODOS CUSTOM
  // METODO QUE DEVUELVE OBJETO COMPLETO
  getAll() {
    return [...this.jugadores]
  }

  // METODO QUE DEVUELVE UN JUGADOR POR EL ID BUSCADO
  getJugador(id: string) {
    return {
      ...this.jugadores.find(aux => {
        return aux.id === id
      })
    }
  }
}
