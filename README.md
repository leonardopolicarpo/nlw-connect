# 🚀 Referral System API

This project is a **REST API** built with **Node.js** and **Fastify**, using **PostgreSQL** and **Redis** to store and manage data. The API allows users to register for events, invite new participants, and generate a ranking based on referrals.

📖 This document is available in [English](README.md) | [Português](README.pt-BR.md)

## 🛠️ Technologies Used

- [Node.js](https://nodejs.org/) - JavaScript runtime for backend execution
- [Fastify](https://www.fastify.io/) - High-performance web framework
- [PostgreSQL](https://www.postgresql.org/) - Relational database
- [Drizzle ORM](https://orm.drizzle.team/) - Minimalist ORM focused on TypeScript and SQL databases
- [Redis](https://redis.io/) - Caching system for optimization
- [Zod](https://zod.dev/) - Data validation
- [Swagger](https://swagger.io/) - API documentation
- [Docker](https://www.docker.com/) - Containerization of services
- [Biome](https://biomejs.dev/) - Code formatting and linting (alternative to ESLint and Prettier)

## 🚀 How to Run the Project

### 📦 **Prerequisites**

Ensure you have installed:
- [Node.js](https://nodejs.org/) (Recommended version 20+)
- [Docker](https://www.docker.com/get-started) (optional)
- [Docker Compose](https://docs.docker.com/compose/) (optional)

### 🛠️ **Environment Configuration**

1. Clone the repository:

   ```sh
   git clone https://github.com/leonardopolicarpo/nlw-connect.git
   cd nlw-connect
   ```

2. Copy the `.env.example` file and rename it to `.env`:

   ```sh
   cp .env.example .env
   ```

3. Update the `.env` file with the necessary configurations.

### 🐳 **Starting Databases with Docker**

If using **Docker**, simply run:

```sh
docker compose up -d
```

This will start **PostgreSQL** and **Redis** containers.

### ▶️ **Running the API**

1. Install dependencies:

   ```sh
   npm install
   ```

2. Run database migrations:

   ```sh
   npm run migrate
   ```

3. Start the server:

   ```sh
   npm run dev
   ```

The API will be running at **http://localhost:3333** 🚀

### 🚀 **Running Without Docker**

If you prefer to run the databases manually:

1. Install PostgreSQL and Redis on your machine
2. Configure the .env file with your local database credentials
3. Start PostgreSQL and Redis manually before running the API

### 📖 **Accessing API Documentation**

After starting the server, access the documentation via **Swagger**:

👉 [http://localhost:3333/docs](http://localhost:3333/docs)

## 📜 **Main Endpoints**

| Method | Route                                        | Description                                              |
|--------|----------------------------------------------|----------------------------------------------------------|
| `POST` | `/subscriptions`                             | Subscribes someone to the event                          |
| `GET`  | `/invites/:subscriberId`                     | Redirects user to the invite link                        |
| `GET`  | `/subscriber/:subscriberId/ranking/position` | Retrieves the subscriber's ranking position              |
| `GET`  | `/subscribers/:subscriberId/ranking/clicks`  | Gets the number of clicks on the subscriber's invite link|
| `GET`  | `/subscribers/:subscriberId/ranking/count`   | Gets the number of invites sent by the subscriber        |
| `GET`  | `/ranking`                                   | Retrieves the overall ranking                            |

## 🤝 **Contributing**

If you want to contribute with improvements or fixes, follow these steps:

1. **Fork** this repository
2. Create a **branch** for your feature: `git checkout -b my-feature`
3. Commit the changes: `git commit -m 'My new feature'`
4. Push to the remote repository: `git push origin my-feature`
5. Open a **Pull Request**

---

For the Portuguese version of this document, see [README.pt-BR.md](README.pt-BR.md).