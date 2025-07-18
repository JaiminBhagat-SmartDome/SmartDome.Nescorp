import { Options } from "swagger-jsdoc";

const swaggerOptions: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "E-Commerce API",
      version: "1.0.0",
      description: "Admin & public endpoints"
    },
    servers: [{ url: "http://localhost:5000/api" }]
  },
  apis: ["./src/routes/*.ts", "./src/models/*.ts"]
};

export default swaggerOptions;