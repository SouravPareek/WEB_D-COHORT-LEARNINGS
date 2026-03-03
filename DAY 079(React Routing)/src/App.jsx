import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import AnyProduct from "./pages/AnyProduct";
import ProductDetail from "./pages/ProductDetail"
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-black w-screen h-screen">
      <div className="bg-white h-1/5 w-full relative">
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />

            {/* Nested Routes */}
          <Route path="/contact/support" element={<Support />} />
          <Route path="/product/men" element={<Men />} />
          <Route path="/product/women" element={<Women />} />

            {/* Dynamic Routes */}
          <Route path="/product/:productId" element={<AnyProduct />} />

            {/* Nested Dynamic Routes */}
          <Route path="/product/:productId/detail" element={<ProductDetail />} />

          {/* Not found page */}
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
