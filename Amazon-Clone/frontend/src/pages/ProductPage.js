import Header from '../components/Header';
import Footer from '../components/Footer';
import Product from '../components/Product';
import Navi from '../components/Navi';
import { useContext, useEffect, useState } from 'react';
import ProductContext from '../context/ProductContext';

const ProductPage = (props) => {
	const { products } = useContext(ProductContext);

	const [product, setProduct] = useState({});

	useEffect(() => {
		const product = products.find(
			(product) => product._id === props.match.params.id
		);
		setProduct(product);
	}, [products, props.match.params.id]);

	return (
		<>
			<Header />
			<Navi />
			<main>{product && <Product product={product} />}</main>
			<Footer />
		</>
	);
};

export default ProductPage;
