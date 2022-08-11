import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Dimensions, SafeAreaView, ScrollView, View } from "react-native";
import { Image, Text } from "../../../components/common";
import { RootStackParamList } from "../../../types";
const widthScreen = Dimensions.get("window").width;
export default function ({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, "Order">) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View>
            <Image source={require("../../../assets/images/iconApp.png")} />
          </View>
          <View
            style={{
              width: widthScreen * 0.9,
              height: 0,
              borderWidth: 1,
              borderColor: "#C9C9C9",
            }}
          ></View>
          <View>
            <Text>Đơn Hàng Của Bạn</Text>
            <Text>Trà Sữa</Text>
            <Text>Địa Chỉ</Text>
            <View>
              <Text>x1 Trà dâu</Text>
              <Text>25000</Text>
            </View>
          </View>
          <View
            style={{
              width: widthScreen * 0.9,
              height: 0,
              borderWidth: 1,
              borderColor: "#C9C9C9",
            }}
          ></View>
          <View>
            <View>
              <Text></Text>
              <Text></Text>
            </View>
            <View>
              <Text></Text>
              <Text></Text>
            </View>
            <View>
              <Text></Text>
              <Text></Text>
            </View>
          </View>
          <View
            style={{
              width: widthScreen,
              height: 0,
              borderWidth: 2,
              borderColor: "#f8f8f8",
            }}
          ></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
