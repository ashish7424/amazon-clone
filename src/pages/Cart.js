import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Divider, message } from "antd";
import EmptyCart from "components/EmptyCart";
import CartDetails from "components/CartDetails";
import CheckoutDetails from "components/CheckoutDetails";
import Services from "components/Services";
import { routeNames } from "constants/pageRoutes.constants";
import {
  decrementQty,
  incrementQty,
  removeCart,
  setCartTotal,
} from "store/CartSlice/CartSlice";
import "./main.css";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addToCart = useSelector((state) => state.Cart.userCart);
  const isLoggedin = useSelector((state) => state.user.isLogin);
  const counter = addToCart.reduce((acc, el) => acc + el.count, 0);

  var element = 0;
  for (let i = 0; i < addToCart.length; i++) {
    element = element + addToCart[i].price * addToCart[i].count;
  }
  const total = element.toFixed(2);

  useEffect(() => {
    dispatch(setCartTotal(total));
    // eslint-disable-next-line
  }, [total]);

  const proceedToBuy = () => {
    if (isLoggedin) {
      navigate(routeNames.BillingDetails);
    } else {
      toast.warning("Please Login!");
      navigate(routeNames.Login);
    }
  };

  const removeCartItem = (index) => {
    dispatch(removeCart(index));
    message.error("Remove from Cart");
  };

  const decrementCart = (item, index) => {
    dispatch(decrementQty(item));
    if (item.count === 1) {
      dispatch(removeCart(index));
      message.error("Remove from Cart");
    }
  };

  const incrementCart = (item) => {
    dispatch(incrementQty(item));
  };

  return (
    <div>
      <div className="main-cart">
        <div className="cart-title">Cart :</div>
        {addToCart.length === 0 ? (
          <EmptyCart isLoggedin={isLoggedin} />
        ) : (
          <div className="flex-column gap-20">
            {addToCart.map((item, index) => {
              return (
                <CartDetails
                  item={item}
                  index={index}
                  decrementCart={decrementCart}
                  incrementCart={incrementCart}
                  removeCartItem={removeCartItem}
                />
              );
            })}
            {addToCart.length > 0 && <Services />}
            <Divider className="cart-divider" />
            <CheckoutDetails
              counter={counter}
              proceedToBuy={proceedToBuy}
              total={total}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
