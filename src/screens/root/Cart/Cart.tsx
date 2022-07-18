import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { cartApi } from "../../../api";
import { Image, Text, TextInput } from "../../../components/common";
import { Colors, Icons } from "../../../constant";
import { RootStackParamList } from "../../../types";
const widthScreen = Dimensions.get("window").width;
export default function ({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, "Cart">) {
  const [listCart, setListCart] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const getCart = async () => {
      const data = await cartApi.getAll();
      setListCart(data.data.data);
    };
    await getCart();
  };
  return (
    <View style={{}}>
      <SafeAreaView
        style={{
          paddingVertical: 15,
          height: "85%",
          marginHorizontal: 15,
        }}
      >
        <View style={styles.containerHeader}>
          <View>
            <Image source={require("../../../assets/icons/carIcon.png")} />
          </View>
          <View
            style={{
              marginHorizontal: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: "33%",
            }}
          >
            <View>
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 18,
                }}
              >
                Giao bởi sinh viên
              </Text>
              <Text style={styles.address}>
                Lầu 4.1, Tòa F Văn Lang Cơ Sở 3
              </Text>
            </View>
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
        <View>
          <View
            style={{
              width: widthScreen * 0.9,
              height: 0,
              borderWidth: 1,
              borderColor: "#C9C9C9",
            }}
          ></View>
          <View
            style={{
              marginVertical: 15,
            }}
          >
            <Text
              style={{
                lineHeight: 40,
                fontSize: 20,
                fontWeight: "600",
              }}
            >
              Đơn Hàng Của Bạn
            </Text>
            {listCart.map((item: any, index) => {
              return (
                <View key={index + 1} style={{}}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: 'center'
                    }}
                  >
                    <Text>X {item.amount}</Text>
                    <View style={{
                      flexDirection: 'row',
                      width: '90%',
                      justifyContent: 'space-between'
                    }}>
                    <Text style={styles.textProduct}>{item.product.name}</Text>
                    <Text style={styles.textProduct}>{item.product.price} VNĐ</Text>
                    </View>
                    
                  </View>
                </View>
              );
            })}
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text
                style={{
                  color: Colors.gray6,
                  textDecorationLine: "underline",
                  marginTop: 20,
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
                  marginTop: 20,
                }}
                icon={"menu"}
              />
            </View>
            <View
              style={{
                marginTop: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.containerHeader}>Tạm Tính</Text>
                <Text>25.000 VNĐ</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.containerHeader}>Phí Áp Dụng</Text>
                <Text>5.000 VNĐ</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <View
        style={{
          backgroundColor: "#F7F7F7",
          height: 90,
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Icons.Vnd />
          <Text>Tiền Mặt</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{
                color: "#77777",
                fontSize: 16,
                fontWeight: "600",
                lineHeight: 20,
              }}
            >
              Tổng Cộng
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                lineHeight: 20,
              }}
            >
              30000 VNĐ
            </Text>
          </View>
          <View style={{}}>
            <TouchableOpacity
              style={{
                width: 150,
                height: 50,
                backgroundColor: Colors.gray6,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  color: Colors.white,
                }}
              >
                Đặt Hàng
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
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
    alignContent: "center",
    alignItems: "center",
    fontSize: 22,
    fontWeight: "300",
    lineHeight: 40,
  },
  textProduct: {
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 30,
    color: "#777777",
  },
});
