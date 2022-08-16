import { useNavigation } from "@react-navigation/core";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Dimensions, SafeAreaView, View } from "react-native";
import { IProduct } from "../../../api/apiInterfaces";
import { Image, Text } from "../../../components/common";
import { BASE_URL, INavigation, RootStackParamList } from "../../../types";
const widthScreen = Dimensions.get("window").width;
export default function DetailProduct({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, "DetailProduct">) {
  const { item } = route.params;
  console.log(item.image);

  return (
    <View>
      <View
        style={{
          alignItems: "center",
          position: "relative",
          height: 200,
        }}
      >
        <View
          style={{
            flex: 1,
            width: widthScreen,
          }}
        >
          {item.image ? (
            <Image
              source={{
                uri: `${BASE_URL}/${item.image}`,
              }}
              style={{
                width: "100%",
                height: 200,
              }}
            />
          ) : (
            <Image
              style={{
                width: "100%",
                height: 200,
              }}
              source={require("../../../assets/images/bannerDef.png")}
            />
          )}
        </View>
      </View>
      <SafeAreaView
        style={{
          marginHorizontal: 15,
          marginVertical: 15,
        }}
      >
        <View>
          <Text>{item.name}</Text>
          <Text>
            {item.price.toLocaleString("vi", {
              style: "currency",
              currency: "VND",
            })}
          </Text>
        </View>
        
      </SafeAreaView>
    </View>
  );
}
