// AUTH

import moment from "moment";

// AUTH
export interface ISignUp {
  emailAddress: string;
  password: string;
}
export interface IRestaurant {
  name: String;
  address: String;
  isActive: boolean;
  banner: string;
  userId: string;
  addressType: number;
  user: null;
  categories: null;
  products: [IProduct,];
  id: string;
  createdAt: string;
}
export interface ILogin {
  emailAddress: string;
  password: string;
}
export interface IRequest {
  page: number;
  per_page: number;
  q?: string;
}
export type IProduct = {
  name: string;
  price: number;
  description: string;
  image: string;
  productTypeId: string;
  restaurantId: string;
  id: string;
  createdAt: string;
};
export type ICart = {
  userId: string;
  productId: string;
  amount: number;
  user: IUser;
  product: IProduct;
};
export type IUser = {
  emailAddress: string;
  avatar: null;
  fullName: string;
  phoneNumber: null;
  roleId: string;
  isActive: true;
  role: null;
  id: string;
  createdAt: string;
};
// PAGINATION
export type IPagination = {
  page: number;
  per_page: number;
};
