import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const SearchBox = (props) => {
	const [title, setTitle] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		if (title) {
			props.history.push(`/search/${title}`);
		} else {
			props.history.push('/listing');
		}
	};

	return (
		<div className='search'>
			<form className='search-form' onSubmit={submitHandler}>
				<input
					className='search-box'
					type='text'
					id='search'
					onChange={(e) => setTitle(e.target.value)}
				/>

				<button className='search-icon' type='submit'>
					<BiSearch />
				</button>
			</form>
		</div>
	);
};

export default SearchBox;
