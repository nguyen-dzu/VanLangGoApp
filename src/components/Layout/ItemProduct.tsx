import { useNavigation } from "@react-navigation/core";
import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { Dimensions, ScrollView, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icons } from "../../constant";
import { INavigation, RootStackParamList } from "../../types";
import { Image, Text } from "../common";
import product from "../../api/product";
import { SLIDER_WIDTH } from "./CarouselItem";
const widthScreen = Dimensions.get("window").width;
const widthContainer = Math.round(SLIDER_WIDTH * 0.8);

export default function ({
  imageUri,
  nameProduct,
  titleAddress,
}: {
  imageUri: String;
  nameProduct: String;
  titleAddress: String;
}) {
  const navigation: INavigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={{
          height: 24,
          marginTop: 20,
          borderRadius: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: widthScreen * 0.9,
        }}
      >
        <Text
          style={{
            color: "#444444",
            fontSize: 20,
            fontWeight: "500",
          }}
        >
          {titleAddress}
        </Text>
        <Icons.ArrowRight color={"#444444"} />
      </TouchableOpacity>
      <View
        style={{
          marginTop: 10,
        }}
      >
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            flexDirection: "row",
            paddingHorizontal: 10,
          }}
        >
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Product")}
              style={{ marginRight: 10 }}
            >
              <Image
                source={{
                  uri: `http://192.168.1.5:8500/${imageUri}`,
                }}
                style={{
                  width: 105,
                  height: 110,
                  borderRadius: 10,
                }}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  lineHeight: 10,
                  paddingTop: 10,
                }}
              >
                {nameProduct}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Icons.HeartFill color={"#E74C3C"} />
                <Text
                  style={{
                    paddingLeft: 3,
                    fontWeight: "300",
                    fontSize: 12,
                    color: "#999999",
                  }}
                >
                  5,0 (999+) . Tòa F
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
