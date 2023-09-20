import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JugadoresService } from 'src/app/services/api/jugadores.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  listaJugadores:any = [];

  constructor(
    private router:Router,
    private jugadoresApi: JugadoresService  
  ) { }

  ngOnInit() {
    this.jugadoresApi.listJugadores().subscribe((resp) => {
      //console.log(resp)
      this.listaJugadores = resp
    })
  }

  addJugador() {
    this.router.navigate(['/apiadd']);
  }
}
