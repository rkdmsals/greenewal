import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./components/utilis/variables.css"
import Home from "./components/views/Home";
import StartPage from "./components/views/StartPage/StartPage";
import SpeakerPage from "./components/views/SpeakerPage/SpeakerPage";
import SpeakerDetailPage from "./components/views/SpeakerPage/SpeakerDetailPage/SpeakerDeatailPage";
import ProductDisplay from "./components/views/ShoppingPage/ProductDisplay";
import ProductDetail from "./components/views/ShoppingPage/ProductDetail";
import ShoppingCart from "./components/views/ShoppingPage/ShoppingCart";
import LoginPage from "./components/views/Login/LoginPage";
import RegisterPage from "./components/views/Register/RegisterPage";
import TestStart from "./components/views/game/TestStart";
import Test from "./components/views/game/Test"
import CheckAnswers from "./components/views/game/CheckAnswers";
import Menu from "./components/views/menu/menu";
import SideBar from "./components/Others/SideBar";
import Ticket from "./components/views/Ticket/TicketPage"

function App() {

  const [showSideBar, setShowSideBar ] = useState(false)

  return (
    <div className="App">

    <img src="img/menu_navigation.png" alt='sidebaricon' className="sidebaricon" 
        onClick={() => setShowSideBar(!showSideBar)}
        />
      <BrowserRouter>

      
        <Routes>

          
          <Route exact path="/" element={<Home />} />
          <Route exact path="/start" element={<StartPage />} />
          <Route exact path="/shop" element={<ProductDisplay />} />
          <Route path="/shop/product-detail/:productId" element={<ProductDetail />} />
          <Route exact path="/cart" element={<ShoppingCart />} />
          <Route exact path="/speaker" element={<SpeakerPage />} />
          <Route exact path="/speakerDetail" element={<SpeakerDetailPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/testStart" element={<TestStart />} />
          <Route exact path="/testAnswers" element={<CheckAnswers />} />
          <Route exact path="/test" element={<Test />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/ticket" element={<Ticket />} />
          
        </Routes>

        <SideBar show={showSideBar} />
      </BrowserRouter>

      
        
      
    </div>
  );
}

export default App;
