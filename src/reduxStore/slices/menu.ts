import { createSlice } from "@reduxjs/toolkit";
import { ICart } from "../../api/apiInterfaces";

const slice = createSlice({
  name: "menu",
  initialState: {
    detailCart: [],
    amount: 1,
    idOrder: '',
    statusOrder: false,
    listOrder: null
  },
  reducers: {
    setDetailCart(state, actions) {
      state.detailCart = actions.payload;
    },
    setOrderStatus (state, actions) {
      state.statusOrder = actions.payload;
    },
    setListOrder (state, actions) {
      state.listOrder = actions.payload;
    },
    setOrderDetail (state, actions) {
      state.idOrder = actions.payload
    },
    setAmount(state, actions) {
      state.amount = actions.payload;
    },
    increaseAmount(state, actions) {
      let temp = actions.payload;
      state.detailCart.map((item: any) => {
        if (item.productId === temp) {
          item.amount += 1;
        }
      });
    },
    decreaseAmount(state, actions) {
      let temp = actions.payload;
      state.detailCart.map((item: any) => {
        if (item.productId === temp) {
          if (item.amount > 1) {
            item.amount -= 1;
          }
        }
      });
    },
  },
});

export const menuActions = slice.actions;
export const menuReducers = slice.reducer;
