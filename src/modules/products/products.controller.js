// controllers handle request/response and call model to iteract with data
import { readByCategory, readById } from "./products.model.js";

const getAllProducts = (req, res) => {
	const category = req.query.category ? req.query.category : "";
	const filteredProductsByCategory = readByCategory(category);

	const limit = req.query.limit
		? req.query.limit
		: filteredProductsByCategory.length;
	const filteredProducts = filteredProductsByCategory.slice(0, limit);

	res.json(filteredProducts);
};

const getProductById = (req, res) => {
	const id = req.params.id;
	const product = readById(id);
	if (product) res.json(product);
	else res.sendStatus(404);
};

export { getAllProducts, getProductById };
