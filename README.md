# Costs

Aplicação React para cadastro e gerenciamento de projetos, com controle de orçamento, categorias e serviços vinculados a cada projeto.

Projeto em produção:
[https://react-cost.netlify.app/](https://react-cost.netlify.app/)

## Tecnologias

- React
- React Router
- JSON Server
- CSS Modules

## Como executar localmente

### 1. Instale as dependências

```bash
npm install
```

### 2. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com o conteúdo:

```env
REACT_APP_API_URL=http://localhost:5000
```

Se preferir, copie o arquivo `.env.example`:

```bash
copy .env.example .env
```

### 3. Inicie a API local

```bash
npm run server
```

A API fake será disponibilizada em `http://localhost:5000`.

### 4. Inicie a aplicação React

Em outro terminal:

```bash
npm start
```

O frontend será aberto em `http://localhost:3000`.

## Variáveis de ambiente

- `REACT_APP_API_URL`: URL base da API consumida pelo frontend.

Exemplo para ambiente local:

```env
REACT_APP_API_URL=http://localhost:5000
```
