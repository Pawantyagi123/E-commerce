import React from 'react';
import Sidebar from './Sidebar';
import Product from './Product';
import "./style.css"

const Home = () => {
  return (
    <div className="home">
      <div>
        <Sidebar />
        </div>
        <div className='home-product'>
        <Product />
        </div>
    </div>
  );
};

export default Home;
