import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ModificarComponent } from './componentes/modificar/modificar.component';
import { CadastrarComponent } from './componentes/cadastrar/cadastrar.component';

const routes: Routes = [
  {path: '', redirectTo:'/inicio', pathMatch: 'full'},
  {path: 'inicio', component:InicioComponent},
  {path: 'add', component:CadastrarComponent},
  {path: 'edit/:id', component:ModificarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
