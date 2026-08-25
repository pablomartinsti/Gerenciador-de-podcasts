# 🎙️ Podcast Manager

### Descrição

API para centralizar episódios de podcasts em vídeo, permitindo listar e filtrar conteúdos por podcast e categoria.

### Domínio

Podcasts em vídeo.

### Features

- Listar todos os episódios
- Filtrar episódios por podcast
- Filtrar episódios por categoria
- Categorias como saúde, fitness, mentalidade, humor, entre outras

## Endpoints

```http
GET /api/list
```

```http
GET /api/podcasts?p=brunetcast
```

```http
GET /api/category?c=mentalidade
```

## Tecnologias

- Node.js
- TypeScript
- HTTP
- JSON

## Como executar

```bash
npm install
npm run start:watch
```

A aplicação será executada na porta definida no arquivo `.env`.
