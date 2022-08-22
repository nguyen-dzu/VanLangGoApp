import api from "./api";
import { IOrder } from "./apiInterfaces";
import API_CONSTANTS from "./constrant";

export default {
  getAll: (orderId: string): any => {
    return api.get(API_CONSTANTS.ORDER.GET(orderId));
  },
  postOrder: (orderParam: IOrder): any => {
    return api.post(API_CONSTANTS.ORDER.POST_ORDER,orderParam);
  },
  putOrder: (orderParam: IOrder) => {
    return api.put(API_CONSTANTS.ORDER.POST_ORDER,orderParam);
  }
};
