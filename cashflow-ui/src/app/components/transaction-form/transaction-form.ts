import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './transaction-form.html',
  styleUrls: ['./transaction-form.css']
})
export class TransactionForm {
  
  formulario: FormGroup;

  constructor(private router: Router, private api: ApiService) {
    this.formulario = new FormGroup({
      descricao     : new FormControl(''       , Validators.required),
      valor         : new FormControl(''       , [Validators.required, Validators.min(0.01)]),
      tipo          : new FormControl('DESPESA', Validators.required),
      categoria     : new FormControl(''       , Validators.required),
      data          : new FormControl(''       , Validators.required)
    });
  }

  salvar() {
    if (this.formulario.valid) {
      
      const dadosForm = this.formulario.value;

      const transacaoParaSalvar = {
        descricao: dadosForm.descricao,
        valor: dadosForm.valor,
        data: dadosForm.data,
        categoria: { 
          id: dadosForm.tipo === 'RECEITA' ? 1 : 2 
        }
      };

      this.api.salvarTransacao(transacaoParaSalvar).subscribe({
        next: (resposta) => {
          alert('Transação salva com sucesso no Banco de Dados!');
          this.router.navigate(['/transacoes']);
        },
        error: (erro) => {
          console.error("Erro ao salvar:", erro);
          alert('Ops! Aconteceu um erro ao tentar salvar no servidor.');
        }
      });

    } else {
      this.formulario.markAllAsTouched();
    }
  }
}