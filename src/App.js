import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Routes } from "../src/routes/index";
import { CartLayoutPage } from "./pages/CartLayoutPage";
import Home from "./pages/Home";
import { Accessories } from "./components/Accessories";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={Routes.home} component={Home} />
          <Route exact path={Routes.cartlayout} component={CartLayoutPage} />
          <Route
            exact
            path={Routes.accessorieslayout}
            component={Accessories}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
