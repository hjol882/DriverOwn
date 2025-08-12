import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule ,FormsModule],
  templateUrl: './cliente.html',
  styleUrl: './cliente.css'
})
export class Cliente {

}
