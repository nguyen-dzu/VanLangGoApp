import { useNavigation } from "@react-navigation/core";
import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors, Icons } from "../../constant";
import { BASE_URL, INavigation, RootStackParamList } from "../../types";
import { Image, Text } from "../common";
import product from "../../api/product";
import { IProduct } from "../../api/apiInterfaces";
import { cartApi } from "../../api";
import { actions } from "../../reduxStore/slices";
import { storage } from "../../helpers";
export const SLIDER_WIDTH = Dimensions.get("window").width;

export default function ({ item }: { item: IProduct }) {
  const [amountProduct, setAmountProduct] = useState(0);
  const upAmount = async (amount: any) => {
    const totalAmount = (amount += 1);
    setAmountProduct(totalAmount);
    await storage.set("amount", amountProduct + 1);
  };
  const dowAmount = async (amount: any) => {
    const totalAmount = (amount -= 1);
    if (amountProduct > 1) {
      setAmountProduct(totalAmount);
      await storage.set("amount", amountProduct - 1);
    }
  };
  const getAmount = async () => {
    const data = await storage.get("amount");
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
            width: SLIDER_WIDTH * 0.59,
          }}
        >
          <Text
            style={{
              marginVertical: 10,
              fontWeight: "600",
              fontSize: 20,
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
              ellipsizeMode="middle"
              numberOfLines={1}
            >
              {item.description}
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "300",
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
        <View style={{}}>
          <Image
            style={{
              width: 80,
              height: 90,
              borderRadius: 10,
            }}
            source={{
              uri: `${BASE_URL}/${item.image}`,
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
        <TouchableOpacity onPress={() => upAmount(amountProduct)}>
          <Icons.ArrowRight color={Colors.gray6} style={styles.up} />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 20,
          }}
        >
          {item.id ? amountProduct : ""}
        </Text>
        <TouchableOpacity onPress={() => dowAmount(amountProduct)}>
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
