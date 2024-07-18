import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: []
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Conditionally add product to cart and increase by one 
    addToCart: (state, action) => {
      const isData = state.count.findIndex(ele => ele.id === action.payload.id);
      if (isData >= 0) {
        state.count[isData].quantity += 1;
      } else {
        state.count.push({ ...action.payload, quantity: 1 });
      }
    },

    // Remove product from cart 
    removeToCart: (state, action) => {
      state.count = state.count.filter(item => item.id !== action.payload);
    },

    // Remove product quantity by 1
    removeSingleCart: (state, action) => {
      const isData = state.count.findIndex(ele => ele.id === action.payload.id);
      if (isData >= 0) {
        state.count[isData].quantity -= 1;
        if (state.count[isData].quantity === 0) {
          state.count.splice(isData, 1);
        }
      }
    }
  }
});

export const { addToCart, removeToCart, removeSingleCart } = counterSlice.actions;
export default counterSlice.reducer;
