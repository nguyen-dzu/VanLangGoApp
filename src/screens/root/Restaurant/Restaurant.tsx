import { StackScreenProps } from "@react-navigation/stack";
import axios from "axios";
import React from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import api from "../../../api/api";
import { Button, Image, Text, TextInput } from "../../../components/common";
import KeyboardAwareScrollView from "../../../components/Layout/KeyboardAwareScrollView";
import { Colors, Icons, Layout } from "../../../constant";
import { RootStackParamList } from "../../../types";
const widthScreen = Dimensions.get("window").width;
export default function ({
  navigation: { goBack },
}: StackScreenProps<RootStackParamList, "Restaurant">) {
  
  return (
    <ScrollView>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: Layout.gap }}
      >
        <View
          style={{
            alignItems: "center",
            position: "relative",
            height: 250,
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
              top: 35,
              left: 15      ,
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
          <View
            style={{
              maxHeight: 320,
              width: widthScreen,
              alignItems: "center",
              position: "absolute",
              top: 150,
            }}
          >
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
        </View>
        <View
          style={{
            marginHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginVertical: 10,
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.itemHeader}>
              <Icons.HeartFill width={17} height={17} color={"#E74C3C"} />
              <Text style={styles.textItem}>5.0 (999+)</Text>
            </View>
            <Text
              style={{
                paddingHorizontal: 10,
              }}
            >
              .
            </Text>
            <View style={styles.itemHeader}>
              <Icons.Cart color={"#000000"} width={17} height={17} />
              <Text style={styles.textItem}>(999+) Đã Bán</Text>
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
                height: 23,
                width: "100%",
                backgroundColor: "#E6E6E6",
                borderRadius: 10,
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginHorizontal: 10,
                  color: Colors.black,
                }}
              >
                Ngon Đỉnh (999+)
              </Text>
              <Icons.Crown
                style={{
                  marginRight: 10,
                }}
                color={Colors.black}
              />
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <View
            style={{
              width: widthScreen * 0.9,
              height: 0,
              borderWidth: 1,
              borderColor: "#C9C9C9",
            }}
          ></View>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <TextInput
            containerStyle={{ marginBottom: 0 }}
            placeholder="Tìm kiếm Món Ăn, Quán Ăn ... "
            style={{
              borderRadius: 30,
              width: widthScreen * 0.9,
              marginHorizontal: 20,
              backgroundColor: "#F8F8F8",
            }}
            icon={"search"}
          />
        </View>

        <TouchableOpacity
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
            marginVertical: 25,
          }}
        >
          <View>
            <Text>Trà Sữa Truyền Thống</Text>
            <Text>25.000 VNĐ</Text>
          </View>
          <View>
            <Image source={require("../../../assets/images/trasua.png")} />
          </View>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentRestaurant: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width: widthScreen * 0.75,
    height: 100,
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
  itemHeader: {
    flexDirection: "row",
  },
  textItem: {
    marginHorizontal: 5,
  },
});
