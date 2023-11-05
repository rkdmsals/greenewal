import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./components/utilis/variables.css"
import Home from "./components/views/Home";
import SpeakerPage from "./components/views/SpeakerPage/SpeakerPage";
import LoginButton from "./components/views/LoginButton";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/speaker" element={<SpeakerPage />} />
          <Route
            exact path="/login"
            element={<LoginButton />}
            />
          <Route 
            path="redirect" 
            element={<Login />} 
            />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
