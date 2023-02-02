const swaggerJsdoc = require("swagger-jsdoc");

const options = {
	definition: {
	  openapi: "3.0.0",
	  info: {
		title: "JWT авторизация",
		version: "1.0.0",
		description:
		  "REST API",
	  },
	  servers: [
		{
		  url: "http://localhost:5000",
		},
	  ],
	},
	apis: ["./swagger/*.js"],
  };
  
const specs = swaggerJsdoc(options);
module.exports = (specs)