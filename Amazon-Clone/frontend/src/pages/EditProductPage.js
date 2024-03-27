import Header from '../components/Header';
import Footer from '../components/Footer';
import EditProduct from '../components/EditProduct';
import { useContext } from 'react';
import ProductContext from '../context/ProductContext';

const EditProductPage = (props) => {
	const { products } = useContext(ProductContext);

	const product = products.find((product) => {
		return product._id === props.match.params.id;
	});

	return (
		<>
			<Header />
			<main>{product && <EditProduct product={product} />}</main>
			<Footer />
		</>
	);
};

export default EditProductPage;
