import { ADD, REMOVE } from "../actions/cart"

/**
 *
 * Add the user to the store
 * @param user :  user object returned from api/user
 *
 * @returns {{type: string, user: *}}
 */
function addToCart(newItem) {
	console.log(newItem)
    return {
    	type: ADD,
    	newItem: newItem
    };


}

function removeFromCart(item) {
	console.log(item)
    return {
    	type: REMOVE,
    	item: item
    };


}



export { addToCart, removeFromCart };