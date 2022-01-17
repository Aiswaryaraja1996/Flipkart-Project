export const actionConstants = {
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",
  LOGOUT: "LOGOUT",

  REGISTER_REQUEST: "REGISTER_REQUEST",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",

  GET_PRODUCTS_SUCCESS: "GET_PRODUCTS_SUCCESS",
  GET_PRODUCTS_REQUEST: "GET_PRODUCTS_REQUEST",
  GET_PRODUCTS_FAILURE: "GET_PRODUCTS_FAILURE",
  GET_SINGLE_PRODUCT: "GET_SINGLE_PRODUCT",

  GET_CART: "GET_CART",
  ADD_CART: "ADD_CART",
  EMPTY_CART: "EMPTY_CART",
  INCREMENT_ITEM: "INCREMENT_ITEM",
  DECREMENT_ITEM: "DECREMENT_ITEM",
  REMOVE_CART: "REMOVE_CART",
  SET_USER_CART: "SET_USER_CART",

  GET_WISHLIST: "GET_WISHLIST",
  ADD_WISHLIST: "ADD_WISHLIST",
  REMOVE_WISHLIST: "REMOVE_WISHLIST",
  EMPTY_WISHLIST: "EMPTY_WISHLIST",
};

export const registerRequest = () => {
  return {
    type: actionConstants.REGISTER_REQUEST,
    payload: { isRegister: 1 },
  };
};

export const registerSuccess = () => {
  return {
    type: actionConstants.REGISTER_SUCCESS,
    payload: { isRegister: 3 },
  };
};

export const loginUser = (token) => {
  return {
    type: actionConstants.LOGIN_SUCCESS,
    payload: { token: token },
  };
};

export const loginFailure = () => {
  return {
    type: actionConstants.LOGIN_FAILURE,
    payload: { isError: 2 },
  };
};

export const logout = () => {
  return {
    type: actionConstants.LOGOUT,
    payload: { isAuth: false, isRegister: 0 },
  };
};

export const emptyCart = () => {
  return {
    type: actionConstants.EMPTY_CART,
    payload: { cart: [] },
  };
};

export const emptyWishlist = () => {
  return {
    type: actionConstants.EMPTY_WISHLIST,
    payload: { wishlist: [] },
  };
};

export const getProductsSuccess = (products) => {
  return {
    type: actionConstants.GET_PRODUCTS_SUCCESS,
    payload: { products: products },
  };
};

export const getSingle = (product) => {
  return {
    type: actionConstants.GET_SINGLE_PRODUCT,
    payload: { product: product },
  };
};

export const getProductsRequest = () => {
  return {
    type: actionConstants.GET_PRODUCTS_REQUEST,
    payload: { isLoading: true },
  };
};

export const getProductsFailure = () => {
  return {
    type: actionConstants.GET_PRODUCTS_FAILURE,
    payload: {
      isError: true,
    },
  };
};

export const addCart = (data) => {
  return {
    type: actionConstants.ADD_CART,
    payload: {
      id: data.id,
      title: data.title,
      url: data.url,
      discount: data.discount,
      price: data.price,
      mrp: data.mrp,
      delCharge: data.delCharge,
      delDate: data.delDate,
      qty: data.qty,
      token: data.token,
    },
  };
};

export const handleIncrement = (id, qty) => {
  return {
    type: actionConstants.INCREMENT_ITEM,
    payload: { id: id, qty: qty },
  };
};

export const handleDecrement = (id, qty) => {
  return {
    type: actionConstants.DECREMENT_ITEM,
    payload: { id: id, qty: qty },
  };
};

export const removeCart = (id) => {
  return {
    type: actionConstants.REMOVE_CART,
    payload: { id: id },
  };
};

export const getCartItems = (cart) => {
  return {
    type: actionConstants.GET_CART,
    payload: { cart: cart },
  };
};

export const addWishlist = (wishlist) => {
  console.log(wishlist);
  return {
    type: actionConstants.ADD_WISHLIST,
    payload: { wishlist: wishlist },
  };
};

export const removeWishlist = (id) => {
  return {
    type: actionConstants.REMOVE_WISHLIST,
    payload: { id: id },
  };
};

export const getWishList = (wishlist) => {
  return {
    type: actionConstants.GET_WISHLIST,
    payload: { wishlist: wishlist },
  };
};
