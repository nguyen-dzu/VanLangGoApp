import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Avatar,
  Button,
  Image,
  Text,
  TextInput,
} from "../../../components/common";
import { ItemProduct } from "../../../components/Layout";
import KeyboardAwareScrollView from "../../../components/Layout/KeyboardAwareScrollView";
import { Colors, Icons, Layout } from "../../../constant";
import { RootStackParamList } from "../../../types";
const widthScreen = Dimensions.get("window").width;
export default function ({
  navigation,
}: StackScreenProps<RootStackParamList, "Product">) {
  const [value, onChangeText] = React.useState("Ghi Chú Cho Cửa Hàng...");
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
            onPress={() => navigation.goBack()}
            style={{
              borderRadius: 100,
              height: 25,
              width: 25,
              paddingHorizontal: 0,
              backgroundColor: "#rgba(68, 68, 68, 0.7)",
              position: "absolute",
              top: 35,
              left: 15,
            }}
            hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
          >
            <Icons.ArrowRight
              style={{
                transform: [{ rotate: "-180deg" }],
                marginTop: 10,
              }}
              onPress={() => navigation.goBack()}
              color={Colors.gray3}
            />
          </Button>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <Text style={styles.titleHeader}>Trà Sữa Truyền Thống</Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "200",
              }}
            >
              18.000 VNĐ
            </Text>
          </View>
          <View
            style={{
              marginVertical: 10,
            }}
          >
            <Text style={styles.titleItem}>Cửa Hàng: Trà Sữa Xe Gỗ</Text>
            <Text style={styles.titleItem}>
              Địa Chỉ: 111/79 Đặng Thùy Trâm P13 Quận Bình Thạnh
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              backgroundColor: value,
            }}
          >
            <TextInput
              multiline
              editable
              maxLength={100}
              placeholder="Ghi Chú Cho Cửa Hàng"
              placeholderTextColor={Colors.gray6}
              style={{
                borderWidth: 0,
                width: widthScreen * 0.9,
                height: 150,
                backgroundColor: "#F8F8F8",
                color: Colors.gray6,
                borderRadius: 30,
              }}
            />
          </View>
        </View>
        <View>
          <Text style={styles.titleHeader}>Sản Phẩm Cùng Cửa Hàng</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
              alignContent: 'center',
              alignItems: 'center'
            }}
          >
            <View>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Avatar
                  source={require("../../../assets/images/banner3.jpg")}
                  size="small"
                />
                <View
                  style={{
                    marginHorizontal: 10,
                    width: 170,
                    marginVertical: 10
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    Xe Gỗ
                  </Text>
                  <Text style={{
                    color: "#777777",
                    fontWeight: "300",
                    fontSize: 9,
                    lineHeight: 20,
                  }}>
                    111/79 Đặng Thùy Trâm P13 Quận Bình Thạnh
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={{
                borderWidth: 0.5,
                borderColor: Colors.gray6,
                height: 30,
                width: 70,
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  color: Colors.gray6,
                  fontWeight: "300",
                  fontSize: 7,
                  marginHorizontal: 5
                }}
              >
                Xem Cửa Hàng
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{
                flexDirection: "row",
                paddingHorizontal: 5,
              }}
            >
             
            </ScrollView>
        </View>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  titleHeader: {
    color: "#444444",
    fontSize: 20,
    fontWeight: "bold",
  },
  titleItem: {
    color: "#777777",
    fontWeight: "300",
    fontSize: 14,
    lineHeight: 20,
  },
});
