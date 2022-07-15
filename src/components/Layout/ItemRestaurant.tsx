import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Icons } from "../../constant";
import { Image, Text } from "../common";

export default function ({
  name,
  banner,
  id,
}: {
  name: string;
  banner: string;
  id: any;
}) {
  return (
    <View style={style.container} key={id}>
      <View>
        <View>
          <TouchableOpacity>
              <View>
                <Image
                  style={style.imageItem}
                  source={{
                    uri: `http://192.168.9.39:8500/${banner}`,
                  }}
                />
              </View>
              <View style={style.contentTitle}>
                <Text style={style.name}>{name}</Text>
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
    height: 140,
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
    lineHeight: 10,
    paddingTop: 10,
  },
});
