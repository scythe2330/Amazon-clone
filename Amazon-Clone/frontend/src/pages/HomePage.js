import React from 'react';
import Header from '../components/Header';
import Navi from '../components/Navi';
import Promo from '../components/Promo';
import CategorySection from '../components/CategorySection';
import BestSeller from '../components/BestSeller';
import Footer from '../components/Footer';

const HomePage = () => {
	return (
		<>
			<Header />
			<Navi />
			<main>
				<Promo />
				<CategorySection />
				<BestSeller />
			</main>
			<Footer />
		</>
	);
};

export default HomePage;
