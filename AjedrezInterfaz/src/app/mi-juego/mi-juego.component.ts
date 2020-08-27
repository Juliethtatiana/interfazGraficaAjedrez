import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Jugador } from '../Jugador';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TableroService } from '../tablero.service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-mi-juego',
  templateUrl: './mi-juego.component.html',
  styleUrls: ['./mi-juego.component.css'],
  providers: [TableroService]
})
export class MiJuegoComponent implements OnInit {
/*las posiciones  de las fichas, asi como informacion adicional del 
 jugador se piensan  extraer de la parte logica por medio de una 
 peticion HTTP*/

 posfichas1:any = [];
 posfichas2:any = [];
 
 jugador1:Jugador ={
  id : 1,
  color : "Blanco",
  nombre : localStorage.getItem('user1'),
  posicionesFichas:[{id:"5",imagen:"../../assets/torre-blanca.png",x:0,y:0},{id:"4",imagen:"../../assets/caballo-blanco.png",x:1,y:0},{id:"3",imagen:"../../assets/alfil-blanco.png",x:2,y:0},{id:"2",imagen:"../../assets/reina-blanca.png",x:3,y:0},{id:"1",imagen:"../../assets/rey-blanco.png",x:4,y:0},{id:"3",imagen:"../../assets/alfil-blanco.png",x:5,y:0},{id:"4",imagen:"../../assets/caballo-blanco.png",x:6,y:0},{id:"5",imagen:"../../assets/torre-blanca.png",x:7,y:0},{id:"6",imagen:"../../assets/peon-blanco.png",x:0,y:1},{id:"6",imagen:"../../assets/peon-blanco.png",x:1,y:1},{id:"6",imagen:"../../assets/peon-blanco.png",x:2,y:1},{id:"6",imagen:"../../assets/peon-blanco.png",x:3,y:1},{id:"6",imagen:"../../assets/peon-blanco.png",x:4,y:1},{id:"6",imagen:"../../assets/peon-blanco.png",x:5,y:1},{id:"6",imagen:"../../assets/peon-blanco.png",x:6,y:1},{id:"6",imagen:"../../assets/peon-blanco.png",x:7,y:1}],
  fichasMuertas:[{}] //array de objetos de fichas con imagenes de las fichas que se  han matado para  ponerlos en las tarjetas de cada jugador
};

jugador2:Jugador = {
  id : 2,
  color : "Negro",
  nombre : localStorage.getItem('user2'),
  posicionesFichas:[{id:"5",imagen:"../../assets/torre-negra.png",x:0,y:7},{id:"4",imagen:"../../assets/caballo-negro.png",x:1,y:7},{id:"3",imagen:"../../assets/alfil-negro.png",x:2,y:7},{id:"1",imagen:"../../assets/rey-negro.png",x:3,y:7},{id:"2",imagen:"../../assets/reina-negra.png",x:4,y:7},{id:"3",imagen:"../../assets/alfil-negro.png",x:5,y:7},{id:"4",imagen:"../../assets/caballo-negro.png",x:6,y:7},{id:"5",imagen:"../../assets/torre-negra.png",x:7,y:7},{id:"6",imagen:"../../assets/peon-negro.png",x:0,y:6},{id:"6",imagen:"../../assets/peon-negro.png",x:1,y:6},{id:"6",imagen:"../../assets/peon-negro.png",x:2,y:6},{id:"6",imagen:"../../assets/peon-negro.png",x:3,y:6},{id:"6",imagen:"../../assets/peon-negro.png",x:4,y:6},{id:"6",imagen:"../../assets/peon-negro.png",x:5,y:6},{id:"6",imagen:"../../assets/peon-negro.png",x:6,y:6},{id:"6",imagen:"../../assets/peon-negro.png",x:7,y:6}],
  fichasMuertas:[{}]
};

  constructor(private router: Router,private http: TableroService){
   
   
  }
   ngOnInit(): void{
    
  }

