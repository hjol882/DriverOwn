import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule ,FormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css'
})
export class SignIn {

  username = '';
  password = '';

  constructor(private http: HttpClient,private router: Router, private location: Location) {}

  //login() {
    //const user = { username: this.username, password: this.password };

    //this.http.post('http://localhost:5000/api/login', user)
      //.subscribe({
        //next: (response: any) => {
          //alert(response.mensaje);
        //},
        //error: () => {
          //alert('Credenciales inválidas');
        //}
      //});
  //}

  registrar() {
    const user = { username: this.username, password: this.password };

    this.http.post('http://localhost:5000/api/registro', user)
      .subscribe({
        next: () => alert('Usuario registrado'),
            error: (err) => {
        console.error('Error al registrar:', err);
        alert('Error al registrar');
      },
      });
  }

  //constructor(private router: Router, private location: Location) {}

    regresarAInicio() {
    this.router.navigate(['/']);
  }

}
