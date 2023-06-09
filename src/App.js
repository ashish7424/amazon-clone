import "./App.css";
import "./pages/main.css";
import Help from "./pages/Help";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Header from "./pages/Header";
import Privacy from "./pages/Privacy";
import Products from "./pages/Products";
import EditUser from "./pages/EditUser";
import MyAccount from "./pages/MyAccount";
import Condition from "./pages/Condition";
import FooterComp from "./pages/FooterComp";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import BillingDetails from "./pages/BillingDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <ToastContainer style={{ marginTop: "50px" }} />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/help" element={<Help />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/condition" element={<Condition />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/billingdetails" element={<BillingDetails />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <FooterComp />
      </BrowserRouter>
    </div>
  );
}

export default App;
