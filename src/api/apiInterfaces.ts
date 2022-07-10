// AUTH
// AUTH
export interface ISignUp {
  emailAddress: string,
  password: string,
}

export interface ILogin {
  emailAddress: string
  password: string
}
export interface IRequest {
  page: number,
  per_page: number
  q?: string
}
export type IProduct = {
  name: string;
  price: number;
  description: string;
  image: string;
  productTypeId: string;
  restaurantId: string;
};
// PAGINATION
export type IPagination = {
  page: number;
  per_page: number;
};
