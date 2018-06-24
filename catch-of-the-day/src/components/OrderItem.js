import React from 'react';
import { formatPrice } from '../helpers';

class OrderItem extends React.Component {
	render() {
		const { name, count, price, isAvailable } = this.props;

		if ( ! isAvailable ) {
			return (
				<li>
					Sorry, the {name} is no longer available!
				</li>
			);
		}

		return (
			<li>
				{count} lbs {name} - {formatPrice(count * price)}
			</li>
		);
	}
}

export default OrderItem;
