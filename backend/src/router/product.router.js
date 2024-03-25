const router = require('express').Router()
const {faker} = require("@faker-js/faker")

const Products = require("../model/product.model")

router.get("/products", async (req, res) => {
    const products = await Products.findAll()
    res.status(200).json({
        ok: true,
        status: 200,
        body: products
    })
})

router.get("/products", (req, res) => {
    res.send("Im a router");
})

router.post("/products", async (req, res) => {
    await Products.sync()
    const createProduct = await Products.create({
        product_name: faker.commerce.product(),
        price: faker.commerce.price(),
        quantity: 1,
        is_stock: faker.datatype.boolean()
    })
    res.status(200).json({
        ok:true,
        status: 200,
        message: "Created Product",
    })
})

router.put("/products", (req, res) => {
    res.send("Im a router");
})

router.delete("/products", (req, res) => {
    res.send("Im a router");
})

module.exports = router;