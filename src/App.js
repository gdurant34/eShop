import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
            <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/checkout" element={<Checkout />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
