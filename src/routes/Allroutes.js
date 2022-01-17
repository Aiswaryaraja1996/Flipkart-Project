import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import { CartLayoutPage } from "../pages/CartLayoutPage";
import ProductDetail from "../pages/ProductDetail";
import Products from "../pages/Products";
import Wishlist from "../pages/Wishlist";
import Payment from "../pages/Payment"

export default function Allroutes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/cart">
        <CartLayoutPage />
      </Route>
      <Route exact path="/productDetail/:id">
        <ProductDetail />
      </Route>
      <Route exact path="/products/:query">
        <Products />
      </Route>
      <Route exact path="/wishlist">
        <Wishlist />
      </Route>
      <Route exact path="/payment">
        <Payment/>
      </Route>
    </Switch>
  );
}
