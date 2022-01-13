// export const Routes = {
//   home: "/",
//   cartlayout: "/cartlayout",
//   productDetail: "/productDetail"
// };

import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import {CartLayoutPage} from "../pages/CartLayoutPage";
import ProductDetail from "../pages/ProductDetail";

export default function Allroutes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/cart">
        <CartLayoutPage />
      </Route>
      <Route exact path="/productDetail">
        <ProductDetail />
      </Route>
    </Switch>
  );
}
