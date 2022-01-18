import axios from "axios";
import * as actions from "./Action";
import { v4 as uuidv4 } from "uuid";
import { loadData} from "../utils/localStorage";

//To Register a new User

export const handleRegister = (login) => (dispatch) => {
  const payLoad = {
    id: uuidv4(),
    mobile: login.mobile,
    password: login.password,
    cart: [],
    wishlist: [],
  };
  const config = {
    url: "https://product-mock-server.herokuapp.com/registeredUsers/",
    method: "POST",
    data: payLoad,
  };

  return axios(config)
    .then((res) => {
      const registerAction = actions.registerSuccess();
      dispatch(registerAction);
    })
    .catch((err) => {});
};

//To set the cart and wishlist on Login

export const setUserCart = (payLoad) => (dispatch) => {
  const config = {
    url: "https://product-mock-server.herokuapp.com/cart/",
    method: "POST",
    data: payLoad,
  };
  return axios(config)
    .then((res) => {
      const addCartAction = actions.addCart(res.data);
      dispatch(addCartAction);
    })
    .catch((err) => console.log(err.message));
};

export const setWishlist = (payLoad) => (dispatch) => {
  const config = {
    url: "https://product-mock-server.herokuapp.com/wishlist/",
    method: "POST",
    data: payLoad,
  };
  return axios(config)
    .then((res) => {
      const addWishlistAction = actions.addWishlist(res.data);
      dispatch(addWishlistAction);
    })
    .catch((err) => console.log(err.message));
};



export const handleLogin = (mobile) => (dispatch) => {
  const config = {
    url: `https://product-mock-server.herokuapp.com/registeredUsers?mobile=${mobile}`,
    method: "GET",
  };
  return axios(config)
    .then((res) => {
      if (res.data[0].id) {
        const loginAction = actions.loginUser(res.data[0].id);

        res.data[0].cart?.map((item) => dispatch(setUserCart(item)));
        res.data[0].wishlist?.map((item) => dispatch(setWishlist(item)));

        dispatch(loginAction);
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
      url: `https://product-mock-server.herokuapp.com/products?category=${query}`,
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

  const config = {
    url: `https://product-mock-server.herokuapp.com/products/${id}`,
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
      url: "https://product-mock-server.herokuapp.com/cart/",
      method: "POST",
      data: payLoad,
    };
    return axios(config)
      .then((res) => {
        const addCartAction = actions.addCart(res.data);
        dispatch(addCartAction);
      })
      .catch((err) => console.log(err.message));
  };

export const deleteCartData = (id) => (dispatch) => {
  const config = {
    url: `https://product-mock-server.herokuapp.com/cart/${id}`,
    method: "DELETE",
  };
  return axios(config);
};

export const deleteWishListData = (id) => (dispatch) => {
  const config = {
    url: `https://product-mock-server.herokuapp.com/wishlist/${id}`,
    method: "DELETE",
  };
  return axios(config);
};

export const handleLogout = () => (dispatch) => {
  const id = loadData("token");

  const payLoad = {
    cart: loadData("cart"),
    wishlist: loadData("wishlist"),
  };

  const config = {
    url: `https://product-mock-server.herokuapp.com/registeredUsers/${id}`,
    method: "PATCH",
    data: payLoad,
  };

  return axios(config)
    .then((res) => {
      console.log(payLoad.cart, payLoad.wishlist);

      payLoad.cart?.map((item) => dispatch(deleteCartData(item.id)));
      payLoad.wishlist?.map((item) => dispatch(deleteWishListData(item.id)));

      const logoutAction = actions.logout();
      const emptyCart = actions.emptyCart();
      const emptyWishlist = actions.emptyWishlist();

      dispatch(logoutAction);
      dispatch(emptyCart);
      dispatch(emptyWishlist);
    })
    .catch((err) => console.log(err.message));
};

export const handleCartItemChange = (id, qty, count) => (dispatch) => {
  const payLoad = {
    qty: qty + count,
  };
  const config = {
    url: `https://product-mock-server.herokuapp.com/cart/${id}`,
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
    .catch((err) => console.log(err.message));
};

export const removeFromCart = (productId) => (dispatch) => {
  const config = {
    url: `https://product-mock-server.herokuapp.com/cart/${productId}`,
    method: "DELETE",
  };
  return axios(config)
    .then((res) => {
      const removeAction = actions.removeCart(productId);
      dispatch(removeAction);
    })
    .catch((err) => console.log(err.message));
};

export const removeFromWishlist = (productId) => (dispatch) => {
  const config = {
    url: `https://product-mock-server.herokuapp.com/wishlist/${productId}`,
    method: "DELETE",
  };
  return axios(config)
    .then((res) => {
      const removeAction = actions.removeWishlist(productId);
      dispatch(removeAction);
    })
    .catch((err) => console.log(err.message));
};

export const getCart = () => (dispatch) => {
  const config = {
    url: `https://product-mock-server.herokuapp.com/cart/`,
    method: "GET",
  };

  return axios(config)
    .then((res) => {
      const getCartItems = actions.getCartItems(res.data);
      dispatch(getCartItems);
    })
    .catch((err) => console.log(err.message));
};

export const handleAddWishlist = (item, inWishlist) => (dispatch) => {
  console.log(inWishlist);
  const payLoad = {
    id: item.id,
    url: item.url,
    discount: item.discount,
    price: item.price,
    shortTitle: item.shortTitle,
    review: item.customerRatings,
    token: loadData("token"),
  };
  if (inWishlist) {
    const config = {
      url: `https://product-mock-server.herokuapp.com/wishlist/`,
      method: "POST",
      data: payLoad,
    };
    return axios(config)
      .then((res) => {
        const addItems = actions.addWishlist(payLoad);
        dispatch(addItems);
      })
      .catch((err) => console.log(err.message));
  } else {
    const config = {
      url: `https://product-mock-server.herokuapp.com/wishlist/${item.id}`,
      method: "DELETE",
    };
    return axios(config)
      .then((res) => {
        const removeItems = actions.removeWishlist(item.id);
        dispatch(removeItems);
      })
      .catch((err) => console.log(err.message));
  }
};

export const getWishList = () => (dispatch) => {
  const config = {
    url: `https://product-mock-server.herokuapp.com/wishlist/`,
    method: "GET",
  };
  return axios(config)
    .then((res) => {
      const wishlistAction = actions.getWishList(res.data);
      dispatch(wishlistAction);
    })
    .catch((err) => console.log(err.message));
};
