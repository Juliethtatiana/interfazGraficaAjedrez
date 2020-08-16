import { Component, OnInit, Input } from '@angular/core';
import { Jugador } from '../Jugador';
@Component({
  selector: 'app-jugador-card',
  templateUrl: './jugador-card.component.html',
  styleUrls: ['./jugador-card.component.css']
})
export class JugadorCardComponent implements OnInit {
  @Input() datos: any;
  jugador : Jugador = {
    id : 1,
    color : "white",
    nombre : this.datos,
    posicionesFichas:[{id:"T1N",imagen:"../../images/torre-negra.png",x:0,y:7},{id:"C1BN",imagen:"../../images/caballo-negro.png",x:1,y:7},{id:"A1N",imagen:"../../images/alfil-negro.png",x:2,y:7},{id:"QN",imagen:"../../images/reina-negra.png",x:3,y:7},{id:"KN",imagen:"../../images/rey-negro.png",x:4,y:7},{id:"A2N",imagen:"../../images/alfil-negro.png",x:5,y:7},{id:"C2N",imagen:"../../images/caballo-negro.png",x:6,y:7},{id:"T2N",imagen:"../../images/torre-negra.png",x:7,y:7},{id:"P1N",imagen:"../../images/peon-negro.png",x:0,y:6},{id:"P2N",imagen:"../../images/peon-negro.png",x:1,y:6},{id:"P3N",imagen:"../../images/peon-negro.png",x:2,y:6},{id:"P4N",imagen:"../../images/peon-negro.png",x:3,y:6},{id:"P5N",imagen:"../../images/peon-negro.png",x:4,y:6},{id:"P6N",imagen:"../../images/peon-negro.png",x:5,y:6},{id:"P7N",imagen:"../../images/peon-negro.png",x:6,y:6},{id:"P8N",imagen:"../../images/peon-negro.png",x:7,y:6}]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
