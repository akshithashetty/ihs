import { CART } from "../actions/cart"

/**
 *
 * Add the user to the store
 * @param user :  user object returned from api/user
 *
 * @returns {{type: string, user: *}}
 */
function updateCart(newItem) {
	console.log(newItem)
    return {
    	type: CART,
    	newItem: newItem
    };


}


export default updateCart;