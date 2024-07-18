import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Store/app/CartSlice';
import { fetchProducts, setActiveCategory } from '../Store/app/ProductSlice';
import toast from 'react-hot-toast';
import StarRating from './rating';

const Product = () => {
  const dispatch = useDispatch();
  const { products, loading, error, activeCategory } = useSelector(state => state.productData);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleClick = (product) => {
    dispatch(addToCart(product));
   
toast.success("Added to cart")
   
  };

 

  if (loading) {
    return <div className='loader'></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredProducts = activeCategory
    ? products.filter(product => product.category === activeCategory)
    : products;

  return (
    <div className='product'>
      {filteredProducts.length > 0 ? (
       filteredProducts.map((product) => (
          <div key={product.id} className="card" style={{ width: "20rem", padding: "10px", height: "400px" }}>
            <img src={product.image} alt={product.category} className="card-img-top" style={{ aspectRatio: "3/2" }} />
            <div className="card-body">
              <h5 className="card-title">{product.category}</h5>
              <h4>Price: ₹{Math.floor(product.price)}</h4>
              <StarRating rating={product.rating.rate}/>
              <button className="btn btn-primary" onClick={()=> handleClick(product)}>Add To Cart</button>
            </div>
          </div>
        ))
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
};

export default Product;
