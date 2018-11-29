import { CART } from "../../actions/cart"


var initialState = {
  	products: []
}

function Cart(state = initialState, action) {

	console.log(state)

    switch (action.type) {
        case CART:
            return { 
		        products: [...state.products,action.newItem]
		    }

        default:
            return state;

    }


}

export default Cart;