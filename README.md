# 🎙️ Gerenciador de Podcasts

API desenvolvida em **Node.js e TypeScript** para gerenciamento e consulta de episódios de podcasts em vídeo.

## Funcionalidades

- Listar episódios de podcasts
- Filtrar episódios pelo nome do podcast
- Organização por categorias
- Retorno de dados em JSON

## Tecnologias

- Node.js
- TypeScript
- HTTP
- JSON

## Endpoints

### Listar episódios

```http
GET /api/list
```

### Filtrar episódios

```http
GET /api/episode?p=nome-do-podcast
```

Exemplo:

```http
GET /api/episode?p=flow
```

## Executando o projeto

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run start:dev
```

## Estrutura

```text
src/
├── controllers/
├── models/
├── repositories/
├── routes/
├── services/
├── utils/
├── app.ts
└── server.ts
```

## Objetivo

Projeto desenvolvido para praticar conceitos de desenvolvimento Backend com **Node.js e TypeScript**, utilizando separação de responsabilidades entre controllers, services e repositories.
