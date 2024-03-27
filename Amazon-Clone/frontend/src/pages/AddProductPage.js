import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AddProduct from '../components/AddProduct';

const AddProductPage = () => {
	return (
		<div>
			<Header />
			<main>
				<AddProduct />
			</main>
			<Footer />
		</div>
	);
};

export default AddProductPage;
