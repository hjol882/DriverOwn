import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login'; 
import { AppComponent } from './app';
import { Home } from './pages/home/home';
import { SignIn } from './pages/sign-in/sign-in';
import { Cliente } from './pages/cliente/cliente';
import { Unidad } from './pages/unidad/unidad';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: LoginComponent},
  { path: 'sign_in', component: SignIn},
  { path: 'cliente', component: Cliente},
  { path: 'unidad', component: Unidad},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
