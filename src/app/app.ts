import { Component ,ViewEncapsulation} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { Navbar } from './pages/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  encapsulation: ViewEncapsulation.None, 
})
export class AppComponent {

  ocultarPantalla = false;

  
  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Ocultar contenido si estamos en login, mostrar en otras rutas
      this.ocultarPantalla = 
    event.urlAfterRedirects === '/sign_in' || 
    event.urlAfterRedirects === '/login';
      }
    });

  }
  
  irALogin() {
    this.ocultarPantalla = true;
    this.router.navigate(['/login']);
  }

   irALogin_() {
    this.ocultarPantalla = true;
    this.router.navigate(['/sign_in']);
  }

    ircliente() {
    this.ocultarPantalla = true;
    this.router.navigate(['/cliente']);
  }
  
    irunidad() {
    this.ocultarPantalla = true;
    this.router.navigate(['/unidad']);
  }
  
  
}
