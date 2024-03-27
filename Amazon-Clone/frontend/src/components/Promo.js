import '../css/Promo.css';
import { useContext } from 'react';
import ProductContext from '../context/ProductContext';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

const Promo = () => {
	const { products } = useContext(ProductContext);

	const promos = products.filter((product) => {
		return product.isPromo === true;
	});

	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		centerMode: true,
		className: 'center',
		centerPadding: '0px',
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};

	return (
		<div className='promo'>
			<Slider {...settings}>
				{promos.map((slide, index) => {
					let alt = `${slide.title} image`;
					return (
						<Link to={`/product/${slide._id}`} key={index}>
							<div className='promo-slide'>
								<img
									src={slide.image}
									alt={alt}
									className='promo-image'
								/>
							</div>
						</Link>
					);
				})}
			</Slider>
		</div>
	);
};

export default Promo;
