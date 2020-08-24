import { Component, OnInit,  Input} from '@angular/core';
import { TableroService } from '../tablero.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css'],
  providers: [TableroService]
})
export class TableroComponent implements OnInit {
  @Input() posFichas1: any = [];
  @Input() posFichas2: any = [];
  idFichaAnt:string = "0-0";
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
    
              }
    }
  this.ponerFichas();
  }
  ponerFichas(){
    for(var i=0; i<16; i++){
      this.filas[this.posFichas2[i]['y']][this.posFichas2[i]['x']].imagen= this.posFichas2[i]['imagen'];
     this.filas[this.posFichas1[i]['y']][this.posFichas1[i]['x']].imagen= this.posFichas1[i]['imagen'];
     
    }
  }
  seleccionar(id){
    document.getElementById(this.idFichaAnt).classList.remove("seleccionado");
    document.getElementById(id).classList.add("seleccionado");
    this.idFichaAnt=id;
    
  }


}

