import '../css/Product.css';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../context/UserContext';
import ProductContext from '../context/ProductContext';
import axios from 'axios';
import { baseUrl } from '../config/constant';
import { Link } from 'react-router-dom';

const Product = (props) => {
	const { user } = useContext(UserContext);
	const { addToCart } = useContext(ProductContext);

	const [qty, setQty] = useState(1);
	const [smallScreen, setSmallScreen] = useState(false);

	// check the window width to determine footer css
	const isMobile = () => {
		if (window.innerWidth <= 700) {
			setSmallScreen(true);
		} else {
			setSmallScreen(false);
		}
	};

	// make quantity drop down list using actual in stock quantity
	const dropDownList = (number) => {
		let list = [];

		for (let i = 1; i <= number; i++) {
			list.push(
				<option key={i} value={i}>
					{i}
				</option>
			);
		}

		return list;
	};
	const deleteProduct = async () => {
		try {
			await axios.delete(baseUrl + `/api/products/${props.product._id}`);
			alert(`Product with id: ${props.product._id} was deleted`);
			window.location.href = `/`;
		} catch (err) {
			console.error(err);
		}
	};
	useEffect(() => {
		isMobile();
		window.addEventListener('resize', isMobile);
	}, []);
	return (
		<div
			className='product'
			style={smallScreen ? { flexDirection: 'column' } : {}}
		>
			<div className='product-image'>
				<img src={props.product.image} alt={props.product.title} />
			</div>

			<div className='product-description'>
				<div className='product-title'>{props.product.title}</div>
				<div className='product-price'>
					Price: CDN$ {props.product.price}
				</div>
				<div className='product-desc'>{props.product.desc}</div>
				<div className='product-quantity'>
					<label htmlFor='quantity'>Quantity: </label>

					<select
						name='quantity'
						id='quantity'
						onChange={(e) => {
							setQty(e.target.value);
						}}
					>
						{dropDownList(props.product.quantityInStock)}
					</select>
				</div>
				{user && user.isAdmin ? (
					<>
						<button className='edit-button' type='button'>
							<Link to={`/product-edit/${props.product._id}`}>
								Edit Products
							</Link>
						</button>
						<br></br>
						<button
							className='delete-button'
							type='button'
							onClick={deleteProduct}
						>
							Delete Products
						</button>
					</>
				) : (
					<button
						className='add-to-cart-button'
						type='button'
						onClick={() => {
							addToCart(props.product, qty);
							alert(
								`${qty} ${props.product.title} is added to your cart`
							);
						}}
					>
						Add to Cart
					</button>
				)}{' '}
			</div>
		</div>
	);
};

export default Product;
