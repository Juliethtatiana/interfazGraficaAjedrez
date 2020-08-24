import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { JugadorService } from '../jugador.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  providers: [JugadorService]
})
export class StartComponent implements OnInit {
  player1: string;
  player2: string;

  comando = "Prueba";
  resultado = "";
  constructor(private route: Router,private http: JugadorService){
  }
  ngOnInit(): void {
  }
  enviar(){
    /*los nombres  de los jugadores se guardaran en el localStorage*/
    //console.log(this.player1)
    localStorage.setItem('user1', this.player1 );
    localStorage.setItem('user2', this.player2 );
    this.http.respuestaLlamdoServlet(this.player1,this.player2).subscribe((data:any)=>{
      this.resultado = data.comando;
      console.log("respuesta:" + this.resultado);
    });
    this.route.navigate(['/juego']); //redireccionamiento de pagina al tablero de juego
  }
  enviarComando(){
    console.log("holiii");
    this.http.respuestaLlamdoServlet(this.player1,this.player2).subscribe((data:any)=>{
      this.resultado = data.comando;
      console.log("respuesta:" + this.resultado);
      for(var i=0; i<8; i++){
        for(var j=0; j<8; j++){
          document.getElementById(i+""+j).innerHTML = "";
        }
      }
      if(this.resultado == "Peon a A4"){
        document.getElementById("30").innerHTML = "&#9817;";
      }
    });
  }
}
