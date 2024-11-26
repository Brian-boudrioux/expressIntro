import express from "express";
import products from './products.js';

const app = express();
const port = 3310;

app.get("/products", (req, res) => {
  const category = req.query.category ? req.query.category : "";
  const filteredProductsByCategory = products.filter((product) => product.category.includes(category))

  const limit = req.query.limit
			? req.query.limit
			: filteredProductsByCategory.length;
  const filteredProducts = filteredProductsByCategory.slice(0, limit);

  res.json(filteredProducts);
});

app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product.id === Number(id));
  if (product) res.json(product);
  else res.sendStatus(404);
});


app.listen(port, () => {
  console.info(`server started at : http://localhost:${port}`);
});