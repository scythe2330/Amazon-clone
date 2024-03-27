import '../css/Footer.css';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Footer = () => {
	const [mobileFooter, setMobileFooter] = useState(false);

	// check the window width to determine footer css
	const isMobile = () => {
		if (window.innerWidth <= 700) {
			setMobileFooter(true);
		} else {
			setMobileFooter(false);
		}
	};

	useEffect(() => {
		isMobile();
		window.addEventListener('resize', isMobile);
	}, []);

	return (
		<div
			className='footer'
			style={mobileFooter ? { flexDirection: 'column' } : {}}
		>
			<div className='contact-us'>
				<h4>Contact Us</h4>
				<a href='mailto: zjf1206@outlook.com'>Email Address</a>
			</div>
			<div className='follow-us'>
				<h4>Follow Us</h4>
				<FaFacebookSquare className='social-icon' />
				<FaInstagramSquare className='social-icon' />
			</div>
		</div>
	);
};

export default Footer;
