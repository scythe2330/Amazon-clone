import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModel.js';
import sanitize from 'mongo-sanitize';
import { ensureLogin, ensureAdmin } from '../functions.js';

const productRouter = express.Router();

productRouter.get(
	'/',
	expressAsyncHandler(async (req, res) => {
		const products = await Product.find({});
		res.send(products);
	})
);

productRouter.post(
	'/adding',
	ensureLogin,
	ensureAdmin,
	expressAsyncHandler(async (req, res) => {
		let createdProduct = null;

		try {
			const product = new Product({
				title: sanitize(req.body.title),
				cateID: sanitize(req.body.cateID),
				isPromo: sanitize(req.body.isPromo),
				isBestSeller: sanitize(req.body.isBestSeller),
				price: sanitize(req.body.price),
				quantitySale: sanitize(req.body.quantitySale),
				quantityInStock: sanitize(req.body.quantityInStock),
				image: sanitize(req.body.image),
			});
			createdProduct = await product.save();
		} catch (err) {
			res.send(err.message);
		}

		res.status(200).send({
			message: `Product: ${sanitize(req.body.title)} Created`,
			product: createdProduct,
		});
	})
);

productRouter.put(
	'/editing',
	ensureLogin,
	ensureAdmin,
	expressAsyncHandler(async (req, res) => {
		const editProduct = await Product.findById(req.body.id);

		if (editProduct) {
			editProduct.title = sanitize(req.body.title) || editProduct.title;
			editProduct.cateID =
				sanitize(req.body.cateID) || editProduct.cateID;
			editProduct.isPromo =
				sanitize(req.body.isPromo) || editProduct.isPromo;
			editProduct.isBestSeller =
				sanitize(req.body.isBestSeller) || editProduct.isBestSeller;
			editProduct.price = sanitize(req.body.price) || editProduct.price;
			editProduct.quantitySale =
				sanitize(req.body.quantitySale) || editProduct.quantitySale;
			editProduct.quantityInStock =
				sanitize(req.body.quantityInStock) ||
				editProduct.quantityInStock;
			editProduct.image = sanitize(req.body.image) || editProduct.image;
		}

		const updatedProduct = await editProduct.save();
		res.status(200).send(updatedProduct);
	})
);

productRouter.delete(
	'/:id',
	ensureLogin,
	ensureAdmin,
	expressAsyncHandler(async (req, res) => {
		const product = await Product.findById(sanitize(req.params.id));
		if (product) {
			const deleteProduct = await product.remove();
			res.status(200).send({
				message: 'Product Deleted',
				product: deleteProduct,
			});
		} else {
			res.status(404).send({ message: 'Product Not Found' });
		}
	})
);

/*
// the route that push local product data to MongoDB, only run once
productRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    // await Product.remove({});
    const products = await Product.insertMany(data.products);
        res.send({ products });
    })
);
*/

export default productRouter;
