import React from 'react';
import OrderItem from './OrderItem';
import { formatPrice } from '../helpers';

class Order extends React.Component {
	render() {
		const fishIds    = Object.keys( this.props.order );
		const orderItems = [];
		const total      = fishIds.reduce( ( val, fishId ) => {
			const fish        = this.props.fishes[ fishId ];
			const count       = this.props.order[ fishId ];
			const isAvailable = fish && 'available' === fish.status;

			orderItems.push( (<OrderItem key={fishId} name={fish ? fish.name : 'fish'} count={count} price={fish ? fish.price : 0} isAvailable={isAvailable} />) );

			if ( ! isAvailable ) {
				return val;
			}

			return val + count * fish.price;
		}, 0 );

		return (
			<div className="order-wrap">
				<h2>Order</h2>
				<ul className="order">
					{orderItems}
				</ul>
				<div className="total">
					Total: <strong>{formatPrice(total)}</strong>
				</div>
			</div>
		);
	}
}

export default Order;
