import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import productRouter from './routers/productRouter.js';
import categoryRouter from './routers/categoryRouter.js';
import userRouter from './routers/userRouter.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(
	cors({
		origin: [
			'http://localhost:3000',
			'https://amazon-clone-mern-jz.herokuapp.com/',
		],
		credentials: true,
	})
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const ATLAS_URI =
	'mongodb+srv://Jeff:123@amazonclonecluster.yi6s9.mongodb.net/development?retryWrites=true&w=majority';

// connect to MongoDB Atlas
mongoose
	.connect(ATLAS_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => console.log('MongoDB Connected!'))
	.catch((err) => console.log(err));

// use Routers
app.use('/api/products', productRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/users', userRouter);

/*
app.get('/', (req, res) => {
	res.send('Server is ready');
});
*/

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../frontend/build')));

	app.get('*', (req, res) =>
		res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
	);
}

app.use((err, req, res, next) => {
	res.status(500).send({ message: err.message });
});

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
