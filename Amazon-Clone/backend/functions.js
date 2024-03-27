import jwt from 'jsonwebtoken';
import jwt_decode from 'jwt-decode';

export const generateToken = (user) => {
	return jwt.sign(
		{
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
		},
		'secret',
		{
			expiresIn: '1h',
		}
	);
};

export const ensureLogin = (req, res, next) => {
	try {
		const token = req.cookies.token;

		if (!token) {
			res.status(401).send({ message: 'No User' });
		}

		jwt.verify(token, 'secret');
		res.send(token);
		next();
	} catch (err) {
		console.log(err);
		res.status(401).send({ message: 'Invalid User' });
	}
};

export const ensureAdmin = (req, res, next) => {
	try {
		const token = req.cookies.token;
		jwt.verify(token, 'secret');

		const userInfo = jwt_decode(token);
		if (userInfo.isAdmin === true) {
			next();
		} else {
			res.send(false);
		}
	} catch (err) {
		console.log(err);
		res.status(401).send({ message: 'Invalid Token' });
	}
};
