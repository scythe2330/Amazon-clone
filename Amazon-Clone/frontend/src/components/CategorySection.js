import '../css/CategorySection.css';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductContext from '../context/ProductContext';
import CategoryContext from '../context/CategoryContext';

const Category = () => {
	const { products } = useContext(ProductContext);
	const { categories } = useContext(CategoryContext);

	const [screenSize, setScreenSize] = useState('');

	// check the window width
	const checkScreenSize = () => {
		if (window.innerWidth <= 1000 && window.innerWidth > 600) {
			setScreenSize('medium');
		} else if (window.innerWidth <= 600) {
			setScreenSize('small');
		} else {
			setScreenSize('large');
		}
	};

	const setClassName = () => {
		let className = '';
		if (screenSize === 'large') {
			className = 'grid grid-col-4 category-section';
		} else if (screenSize === 'medium') {
			className = 'grid grid-col-2 category-section';
		} else if (screenSize === 'small') {
			className = 'grid grid-col-1 category-section';
		}

		return className;
	};

	// find first item in selected category
	const getFirstItemFromCate = (cateID) => {
		const firstItem = products.find((product) => product.cateID === cateID);
		return firstItem.image;
	};

	useEffect(() => {
		checkScreenSize();
		window.addEventListener('resize', checkScreenSize);
	}, []);

	return (
		<div className='category-container'>
			<div>
				<h2>Category</h2>
			</div>
			<div className={setClassName()}>
				{categories.map((category, index) => {
					let url = `/category/${category._id}`;
					let imageLink = getFirstItemFromCate(category._id);
					let alt = `${category.desc} image`;
					return (
						<Link to={url} key={index}>
							<div className='category-block'>
								<h3>{category.desc}</h3>
								<img
									src={imageLink}
									alt={alt}
									className='category-image'
								/>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Category;
