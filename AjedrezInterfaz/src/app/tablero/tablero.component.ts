import { Component, OnInit,  Input} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TableroService } from '../tablero.service';
import { empty } from 'rxjs';

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
  dataAnt:{
    "0":{
      "x":0,
      "y":1
    }
  }
  filas = [];
  resultado = "";
  jugador1=1;
  jugador2=0;
  posiblesMov:any;
  x=undefined;
  y=undefined;

  constructor(private http: TableroService) { 
   
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
        this.filas[i][j].x= i;
        this.filas[i][j].y= j;
        
    
              }
    }
  this.ponerFichas();
  }
  ponerFichas(){
    for(var i=0; i<16; i++){
      this.filas[this.posFichas2[i]['y']][this.posFichas2[i]['x']].imagen= this.posFichas2[i]['imagen'];
      this.filas[this.posFichas2[i]['y']][this.posFichas2[i]['x']].nomficha= this.posFichas2[i]['id'];
     this.filas[this.posFichas1[i]['y']][this.posFichas1[i]['x']].imagen= this.posFichas1[i]['imagen'];
     this.filas[this.posFichas1[i]['y']][this.posFichas1[i]['x']].nomficha= this.posFichas1[i]['id'];
     
    }
  }
  seleccionar(id, x, y){
    
    if(document.getElementById(id).children.length>0){
       document.getElementById(this.idFichaAnt).classList.remove("seleccionado");
      document.getElementById(id).classList.add("seleccionado");
      this.idFichaAnt=id;
      var jugador;
      for(var i=0; i<16; i++){
       if(this.filas[this.posFichas2[i]['y']][this.posFichas2[i]['x']].x== x  && this.filas[this.posFichas2[i]['y']][this.posFichas2[i]['x']].y== y){
        jugador=1;
       }
       if(this.filas[this.posFichas1[i]['y']][this.posFichas1[i]['x']].x== x  && this.filas[this.posFichas1[i]['y']][this.posFichas1[i]['x']].y== y){
        jugador=0;
       } 
      }

      //jugador=0;
      this.http.GetPosMov("posMov",jugador, x, y).subscribe((data:any)=>{
      console.log("respuesta:" + JSON.stringify(data));
      for(let i in this.dataAnt){
        document.getElementById(this.dataAnt[i].x+"-"+this.dataAnt[i].y).classList.remove("posMov");
      }
      for(let i in data){
        document.getElementById(data[i].x+"-"+data[i].y).classList.add("posMov");
      }
      this.dataAnt=data;
      this.x=x;
      this.y=y;
      this.http.ConsFicha("Consficha").subscribe((data:any)=>{
        console.log("respuesta:" + JSON.stringify(data));
      });
      });
   
    }else{
      if(this.x && this.y && document.getElementById(id).children.length<=0 || (jugador==1  && this.filas[this.posFichas1[i]['y']][this.posFichas1[i]['x']].x == x && this.filas[this.posFichas1[i]['y']][this.posFichas1[i]['x']].y == y) || (jugador==0  && this.filas[this.posFichas2[i]['y']][this.posFichas2[i]['x']].x == x && this.filas[this.posFichas2[i]['y']][this.posFichas2[i]['x']].y == y) ){
        var imagen;
        var idx;
        var idy;
        var fichapos;
        for(var i=0; i<16; i++){
          if(this.filas[this.posFichas2[i]['y']][this.posFichas2[i]['x']].x== this.x  && this.filas[this.posFichas2[i]['y']][this.posFichas2[i]['x']].y== this.y){
           jugador=1;
            imagen=this.filas[this.posFichas2[i]['y']][this.posFichas2[i]['x']].imagen;
            idx=this.posFichas2[i]['x'];
            idy=this.posFichas2[i]['y'];
            fichapos=i;
          //
          }
          if(this.filas[this.posFichas1[i]['y']][this.posFichas1[i]['x']].x== this.x  && this.filas[this.posFichas1[i]['y']][this.posFichas1[i]['x']].y== this.y){
           jugador=0;
           imagen=this.filas[this.posFichas1[i]['y']][this.posFichas1[i]['x']].imagen;
           idx=this.posFichas1[i]['x'];
           idy=this.posFichas1[i]['y'];
           fichapos=i;
          //
          } 

         }
         
        this.http.MoverFicha("Mov",jugador, this.x, this.y,x,y,this.filas[this.x][this.y].nomficha).subscribe((data:any)=>{
          console.log("respuesta:" + JSON.stringify(data));
          if(data!=null){
           
            if(data.ficha==this.filas[this.x][this.y].nomficha){
              console.log("la  dataAnt es: "+ JSON.stringify(this.dataAnt))
               
              if(jugador==0){
                //console.log("holii");
                this.filas[this.posFichas1[fichapos]['y']][this.posFichas1[fichapos]['x']].imagen="";
                this.posFichas1[fichapos]['x']=data.x;
                this.posFichas1[fichapos]['y']=data.y;
                this.posFichas1[fichapos]['imagen']=imagen;  
                console.log('holuu');
               
                
              }else{
                console.log("holii");
                this.filas[this.posFichas2[fichapos]['y']][this.posFichas2[fichapos]['x']].imagen="";
                this.posFichas2[fichapos]['x']=data.x;
                this.posFichas2[fichapos]['y']=data.y;
                this.posFichas2[fichapos]['imagen']=imagen; 
                
              }
              var  idFicha= data.x+"-"+data.y;
              //alert(idFicha);
              var img= document.createElement("img");
              img.width=40;
              img.height=40;
              img.src=imagen;
              document.getElementById(idFicha).appendChild(img);
              document.getElementById(idx+"-"+idy).firstChild.remove;
              this.x=undefined;
              this.y=undefined;
              console.log("entro"+data.x);
          
            }
              

          }
          
          //this.ActualizarTablero(x,y,jugador,imagen);

        });
      }
        

    }
    
  }

  ActualizarTablero(x:number,y:number, jugador:number,imagen:  string){
   if(jugador==0){
     //blanco
     for(var i = 0; i < 16; i++){
       if(this.posFichas1[i]['x']==this.x && this.posFichas1[i]['y']==this.y ){
        this.posFichas1[i]['x']=x;
        this.posFichas1[i]['y']=y;
        this.posFichas1[i]['imagen']=imagen;
       }
      
     }
      
   }else{
     //negro
     for(var i = 0; i < 16; i++){
      if(this.posFichas2[i]['x']==this.x && this.posFichas2[i]['y']==this.y ){
       this.posFichas2[i]['x']=x;
       this.posFichas2[i]['y']=y;
       this.posFichas2[i]['imagen']=imagen;
      }
     
    }
   }
   this.ponerFichas();

  }

}

