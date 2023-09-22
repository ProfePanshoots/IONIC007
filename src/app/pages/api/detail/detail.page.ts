import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JugadoresService } from 'src/app/services/api/jugadores.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  // INSTANCIA QUE RECIBE LA INFORMACION
  jugador = {
    id: 0,
    nombre: 'TEST',
    genero: 'TEST'
  }

  constructor(
    private apiService: JugadoresService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getJugador(this.getId())
  }

  ionViewWillEnter() {
    this.getJugador(this.getId())
  }

  getId() {
    let url = this.router.url
    let aux = url.split("/",3)
    let id = parseInt(aux[2])
    return id
  }

  getJugador(id: Number) {
    this.apiService.getJugador(id).subscribe((resp:any) => {
      this.jugador = {
        id: resp[0].id,
        nombre: resp[0].nombre,
        genero: resp[0].genero
      }
    })
  }

  deleteJugador() {
    this.apiService.deleteJugador(this.jugador).subscribe();
    this.router.navigate(['/apilist'])
  }

}
