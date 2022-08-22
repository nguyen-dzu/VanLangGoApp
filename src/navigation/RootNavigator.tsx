import React from "react";
import { StyleSheet } from "react-native";
import { Address } from "../screens/root/Address";
import { Cart, StatusOrder } from "../screens/root/Cart";
import { List } from "../screens/root";
import { Home, NavInfor, Notification } from "../screens/root/main";
import { Product } from "../screens/root/Product";
import {
  Restaurant,
  RestaurantType0,
  RestaurantType1,
  RestaurantType2,
} from "../screens/root/Restaurant";

import { RootStackParamList, StackScreenProps } from "../types";
import Navigator from "./Navigator";
import Login from "../screens/auth/Login";
import Profile from "../screens/profile/Profile";
import SignUpShipper from "../screens/auth/SignUpShipper";
import SignUpRestaurant from "../screens/auth/SignUpRestaurant";
import EditProfile from "../screens/profile/EditProfile";
import Search from "../screens/root/Search/Search";
import DetailProduct from "../screens/root/Product/DetailProduct";
import { ImagesPicker } from "../components/Layout";
import { Button, Text } from "../components/common";
import { useAppSelector } from "../hooks/useRedux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "../constant";

interface IStackScreen extends StackScreenProps {
  name: keyof RootStackParamList;
}

const screens: IStackScreen[] = [
  {
    name: "Home",
    component: Home,
    options: {
      headerShown: false,
    },
  },
  {
    name: "NavInfor",
    component: NavInfor,
    options: {
      headerTitle: "Điều Hướng Hành Động",
    },
  },
  {
    name: "Notification",
    component: Notification,
    options: {
      headerTitle: "Thông Báo",
    },
  },
  {
    name: "Restaurant",
    component: Restaurant,
    options: {
      headerShown: false,
    },
  },
  {
    name: "Address",
    component: Address,
    options: {
      headerTitle: "Địa Chỉ Của Bạn",
    },
  },
  {
    name: "Product",
    component: Product,
    options: {
      headerShown: false,
    },
  },
  {
    name: "Cart",
    component: Cart,
    options: {
      headerTitle: "Giỏ Hàng",
    },
  },
  {
    name: "ListProduct",
    component: List.ListProduct,
    options: {
      headerShown: false,
    },
  },
  {
    name: "RestaurantType0",
    component: RestaurantType0,
    options: {
      headerTitle: "Trong Khuôn Viên Trường",
    },
  },
  {
    name: "RestaurantType1",
    component: RestaurantType1,
    options: {
      headerTitle: "Cổng Đặng Thùy Trâm",
    },
  },
  {
    name: "RestaurantType2",
    component: RestaurantType2,
    options: {
      headerTitle: "Cổng Dương Quảng Hàm",
    },
  },
  {
    name: "Profile",
    component: Profile,
    options: {
      headerTitle: "",
    },
  },
  {
    name: "EditProfile",
    component: EditProfile,
    options: {
      headerTitle: "",
    },
  },
  {
    name: "SignUpRestaurant",
    component: SignUpRestaurant,
    options: {
      headerTitle: "",
    },
  },
  {
    name: "SignUpShipper",
    component: SignUpShipper,
    options: {
      headerTitle: "",
    },
  },
  {
    name: "Search",
    component: Search,
    options: {
      headerShown: false,
    },
  },
  {
    name: "DetailProduct",
    component: DetailProduct,
    options: {
      headerShown: false,
    },
  },
  {
    name: "ImagesPicker",
    component: ImagesPicker,
    options: {
      headerLeft: () => null,
      headerTitle: "Chọn ảnh",
    },
  },
  {
    name: "Order",
    component: StatusOrder,
    options: {
      headerTitle: "Thông Tin Đơn Hàng",
    },
  },
];

export default function RootNavigator() {
  return (
    <>
      <Navigator screens={screens} initialRouteName="Home" />
      
    </>
  );
}

const styles = StyleSheet.create({});
