<div align="center">
  <h1>💸 CashFlow</h1>
  <p>Um Sistema FullStack moderno para Gestão de Despesas Pessoais.</p>

  <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
  <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white" alt="Spring Boot" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
</div>

<br>

## 📝 Sobre o Projeto

O **CashFlow** é uma aplicação Single Page Application (SPA) desenvolvida para ajudar usuários a controlarem suas finanças de forma simples e visual. O projeto demonstra a integração completa entre uma API RESTful robusta no backend e um frontend reativo.

### ✨ Funcionalidades
* **Dashboard Dinâmico:** Cálculo em tempo real do total de receitas, despesas e saldo atual.
* **Gestão de Transações:** Cadastro de novas entradas e saídas com validações de formulário.
* **Listagem Inteligente:** Histórico de transações com formatação de moeda brasileira (BRL) e estilização condicional.
* **Semeador de Banco de Dados:** Criação automática de categorias iniciais ao subir o servidor.

---

## 🚀 Tecnologias Utilizadas

### Frontend
* **Angular 17+** (Standalone Components, Reactive Forms, HttpClient)
* **Tailwind CSS** (Estilização utilitária e design responsivo)
* **TypeScript**

### Backend
* **Java 17**
* **Spring Boot 3** (Web, Data JPA)
* **Hibernate** (ORM)
* **PostgreSQL** (Banco de Dados Relacional)

---

## ⚙️ Como executar o projeto

### Pré-requisitos
* Git
* Java JDK 17+
* Node.js
* Angular CLI
* PostgreSQL

### 1. Banco de Dados
Crie um banco de dados vazio no PostgreSQL chamado:
```sql
CREATE DATABASE cashflow_db;
```

### 2. Backend (Spring Boot)
```bash
cd api
# Execute a aplicação (No Windows)
.\mvnw spring-boot:run
```
> A API estará rodando na porta **8080**.

### 3. Frontend (Angular)
```bash
cd cashflow-ui
npm install
ng serve -o
```
> O navegador abrirá automaticamente em **http://localhost:4200**.

---

## 📡 Endpoints Principais da API

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/api/categorias` | Retorna a lista de categorias disponíveis. |
| `GET` | `/api/transacoes` | Retorna todo o histórico de transações. |
| `POST` | `/api/transacoes` | Cadastra uma nova transação. |
| `DELETE` | `/api/transacoes/{id}` | Remove uma transação específica pelo ID. |

---

<div align="center">
  Feito com dedicação durante a jornada de aprendizado FullStack! 🚀
</div>
