import '../css/Profile.css';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../context/UserContext';
import { baseUrl } from '../config/constant';

const Profile = () => {
	const { user } = useContext(UserContext);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordAgain, setPasswordAgain] = useState('');

	const [errorName, setErrorName] = useState('');
	const [errorPassword, setErrorPassword] = useState('');
	const [errorPasswordAgain, setErrorPasswordAgain] = useState('');

	// client side validation
	const validateUpdate = () => {
		let isValidated = true;
		let letterNumber = /^[0-9a-zA-Z]+$/;

		if (!name.match(letterNumber)) {
			setErrorName('Your name should contain letters and numbers only');
			isValidated = false;
		} else {
			setErrorName('');
		}

		if (password === '') {
			setErrorPassword('');
		} else if (password.length < 6 || password.length > 32) {
			setErrorPassword('Password must be 6 to 32 characters');
			isValidated = false;
		} else {
			setErrorPassword('');
		}

		if (passwordAgain !== password) {
			setErrorPasswordAgain('Password does not match');
			isValidated = false;
		} else {
			setErrorPasswordAgain('');
		}

		return isValidated;
	};

	const update = async () => {
		try {
			const newInfo = {
				_id: user._id,
				name,
				email,
				password,
			};

			await axios.put(baseUrl + '/api/users/profile', newInfo);

			window.location.reload();
		} catch (err) {
			console.error(err);
		}
	};

	const logout = async () => {
		try {
			await axios.get(baseUrl + '/api/users/logout');

			window.location.href = '/login';
		} catch (err) {
			console.error(err);
		}
	};

	const submitHandler = (e) => {
		e.preventDefault();

		if (validateUpdate()) {
			update();
			alert('Information updated!');
		}
	};

	useEffect(() => {
		if (user) {
			setName(user.name);
			setEmail(user.email);
		}
	}, [user]);

	return (
		<div className='profile'>
			{user && (
				<div className='form-container'>
					<form className='form'>
						<h1>Welcome, {user.name}</h1>

						<label htmlFor='name'>Username</label>
						<input
							className='form-input'
							type='text'
							id='name'
							value={user.name}
							readOnly
						/>
						<span className='error'>{errorName}</span>

						<label htmlFor='email'>Email</label>
						<input
							className='form-input'
							type='text'
							id='email'
							value={user.email}
							readOnly
						/>

						<label htmlFor='password'>New Password</label>
						<input
							className='form-input'
							type='password'
							id='password'
							value={password}
							onChange={(event) => {
								setPassword(event.target.value);
							}}
						/>
						<span className='error'>{errorPassword}</span>

						<label htmlFor='password-again'>Confirm Password</label>
						<input
							className='form-input'
							type='password'
							id='password-again'
							value={passwordAgain}
							onChange={(event) => {
								setPasswordAgain(event.target.value);
							}}
						/>
						<span className='error'>{errorPasswordAgain}</span>

						<button
							className='update-button'
							type='submit'
							onClick={submitHandler}
						>
							Update Info
						</button>

						<button
							className='logout-button'
							type='button'
							onClick={() => {
								logout();
							}}
						>
							Logout
						</button>
					</form>
				</div>
			)}
		</div>
	);
};

export default Profile;
