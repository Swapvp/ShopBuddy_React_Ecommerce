import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import "./CSS/ShopCategory.CSS";
import dropdown_icon from "../assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img src={banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
