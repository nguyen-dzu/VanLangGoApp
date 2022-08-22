import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
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
  const [search, setSearch] = useState("");
  const [renderItem, setRenderItem] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const fetchData = async () => {
      const data = await productApi.getProductTypeId(item.id);
      setListProduct(data.data.pagedData);
      setRenderItem(data.data.pagedData)
    };
    await fetchData();
  };
  const handelSearch = (text: string) => {
    if (text) {
      const newData = renderItem.filter((item: any) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setListProduct(newData);
      setSearch(text);
    } else {
      setListProduct(renderItem);
      setSearch(text);
    }
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
          placeholder="Tìm kiếm Món Ăn ... "
          style={{
            borderRadius: 30,
            width: widthScreen * 0.9,
          }}
          icon={"search"}
          value={search}
          onChangeText={(text) => handelSearch(text)}
        />
      </TouchableOpacity>
      <FlatList
        data={listProduct}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View>
              <ItemProductList item={item} />
            </View>
          );
        }}
      />
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
