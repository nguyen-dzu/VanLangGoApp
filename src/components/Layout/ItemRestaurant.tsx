import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { ICart, IRestaurant } from "../../api/apiInterfaces";
import { Icons } from "../../constant";
import { BASE_URL, INavigation } from "../../types";
import { Image, Text } from "../common";

export default function ({
  item,
}: {
  item: IRestaurant,
}) {
  
  const navigation: INavigation = useNavigation();
  const goRestaurant = () =>{
    navigation.navigate('Restaurant', {
      item,
    })
  }
  return (
    <View style={style.container} key={item.id}>
      <View>
        <View>
          <TouchableOpacity onPress={goRestaurant}>
              <View>
                <Image
                  style={style.imageItem}
                  source={{
                    uri: `${BASE_URL}/${item.banner}`,
                  }}
                />
              </View>
              <View style={style.contentTitle}>
                <Text style={style.name}>{item.name}</Text>
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
                      lineHeight: 15
                    }}
                  >
                    5,0 (999 +) . 1km
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginVertical: 14,
    width: 120,
    height: 160,
  },
  imageItem: {
    width: 105,
    height: 110,
    borderRadius: 15,
  },
  contentTitle: {},
  name: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 15,
    paddingTop: 10,
  },
});
