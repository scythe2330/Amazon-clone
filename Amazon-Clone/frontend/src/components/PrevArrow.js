import React from 'react';

const PrevArrow = (props) => {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				backgroundColor: 'rgba(0, 0, 0, 0)',
				paddingLeft: '5vw',
				zIndex: '60',
			}}
			onClick={onClick}
		/>
	);
};

export default PrevArrow;
