const express = require("express");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const port = process.env.PORT || 5000;

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "2.0.0",
      title: "Techers API",
      description: "This API is for a highschool , to insert the studend information, courses and the grades ",
      contact: {
        name: "Amazing Developer"
      },
      servers: ["http://localhost:5000"]
    }
  },
  // ['.routes/*.js']
  apis: ["app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
/**
 * @swagger
 * /customers:
 *  get:
 *    description: Use to request Studens courses, grades, and notes
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get("/customers", (req, res) => {
  res.status(200).send("Student information");
});

app.get("/", (req, res) => {
  res.status(200).send("Student information");
});

/**
 * @swagger
 * /customer:
 *    put:
 *      description: Use to update a customer
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '201':
 *        description: Successfully created user
 */



app.put("/customer", (req, res) => {
  res.status(200).send("Successfully updated customer");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});