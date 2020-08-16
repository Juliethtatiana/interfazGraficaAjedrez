import { Component, OnInit, Input } from '@angular/core';
import { Jugador } from '../Jugador';
@Component({
  selector: 'app-jugador-card',
  templateUrl: './jugador-card.component.html',
  styleUrls: ['./jugador-card.component.css']
})
export class JugadorCardComponent implements OnInit {
  @Input() datos: any; 
  constructor() { }

  ngOnInit(): void {
    console.log(this.datos)
  }

}
