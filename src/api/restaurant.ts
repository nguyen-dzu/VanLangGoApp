import api from "./api";
import { IProduct } from "./apiInterfaces";
import API_CONSTANTS from "./constrant";

export default {
  getAll: (): any => {
    return api.get(API_CONSTANTS.RESTAURNAT.GET_ALL);
  },
  getAddressType: (addressType: number): any => {
    return api.get(API_CONSTANTS.RESTAURNAT.GET_ADDRESS_TYPE(addressType));
  },
  getById: (id: string): any => {
    return api.get(API_CONSTANTS.RESTAURNAT.GET_BY_ID(id))
  },
  getBanner: (): any => {
    return api.get(API_CONSTANTS.RESTAURNAT.GETBANNER)
  }
};
