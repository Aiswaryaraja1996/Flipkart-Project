import axios from "axios";
import * as actions from "./Action";
import { v4 as uuidv4 } from 'uuid';

export const handleRegister = (login) => (dispatch) => {
  const payLoad = {
    id:uuidv4(),
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
      // const loginAction = actions.loginUser(res.data.token);
      // dispatch(loginAction);
    })
    .catch((err) => {
      // const failureAction = actions.loginFailure();
      // dispatch(failureAction);
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

  export const getSingleProduct =
  (id) =>
  (dispatch) => {
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
      mrp: Math.floor((discount * price) / 100),
      delDate: "Tue Feb 1",
      delCharge: price > 1000 ? "Free" : 40,
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
