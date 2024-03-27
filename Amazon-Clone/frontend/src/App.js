import './css/App.css';
import { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { baseUrl } from './config/constant';

import ProductContext from './context/ProductContext';
import CategoryContext from './context/CategoryContext';
import UserContext from './context/UserContext';

import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import ProductListPage from './pages/ProductListPage';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';
import BestSellerPage from './pages/BestSellerPage';
import SearchPage from './pages/SearchPage';
import ProfilePage from './pages/ProfilePage';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';
import CartPage from './pages/CartPage';

function App() {
	axios.defaults.withCredentials = true;
	let initialCart = JSON.parse(localStorage.getItem('cart')) || [];

	// states
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [user, setUser] = useState(undefined);
	const [cart, setCart] = useState(initialCart);

	// fetch all data
	const initialization = () => {
		axios
			.all([
				axios.get(baseUrl + '/api/products'),
				axios.get(baseUrl + '/api/categories'),
			])
			.then(
				axios.spread((products, categories) => {
					setProducts((prevProducts) => {
						prevProducts = products.data;
						return prevProducts;
					});
					setCategories((prevCategories) => {
						prevCategories = categories.data;
						return prevCategories;
					});
				})
			)
			.catch((err) => console.log(err));
	};

	// check if a user is logged in
	const getUser = async () => {
		try {
			const loggedUser = await axios.get(
				baseUrl + '/api/users/loggedUser'
			);
			// decode the JWT to get user info
			const userInfo = jwt_decode(loggedUser.data);

			setUser(userInfo);
		} catch (err) {
			setUser(undefined);
		}
	};

	// add product to cart
	const addToCart = async (product, qty) => {
		// check if the product is already in cart
		const existItem = await cart.find(
			(cartItem) => cartItem._id === product._id
		);

		if (existItem) {
			setCart(
				cart.map((cartItem) =>
					cartItem._id === product._id
						? { ...existItem, qty: existItem.qty + Number(qty) }
						: cartItem
				)
			);
		} else {
			setCart([...cart, { ...product, qty: Number(qty) }]);
		}
	};

	// remove product from cart
	const removeFromCart = (product) => {
		const existItem = cart.find((cartItem) => cartItem._id === product._id);
		if (existItem.qty === 1) {
			setCart(cart.filter((cartItem) => cartItem._id !== product._id));
		} else {
			setCart(
				cart.map((cartItem) =>
					cartItem._id === product._id
						? { ...existItem, qty: existItem.qty - 1 }
						: cartItem
				)
			);
		}
	};

	useEffect(() => {
		initialization();
		getUser();
		setLoading(false);
	}, []);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	if (isLoading || products === undefined || categories === undefined) {
		return <div className='App'>Loading...</div>;
	}

	return (
		<div className='app'>
			<ProductContext.Provider
				value={{ products, cart, addToCart, removeFromCart }}
			>
				<CategoryContext.Provider value={{ categories }}>
					<UserContext.Provider value={{ user, getUser }}>
						<Router>
							<Switch>
								<Route exact path='/'>
									<HomePage />
								</Route>

								<Route exact path='/cart'>
									<CartPage />
								</Route>

								<Route path='/product/add'>
									{user && user.isAdmin ? (
										<AddProductPage />
									) : (
										<Redirect to='/login' />
									)}
								</Route>

								<Route
									path='/product-edit/:id'
									component={(props) =>
										user && user.isAdmin ? (
											<EditProductPage {...props} />
										) : (
											<Redirect to='/login' />
										)
									}
								></Route>

								<Route path='/registration'>
									<RegistrationPage />
								</Route>

								<Route path='/login'>
									{!user ? (
										<LoginPage />
									) : (
										<Redirect to='/profile' />
									)}
								</Route>

								<Route path='/profile'>
									{user ? (
										<ProfilePage />
									) : (
										<Redirect to='/login' />
									)}
								</Route>

								<Route path='/listing'>
									<ProductListPage />
								</Route>

								<Route
									path='/product/:id'
									component={ProductPage}
								></Route>

								<Route
									path='/category/:id'
									component={CategoryPage}
								></Route>

								<Route
									path='/best-seller'
									component={BestSellerPage}
								></Route>

								<Route
									path='/search/:title?'
									component={SearchPage}
								></Route>
							</Switch>
						</Router>
					</UserContext.Provider>
				</CategoryContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
