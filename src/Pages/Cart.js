import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Store/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove = (ID) => {
    // filter the product using product id
    dispatch(remove(ID));
  };
  return (
    <>
      <h2>
        CART
        <img
          className="cart-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_XT1QT6oWkkXBLYOVR9Qk494RW1j_8hEOA&usqp=CAU"
        />
      </h2>

      <h1>{products.length}</h1>
      <div className="cartWrapper">
        {
          // map the products and render it to cart page
          products.map((prod) => {
            return (
              <div className="cartCard" key={prod.id}>
                <img src={prod.image} />
                <h4>{prod.title}</h4>
                <h5>{prod.price}</h5>
                <button onClick={() => handleRemove(prod.id)} className="btn">
                  Remove
                </button>
              </div>
            );
          })
        }
      </div>
    </>
  );
};

export default Cart;
