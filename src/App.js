import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Allroutes from "./routes/Allroutes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Allroutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
