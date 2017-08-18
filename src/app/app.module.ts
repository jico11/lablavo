import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from "environments/environment";
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './_pages/home/home.component';
import { NavbarComponent } from './_pages/navbar/navbar.component';
import { ServicesComponent } from './_pages/services/services.component';
import { FooterComponent } from './_pages/footer/footer.component';
import { AboutusComponent } from './_pages/aboutus/aboutus.component';
import { WorkteamComponent } from './_pages/workteam/workteam.component';
import { ConveniosComponent } from './_pages/convenios/convenios.component';
import { ExamenesComponent } from './_pages/examenes/examenes.component';
import { BioquimicosComponent } from './_pages/examenes_pages/bioquimicos/bioquimicos.component';
import { Examenes1Component } from './_pages/examenes1/examenes1.component';

export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ServicesComponent,
    FooterComponent,
    AboutusComponent,
    WorkteamComponent,
    ConveniosComponent,
    ExamenesComponent,
    BioquimicosComponent,
    Examenes1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAoAMbU2-n4RrAWPOimt5B3zPMaBXKK4xw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
