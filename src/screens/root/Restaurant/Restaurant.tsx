import { StackScreenProps } from "@react-navigation/stack";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { cartApi } from "../../../api";
import api from "../../../api/api";
import { Button, Image, Text, TextInput } from "../../../components/common";
import { ItemProduct } from "../../../components/Layout";
import KeyboardAwareScrollView from "../../../components/Layout/KeyboardAwareScrollView";
import { Colors, Icons, Layout } from "../../../constant";
import { storage, toast } from "../../../helpers";
import { RootStackParamList } from "../../../types";
const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;

export default function ({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, "Restaurant">) {
  const { item } = route.params;
  const [amountProduct, setAmountProduct] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const goCart = () => {
    navigation.navigate('Cart')
  }
  const addOrderCart = async (item: any) => {
    try {
      const amount = await storage.get("amount");
      const response = await cartApi.postCart(item.id, amount);
      
      getData();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const getCart = async () => {
      try {
        const data = await cartApi.getAll();
          setAmountProduct(data.data?.sumAmount);
          if(amountProduct != 0){
            setShowCart(true)
          }
      } catch (error) {
        
      }
      
    };
    await getCart();
  };
  const FooterCart = () => {
    return (
      <View
        style={{
          backgroundColor: "#F7F7F7",
          height: 90,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
            alignItems: "center",
            height: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Icons.Cart width={50} height={50} />
            <Text>X{amountProduct}</Text>
          </View>
          <TouchableOpacity
            style={{
              width: 150,
              height: 50,
              backgroundColor: Colors.gray6,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
            }}
            onPress={() => goCart()}
          >
            <Text
              style={{
                color: Colors.white,
              }}
            >
              Thêm Vào Giỏ Hàng
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View>
      <ScrollView
        style={{
          height: heightScreen * 0.9,
        }}
      >
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
                source={{
                  uri: `http://192.168.1.6:8500/${item.banner}`,
                }}
                style={{
                  width: "100%",
                  height: 200,
                }}
              />
            </View>

            <Button
              onPress={() => navigation.goBack()}
              style={{
                borderRadius: 100,
                height: 25,
                width: 25,
                paddingHorizontal: 0,
                backgroundColor: "#rgba(68, 68, 68, 0.7)",
                position: "absolute",
                top: 45,
                left: 15,
              }}
              hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
            >
              <Icons.ArrowRight
                style={{
                  transform: [{ rotate: "-180deg" }],
                  marginTop: 10,
                }}
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
                  {item.name}
                </Text>
                <View style={styles.desRestaurant}>
                  <View style={styles.detailDes}>
                    <Icons.Tick color={"#0D64E8"} />
                    <Text style={styles.titleDes}>Cửa Hàng Uy Tín</Text>
                  </View>
                  <View style={styles.detailDes}>
                    <Icons.Location color={"#C02424"} />
                    <Text style={styles.titleDes}>{item.address}</Text>
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
          {item.products.map((item, index) => {
            return (
              <View key={index + 1}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      marginRight: 5,
                    }}
                    onPress={() => addOrderCart(item)}
                  >
                    <Icons.Add />
                  </TouchableOpacity>
                  <ItemProduct item={item} />
                </View>
              </View>
            );
          })}
        </KeyboardAwareScrollView>
      </ScrollView>
      {showCart == true ? (
        <FooterCart />
      ) : (
        <View>
          <Text>''</Text>
        </View>
      )}
    </View>
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
  up: {
    transform: [{ rotate: "-90deg" }],
  },
  dow: {
    transform: [{ rotate: "90deg" }],
  },
});
