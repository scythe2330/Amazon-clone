import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import Navi from '../components/Navi';
import { useContext, useEffect, useState } from 'react';
import ProductContext from '../context/ProductContext';

const BestSellerPage = () => {
	const { products } = useContext(ProductContext);
	const [bestSeller, setBestSeller] = useState([]);

	useEffect(() => {
		const bestSeller = products.filter((product) => {
			return product.isBestSeller === true;
		});

		setBestSeller(bestSeller);
	}, [products]);

	return (
		<>
			<Header />
			<Navi />
			<main>
				{bestSeller && bestSeller.length !== 0 && (
					<ProductList products={bestSeller} />
				)}
			</main>
			<Footer />
		</>
	);
};

export default BestSellerPage;
