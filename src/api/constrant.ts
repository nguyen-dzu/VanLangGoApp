
const API_CONSTANTS = {
  AUTH: {
    LOGIN: '/api/Users/Login',
  },
  PRODUCT: {
    GET_ALL: '/api/Products',
    GET_ADDRESS_TYPE: (addressType: number) => `/api/Products?AddressType=${addressType}`
  },
  RESTAURNAT: {
    GET_ALL: '/api/Restaurants',
    GET_ADDRESS_TYPE: (addressType: number) => `/api/Restaurants?AddressType=${addressType}`
  }
}

export default API_CONSTANTS
