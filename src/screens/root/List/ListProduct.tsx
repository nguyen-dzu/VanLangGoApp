import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { Dimensions, SafeAreaView, TouchableOpacity, View } from "react-native";
import { productApi } from "../../../api";
import { Text } from "../../../components/common";
import { ItemRestaurant } from "../../../components/Layout";
import { Colors, Icons, Layout } from "../../../constant";
import { RootStackParamList } from "../../../types";
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
        {listProduct.map((item: any, index) => {
          {
            item.productType.products.map((item: any, i: any) => {
              return (
                <View key={index + i + 1}>
                  <ItemRestaurant item={item.restaurant} />
                </View>
              );
            });
          }
        })}
      </View>
    </SafeAreaView>
  );
}
