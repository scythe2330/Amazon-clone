import '../css/EditProduct.css';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../config/constant';
import CategoryContext from '../context/CategoryContext';

const EditProduct = (props) => {
	const { categories } = useContext(CategoryContext);

	const [id, setId] = useState('');
	const [title, setTitle] = useState('');
	const [cateID, setCateID] = useState('');
	const [isPromo, setIsPromo] = useState(undefined);
	const [isBestSeller, setIsBestSeller] = useState(undefined);
	const [price, setPrice] = useState(undefined);
	const [quantitySale, setQuantitySale] = useState(undefined);
	const [quantityInStock, setQuantityInStock] = useState(undefined);
	const [image, setImage] = useState('');

	const editing = async () => {
		try {
			const editProduct = {
				id,
				title,
				cateID,
				isPromo,
				isBestSeller,
				price,
				quantitySale,
				quantityInStock,
				image,
			};

			await axios.put(baseUrl + '/api/products/editing', editProduct);

			window.location.href = `/product/${id}`;
		} catch (err) {
			console.error(err);
		}
	};

	const submitHandler = (e) => {
		e.preventDefault();
		editing();
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

	useEffect(() => {
		setId(props.product._id);
		setTitle(props.product.title);
		setCateID(props.product.cateID);
		setIsPromo(props.product.isPromo);
		setIsBestSeller(props.product.isBestSeller);
		setPrice(props.product.price);
		setQuantitySale(props.product.quantitySale);
		setQuantityInStock(props.product.quantityInStock);
		setImage(props.product.image);
	}, [props]);

	return (
		<div className='edit-product'>
			{categories && categories.length !== 0 && (
				<div>
					<form action='' className='' onSubmit={submitHandler}>
						<label htmlFor='title'>Title</label>
						<input
							data-testid='check-title'
							className=''
							type='text'
							id='title'
							placeholder='Title'
							value={title}
							onChange={updateTitle}
						/>

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

						<label htmlFor='price'>Price</label>
						<input
							data-testid='check-price'
							className=''
							type='number'
							id='price'
							placeholder='Price'
							value={price || ''}
							onChange={updatePrice}
						/>

						<label htmlFor='quantitySale'>Sales Quantity</label>
						<input
							data-testid='check-quantitySale'
							className=''
							type='number'
							id='quantitySale'
							placeholder='Sales Quantity'
							value={quantitySale || ''}
							onChange={updateQuantitySale}
						/>

						<label htmlFor='quantityInStock'>Stock Quantity</label>
						<input
							data-testid='check-quantityInStock'
							className=''
							type='number'
							id='quantityInStock'
							placeholder='Stock Quantity'
							value={quantityInStock || ''}
							onChange={updateQuantityInStock}
						/>

						<label htmlFor='image'>Image Link</label>
						<input
							data-testid='check-image'
							className=''
							type='text'
							id='image'
							placeholder='Image'
							value={image}
							onChange={updateImage}
						/>

						<button
							data-testid='Submit-button'
							className=''
							type='submit'
						>
							Submit
						</button>
					</form>
				</div>
			)}
		</div>
	);
};

export default EditProduct;
