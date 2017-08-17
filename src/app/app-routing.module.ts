import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/_pages/home/home.component";
import { ConveniosComponent } from "app/_pages/convenios/convenios.component";
import { AboutusComponent } from "app/_pages/aboutus/aboutus.component";
import { ExamenesComponent } from "app/_pages/examenes/examenes.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'convenios', component: ConveniosComponent },
  {path: 'sobre-nosotros', component: AboutusComponent },
  {path: 'examenes', component: ExamenesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
