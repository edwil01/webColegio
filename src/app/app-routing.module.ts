import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ColegioComponent } from './colegio/colegio.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContenidoComponent } from './contenido/contenido.component';

const routes: Routes = [
  {path:'', component:ContenidoComponent},
  {path:'colegio', component:ColegioComponent},
  {path:'profesores', component:ProfesoresComponent},
  {path:'ubicacion', component:UbicacionComponent},
  {path:'galeria', component:GaleriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
