import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { BASE_URL } from "../../types";
export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
export const ITEM_WIDTH_PRODUCT = Math.round(SLIDER_WIDTH / 3);
export default function (item: any) {
  return (
    <View style={style.containerImage}>
      <Image
        source={{ uri: `${BASE_URL}/${item.item.banner}` }}
        style={style.image}
      />
    </View>
  );
}
const style = StyleSheet.create({
  containerImage: {
    backgroundColor: "white",
    borderRadius: 20,
    width: ITEM_WIDTH,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginBottom: 10,
    marginTop: 10,
  },
  image: {
    width: ITEM_WIDTH,
    height: 200,
    borderRadius: 20,
  },
});
