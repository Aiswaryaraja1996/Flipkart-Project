import axios from "axios";
import * as actions from "./Action";
import { v4 as uuidv4 } from "uuid";
import { loadData, saveData } from "../utils/localStorage";

export const handleRegister = (login) => (dispatch) => {
  const payLoad = {
    id: uuidv4(),
    mobile: login.mobile,
    password: login.password,
  };
  const config = {
    url: "http://localhost:3001/registeredUsers/",
    method: "POST",
    data: payLoad,
  };

  return axios(config)
    .then((res) => {
      console.log(res);

      const registerAction = actions.registerSuccess();
      dispatch(registerAction);
    })
    .catch((err) => {});
};

export const setUserCart = (payLoad) => (dispatch) => {
  console.log(payLoad);
  const config = {
    url: "http://localhost:3001/cart/",
    method: "POST",
    data: payLoad,
  };
  return axios(config)
    .then((res) => {
      console.log(res);
      const addCartAction = actions.addCart(res.data);
      dispatch(addCartAction);
    })
    .catch((err) => alert(err.message));
};

export const handleLogin = (mobile) => (dispatch) => {
  const config = {
    url: `http://localhost:3001/registeredUsers?mobile=${mobile}`,
    method: "GET",
  };
  return axios(config)
    .then((res) => {
      console.log(res.data);
      if (res.data[0].id) {
        const loginAction = actions.loginUser(res.data[0].id);

        // const setUserCart = actions.setUserCart(res.data[0].cart);

        res.data[0].cart?.map((item) => dispatch(setUserCart(item)));

        dispatch(loginAction);
        // dispatch(setUserCart);
      } else {
        const loginFailureAction = actions.loginFailure();
        dispatch(loginFailureAction);
      }
    })
    .catch((err) => {
      const loginFailureAction = actions.loginFailure();
      dispatch(loginFailureAction);
    });
};

export const getProducts =
  (query = "watches") =>
  (dispatch) => {
    const requestAction = actions.getProductsRequest();
    dispatch(requestAction);

    const config = {
      url: `http://localhost:3001/products?category=${query}`,
      method: "GET",
    };
    return axios(config)
      .then((res) => {
        const productAction = actions.getProductsSuccess(res.data);
        dispatch(productAction);
      })
      .catch((err) => {
        const failureAction = actions.getProductsFailure();
        dispatch(failureAction);
      });
  };

export const getSingleProduct = (id) => (dispatch) => {
  const requestAction = actions.getProductsRequest();
  dispatch(requestAction);
  console.log(id);
  const config = {
    url: `http://localhost:3001/products/${id}`,
    method: "GET",
  };
  return axios(config)
    .then((res) => {
      const productAction = actions.getSingle(res.data);
      dispatch(productAction);
    })
    .catch((err) => {
      const failureAction = actions.getProductsFailure();
      dispatch(failureAction);
    });
};

export const handleAddCart =
  (id, title, discount, price, qty, url) => (dispatch) => {
    console.log(id, title, url, discount, price, qty);
    const payLoad = {
      id: id,
      title: title,
      discount: discount,
      price: price,
      qty: qty,
      url: url,
      mrp: Math.floor(Number(price) - (Number(discount) * Number(price)) / 100),
      delDate: "Tue Feb 1",
      delCharge: price > 1000 ? "Free" : 40,
      token: loadData("token"),
    };

    const config = {
      url: "http://localhost:3001/cart/",
      method: "POST",
      data: payLoad,
    };
    return axios(config)
      .then((res) => {
        console.log(res);
        const addCartAction = actions.addCart(res.data);
        dispatch(addCartAction);
      })
      .catch((err) => alert(err.message));
  };

const deleteCartData = (id) => {
  const config = {
    url: `http://localhost:3001/cart/${id}`,
    method: "DELETE",
  };
  return axios(config);
};

export const handleLogout = () => (dispatch) => {
  const id = loadData("token");
  const payLoad = {
    cart: loadData("cart"),
    wishList: [],
  };

  const config = {
    url: `http://localhost:3001/registeredUsers/${id}`,
    method: "PATCH",
    data: payLoad,
  };

  return axios(config)
    .then((res) => {
      console.log(res);
      payLoad.cart?.map((item) => deleteCartData(item.id));
      const logoutAction = actions.logout();
      const emptyCart = actions.emptyCart();
      dispatch(logoutAction);
      dispatch(emptyCart);
    })
    .catch((err) => alert(err.message));
};

export const handleCartItemChange = (id, qty, count) => (dispatch) => {
  const payLoad = {
    qty: qty + count,
  };
  const config = {
    url: `http://localhost:3001/cart/${id}`,
    method: "PATCH",
    data: payLoad,
  };

  return axios(config)
    .then((res) => {
      console.log(res);
      if (count === 1) {
        const increment = actions.handleIncrement(id, 1);
        dispatch(increment);
      } else if (count === -1) {
        const decrement = actions.handleDecrement(id, -1);
        dispatch(decrement);
      }
    })
    .catch((err) => alert(err.message));
};

export const removeFromCart = (productId) => (dispatch) => {
  const config = {
    url: `http://localhost:3001/cart/${productId}`,
    method: "DELETE",
  };
  return axios(config)
    .then((res) => {
      const removeAction = actions.removeCart(productId);
      dispatch(removeAction);
    })
    .catch((err) => alert(err.message));
};