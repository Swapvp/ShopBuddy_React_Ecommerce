import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../../assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_products, cartItems, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className="cartItems">
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_products.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <div className="cartItems-format">
              <img src={item.image} alt="" className="carticon-product-icon" />
              <p>{item.name}</p>
              <p>${item.new_price}</p>
              <button className="cartItems-quantity">
                {carItems[item.id]}
              </button>
              <p>{item.new_price * carItems[item.id]}</p>
              <img
                className="removeIcon"
                src={remove_icon}
                onClick={() => {
                  removeFromCart(item.id);
                }}
                alt=""
              />
            </div>
          );
        }
        return null;
      })}
      <div className="cartItems-down">
        <div className="cartItems-total">
          <h1>cart Totals</h1>
          <div>
            <div className="cartItems-total-items">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItems-total-items">
              <p>shipping fee</p>
              <p>free</p>
            </div>
            <hr />
            <div className="cartItems-total-items">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
            <button>Checkout</button>
          </div>
        </div>
        <div className="cartItems-promo">
          <p>Apply Coupon</p>
          <div className="cartItem-promoBox">
            <input type="text" placeholder="coupon" />
            <button>submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
