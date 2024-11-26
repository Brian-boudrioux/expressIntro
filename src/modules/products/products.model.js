// model manipulate data

import products from "../../../products.js";

// simulate interaction with a database

const readAll = () => {
	return products;
};

const readByCategory = (category) => {
	return products.filter((product) => product.category.includes(category));
};

const readById = (id) => {
  return products.find((product) => product.id === Number(id));
}

export { readAll, readByCategory, readById };
