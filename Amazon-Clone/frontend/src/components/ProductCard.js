import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CategoryContext from '../context/CategoryContext';

const ProductCard = (props) => {
	const { categories } = useContext(CategoryContext);
	const category = categories.find(
		(category) => category._id === props.product.cateID
	);

	return (
		<div className='product-card'>
			<Link to={`/product/${props.product._id}`}>
				<div className='product-card-image'>
					<img
						src={props.product.image}
						alt={props.product.title + ' image'}
					/>
				</div>

				<h4 className='product-card-title'>{props.product.title}</h4>
			</Link>

			<p className='product-card-price'>CDN$ {props.product.price}</p>
			<Link to={`/category/${category._id}`}>
				<p className='product-card-category'>{category.desc}</p>
			</Link>
		</div>
	);
};

export default ProductCard;
