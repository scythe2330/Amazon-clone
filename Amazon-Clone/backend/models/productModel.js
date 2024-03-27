import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const productSchema = new Schema(
	{
		title: { type: String, required: true },
		cateID: { type: String, required: true },
		isPromo: { type: Boolean, required: true },
		isBestSeller: { type: Boolean, required: true },
		price: { type: Number, required: true },
		quantityInStock: { type: Number, required: true },
		quantitySale: { type: Number, required: true },
		image: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

const Product = mongoose.model('Product', productSchema);

export default Product;
