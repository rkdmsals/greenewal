import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./components/utilis/variables.css"
import Home from "./components/views/Home";
import SpeakerPage from "./components/views/SpeakerPage/SpeakerPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/speaker" element={<SpeakerPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
