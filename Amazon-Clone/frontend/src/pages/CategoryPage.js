import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import Navi from '../components/Navi';
import { useContext, useEffect, useState } from 'react';
import ProductContext from '../context/ProductContext';

const CategoryPage = (props) => {
	const { products } = useContext(ProductContext);
	const [productsByCategory, setProductsByCategory] = useState([]);

	useEffect(() => {
		const newProducts = products.filter((product) => {
			return product.cateID === props.match.params.id;
		});

		setProductsByCategory(newProducts);
	}, [products, props.match.params.id]);

	return (
		<>
			<Header />
			<Navi />
			<main>
				<ProductList products={productsByCategory} />
			</main>
			<Footer />
		</>
	);
};

export default CategoryPage;
