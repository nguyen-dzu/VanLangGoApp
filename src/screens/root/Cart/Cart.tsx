import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Dimensions, SafeAreaView, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image, Text, TextInput } from "../../../components/common";
import { Colors, Icons } from "../../../constant";
import { RootStackParamList } from "../../../types";
const widthScreen = Dimensions.get("window").width;
export default function ({
  navigation,
}: StackScreenProps<RootStackParamList, "Cart">) {
  return (
    <SafeAreaView
      style={{
        paddingVertical: 15,
      }}
    >
      <View style={styles.containerHeader}>
        <View>
          <Image source={require("../../../assets/icons/carIcon.png")} />
        </View>
        <View>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 13,
            }}
          >
            Giao bởi sinh viên
          </Text>
          <Text style={styles.address}>Lầu 4.1, Tòa F Văn Lang Cơ Sở 3</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Icons.EditAddress color={"#444444"} />
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
      <Text>Đơn Hàng Của Bạn</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.textProduct}>x1 Trà Dâu</Text>
        <Text style={styles.textProduct}>25 000 VNĐ</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Restaurant")}>
        <Text
          style={{
            color: Colors.gray6,
            textDecorationLine: "underline",
          }}
        >
          + Thêm Món
        </Text>
      </TouchableOpacity>
      <View
        style={{
          width: widthScreen * 0.9,
          height: 0,
          borderWidth: 1,
          borderColor: "#C9C9C9",
        }}
      ></View>
      <View>
        <TextInput
          multiline
          editable
          maxLength={100}
          placeholder="Ghi Chú Cho Cửa Hàng"
          style={{
            borderWidth: 0,
            width: widthScreen * 0.9,
            height: 60,
            backgroundColor: "#F8F8F8",
            color: Colors.gray6,
            borderRadius: 30,
          }}
          icon={"menu"}
        />
      </View>
      <View>
        <View>
          <Text style={styles.containerHeader}>Tạm Tính</Text>
          <Text>25.000 VNĐ</Text>
        </View>
        <View>
          <Text style={styles.containerHeader}>Phí Áp Dụng</Text>
          <Text>5.000 VNĐ</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  address: {
    fontWeight: "300",
    fontSize: 12,
    lineHeight: 12,
  },
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  textProduct: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 18,
    color: "#777777",
  },
});
