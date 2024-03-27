import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import Navi from '../components/Navi';
import { useContext, useEffect, useState } from 'react';
import ProductContext from '../context/ProductContext';

const SearchPage = (props) => {
	const { products } = useContext(ProductContext);
	const [filteredProduct, setFilteredProduct] = useState([]);

	// filter products by title
	const filterProductsByTitle = (title) => {
		let newProducts = products.filter((product) => {
			return product.title.toLowerCase().includes(title);
		});

		setFilteredProduct(newProducts);
	};

	useEffect(() => {
		filterProductsByTitle(props.match.params.title);
	});

	return (
		<>
			<Header />
			<Navi />
			<main>
				<ProductList products={filteredProduct} />
			</main>
			<Footer />
		</>
	);
};

export default SearchPage;
