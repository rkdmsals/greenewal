import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./components/utilis/variables.css"
import Home from "./components/views/Home";
import SpeakerPage from "./components/views/SpeakerPage/SpeakerPage";
import ProductDisplay from "./components/views/ShoppingPage/ProductDisplay";
import ShoppingCart from "./components/views/ShoppingPage/ShoppingCart";
import LoginButton from "./components/views/LoginButton";
import Login from "./components/Login";
import TestStart from "./components/views/game/TestStart";
import Test from "./components/views/game/Test"
import Menu from "./components/views/menu/menu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shop" element={<ProductDisplay />} />
          <Route exact path="/cart" element={<ShoppingCart />} />
          <Route exact path="/speaker" element={<SpeakerPage />} />
          <Route
            exact path="/login"
            element={<LoginButton />}
          />
          <Route
            path="redirect"
            element={<Login />}
          />
          <Route exact path="/testStart" element={<TestStart />} />
          <Route exact path="/test" element={<Test />} />
          <Route exact path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
