# E-Commerce Admin & Client Application

An end-to-end solution built with React (client) and Node.js + TypeScript + Express (server), backed by MongoDB. Fully containerized with Docker and orchestrated via Docker Compose for both development and production environments.

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)  
2. [Folder Structure](#folder-structure)  
3. [Environment Configuration](#environment-configuration)  
4. [Prerequisites](#prerequisites)  
5. [Local Development](#local-development)  
6. [Production Deployment](#production-deployment)  
7. [Docker Compose Commands](#docker-compose-commands)  
8. [API Endpoints](#api-endpoints)  
9. [Scripts & Commands](#scripts--commands)  
10. [Next Steps](#next-steps)  

---

## Architecture Overview

This repository follows a **monorepo** pattern, consisting of two main services:

- **client**: React application with separate admin and public interfaces, state management via Context API, and Axios for API calls.  
- **server**: Node.js + TypeScript + Express REST API, layered into controllers, services, and models. Mongoose ODM handles MongoDB interactions.  

Both services are Dockerized, use environment-specific `.env` files, and communicate over an internal Docker network. MongoDB runs as its own container.

---

## Folder Structure

```text
.
├─ client                     # React frontend
│  ├─ public
│  ├─ src
│  │  ├─ assets
│  │  ├─ components
│  │  ├─ context
│  │  ├─ hooks
│  │  ├─ pages
│  │  └─ services
│  ├─ .env.development
│  ├─ .env.production
│  ├─ Dockerfile
│  └─ package.json
│
├─ server                     # Express REST API
│  ├─ src
│  │  ├─ config
│  │  ├─ controllers
│  │  ├─ middlewares
│  │  ├─ models
│  │  ├─ routes
│  │  ├─ services
│  │  └─ index.ts
│  ├─ .env.development
│  ├─ .env.production
│  ├─ Dockerfile
│  └─ package.json
│
├─ docker-compose.dev.yml     # Development setup
├─ docker-compose.prod.yml    # Production setup
└─ README.md
```

---

## Environment Configuration

### Client

| Variable               | Development                           | Production                                  |
|------------------------|---------------------------------------|---------------------------------------------|
| REACT_APP_API_URL      | http://localhost:5000/api             | https://api.myapp.com/api                   |
| REACT_APP_ENV          | development                           | production                                  |

### Server

| Variable     | Development                                     | Production                                       |
|--------------|-------------------------------------------------|--------------------------------------------------|
| NODE_ENV     | development                                     | production                                       |
| PORT         | 5000                                            | 5000                                             |
| MONGO_URI    | mongodb://mongo:27017/app-dev                   | mongodb+srv://<user>:<pass>@cluster/app-prod     |
| JWT_SECRET   | dev-secret                                      | set via CI/CD secrets                            |

---

## Prerequisites

- Docker >= 20.10  
- Docker Compose >= 1.29  
- (Optional) Yarn or npm for local scripts  

---

## Local Development

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-org/ecommerce-app.git
   cd ecommerce-app
   ```

2. Start services in development mode:  
   ```bash
   docker-compose -f docker-compose.dev.yml up --build
   ```

3. Access applications:  
   - React client: http://localhost:3000  
   - Express API: http://localhost:5000/api  

4. Code changes in `client/src` or `server/src` hot-reload automatically.

---

## Production Deployment

1. Build and start all services:  
   ```bash
   docker-compose -f docker-compose.prod.yml up --build -d
   ```

2. Verify containers are running:  
   ```bash
   docker ps
   ```

3. React client will serve on port 80; API on port 5000.

4. Ensure production environment variables (especially `JWT_SECRET` and `MONGO_URI`) are injected via your CI/CD or orchestration platform.

---

## Docker Compose Commands

| Command                                     | Description                                |
|---------------------------------------------|--------------------------------------------|
| `docker-compose -f docker-compose.dev.yml up`    | Spin up dev containers with hot-reload     |
| `docker-compose -f docker-compose.dev.yml down`  | Tear down dev environment                  |
| `docker-compose -f docker-compose.prod.yml up --build -d` | Build and run production containers in background |
| `docker-compose -f docker-compose.prod.yml down` | Tear down production environment           |

---

## API Endpoints

### Admin (protected by JWT)

- `POST   /api/admin/products`  
- `GET    /api/admin/products`  
- `PUT    /api/admin/products/:id`  
- `DELETE /api/admin/products/:id`  
- `GET    /api/admin/orders`  
- `PUT    /api/admin/orders/:id/delivery`  

### Public

- `GET  /api/products`  
- `GET  /api/products/:id`  
- `POST /api/orders`  

---

## Scripts & Commands

### Client

- `yarn start` — Run React in development (requires local Node)  
- `yarn build` — Create production build  

### Server

- `yarn dev` — Run server with ts-node-dev (local)  
- `yarn build` — Compile TypeScript to `dist`  
- `yarn start` — Run compiled server  

---

## Next Steps

- Define an OpenAPI/Swagger specification.  
- Integrate CI/CD pipelines (GitHub Actions, Azure DevOps).  
- Add unit and integration tests (Jest, Supertest).  
- Implement monitoring and logging (Prometheus, Grafana, ELK).  
- Configure SSL termination and custom domains for client and API.
