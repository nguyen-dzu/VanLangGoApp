import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { Dimensions, SafeAreaView, ScrollView, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { restaurantApi } from "../../../api";
import { IRestaurant } from "../../../api/apiInterfaces";
import { Avatar, Button, Image, Text } from "../../../components/common";
import { ItemRestaurant } from "../../../components/Layout";
import { Colors } from "../../../constant";
import { BASE_URL, INavigation, RootStackParamList } from "../../../types";
import ItemProductList from "../List/ItemProductList";
import ItemResaurantProduct from "./ItemResaurantProduct";
const widthScreen = Dimensions.get("window").width;
export default function DetailProduct({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, "DetailProduct">) {
  const { item } = route.params;
  const [infoRestaurant, setInfoRestaurant]: any = useState({});
  useEffect(() => {
    const fetchRestauran = async () => {
      const data = await restaurantApi.getById(item.restaurantId);
      setInfoRestaurant(data.data);
    };
    fetchRestauran();
  }, []);
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
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 15,
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              fontSize: 20,
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 20,
            }}
          >
            {item.price.toLocaleString("vi", {
              style: "currency",
              currency: "VND",
            })}
          </Text>
        </View>
        <Text>{item.description}</Text>

        {infoRestaurant ? (
          <>
            <View
              style={{
                borderBottomWidth: 2,
                borderColor: "#F1F1F1",
                height: 100,
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "300",
                    lineHeight: 40,
                  }}
                >
                  Cửa Hàng: {infoRestaurant.name}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "300",
                  }}
                >
                  Địa Chỉ: {infoRestaurant.address}
                </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                }}
              >
                Sản Phẩm Cùng Cửa Hàng
              </Text>

              <ItemResaurantProduct item={infoRestaurant} />
              <ScrollView horizontal={true}>
                {infoRestaurant.products?.map((item: any) => {
                  return (
                    <View key={item.id}>
                      <ItemProductList item={item} />
                    </View>
                  );
                })}
              </ScrollView>
            </View>
          </>
        ) : (
          ""
        )}
      </SafeAreaView>
    </View>
  );
}
