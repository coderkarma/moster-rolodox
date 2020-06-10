import React from 'react';
import './CardStyles.css';

export const Card = (props) => {
	return (
		<div className='card-container'>
			<img
				src={`https://robohash.org/${props.monsters.id}?set=set2&size180*180`}
				alt='monster'
			/>
			<h2>{props.monsters.name}</h2>
			<p>{props.monsters.email}</p>
		</div>
	);
};
