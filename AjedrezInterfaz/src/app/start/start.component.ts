import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  player1: string;
  player2: string;
  constructor(private route: Router){
  }
  ngOnInit(): void {
  }
  enviar(){
    /*los nombres  de los jugadores se guardaran en el localStorage*/
    //console.log(this.player1)
    localStorage.setItem('user1', this.player1 );
    localStorage.setItem('user2', this.player2 );
    this.route.navigate(['/juego']); //redireccionamiento de pagina al tablero de juego
  }

}
