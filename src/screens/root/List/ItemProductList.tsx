import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { IProduct, IProductType, IRestaurant } from "../../../api/apiInterfaces";
import { Image, Text } from "../../../components/common";
import { Colors } from "../../../constant";
import Navigation from "../../../navigation";
import { BASE_URL, INavigation } from "../../../types";

export default function ItemProductList({ item }: {item: IProduct}) {
  const navigation: INavigation = useNavigation();
  const goDetailProduct = () => {
    navigation.navigate('DetailProduct', {item})
  }
  return (
    <TouchableOpacity onPress={() => goDetailProduct()}>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 15,
              marginHorizontal: 15,
              alignItems: "center",
            }}
            key={item.id}
          >
            <View>
              <Image
                style={styles.imageItem}
                source={{
                  uri: `${BASE_URL}/${item.image}`,
                }}
              />
            </View>
            <View
              style={{
                marginHorizontal: 15,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  width: 200,
                  lineHeight: 30,
                }}
                ellipsizeMode="middle"
                numberOfLines={1}
              >
                {item.description}
              </Text>
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 14,
                  color: Colors.gray6,
                }}
              >
                {item.price
                  ? item.price.toLocaleString("vi", {
                      style: "currency",
                      currency: "VND",
                    })
                  : item.price}
              </Text>
            </View>
          </View>
       
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imageItem: {
    width: 105,
    height: 110,
    borderRadius: 15,
  },
});
