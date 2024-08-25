import React, { useContext } from "react";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import "../ProductDisplay/ProductDisplay.css";
import "../../assets/all_product";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  //   const { product } = props;

  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product-display">
      <div className="Productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={props.image} alt="" />
          <img src={props.image} alt="" />
          <img src={props.image} alt="" />
          <img src={props.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={props.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
        </div>
        <p>(122)</p>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${props.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${props.new_price}
          </div>
        </div>
        <div className="productdisplay-right-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum illum
          accusantium, dolorum eligendi esse repudiandae. Eaque necessitatibus
          ipsam odit error impedit molestias provident id deserunt, iste dolore
          nihil eius debitis.
        </div>
        <div className="productdisplay-right-sizes">
          <h1>select size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>2XL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(props.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          <span>Category:</span>Women, T-shirts, Crop tops
        </p>
        <p className="productdisplay-right-category">
          <span>Tags:</span>Mordern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
