import { useNavigation } from "@react-navigation/core";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { IRestaurant } from "../../../api/apiInterfaces";
import { Avatar, Text } from "../../../components/common";
import { Colors } from "../../../constant";
import { BASE_URL, INavigation } from "../../../types";

export default function ({ item }: { item: IRestaurant }) {
  const navigation: INavigation = useNavigation();

  const goRestaurant = () => {
    navigation.navigate("Restaurant", {
      item,
    });
  };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Avatar
          size="small"
          source={{
            uri: `${BASE_URL}/${item.banner}`,
          }}
        />
        <View
          style={{
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            {item.name}
          </Text>
          <Text>{item.address}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          borderColor: Colors.gray6,
          borderWidth: 1,
          borderRadius: 8,
          width: 120,
          height: 30,
          alignItems: "center",
          alignContent: "center",
        }}
        onPress = { goRestaurant }
      >
        <Text
          style={{
            color: Colors.gray6,
            marginVertical: 5,
          }}
        >
          Xem Cửa Hàng
        </Text>
      </TouchableOpacity>
    </View>
  );
}
