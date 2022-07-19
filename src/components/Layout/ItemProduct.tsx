import { useNavigation } from "@react-navigation/core";
import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors, Icons } from "../../constant";
import { INavigation, RootStackParamList } from "../../types";
import { Image, Text } from "../common";
import product from "../../api/product";
import { SLIDER_WIDTH } from "./CarouselItem";
import { IProduct } from "../../api/apiInterfaces";
import { cartApi } from "../../api";
import { actions } from "../../reduxStore/slices";
import { storage } from "../../helpers";
export default function ({ item }: { item: IProduct }) {
  const [amountProduct, setAmountProduct] = useState(2);
  const upAmount = async () => {
    try {
      setAmountProduct((count) => count + 1);
      await storage.set("amount", amountProduct);
      const amount2 = await storage.get('amount')
      console.log(amount2)
    } catch (error) {
      console.log(error);
    }
  };
  const dowAmount = async () => {
    try {
      setAmountProduct((count) => Math.min(1, count + 1));
      await storage.remove('amount')
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 15,
          marginVertical: 25,
        }}
        // onPress={() => getData(item)}
      >
        <View
          style={{
            marginRight: "31%",
          }}
        >
          <Text
            style={{
              marginVertical: 10,
              fontWeight: "600",
              fontSize: 22,
            }}
          >
            {item.name}
          </Text>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "300",
              }}
            >
              {item.description}
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "300",
              }}
            >
              {item.price} VNĐ
            </Text>
          </View>
        </View>
        <View style={{}}>
          <Image
            style={{
              width: 80,
              height: 90,
              borderRadius: 10,
            }}
            source={{
              uri: `http://192.168.1.2:8500/${item.image}`,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => upAmount()}>
          <Icons.ArrowRight color={Colors.gray6} style={styles.up} />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 20,
          }}
        >
          {amountProduct - 1}
        </Text>
        <TouchableOpacity onPress={() => dowAmount()}>
          <Icons.ArrowRight color={Colors.gray6} style={styles.dow} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  up: {
    transform: [{ rotate: "-90deg" }],
  },
  dow: {
    transform: [{ rotate: "90deg" }],
  },
});
