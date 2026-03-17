import { Routes } from '@angular/router';

import { Dashboard } from './components/dashboard/dashboard';
import { TransactionForm } from './components/transaction-form/transaction-form';
import { TransactionList } from './components/transaction-list/transaction-list';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'transacoes', component: TransactionList },
  { path: 'nova-transacao', component: TransactionForm },
  { path: '**', redirectTo: '' }
];