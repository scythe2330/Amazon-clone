import '../css/Cart.css';
import { useContext, useEffect, useState } from 'react';
import ProductContext from '../context/ProductContext';

const Cart = () => {
	const { cart, addToCart, removeFromCart } = useContext(ProductContext);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		let currentTotal = 0;
		cart.forEach((item) => {
			currentTotal += item.price * item.qty;
		});
		setTotal(currentTotal);
	}, [cart]);

	return (
		<div className='cart'>
			{cart.length === 0 ? (
				<div className='cart-list'>
					<h1>Cart is empty</h1>
				</div>
			) : (
				<div className='cart-list'>
					{cart.map((item) => (
						<div key={item._id} className='cart-item'>
							<div className='col'>
								<img src={item.image} alt={item.title} />
							</div>
							<div className='col'>
								<div className='cart-title'>{item.title}</div>
								<div className='cart-price'>$ {item.price}</div>
								<div className='qty'>
									Quantity:{' '}
									<button
										onClick={() => removeFromCart(item)}
										className='remove'
									>
										-
									</button>
									{item.qty}
									<button
										onClick={() => addToCart(item, 1)}
										className='add'
									>
										+
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			)}

			<div className='cart-total'>
				<h4>Total</h4>
				<div className='price-total'>Total Price: $ {total}</div>
				<button className='checkout-button'>Checkout</button>
			</div>
		</div>
	);
};

export default Cart;
