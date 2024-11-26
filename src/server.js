import express from "express";
import productsRouter from "./modules/products/products.router.js";

const app = express();

app.use("/products", productsRouter);

export default app;