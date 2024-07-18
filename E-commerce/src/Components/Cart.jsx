import React, { useEffect, useState } from "react";
import "./cartstyle.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeToCart,
  removeSingleCart,
} from "../Store/app/CartSlice";
import toast from "react-hot-toast";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.count);

  // Increase product quantity by one
  const handleProductInc = (product) => {
    dispatch(addToCart(product));
    
  };

  // Decrease product quantity by one
  const handleProductDec = (product) => {
    dispatch(removeSingleCart(product));
  };

  // Remove product from cart
  const handleRemoveProduct = (id) => {
    dispatch(removeToCart(id));
    toast.error("Removed from cart");
  };

  useEffect(() => {
    const calculateTotalPrice = () => {
      let totalPrice = 0;
      data.forEach((item) => {
        totalPrice += item.price * item.quantity;
      });
      setTotalPrice(totalPrice);
    };

    const calculateTotalQuantity = () => {
      let totalQuantity = 0;
      data.forEach((item) => {
        totalQuantity += item.quantity;
      });
      setTotalQuantity(totalQuantity);
    };

    if (Array.isArray(data)) {
      calculateTotalPrice();
      calculateTotalQuantity();
    }
  }, [data]);

  return (
    <div className="Container">
      <div className=" justify-content-center w-100">
        <div className="col-md-10">
          <div className="cart-box">
            <div className="mt-5 text-center">
              <h2>Cart Products</h2>
              <hr />
            </div>
            {Array.isArray(data) && data.length > 0 ? (
              data.map((prod, ind) => (
                <div className="cart-wrapper d-flex" key={ind}>
                  <div className="cart-img">
                    <img src={prod.image} alt="" />
                  </div>
                  <div className="cart-details">
                    <h3>{prod.title}</h3>
                    <h4>₹{Math.floor(prod.price)}</h4>
                    <h4>
                      {prod.rating.rate}★ ratings
                    </h4>
                    <div className="cart-product-action" style={{display:"flex", flexWrap:"wrap"}}>
                      <div style={{display:"flex"}}>
                      <button
                        className="cart-button"
                        onClick={
                          prod.quantity <= 1
                            ? () => handleRemoveProduct(prod.id)
                            : () => handleProductDec(prod)
                        }
                      >
                        -
                      </button>
                      <input type="text" value={prod.quantity} disabled />
                      <button
                        className="cart-button"
                        onClick={() => handleProductInc(prod)}
                      >
                        +
                      </button>
                      </div>
                      <div>
                      <button
                        className="remove-button border-0 rounded p-2 bg-danger br-1"
                        onClick={() => handleRemoveProduct(prod.id)}
                      >
                        Remove
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-cart">
                <i className="bi bi-cart"></i>
                <h2>Your cart is empty</h2>
              </div>
            )}
            <hr />
            {Array.isArray(data) && data.length > 0 ? (
              <div className="cart-bottom d-flex flex-column justify-content-between  h-100 align-items-start">
                <div className="d-flex justify-content-around">
                  <span className="fw-bold fs-4">
                    Total quantity:
                    </span>
                    <span className="fw-bold fs-4">{totalQuantity}
                    </span> 
                  
                </div>
                <div className="d-flex justify-content-around">
                  <span className="fw-bold fs-4">
                    Total Price: 
                  </span>
                  <span className="fw-bold fs-4">
                  ₹{Math.floor(totalPrice)}
                  </span>
                 
                </div>
                <button
                    className="w-10 p-1 border-0 rounded bg-success text-light p-2"
                    onClick={() => {
                      toast.success("This feature is not available");
                    }}
                  >
                    CheckOut
                  </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
