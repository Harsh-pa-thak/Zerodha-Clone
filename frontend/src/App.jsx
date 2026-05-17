import "./App.css";
import Home from "./landing_page/home/Home";
import { Routes, Route } from "react-router-dom";
import Signup from "./landing_page/signup/Signup";
import About from "./landing_page/about/About";
import Pricing from "./landing_page/pricing/Pricing";
import Product from "./landing_page/product/Product";
import Support from "./landing_page/support/Support";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/product" element={<Product />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
