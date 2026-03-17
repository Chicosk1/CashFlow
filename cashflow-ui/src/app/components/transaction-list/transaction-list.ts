import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface Transacao {
  id: number;
  descricao: string;
  valor: number;
  tipo: 'RECEITA' | 'DESPESA';
  categoria: string;
  data: string;
}

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './transaction-list.html',
  styleUrls: ['./transaction-list.css']
})
export class TransactionList {
  transacoes: Transacao[] = [
    { id: 1, descricao: 'Salário Mensal', valor: 5000.00, tipo: 'RECEITA', categoria: 'Salário', data: '2026-03-05' },
    { id: 2, descricao: 'Aluguel', valor: -1500.00, tipo: 'DESPESA', categoria: 'Moradia', data: '2026-03-10' },
    { id: 3, descricao: 'Mercado', valor: -650.50, tipo: 'DESPESA', categoria: 'Alimentação', data: '2026-03-12' },
    { id: 4, descricao: 'Venda de Bicicleta', valor: 430.00, tipo: 'RECEITA', categoria: 'Extra', data: '2026-03-15' }
  ];
}