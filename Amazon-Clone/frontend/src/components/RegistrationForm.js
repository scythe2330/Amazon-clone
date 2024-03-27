import '../css/RegistrationForm.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../config/constant';

const RegistrationForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordAgain, setPasswordAgain] = useState('');

	const [errorUsername, setErrorUsername] = useState('');
	const [errorEmail, setErrorEmail] = useState('');
	const [errorPassword, setErrorPassword] = useState('');
	const [errorPasswordAgain, setErrorPasswordAgain] = useState('');

	const validateRegistration = () => {
		let isValidated = true;
		let letterNumber = /^[0-9a-zA-Z]+$/;

		if (name === '') {
			setErrorUsername('Enter your name');
			isValidated = false;
		} else if (!name.match(letterNumber)) {
			setErrorUsername(
				'Your name should contain letters and numbers only'
			);
			isValidated = false;
		} else {
			setErrorUsername('');
		}

		if (email === '') {
			setErrorEmail('Enter your email address');
			isValidated = false;
		} else {
			setErrorEmail('');
		}

		if (password === '') {
			setErrorPassword('Enter a password');
			isValidated = false;
		} else if (password.length < 6 || password.length > 32) {
			setErrorPassword('Password must be 6 to 32 characters');
			isValidated = false;
		} else if (!password.match(letterNumber)) {
			setErrorPassword(
				'Password should contain letters and numbers only'
			);
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

	const register = async () => {
		try {
			const newUser = {
				name,
				email,
				password,
			};

			await axios.post(baseUrl + '/api/users/register', newUser);

			alert('You are registered!');
			window.location.href = '/profile';
		} catch (err) {
			console.error(err);
		}
	};

	const submitHandler = (e) => {
		e.preventDefault();

		// register the user only if the info is validated
		if (validateRegistration()) {
			register();
		}
	};

	return (
		<div className='registration'>
			<div className='form-container'>
				<form className='form' onSubmit={submitHandler}>
					<h1>Create Account</h1>
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

					<label htmlFor='email'>Email</label>
					<input
						className='form-input'
						type='text'
						id='email'
						value={email}
						onChange={(event) => {
							setEmail(event.target.value);
						}}
					/>
					<span className='error'>{errorEmail}</span>

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

					<label htmlFor='password-again'>Password Again</label>
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

					<button className='registration-button' type='submit'>
						Create Your Amazon Account
					</button>
				</form>

				<p>
					Already have an account? <Link to='/login'>Sign In</Link>
				</p>
			</div>
		</div>
	);
};

export default RegistrationForm;
