import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Jugador } from '../Jugador';

@Component({
  selector: 'app-mi-juego',
  templateUrl: './mi-juego.component.html',
  styleUrls: ['./mi-juego.component.css']
})
export class MiJuegoComponent implements OnInit {
/*las posiciones  de las fichas, asi como informacion adicional del 
 jugador se piensan  extraer de la parte logica por medio de una 
 peticion HTTP*/

  jugador1 : Jugador = {
    id : 1,
    color : "Blanco",
    nombre : localStorage.getItem('user1'),
    posicionesFichas:[{id:"T1B",imagen:"../../assets/torre-blanca.png",x:0,y:0},{id:"C1B",imagen:"../../assets/caballo-blanco.png",x:1,y:0},{id:"A1B",imagen:"../../assets/alfil-blanco.png",x:2,y:0},{id:"QB",imagen:"../../assets/reina-blanca.png",x:3,y:0},{id:"KB",imagen:"../../assets/rey-blanco.png",x:4,y:0},{id:"A2B",imagen:"../../assets/alfil-blanco.png",x:5,y:0},{id:"C2B",imagen:"../../assets/caballo-blanco.png",x:6,y:0},{id:"T2B",imagen:"../../assets/torre-blanca.png",x:7,y:0},{id:"P1B",imagen:"../../assets/peon-blanco.png",x:0,y:1},{id:"P2B",imagen:"../../assets/peon-blanco.png",x:1,y:1},{id:"P3B",imagen:"../../assets/peon-blanco.png",x:2,y:1},{id:"P4B",imagen:"../../assets/peon-blanco.png",x:3,y:1},{id:"P5B",imagen:"../../assets/peon-blanco.png",x:4,y:1},{id:"P6B",imagen:"../../assets/peon-blanco.png",x:5,y:1},{id:"P7B",imagen:"../../assets/peon-blanco.png",x:6,y:1},{id:"P8B",imagen:"../../assets/peon-blanco.png",x:7,y:1}],
    fichasMuertas:[{}] //array de objetos de fichas con imagenes de las fichas que se  han matado para  ponerlos en las tarjetas de cada jugador
  };
  
  jugador2 : Jugador = {
    id : 2,
    color : "Negro",
    nombre : localStorage.getItem('user2'),
    posicionesFichas:[{id:"T1N",imagen:"../../assets/torre-negra.png",x:0,y:7},{id:"C1BN",imagen:"../../assets/caballo-negro.png",x:1,y:7},{id:"A1N",imagen:"../../assets/alfil-negro.png",x:2,y:7},{id:"QN",imagen:"../../assets/reina-negra.png",x:3,y:7},{id:"KN",imagen:"../../assets/rey-negro.png",x:4,y:7},{id:"A2N",imagen:"../../assets/alfil-negro.png",x:5,y:7},{id:"C2N",imagen:"../../assets/caballo-negro.png",x:6,y:7},{id:"T2N",imagen:"../../assets/torre-negra.png",x:7,y:7},{id:"P1N",imagen:"../../assets/peon-negro.png",x:0,y:6},{id:"P2N",imagen:"../../assets/peon-negro.png",x:1,y:6},{id:"P3N",imagen:"../../assets/peon-negro.png",x:2,y:6},{id:"P4N",imagen:"../../assets/peon-negro.png",x:3,y:6},{id:"P5N",imagen:"../../assets/peon-negro.png",x:4,y:6},{id:"P6N",imagen:"../../assets/peon-negro.png",x:5,y:6},{id:"P7N",imagen:"../../assets/peon-negro.png",x:6,y:6},{id:"P8N",imagen:"../../assets/peon-negro.png",x:7,y:6}],
    fichasMuertas:[{}]
  };
  constructor(private router: Router){
  }
  ngOnInit(): void {
  }

}
