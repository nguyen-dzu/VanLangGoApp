import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { productApi } from "../../../api";
import { IProduct, IRestaurant } from "../../../api/apiInterfaces";
import { Image, Text, TextInput } from "../../../components/common";
import { ItemProduct, ItemRestaurant } from "../../../components/Layout";
import { Colors, Icons, Layout } from "../../../constant";
import { BASE_URL, RootStackParamList } from "../../../types";
import ItemProductList from "./ItemProductList";
const widthScreen = Dimensions.get("window").width;

export default function ({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, "ListProduct">) {
  const { item } = route.params;
  const [listProduct, setListProduct] = useState([]);
  useEffect(() => {
    getData();
    
  }, []);
  const getData = async () => {
    const fetchData = async () => {
      const data = await productApi.getProductTypeId(item.id);
      setListProduct(data.data.pagedData);
    };
    await fetchData();
  };

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 15,
          backgroundColor: Colors.background,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons.ArrowRight
            style={{
              transform: [{ rotate: "-180deg" }],
              width: "20%",
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            width: widthScreen * 0.56,
            marginTop: 8,
          }}
        >
          <Text
            style={{
              fontSize: 20,
            }}
          >
            {item.name}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          paddingVertical: 10,
          backgroundColor: Colors.background,
          paddingHorizontal: 5,
          alignItems: "center",
        }}
      >
        <TextInput
          containerStyle={{ marginBottom: 0 }}
          placeholder="Tìm kiếm Món Ăn, Quán Ăn ... "
          style={{
            borderRadius: 30,
            width: widthScreen * 0.9,
          }}
          icon={"search"}
        />
      </TouchableOpacity>
      <ScrollView>
        {listProduct.map((item: IProduct, index) => {
          return (
            <View key={index++}>
              <ItemProductList item={item} />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageItem: {
    width: 105,
    height: 110,
    borderRadius: 15,
  },
});
