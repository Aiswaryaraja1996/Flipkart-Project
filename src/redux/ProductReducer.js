import { actionConstants } from "./Action";
import { loadData, saveData } from "../utils/localStorage";

const products = loadData("products") || [];
const cart = loadData("cart") || [];

const initialState = {
  products: products,
  cart: cart,
  product: {},
  isLoading: true,
  isError: false,
};

export default function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case actionConstants.GET_PRODUCTS_REQUEST:
      return { ...state, isLoading: true };
    case actionConstants.GET_PRODUCTS_SUCCESS:
      saveData("products", action.payload.products);
      return { ...state, products: action.payload.products, isLoading: false };
    case actionConstants.GET_SINGLE_PRODUCT:
      console.log(action.payload.product);
      return {
        ...state,
        product: action.payload.product,
        isLoading: false,
      };
    case actionConstants.GET_PRODUCTS_FAILURE:
      return { ...state, isError: true };
    case actionConstants.EMPTY_CART:
      return { ...state, cart: [] };
    // case actionConstants.SET_USER_CART:
    //   return { ...state, cart: action.payload.cart };
    case actionConstants.ADD_CART:
      saveData("cart", [...state.cart, action.payload]);
      // if (state.cart.some((item) => item.id === action.payload.id)) {
      //   return {
      //     ...state,
      //     cart: state.cart.map((i) =>
      //       i.id === action.payload.id
      //         ? { ...i, qty: i.qty + action.payload.qty }
      //         : i
      //     ),
      //   };
      // } else {
      return { ...state, cart: [...state.cart, action.payload] };
    // }
    case actionConstants.REMOVE_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case actionConstants.INCREMENT_ITEM:
      return {
        ...state,
        cart: state.cart.map((i) =>
          i.id === action.payload.id
            ? { ...i, qty: i.qty + action.payload.qty }
            : i
        ),
      };
    case actionConstants.DECREMENT_ITEM:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
        ),
      };

    default:
      return state;
  }
}
