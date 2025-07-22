# NestJS Book API

A RESTful API built with NestJS that integrates with the external Ice and Fire API to fetch books and also manages local book records using MongoDB.

## 🛠 Tech Stack

- **NestJS**
- **MongoDB** (via Docker)
- **Mongoose** (ODM)
- **Axios** (for external API)
- **class-validator & class-transformer** (for input validation)
- **Jest** (for unit testing)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/victoria-igbobi65/nestjs-books-api.git
cd nestjs-books-api
```

2. Install dependencies

```bash
npm install
```

3. Create a .env file:

```bash
MONGO_URI=mongodb://root:pass@localhost:27017/nest-books?authSource=admin
```

You can use Docker to spin up MongoDB locally (see below).

4. Run MongoDB with Docker (optional)

```bash
docker run -d \
  --name mongodb \
  -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=root \
  -e MONGO_INITDB_ROOT_PASSWORD=pass \
  mongo

```

5. Start the server

```bash
npm run start:dev
```
API will be live at: http://localhost:3000/api
