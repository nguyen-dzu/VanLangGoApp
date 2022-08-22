import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import { TextInput } from "../../../components/common";
import { productApi } from "../../../api";
import { Colors, Icons } from "../../../constant";
import ItemProductList from "../List/ItemProductList";
import KeyboardAwareScrollView from "../../../components/Layout/KeyboardAwareScrollView";
import { IProduct } from "../../../api/apiInterfaces";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootStackParamList } from "../../../types";
import { StackScreenProps } from "@react-navigation/stack";
const widthScreen = Dimensions.get("window").width;
export default function Search({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, "Search">) {
  const [search, setSearch] = useState("");
  const [listProduct, setListProduct] = useState([]);
  const [renderItem, setRenderItem] = useState([]);

  useEffect(() => {
    getAllProduct();
  }, []);

  const getAllProduct = async () => {
    try {
      const reponse = await productApi.getAll();
      if (reponse) {
        setListProduct(reponse.data.pagedData);
        setRenderItem(reponse.data.pagedData);
      }
    } catch (error) {
      console.log(error);
    }
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
          paddingVertical: 10,
          backgroundColor: Colors.background,
          paddingHorizontal: 5,
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons.ArrowRight
            style={{
              transform: [{ rotate: "-180deg" }],
              marginHorizontal: 10,
            }}
          />
        </TouchableOpacity>
        <TextInput
          containerStyle={{ marginBottom: 0 }}
          placeholder="Tìm kiếm Món Ăn ... "
          style={{
            borderRadius: 30,
            width: widthScreen * 0.8,
          }}
          icon={"search"}
          autoFocus={true}
          value={search}
          onChangeText={(text) => handelSearch(text)}
        />
      </View>
      
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
          style={{
            marginVertical: 20,
          }}
        />
    </SafeAreaView>
  );
}
