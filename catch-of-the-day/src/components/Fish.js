import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
	render() {
		const { name, price, status, desc, image } = this.props.details;
		const isAvailable                          = 'available' === status;

		return (
			<li className="menu-fish">
				<img src={image} alt={name} />
				<h3 className="fish-name">
					{name}
					<span class="price">{formatPrice(price)}</span>
				</h3>
				<p>{desc}</p>
				<button onClick={() => this.props.addToOrder( this.props.id )} disabled={!isAvailable}>
					{isAvailable ? 'Add To Order' : 'Sold Out'}
				</button>
			</li>
		);
	}
}

export default Fish;
