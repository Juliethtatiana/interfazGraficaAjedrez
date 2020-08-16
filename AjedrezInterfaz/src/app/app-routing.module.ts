  import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiJuegoComponent } from './mi-juego/mi-juego.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [ {
  path: 'juego',
  component: MiJuegoComponent, // this is the component with the <router-outlet> in the template
 
},
{
  path: '',
  component: StartComponent, // this is the component with the <router-outlet> in the template
 
},
{
  path: '**',
  redirectTo:'',
  component: StartComponent, // this is the component with the <router-outlet> in the template
 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
