// defines the initial state of the user

import { fetchUser, fetchCart } from "../utils/fetchLocalStorage"

const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initialState = {
    user: userInfo,
    foodItems: null,
    cartShow: false,
    cartItems: cartInfo,
}