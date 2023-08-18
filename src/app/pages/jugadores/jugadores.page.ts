import { Component, OnInit } from '@angular/core';
import { JugadoresService } from 'src/app/services/jugadores.service';
import { Jugador } from './jugadores.model';


@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.page.html',
  styleUrls: ['./jugadores.page.scss'],
})
export class JugadoresPage implements OnInit {

  listaJugadores: Jugador[] = [];

  constructor(private jugadoresService: JugadoresService) { }

  ngOnInit() {
    this.listaJugadores = this.jugadoresService.getAll()
  }



}
