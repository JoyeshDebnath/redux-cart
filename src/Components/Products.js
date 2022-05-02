import React, { useState, useEffect } from "react";
import { add } from "../Store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Store/productSlice";
import { STATUS } from "../Store/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  // const [products, setProducts] = useState([]);
  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);

    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);

  // handle add function
  const handelAdd = (prod) => {
    //add the data to the redux store state
    dispatch(add(prod));
  };

  // chrck is the status is loading or idel ?
  if (status === STATUS.LOADING) {
    return <h1>Loading.......</h1>;
  }

  if (status === STATUS.ERROR) {
    return <h1>OOPS! Something Went Wrong!!!</h1>;
  }

  return (
    <div className="productsWrapper">
      {products.map((product) => {
        return (
          <div className="card" key={product.id}>
            <img src={product.image} alt="product image" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button onClick={() => handelAdd(product)} className="btn">
              Add To cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
