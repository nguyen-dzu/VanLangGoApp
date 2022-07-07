import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "../../../components/common";
import { Colors, Icons } from "../../../constant";
import { RootStackParamList } from "../../../types";
const widthScreen = Dimensions.get("window").width;

export default function ({
  navigation,
}: StackScreenProps<RootStackParamList, "Notification">) {
  return (
    <ScrollView>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.containerItem}>
          <Text style={{ paddingLeft: 13, fontSize: 20, fontWeight: "300" }}>
            Đơn Hàng Của Bạn Đang Được Chuẩn Bị
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "#F8F8F8",
    height: 60,
    marginTop: 12,
    borderRadius: 10,
    width: widthScreen * 0.9,
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
  },
});
