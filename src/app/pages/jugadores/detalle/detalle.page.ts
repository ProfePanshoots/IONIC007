import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JugadoresService } from 'src/app/services/jugadores.service';
import { Jugador } from '../jugadores.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  jugador!: Jugador;

  constructor(private jugadorService: JugadoresService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      const aux = param.get('id')
      if (aux) {
        this.jugador = this.jugadorService.getJugador(aux)
      }
    })
  }

}
