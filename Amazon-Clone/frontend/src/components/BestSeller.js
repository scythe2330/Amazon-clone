import '../css/BestSeller.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductContext from '../context/ProductContext';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BestSeller = () => {
	const { products } = useContext(ProductContext);

	const bestSeller = products.filter((product) => {
		return product.isBestSeller === true;
	});

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className='best-seller-container'>
			<div>
				<h2>Best Seller</h2>
			</div>
			<div className='best-seller'>
				<Slider {...settings}>
					{bestSeller.map((item, index) => {
						let url = `/product/${item._id}`;
						let alt = `${item.title} image`;
						return (
							<Link to={url} key={index}>
								<div>
									<img
										src={item.image}
										alt={alt}
										className='best-seller-image'
									/>
								</div>
							</Link>
						);
					})}
				</Slider>
			</div>
		</div>
	);
};

export default BestSeller;
