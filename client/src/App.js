import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./components/utilis/variables.css"
import Home from "./components/views/Home";
import SpeakerPage from "./components/views/SpeakerPage/SpeakerPage";
import ProductDisplay from "./components/views/ShoppingPage/ProductDisplay";
import ShoppingCart from "./components/views/ShoppingPage/ShoppingCart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shop" element={<ProductDisplay />} />
          <Route exact path="/cart" element={<ShoppingCart />} />
          <Route exact path="/speaker" element={<SpeakerPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
