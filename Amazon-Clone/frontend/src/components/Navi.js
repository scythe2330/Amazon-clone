import '../css/Navi.css';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import CategoryContext from '../context/CategoryContext';

const Navi = () => {
	const [menu, setMenu] = useState(false);
	const [mobile, setMobile] = useState(false);

	const toggleMenu = () => setMenu(!menu);
	const closeMenu = () => setMenu(false);

	const { categories } = useContext(CategoryContext);

	const isMobile = () => {
		if (window.innerWidth <= 700) {
			setMobile(true);
		} else {
			setMobile(false);
		}
	};

	useEffect(() => {
		isMobile();
		window.addEventListener('resize', isMobile);
	}, []);

	return (
		<div className='navi-container'>
			{categories &&
				categories.length !== 0 &&
				(mobile ? (
					<div className='navi'>
						<div className='menu-button' onClick={toggleMenu}>
							<FaBars />
							<p>Categories</p>
						</div>
						<div className={menu ? 'menu active' : 'menu'}>
							<Link
								className='category'
								to='/listing'
								onClick={closeMenu}
							>
								All Products
							</Link>
							<Link
								className='category'
								to='/best-seller'
								onClick={closeMenu}
							>
								Best Seller
							</Link>
							<Link
								className='category'
								to={'/category/' + categories[0]._id}
								onClick={closeMenu}
							>
								{categories[0].desc}
							</Link>
							<Link
								className='category'
								to={'/category/' + categories[1]._id}
								onClick={closeMenu}
							>
								{categories[1].desc}
							</Link>
							<Link
								className='category'
								to={'/category/' + categories[2]._id}
								onClick={closeMenu}
							>
								{categories[2].desc}
							</Link>
							<Link
								className='category'
								to={'/category/' + categories[3]._id}
								onClick={closeMenu}
							>
								{categories[3].desc}
							</Link>
						</div>
					</div>
				) : (
					<div className='navi grid grid-col-6'>
						<Link className='category' to='/listing'>
							All Products
						</Link>
						<Link className='category' to='/best-seller'>
							Best Seller
						</Link>
						<Link
							className='category'
							to={'/category/' + categories[0]._id}
						>
							{categories[0].desc}
						</Link>
						<Link
							className='category'
							to={'/category/' + categories[1]._id}
						>
							{categories[1].desc}
						</Link>
						<Link
							className='category'
							to={'/category/' + categories[2]._id}
						>
							{categories[2].desc}
						</Link>
						<Link
							className='category'
							to={'/category/' + categories[3]._id}
						>
							{categories[3].desc}
						</Link>
					</div>
				))}
		</div>
	);
};

export default Navi;
