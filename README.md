# 🎙️ Gerenciador de Podcasts

API desenvolvida em **Node.js e TypeScript** para listar e filtrar episódios de podcasts em vídeo.

## Funcionalidades

- Listar episódios
- Filtrar por podcast
- Filtrar por categoria
- Retornar dados em JSON

## Tecnologias

- Node.js
- TypeScript
- HTTP
- JSON

## Endpoints

```http
GET /api/list
```

Lista todos os episódios.

```http
GET /api/podcasts?p=brunetcast
```

Filtra pelo nome do podcast.

```http
GET /api/category?c=mentalidade
```

Filtra os episódios por categoria.

## Executando

```bash
npm install
npm run start:watch
```

A API estará disponível na porta configurada no arquivo `.env`.

Exemplo:

```text
http://localhost:3333
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

Projeto desenvolvido para praticar conceitos de Backend com **Node.js e TypeScript**, utilizando rotas, controllers, services, repositories e separação de responsabilidades.
