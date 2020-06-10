import React from 'react';
import { Card } from './card/Card';

import './CardListStyles.css';

export const CardList = (props) => {
	return (
		<div className='card-list'>
			{props.monsters.map((monster) => (
				<Card key={monster.id} monsters={monster} />
			))}
		</div>
	);
};
