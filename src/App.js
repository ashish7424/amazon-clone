import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./pages/main.css";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Header from "./pages/Header";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import FooterComp from "./pages/FooterComp";
import BillingDetails from "./pages/BillingDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/billingdetails" element={<BillingDetails />} />
        </Routes>
        <FooterComp />
      </BrowserRouter>
    </div>
  );
}

export default App;
