import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Image, Text } from "../../../components/common";
import { Colors, Icons } from "../../../constant";
import { RootStackParamList } from "../../../types";
const widthScreen = Dimensions.get("window").width;
export default function ({
  navigation: { goBack },
}: StackScreenProps<RootStackParamList, "Restaurant">) {
  return (
    <View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            width: widthScreen,
          }}
        >
          <Image
            source={require("../../../assets/images/banner3.jpg")}
            style={{
              width: "100%",
              height: 200,
            }}
          />
        </View>

        <Button
          onPress={() => goBack()}
          style={{
            borderRadius: 100,
            height: 25,
            width: 25,
            paddingHorizontal: 0,
            backgroundColor: "#rgba(68, 68, 68, 0.7)",
            position: "absolute",
            top: 50,
            left: 20,
          }}
          hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
        >
          <Icons.ArrowRight
            style={{
              transform: [{ rotate: "-180deg" }],
              marginTop: 10,
            }}
            onPress={() => goBack()}
            color={Colors.gray3}
          />
        </Button>
        <View style={styles.contentRestaurant}>
          <Text
            style={{
              textAlign: "center",
              paddingTop: 13,
              fontWeight: "bold",
              fontSize: 20,
              color: Colors.gray6,
            }}
          >
            Trà Sữa Xe Gỗ
          </Text>
          <View style={styles.desRestaurant}>
            <View style={styles.detailDes}>
              <Icons.Tick color={"#0D64E8"} />
              <Text style={styles.titleDes}>Cửa Hàng Uy Tín</Text>
            </View>
            <View style={styles.detailDes}>
              <Icons.Location color={"#C02424"} />
              <Text style={styles.titleDes}>111/79 Đặng Thùy Trâm</Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView
        horizontal={true}
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            height: 16,
            width: 120,
            backgroundColor: "#E6E6E6",
            borderRadius: 10,
            paddingRight: 10,
          }}
        >
          <Text>Ngon Đỉnh (999+)</Text>
          <Image source={require('../../../assets/icons/iconsSmile.svg')} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contentRestaurant: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width: widthScreen * 0.75,
    height: 100,
    top: "150%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  desRestaurant: {},
  detailDes: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 5,
  },
  titleDes: {
    paddingLeft: 5,
    fontWeight: "300",
    color: "#999999",
  },
});
