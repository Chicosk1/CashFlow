import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  totalReceitas: number = 5430.00;
  totalDespesas: number = 2150.50;
  saldoAtual   : number = this.totalReceitas - this.totalDespesas;
}
