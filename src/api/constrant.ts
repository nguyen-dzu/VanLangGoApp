import { IOrder } from "./apiInterfaces"

const API_CONSTANTS = {
  AUTH: {
    LOGIN: '/api/Users/Login',
  },
  PRODUCT: {
    GET_ALL: '/api/Products',
    GET_ADDRESS_TYPE: (addressType: number) => `/api/Products?AddressType=${addressType}`,
    GET_PRODUCT_TYPE: '/api/ProductTypes'
  },
  RESTAURNAT: {
    GET_ALL: '/api/Restaurants',
    GET_ADDRESS_TYPE: (addressType: number) => `/api/Restaurants?AddressType=${addressType}`
  },
  CART: {
    GET_ALL : '/api/Carts',
    POST_CART: (ProductId: string, amount: number) => `/api/Carts?productId=${ProductId}&amount=${amount}`,
    UPDATE_CART: (ProductId: string, amount: number) => `/api/Carts?productId=${ProductId}&amount=${amount}`,
    DELETE_CART: (ProductId: string) => `/api/Carts?productId=${ProductId}`,
    CLEAR_CART: '/api/Carts/Clear',
  },
  ORDER: {
    GET: (orderId: string) => `/api/Orders?orderId=${orderId}`,
    POST_ORDER: `/api/Orders`
  }
}

export default API_CONSTANTS
