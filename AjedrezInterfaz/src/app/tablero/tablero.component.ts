import { Component, OnInit,  Input} from '@angular/core';


@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {
  //las posiciones  de las fichas se piensan  extraer de la parte logica por medio de una peticion HTTP
  @Input() posFichas1: any = [];
  @Input() posFichas2: any = [];

  filas = [];


  constructor() { 
   
  }
  
  

  ngOnInit() {
    for(var i=0; i<8; i++){
      this.filas[i] = [];
      for(var j=0; j<8; j++){
        
        if((i + j) % 2 == 0){
          this.filas[i][j]={clase:'posicion2'};
        }else{
          this.filas[i][j]={clase:'posicion1'};
        }
        this.filas[i][j].id= i+"-"+j;
        if(i==0){
          console.log(this.posFichas1);
         // this.filas[i][j].imagen= this.jugador2.posFichas[j]['imagen'];
         this.filas[i][j].imagen= this.posFichas2[j]['imagen'];
        }
        if(i==1){
          //this.filas[i][j].imagen= this.jugador2.posicionesFichas[j+8]['imagen'];
          this.filas[i][j].imagen= this.posFichas2[j+8]['imagen'];
        }
        if(i==7){
          this.filas[i][j].imagen= this.posFichas1[j]['imagen'];
        }
        if(i==6){
          this.filas[i][j].imagen= this.posFichas1[j+8]['imagen'];
        }
              }
    }
  }
  seleccionar(id){
    document.getElementById(id).classList.add("seleccionado")
  }

}

