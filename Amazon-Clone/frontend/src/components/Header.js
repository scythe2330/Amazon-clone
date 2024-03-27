import '../css/Header.css';
import { useContext } from 'react';
import { AiFillAmazonSquare } from 'react-icons/ai';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Link, Route } from 'react-router-dom';
import UserContext from '../context/UserContext';
import SearchBox from './SearchBox';

const Header = () => {
	const { user } = useContext(UserContext);

	return (
		<header className='header'>
			<div className='logo'>
				<Link to='/'>
					<AiFillAmazonSquare className='home-button' />
				</Link>
			</div>

			<Route
				render={({ history }) => (
					<SearchBox history={history}></SearchBox>
				)}
			></Route>

			<div className='options'>
				<div className='option'>
					{user ? (
						<Link className='login-portal' to='/profile'>
							Hi, {user.name}
						</Link>
					) : (
						<Link className='login-portal' to='/login'>
							Hello, Sign-In
						</Link>
					)}
				</div>

				{user && user.isAdmin ? (
					<div className='option'>
						<Link className='login-portal' to='/product/add'>
							Add Products
						</Link>
					</div>
				) : (
					<></>
				)}

				<div className='option'>
					<Link className='cart-portal' to='/cart'>
						<RiShoppingCartLine />
					</Link>
				</div>

				<div className='option'></div>
			</div>
		</header>
	);
};

export default Header;
