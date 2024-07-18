import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategory } from '../Store/app/ProductSlice';
import "./cartstyle.css"

const Sidebar = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.productData.categories);

  const handleCategoryClick = (category) => {
    dispatch(setActiveCategory(category));
  };
  const handleCategoryChange = (category) => {
    dispatch(setActiveCategory(category));
  };

  return (
    <div className="sidebar">
      <h2>Categories</h2>
      <ul>
     <li><button onClick={() => handleCategoryChange(null)}>All</button></li>
        {categories.map(category => (
          <li key={category}>
            <button onClick={() => handleCategoryClick(category)}>
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};



export default Sidebar;
