import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	myInput = React.createRef();

	constructor() {
		super();

		this.goToStore = this.goToStore.bind( this );
	}

	goToStore( event ) {
		const storeName = this.myInput.value.value;
		event.preventDefault();

		this.props.history.push( `/store/${storeName}` );
	}

	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter A Store</h2>
				<input
					ref={this.myInput}
					type="text"
					placeholder="Store Name"
					required
					defaultValue={getFunName()}
				/>
				<button type="submit">Visit Store &rarr;</button>
			</form>
		);
	}
}

export default StorePicker;
