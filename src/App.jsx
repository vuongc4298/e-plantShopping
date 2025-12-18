import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import "./App.css";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="background-image">
      <h1>Welcome to Paradise Nursery</h1>

      <button onClick={() => navigate("/products")}>
        Get Started
      </button>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
}

export default App;
