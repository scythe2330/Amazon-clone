import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import sanitize from 'mongo-sanitize';
import { generateToken } from '../functions.js';

const userRouter = express.Router();

// register
userRouter.post(
	'/register',
	expressAsyncHandler(async (req, res) => {
		const existingEmail = await User.findOne({
			email: sanitize(req.body.email),
		});
		// check if email exists
		if (existingEmail) {
			res.status(400).json({
				error: 'An account with this email already exists',
			});
			next();
		}

		const user = new User({
			name: sanitize(req.body.name),
			email: sanitize(req.body.email),
			password: bcrypt.hashSync(sanitize(req.body.password), 8),
		});

		const createdUser = await user.save();
		const token = generateToken(createdUser);

		res.cookie('token', token, {
			httpOnly: true,
			secure: true,
			sameSite: 'none',
		}).send();
	})
);

// update info
userRouter.put(
	'/profile',
	expressAsyncHandler(async (req, res) => {
		const user = await User.findById(sanitize(req.body._id));

		if (user) {
			user.name = sanitize(req.body.name) || user.name;
			user.email = sanitize(req.body.email) || user.email;

			if (req.body.password) {
				user.password = bcrypt.hashSync(sanitize(req.body.password), 8);
			}
			const updatedUser = await user.save();

			// update cookie
			const token = generateToken(updatedUser);
			res.cookie('token', token, {
				httpOnly: true,
				secure: true,
				sameSite: 'none',
			});

			res.send({
				_id: updatedUser._id,
				name: updatedUser.name,
				email: updatedUser.email,
			});
		}
	})
);

// login
userRouter.post(
	'/login',
	expressAsyncHandler(async (req, res) => {
		const user = await User.findOne({ name: sanitize(req.body.name) });
		if (user) {
			if (bcrypt.compare(sanitize(req.body.password), user.password)) {
				const token = generateToken(user);
				res.cookie('token', token, {
					httpOnly: true,
					secure: true,
					sameSite: 'none',
				});
				res.send({
					_id: user._id,
					name: user.name,
					email: user.email,
					isAdmin: user.isAdmin,
				});
				return;
			}
		}
		res.status(401).send({ message: 'Invalid username or password' });
	})
);

// logout
userRouter.get('/logout', (req, res) => {
	res.cookie('token', '', {
		httpOnly: true,
		expires: new Date(0),
		secure: true,
		sameSite: 'none',
	}).send();
});

// get logged user info
userRouter.get('/loggedUser', (req, res) => {
	try {
		const token = req.cookies.token;

		if (!token) return res.json(false);

		jwt.verify(token, 'secret');

		res.send(token);
	} catch (err) {
		console.log(err);
		res.json(false);
	}
});

/*
// the route that push local product data to MongoDB, only run once
userRouter.get(
	'/seed',
	expressAsyncHandler(async (req, res) => {
		// await User.remove({});
		const users = await User.insertMany(data.users);
		res.send({ users });
	})
);
*/

export default userRouter;
