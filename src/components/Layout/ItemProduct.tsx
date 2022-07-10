import { useNavigation } from "@react-navigation/core";
import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icons } from "../../constant";
import { INavigation, RootStackParamList } from "../../types";
import { Image, Text } from "../common";
import product from "../../api/product";

export default function () {
  const navigation: INavigation = useNavigation();
  
   
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Product")}
        style={{marginRight: 10}}
      >
        <Image
          source={require("../../assets/images/banner3.jpg")}
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
          Trà Dâu
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
  );
}
