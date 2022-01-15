export const actionConstants = {
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",
  ADD_CART: "ADD_CART",
  GET_PRODUCTS_SUCCESS: "GET_PRODUCTS_SUCCESS",
  GET_PRODUCTS_REQUEST: "GET_PRODUCTS_REQUEST",
  GET_PRODUCTS_FAILURE: "GET_PRODUCTS_FAILURE",
  GET_SINGLE_PRODUCT: "GET_SINGLE_PRODUCT",
  REGISTER_REQUEST: "REGISTER_REQUEST",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  LOGOUT: "LOGOUT",
  EMPTY_CART: "EMPTY_CART",
};

export const registerRequest = () =>{
  return {
    type: actionConstants.REGISTER_REQUEST,
    payload: { isRegister: 1 },
  };
}


export const registerSuccess = () =>{
  return {
    type: actionConstants.REGISTER_SUCCESS,
    payload: { isRegister: 2},
  };
}

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
    payload: { isAuth: false },
  };
}

export const emptyCart = () => {
  return{
    type : actionConstants.EMPTY_CART,
    payload: {cart:[]}
  }
}

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
      token:data.token
    },
  };
};
