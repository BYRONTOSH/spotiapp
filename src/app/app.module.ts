import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { PipesimagePipe } from './pipes/pipesimage.pipe';
import { TarjetaComponent } from './components/shared/tarjeta/tarjeta.component';
import { LoadingComponent } from './components/shared/loading/loading.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscadorComponent,
    ArtistaComponent,
    NavbarComponent,
    FooterComponent,
    PipesimagePipe,
    TarjetaComponent,
    LoadingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
