import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { routeNames } from "constants/pageRoutes.constants";
import Layouts, { LayoutsV1 } from "layouts";
import BillingDetails from "pages/BillingDetails";
import Cart from "pages/Cart";
import Condition from "pages/Condition";
import EditUser from "pages/EditUser";
import Help from "pages/Help";
import MiniTV from "pages/MiniTV";
import MovieDetail from "pages/MovieDetail";
import MyAccount from "pages/MyAccount";
import PageNotFound from "pages/PageNotFound";
import Privacy from "pages/Privacy";
import Products from "pages/Products";
import Signin from "pages/Signin";
import Signup from "pages/Signup";
import SingleProductDetail from "pages/SingleProductDetail";

const Navigator = () => {
  return (
    <BrowserRouter>
      <ToastContainer style={{ marginTop: "50px" }} />
      <Routes>
        <Route element={<Layouts />}>
          <Route path={routeNames.Home} element={<Products />} />
          <Route path={routeNames.Cart} element={<Cart />} />
          <Route path={routeNames.Help} element={<Help />} />
          <Route path={routeNames.Signup} element={<Signup />} />
          <Route path={routeNames.Login} element={<Signin />} />
          <Route path={routeNames.Privacy} element={<Privacy />} />
          <Route path={routeNames.Condition} element={<Condition />} />
          <Route path={routeNames.MyAccount} element={<MyAccount />} />
          <Route
            path={routeNames.SingleProduct}
            element={<SingleProductDetail />}
          />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route
            path={routeNames.BillingDetails}
            element={<BillingDetails />}
          />
          <Route path="/*" element={<PageNotFound />} />
        </Route>
        <Route element={<LayoutsV1 />}>
          <Route path={routeNames.miniTV} element={<MiniTV />} />
          <Route path={routeNames.MovieDetail} element={<MovieDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigator;
