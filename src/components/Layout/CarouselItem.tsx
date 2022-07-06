import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
export const ITEM_WIDTH_PRODUCT = Math.round(SLIDER_WIDTH / 3);
export default function () {
  return (
    <View style={styles.container} >
      <Image source={require('../../assets/images/banner3.jpg')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    marginTop: 10

  },
  image: {
    width: ITEM_WIDTH,
    height: 200,
    borderRadius: 20,
  },
  body: {
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
