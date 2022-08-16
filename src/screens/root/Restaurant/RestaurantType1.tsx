import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { Dimensions, SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import { restaurantApi } from "../../../api";
import { IRestaurant } from "../../../api/apiInterfaces";
import { Image, Text, TextInput } from "../../../components/common";
import { Colors, Icons } from "../../../constant";
import { toast } from "../../../helpers";
import { BASE_URL, RootStackParamList } from "../../../types";
const widthScreen = Dimensions.get('window').width;

export default function ({
  navigation,
}: StackScreenProps<RootStackParamList, "RestaurantType0">) {
  const [restaurant1, setRestaurant1] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const getRestaurant1 = async () => {
      try {
        const data = await restaurantApi.getAddressType(1);
        setRestaurant1(data.data.pagedData);
      } catch (error) {
        toast.error("có lỗi sảy ra");
      }
    };
    await getRestaurant1();
  };
  return (
    <SafeAreaView
      style={{
        height: "100%",
      }}
    >
      <View
            style={{
              alignItems: "center",
              marginTop: 15,

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
      <ScrollView>
        {restaurant1.map((item: IRestaurant, index) => {
          return (
            <TouchableOpacity
              key={index + 1}
              style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}
              onPress={() => navigation.navigate("Restaurant", { item })}
            >
              <View
                style={{
                  marginTop: 15,
                  marginVertical: 25,
                }}
                // onPress={() => getData(item)}
              >
                <View style={{
                    marginHorizontal: 20
                }}>
                  <Image
                    style={{
                      width: 80,
                      height: 90,
                      borderRadius: 8,
                    }}
                    source={{
                      uri: `${BASE_URL}/${item.banner ? item.banner : ''}`,
                    }}
                  />
                </View>
              </View>
              <View
              >
                <Text
                  style={{
                    marginVertical: 10,
                    fontWeight: "600",
                    fontSize: 22,
                  }}
                >
                  {item.name}
                </Text>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "300",
                    }}
                  >
                    {item.address}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "300",
                    }}
                  >
                    {item.isActive ? (
                      <Text style={{ color: Colors.success }}>
                        Đang Hoạt Động
                      </Text>
                    ) : (
                      <Text style={{ color: Colors.error }}>
                        Ngưng Hoạt Đọng
                      </Text>
                    )}
                  </Text>
                  <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Icons.HeartFill width={13} height={13} color={"#E74C3C"} />
                  <Text
                    style={{
                      paddingLeft: 3,
                      fontWeight: "300",
                      fontSize: 12,
                      color: "#999999",
                      lineHeight: 40
                    }}
                  >
                    5,0 (999 +) . 1km
                  </Text>
                </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
