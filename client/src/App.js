import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./components/utilis/variables.css"
import StartPage from "./components/views/StartPage/StartPage";
import SpeakerPage from "./components/views/SpeakerPage/SpeakerPage";
import SpeakerDetailPage from "./components/views/SpeakerPage/SpeakerDetailPage/SpeakerDeatailPage";
import ProductDisplay from "./components/views/ShoppingPage/ProductDisplay";
import ProductDetail from "./components/views/ShoppingPage/ProductDetail";
import ShoppingCart from "./components/views/ShoppingPage/ShoppingCart";
import LoginPage from "./components/views/Login/LoginPage";
import RegisterPage from "./components/views/Register/RegisterPage";
import Menu from "./components/views/menu/menu";
import Ticket from "./components/views/Ticket/TicketPage"
import BoothInfo from "./components/views/BoothInfo/BoothInfo";
import Feedback from "./components/views/Feedback/Feedback";
import Event from "./components/views/event/event"
import EventInformation from "./components/views/eventinformation/eventinformation"
import Photo from "./components/views/photo/photo"
import Header from "./components/Others/Header";
import StartPage2 from "./components/views/StartPage/StartPage2";
import PayingPage from "./components/views/ShoppingPage/PayingPage";
import Renewal from "./components/views/Renewal/Renewal";
import PayingForDirect from "./components/views/ShoppingPage/PayingForDirect";
import OrderCheck from "./components/views/ShoppingPage/OrderCheck";
function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`); //"--vh"라는 속성으로 정의해준다.
    console.log('window resize ');
  }

  window.addEventListener('resize', () => setScreenSize());
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<StartPage />} />
          <Route
            path="/*"
            element={<MainLayout />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
  function MainLayout() {
    return (
      <div>
        {/* MainLayout에서 사용하는 페이지들 */}
        <Header />
        <Routes>
          <Route exact path="/start" element={<StartPage2 />} />
          <Route exact path="/shop" element={<ProductDisplay />} />
          <Route path="/shop/product-detail/:productId" element={<ProductDetail />} />
          <Route exact path="/cart/:userId" element={<ShoppingCart />} />
          <Route exact path="/speaker" element={<SpeakerPage />} />
          <Route exact path="/speaker/detail" element={<SpeakerDetailPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/foods" element={<Menu />} />
          <Route exact path="/ticket" element={<Ticket />} />
          <Route exact path="/booth" element={<BoothInfo />} />
          <Route exact path="/event" element={<Event />} />
          <Route exact path="/eventinfo" element={<EventInformation />} />
          <Route exact path="/photo" element={<Photo />} />
          <Route exact path="/feedback" element={<Feedback />} />
          <Route exact path="/paying" element={<PayingPage />} />
          <Route exact path="/payingdirect" element={<PayingForDirect />} />
          <Route exact path="/renewal" element={<Renewal />} />
          <Route exact path="/checkOrder" element={<OrderCheck />} />
        </Routes>
      </div>
    );}
}

export default App;
