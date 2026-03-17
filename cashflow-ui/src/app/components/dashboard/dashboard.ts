import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard implements OnInit {
  
  totalReceitas: number = 0;
  totalDespesas: number = 0;
  saldoAtual: number = 0;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.carregarDados();
  }

  carregarDados() {
    this.api.getTransacoes().subscribe({
      next: (transacoes) => {
        this.totalReceitas = 0;
        this.totalDespesas = 0;

        transacoes.forEach(t => {
          if (t.categoria.tipo === 'RECEITA') {
            this.totalReceitas += t.valor;
          } else {
            this.totalDespesas += t.valor;
          }
        });

        this.saldoAtual = this.totalReceitas - this.totalDespesas;
      },
      error: (err) => console.error("Erro ao carregar dashboard", err)
    });
  }
}