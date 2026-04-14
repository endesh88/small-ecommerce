import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalprice: 0,
  totalquantity: 0

};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart(state, action) {
      const newItem=action.payload;
      const itemIndex=state.products.find((item) =>item.id===newItem.id) 
      if(itemIndex){
        itemIndex.quantity++;
        itemIndex.totalPrice+=newItem.price;

      }
      else{
        state.products.push({
          id:newItem.id,
          name:newItem.name,
          price:newItem.price,
          quantity:1,
          totalPrice:newItem.price,
          image:newItem.image
        })
      }
      state.totalprice+=newItem.price;
      state.totalquantity++;
    },
    removeFromcart(state,action){
        const id=action.payload;
      const finditem=state.products.find((item) =>item.id===id) 
      if(finditem){
        state.products=state.products.filter((item) =>item.id!==id)
        state.totalprice-=finditem.totalPrice;
        state.totalquantity-=finditem.quantity;
      }
    },
    increaseQuantity(state,action){
      const id=action.payload;
      const finditem=state.products.find((item)=>item.id===id)
      if(finditem){
        finditem.quantity++;
        finditem.totalPrice+=finditem.price;
        state.totalquantity++;
        state.totalprice+=finditem.price;
      }
    },
      decreaseQuantity(state,action){
      const id=action.payload;
      const finditem=state.products.find((item)=>item.id===id)
      if(finditem && finditem.quantity>1){
        finditem.quantity--;
        finditem.totalPrice-=finditem.price;
        state.totalquantity--;
        state.totalprice-=finditem.price;
      }
    }
  },
});

export const { addTocart, removeFromcart,increaseQuantity,decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;