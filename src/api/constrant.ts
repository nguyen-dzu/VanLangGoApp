
const API_CONSTANTS = {
  AUTH: {
    LOGIN: '/api/Users/Login',
  },
  PRODUCT: {
    GET_ALL: '/api/Products',
    GET_ADDRESS_TYPE: (addressType: number) => `Product?AddressType=${addressType}`
  }
}

export default API_CONSTANTS
