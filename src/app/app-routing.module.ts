import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/_pages/home/home.component";
import { ConveniosComponent } from "app/_pages/convenios/convenios.component";
import { AboutusComponent } from "app/_pages/aboutus/aboutus.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'convenios', component: ConveniosComponent },
  {path: 'sobre-nosotros', component: AboutusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
