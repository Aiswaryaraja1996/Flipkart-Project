export const actionConstants = {
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",
  ADD_CART:"ADD_CART"
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
    payload: { isError: true },
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
    },
  };
};
