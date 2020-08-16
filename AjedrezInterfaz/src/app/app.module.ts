import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MiJuegoComponent } from './mi-juego/mi-juego.component';
import { TableroComponent } from './tablero/tablero.component';
import { StartComponent } from './start/start.component';
import { JugadorCardComponent } from './jugador-card/jugador-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MiJuegoComponent,
     TableroComponent,
     StartComponent,
     JugadorCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
