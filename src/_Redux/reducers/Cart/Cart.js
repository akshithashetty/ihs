import { ADD, REMOVE } from "../../actions/cart"


var initialState = {
	products: [],
	count: 0
}

function Cart(state = initialState, action) {

	console.log(state)

	switch (action.type) {
		case ADD:
			return { 
				products: [...state.products,action.newItem],
				count: state.count+1
			}

		case REMOVE:
			var products = [...state.products]
			var count = state.count
			for( var i = 0; i <= products.length-1; i++){ 
			   if ( products[i] === action.item) {
					products.splice(i, 1); 
					count = count-1;
					break;

			   }
			}

			return { 
				products: products,
				count: count
			}

		default:
			return state;

	}


}

export default Cart;