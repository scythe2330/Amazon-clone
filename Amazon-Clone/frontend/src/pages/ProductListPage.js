import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import Navi from '../components/Navi';
import { useContext, useEffect, useState } from 'react';
import ProductContext from '../context/ProductContext';

const ProductListingPage = () => {
	const { products } = useContext(ProductContext);
	const [productList, setProductList] = useState([]);

	useEffect(() => {
		setProductList(products);
	}, [products]);

	return (
		<>
			<Header />
			<Navi />
			<main>
				<ProductList products={productList} />
			</main>
			<Footer />
		</>
	);
};

export default ProductListingPage;