  async iniciarFichas():Promise<void>{
    var json:any = [];
    var imagen:string;
    this.http.ConsFicha("ConsFicha").subscribe((data:any)=>{
      console.log("respuesta:" + JSON.stringify(data));
        for(let i in data){
          for(let j in data[i]){
            
            if(parseInt(i)==0){
              console.log("jkasjdak"+JSON.stringify(data[i][j]));
              switch(data[i][j].id){
                case 1:
                  imagen="../../assets/rey-blanco.png";
                  break;
                case 2:
                  imagen="../../assets/reina-blanca.png";
                  break;
                case 3:
                  imagen="../../assets/alfil-blanco.png";
                  break;
                case 4:
                  imagen="../../assets/caballo-blanco.png";
                  break;
                case 5:
                  imagen="../../assets/torre-blanca.png";
                    break;
                case 6:
                  imagen="../../assets/peon-blanco.png";
                  break;
              }
              console.log(imagen);
              json+={id:data[i][j].id,imagen: imagen, x:data[i][j].x, y: data[i][j].y}
              this.posfichas1=json;
            }else{
              switch(data[i].id){
                case 1:
                  imagen="../../assets/rey-negro.png";
                  break;
                case 2:
                  imagen="../../assets/reina-negro.png";
                  break;
                case 3:
                  imagen="../../assets/alfil-negro.png";
                  break;
                case 4:
                  imagen="../../assets/caballo-negro.png";
                  break;
                case 5:
                  imagen="../../assets/torre-negro.png";
                    break;
                case 6:
                  imagen="../../assets/peon-negro.png";
                  break;
              }
              json+={id:data[i][j].id,imagen: imagen, x:data[i][j].x, y: data[i][j].y}
              this.posfichas2=json;
            }
          

              
          }
        }
        this.jugador1.posicionesFichas=this.posfichas1;
        this.jugador2.posicionesFichas=this.posfichas2;

        return 'ok';
      //armar los object array de las posfichas
    });

   // this.posfichas1=[{id:"5",imagen:"../../assets/torre-blanca.png",x:0,y:0},{id:"4",imagen:"../../assets/caballo-blanco.png",x:1,y:0},{id:"3",imagen:"../../assets/alfil-blanco.png",x:2,y:0},{id:"2",imagen:"../../assets/reina-blanca.png",x:3,y:0},{id:"1",imagen:"../../assets/rey-blanco.png",x:4,y:0},{id:"3",imagen:"../../assets/alfil-blanco.png",x:5,y:0},{id:"4",imagen:"../../assets/caballo-blanco.png",x:6,y:0},{id:"5",imagen:"../../assets/torre-blanca.png",x:7,y:0},{id:"6",imagen:"../../assets/peon-blanco.png",x:0,y:1},{id:"6",imagen:"../../assets/peon-blanco.png",x:1,y:1},{id:"6",imagen:"../../assets/peon-blanco.png",x:2,y:1},{id:"6",imagen:"../../assets/peon-blanco.png",x:3,y:1},{id:"6",imagen:"../../assets/peon-blanco.png",x:4,y:1},{id:"6",imagen:"../../assets/peon-blanco.png",x:5,y:1},{id:"6",imagen:"../../assets/peon-blanco.png",x:6,y:1},{id:"6",imagen:"../../assets/peon-blanco.png",x:7,y:1},0];
    // this.posfichas2=[{id:"5",imagen:"../../assets/torre-negra.png",x:0,y:7},{id:"4",imagen:"../../assets/caballo-negro.png",x:1,y:7},{id:"3",imagen:"../../assets/alfil-negro.png",x:2,y:7},{id:"2",imagen:"../../assets/reina-negra.png",x:3,y:7},{id:"1",imagen:"../../assets/rey-negro.png",x:4,y:7},{id:"3",imagen:"../../assets/alfil-negro.png",x:5,y:7},{id:"4",imagen:"../../assets/caballo-negro.png",x:6,y:7},{id:"5",imagen:"../../assets/torre-negra.png",x:7,y:7},{id:"6",imagen:"../../assets/peon-negro.png",x:0,y:6},{id:"6",imagen:"../../assets/peon-negro.png",x:1,y:6},{id:"6",imagen:"../../assets/peon-negro.png",x:2,y:6},{id:"6",imagen:"../../assets/peon-negro.png",x:3,y:6},{id:"6",imagen:"../../assets/peon-negro.png",x:4,y:6},{id:"6",imagen:"../../assets/peon-negro.png",x:5,y:6},{id:"6",imagen:"../../assets/peon-negro.png",x:6,y:6},{id:"6",imagen:"../../assets/peon-negro.png",x:7,y:6},1];

  }

}
