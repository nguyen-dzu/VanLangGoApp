import api from "./api";
import API_CONSTANTS from "./constrant";

export default {
  getAll: (): any => {
    return api.get(API_CONSTANTS.CART.GET_ALL);
  },
  postCart: (ProductId: string, amount: number): any => {
    return api.post(API_CONSTANTS.CART.POST_CART(ProductId, amount));
  },
  putCart: (ProductId: string, amount: number): any => {
    return api.put(API_CONSTANTS.CART.UPDATE_CART(ProductId, amount));
  },
  delCart: (ProductId: string): any => {
    return api.delete(API_CONSTANTS.CART.DELETE_CART(ProductId));
  },
  clearCart: (): any => {
    return api.delete(API_CONSTANTS.CART.CLEAR_CART);
  }
};
