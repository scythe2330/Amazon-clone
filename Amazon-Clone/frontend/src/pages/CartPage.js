import Header from '../components/Header';
import Navi from '../components/Navi';
import Footer from '../components/Footer';
import Cart from '../components/Cart';

const CartPage = () => {
	return (
		<>
			<Header />
			<Navi />
			<main>
				<Cart />
			</main>
			<Footer />
		</>
	);
};

export default CartPage;
