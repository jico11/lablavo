import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/_pages/home/home.component";
import { ConveniosComponent } from "app/_pages/convenios/convenios.component";
import { AboutusComponent } from "app/_pages/aboutus/aboutus.component";
import { ExamenesComponent } from "app/_pages/examenes/examenes.component";
import { BioquimicosComponent } from "app/_pages/examenes_pages/bioquimicos/bioquimicos.component";
import { Examenes1Component } from "app/_pages/examenes1/examenes1.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'convenios', component: ConveniosComponent },
  {path: 'sobre-nosotros', component: AboutusComponent },
  {path: 'examenes', component: ExamenesComponent},
  { path: '', redirectTo: '/bioquimicos', pathMatch: 'full' },
  {path: 'bioquimicos', component: BioquimicosComponent},
  {path: 'examenes1', component: Examenes1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
