const express = require('express');
const morgan = require('morgan');
const routerProduct = require("../router/product.router");
const routerUser = require("../router/user.router");
const routerOrder = require("../router/order.router");

const app = express();



app.use(morgan("dev"));
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
    res.send('This is Express');
});

// API routes
app.use("/api/v1", routerProduct);
app.use("/api/v1", routerUser);
app.use("/api/v1", routerOrder);


module.exports = app;
