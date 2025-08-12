import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

    constructor(private router: Router, private location: Location) {}

  //regresar() {
    // Ir a la ruta anterior (funciona incluso si llegaste desde otra parte del sitio)
    //this.location.back();
  //}

  // O si prefieres una ruta fija:
  regresarAInicio() {
    this.router.navigate(['/']);
  }
}