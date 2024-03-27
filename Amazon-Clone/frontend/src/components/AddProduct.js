import '../css/AddProduct.css';
import { useContext, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../config/constant';
import CategoryContext from '../context/CategoryContext';

const AddProduct = () => {
	const { categories } = useContext(CategoryContext);

	const [title, setTitle] = useState('');
	const [cateID, setCateID] = useState('');
	const [isPromo, setIsPromo] = useState(undefined);
	const [isBestSeller, setIsBestSeller] = useState(undefined);
	const [price, setPrice] = useState(undefined);
	const [quantitySale, setQuantitySale] = useState(undefined);
	const [quantityInStock, setQuantityInStock] = useState(undefined);
	const [image, setImage] = useState('');

	const [errorTitle, setErrorTitle] = useState('');
	const [errorCateID, setErrorCateID] = useState('');
	const [errorIsPromo, setErrorIsPromo] = useState('');
	const [errorIsBestSeller, setErrorIsBestSeller] = useState('');
	const [errorPrice, setErrorPrice] = useState('');
	const [errorQuantitySale, setErrorQuantitySale] = useState('');
	const [errorQuantityInStock, setErrorQuantityInStock] = useState('');
	const [errorImage, setErrorImage] = useState('');

	const validateAddProduct = () => {
		let isValidate = true;

		if (title === '') {
			setErrorTitle('Enter product Title');
			isValidate = false;
		} else {
			setErrorTitle('');
		}

		if (cateID === '') {
			setErrorCateID('Choose product category');
			isValidate = false;
		} else {
			setErrorCateID('');
		}

		if (isPromo === undefined) {
			setErrorIsPromo('Choose product promo status');
			isValidate = false;
		} else {
			setErrorIsPromo('');
		}

		if (isBestSeller === undefined) {
			setErrorIsBestSeller('Choose product bestseller status');
			isValidate = false;
		} else {
			setErrorIsBestSeller('');
		}

		if (price === '') {
			setErrorPrice('Enter product Price');
			isValidate = false;
		} else {
			setErrorPrice('');
		}

		if (quantitySale === '') {
			setErrorQuantitySale('Enter product sales quantity');
			isValidate = false;
		} else {
			setErrorQuantitySale('');
		}

		if (quantityInStock === '') {
			setErrorQuantityInStock('Enter product quantity in stock');
			isValidate = false;
		} else {
			setErrorQuantityInStock('');
		}

		if (image === '') {
			setErrorImage('Enter product image link');
			isValidate = false;
		} else {
			setErrorImage('');
		}
		return isValidate;
	};

	const adding = async (e) => {
		try {
			const newProduct = {
				title,
				cateID,
				isPromo,
				isBestSeller,
				price,
				quantitySale,
				quantityInStock,
				image,
			};

			await axios.post(baseUrl + '/api/products/adding', newProduct);
			alert(`Product: ${title} created`);
			window.location.href = '/listing';
		} catch (err) {
			console.error(err);
		}
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if (validateAddProduct()) {
			adding();
		}
	};

	const updateTitle = (event) => {
		setTitle(event.target.value);
	};

	const updateCateId = (event) => {
		setCateID(event.target.value);
	};

	const updateIsPromo = (event) => {
		let value = event.currentTarget.value === 'true' ? true : false;
		setIsPromo(value);
	};

	const updateIsBestSeller = (event) => {
		let value = event.currentTarget.value === 'true' ? true : false;
		setIsBestSeller(value);
	};
	const updatePrice = (event) => {
		setPrice(event.target.value);
	};
	const updateQuantitySale = (event) => {
		setQuantitySale(event.target.value);
	};
	const updateQuantityInStock = (event) => {
		setQuantityInStock(event.target.value);
	};
	const updateImage = (event) => {
		setImage(event.target.value);
	};

	return (
		<div className='add-product'>
			{categories && categories.length !== 0 && (
				<div>
					<form action='' className='' onSubmit={submitHandler}>
						<label htmlFor='title'>Title</label>
						<input
							className=''
							type='text'
							id='title'
							placeholder='Title'
							value={title}
							onChange={updateTitle}
						/>
						<span className='error'>{errorTitle}</span>

						<label htmlFor='cateID'>Category</label>
						<select
							id='cateID'
							defaultValue={'DEFAULT'}
							onChange={updateCateId}
						>
							<option value='DEFAULT' disabled>
								{' '}
								-- select a category --{' '}
							</option>
							<option value={categories[0]._id}>
								{categories[0].desc}
							</option>
							<option value={categories[1]._id}>
								{categories[1].desc}
							</option>
							<option value={categories[2]._id}>
								{categories[2].desc}
							</option>
							<option value={categories[3]._id}>
								{categories[3].desc}
							</option>
						</select>
						<span className='error'>{errorCateID}</span>

						<label htmlFor='isPromo'>Is it a promo product?</label>
						<div id='isPromo'>
							<label>
								<input
									type='radio'
									id='promoTrue'
									name='isPromo'
									value='true'
									onChange={updateIsPromo}
									checked={isPromo === true}
								/>
								Yes
							</label>

							<label>
								<input
									type='radio'
									id='promoFalse'
									name='isPromo'
									value='false'
									onChange={updateIsPromo}
									checked={isPromo === false}
								/>
								No
							</label>
						</div>
						<span className='error'>{errorIsPromo}</span>

						<label htmlFor='isBestSeller'>
							Is it a best seller?
						</label>
						<div id='isBestSeller'>
							<label>
								<input
									type='radio'
									id='bestTrue'
									name='isBestSeller'
									value='true'
									onChange={updateIsBestSeller}
									checked={isBestSeller === true}
								/>
								Yes
							</label>

							<label>
								<input
									type='radio'
									id='bestFalse'
									name='isBestSeller'
									value='false'
									onChange={updateIsBestSeller}
									checked={isBestSeller === false}
								/>
								No
							</label>
						</div>

						<span className='error'>{errorIsBestSeller}</span>

						<label htmlFor='price'>Price</label>
						<input
							className=''
							type='number'
							id='price'
							placeholder='Price'
							value={price || ''}
							onChange={updatePrice}
						/>
						<span className='error'>{errorPrice}</span>

						<label htmlFor='quantitySale'>Sales Quantity</label>
						<input
							className=''
							type='number'
							id='quantitySale'
							placeholder='Sales Quantity'
							value={quantitySale || ''}
							onChange={updateQuantitySale}
						/>
						<span className='error'>{errorQuantitySale}</span>

						<label htmlFor='quantityInStock'>Stock Quantity</label>
						<input
							className=''
							type='number'
							id='quantityInStock'
							placeholder='Stock Quantity'
							value={quantityInStock || ''}
							onChange={updateQuantityInStock}
						/>
						<span className='error'>{errorQuantityInStock}</span>

						<label htmlFor='image'>Image Link</label>
						<input
							className=''
							type='text'
							id='image'
							placeholder='Image'
							value={image}
							onChange={updateImage}
						/>
						<span className='error'>{errorImage}</span>

						<button className='add-product-button' type='submit'>
							Submit
						</button>
					</form>
				</div>
			)}
		</div>
	);
};

export default AddProduct;
