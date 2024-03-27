import '../css/ProductList.css';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import ReactPaginate from 'react-paginate';

const ProductList = (props) => {
	const products = props.products;
	const [pageNo, setPageNo] = useState(0);
	const [screenSize, setScreenSize] = useState('');

	// For pagination
	const cardsPerPage = 12;
	const pagesVisited = pageNo * cardsPerPage;
	const pageCount = Math.ceil(products.length / cardsPerPage);

	const changePage = ({ selected }) => {
		setPageNo(selected);
		window.scrollTo(0, 0);
	};

	// show product cards
	const displayCards = products
		.slice(pagesVisited, pagesVisited + cardsPerPage)
		.map((product) => {
			return <ProductCard key={product._id} product={product} />;
		});

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
			className = 'grid grid-col-3';
		} else if (screenSize === 'medium') {
			className = 'grid grid-col-2';
		} else if (screenSize === 'small') {
			className = 'grid grid-col-1';
		}

		return className;
	};

	useEffect(() => {
		checkScreenSize();
		window.addEventListener('resize', checkScreenSize);
	}, []);

	return (
		<div className='product-list'>
			<div className={setClassName()}>{displayCards}</div>

			<div className='pagination'>
				<ReactPaginate
					previousLabel={'Previous'}
					nextLabel={'Next'}
					pageCount={pageCount}
					onPageChange={changePage}
					containerClassName={'page-container'}
					previousLinkClassName={'page-prev'}
					nextLinkClassName={'page-next'}
					disabledClassName={'page-disable'}
					activeClassName={'page-active'}
				/>
			</div>
		</div>
	);
};

export default ProductList;
