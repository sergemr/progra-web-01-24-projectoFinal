const express = require('express');
const morgan = require('morgan');
const routerProduct = require("../router/product.router");
const routerUser = require("../router/user.router");


const app = express();
const cors = require('cors');

// Allow all origins
app.use(cors());

app.use(morgan("dev"));
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
    res.send('This is Express');
});

// API routes
app.use("/api/v1", routerProduct);
app.use("/api/v1", routerUser);


module.exports = app;
