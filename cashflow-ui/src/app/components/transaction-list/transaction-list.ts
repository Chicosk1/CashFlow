import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './transaction-list.html',
  styleUrls: ['./transaction-list.css']
})

export class TransactionList implements OnInit {

  transacoes: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.carregarTransacoes();
  }

  carregarTransacoes() {
    this.api.getTransacoes().subscribe({
      next: (dadosQueVieramDoBanco) => {
        this.transacoes = dadosQueVieramDoBanco;
        console.log("Transações do Banco:", this.transacoes);
      },
      error: (erro) => console.error("Erro ao buscar transações", erro)
    });
  }
}