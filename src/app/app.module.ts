import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { HttpService } from './http.service';
import { LogService } from './log.service';
import { NavbarComponent } from './navbar/navbar.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { FooterComponent } from './footer/footer.component';
import { ColegioComponent } from './colegio/colegio.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { ProfesoresComponent } from './profesores/profesores.component';



@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    ShowUsersComponent,
    NavbarComponent,
    CarruselComponent,
    ContenidoComponent,
    FooterComponent,
    ColegioComponent,
    GaleriaComponent,
    UbicacionComponent,
    ProfesoresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [LogService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
