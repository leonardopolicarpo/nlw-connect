# 🚀 API de Indicações - NLW Rocketseat

Este projeto é uma **API REST** construída com **Node.js** e **Fastify**, utilizando **PostgreSQL** e **Redis** para armazenar e gerenciar dados. A API permite que os usuários se cadastrem em eventos, convidem novos participantes e gerem um ranking com base nas indicações.

📖 Este documento está disponível em [English](README.md) | [Português](README.pt-BR.md)

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript para backend
- [Fastify](https://www.fastify.io/) - Framework web de alta performance
- [PostgreSQL](https://www.postgresql.org/) - Banco de dados relacional
- [Redis](https://redis.io/) - Sistema de cache para otimização
- [Zod](https://zod.dev/) - Validação de dados
- [Swagger](https://swagger.io/) - Documentação da API
- [Docker](https://www.docker.com/) - Containerização de serviços
- [Biome](https://biomejs.dev/) - Formatação e linting do código

## 🚀 Como Rodar o Projeto

### 📦 **Pré-requisitos**

Certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (Versão recomendada 18+)
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)

### 🛠️ **Configuração do Ambiente**

1. Clone o repositório:

   ```sh
   git clone https://github.com/seu-usuario/nlw-connect.git
   cd nlw-connect
   ```

2. Copie o arquivo `.env.example` e renomeie para `.env`:

   ```sh
   cp .env.example .env
   ```

3. Atualize o arquivo `.env` com as configurações necessárias.

### 🐳 **Iniciando os Bancos de Dados com Docker**

Se estiver usando **Docker**, basta executar:

```sh
docker-compose up -d
```

Isso iniciará os containers do **PostgreSQL** e **Redis**.

### ▶️ **Rodando a API**

1. Instale as dependências:

   ```sh
   npm install
   ```

2. Execute as migrações do banco de dados:

   ```sh
   npm run migrate
   ```

3. Inicie o servidor:

   ```sh
   npm run dev
   ```

A API estará rodando em **http://localhost:3333** 🚀

### 📖 **Acessando a Documentação da API**

Após iniciar o servidor, acesse a documentação via **Swagger**:

👉 [http://localhost:3333/docs](http://localhost:3333/docs)

## 📜 **Principais Endpoints**

| Método | Rota         | Descrição |
|--------|-------------|-----------|
| `POST` | `/subscriptions` | Registra um novo participante |
| `POST` | `/invite`   | Convida um novo participante |
| `GET`  | `/ranking`  | Obtém o ranking de indicações |

## 🤝 **Contribuindo**

Se quiser contribuir com melhorias ou correções, siga estes passos:

1. **Faça um fork** deste repositório
2. Crie uma **branch** para sua funcionalidade: `git checkout -b minha-funcionalidade`
3. Faça o commit das alterações: `git commit -m 'Minha nova funcionalidade'`
4. Envie para o repositório remoto: `git push origin minha-funcionalidade`
5. Abra um **Pull Request**

---

Para a versão em inglês deste documento, veja [README.md](README.md).