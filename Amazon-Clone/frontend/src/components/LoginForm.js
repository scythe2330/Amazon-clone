import '../css/LoginForm.css';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../config/constant';
import UserContext from '../context/UserContext';

const LoginForm = () => {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	const [errorUsername, setErrorUsername] = useState('');
	const [errorPassword, setErrorPassword] = useState('');

	const { getUser } = useContext(UserContext);

	const login = async () => {
		try {
			const loginData = {
				name,
				password,
			};

			await axios.post(baseUrl + '/api/users/login', loginData);

			await getUser();
			window.location.href = '/';
		} catch (err) {
			console.error(err);
		}
	};

	const validateLogin = () => {
		let isValidated = true;

		if (name === '') {
			setErrorUsername('Enter your name');
			isValidated = false;
		} else {
			setErrorUsername('');
		}

		if (password === '') {
			setErrorPassword('Enter your password');
			isValidated = false;
		} else {
			setErrorPassword('');
		}

		return isValidated;
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if (validateLogin()) {
			login();
		}
	};

	return (
		<div className='login'>
			<div className='form-container'>
				<form className='form' onSubmit={submitHandler}>
					<h1>Sign-In</h1>

					<label htmlFor='name'>Username</label>
					<input
						className='form-input'
						type='text'
						id='name'
						value={name}
						onChange={(event) => {
							setName(event.target.value);
						}}
					/>
					<span className='error'>{errorUsername}</span>

					<label htmlFor='password'>Password</label>
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

					<button className='login-button' type='submit'>
						Sign-In
					</button>
				</form>

				<p>New to Amazon?</p>
				<Link to='/registration'>
					<button>Create Your Amazon Account</button>
				</Link>
			</div>
		</div>
	);
};

export default LoginForm;
