import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./components/utilis/variables.css"
import Home from "./components/views/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
