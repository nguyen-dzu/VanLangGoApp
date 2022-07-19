import api from "./api";
import { IProduct } from "./apiInterfaces";
import API_CONSTANTS from "./constrant";

export default {
  getAll: (): any => {
    return api.get(API_CONSTANTS.PRODUCT.GET_ALL);
  },
  getAddressType: (addressType: number): any => {
    return api.get(API_CONSTANTS.PRODUCT.GET_ADDRESS_TYPE(addressType));
  },
  getProductType: (): any => {
    return api.get(API_CONSTANTS.PRODUCT.GET_PRODUCT_TYPE);
  }
};
