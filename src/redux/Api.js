import axios from "axios";
import * as actions from "./Action";

export const handleLogin = (loginDetails) => (dispatch) => {
  const payLoad = {
    username: loginDetails.username,
    password: loginDetails.password,
  };
  const config = {
    url: "https://fakestoreapi.com/auth/login",
    method: "POST",
    data: payLoad,
  };
  return axios(config)
    .then((res) => {
      console.log(res);
      const loginAction = actions.loginUser(res.data.token);
      dispatch(loginAction);
    })
    .catch((err) => {
      const failureAction = actions.loginFailure();
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
      url: "http://localhost:3000/cart/",
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
