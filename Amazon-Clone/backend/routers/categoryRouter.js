import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Category from '../models/categoryModel.js';

const categoryRouter = express.Router();

categoryRouter.get(
	'/',
	expressAsyncHandler(async (req, res) => {
		const categories = await Category.find({});
		res.send(categories);
	})
);

/*
// the route that push local category data to MongoDB, only run once
categoryRouter.get('/seed', expressAsyncHandler(async (req, res) => {
      // await Category.remove({});
      const categories = await Category.insertMany(data.categories);
      res.send({ categories });
    })
);
*/

export default categoryRouter;
