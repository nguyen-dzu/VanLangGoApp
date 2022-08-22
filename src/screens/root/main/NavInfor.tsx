import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import {
  Alert,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar, Text } from "../../../components/common";
import { Colors, Icons, Style } from "../../../constant";
import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import { actions } from "../../../reduxStore/slices";
import { BASE_URL, RootStackParamList } from "../../../types";
const widthScreen = Dimensions.get("window").width;

export default function ({
  navigation,
}: StackScreenProps<RootStackParamList, "NavInfor">) {
  const dispatch = useAppDispatch();
  const {info} = useAppSelector((state) => state.auth);
  function Logout() {
    Alert.alert("Đăng xuất", "Bạn muốn đăng xuất?", [
      {
        text: "Đóng",
      },
      {
        text: "Đăng xuất",
        onPress: () => {
          navigation.replace("Login");
          dispatch(actions.auth.logout());
        },
      },
    ]);
  }
  return (
    <SafeAreaView
      style={{
        marginTop: 8,
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={{ alignItems: "center", marginBottom: 30 }}
        onPress={() => navigation.navigate("Profile")}
      >
        {info.avatar ? (
          <Avatar
            source={{
              uri: `${BASE_URL}/${info.avatar}`,
            }}
            style={styles.avatarInfor}
          />
        ) : (
          <Avatar
            source={require("../../../assets/images/default-avatar.png")}
          />
        )}
        <Text style={styles.nameInfor}>
          {info.isActive ? (
            <Icons.Tick color={"#007bff"} />
          ) : (
            <Icons.Tick color={"#dc3545"} />
          )}

          {info.fullName}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.containerItem}
        onPress={() => navigation.navigate("SignUpShipper")}
      >
        <Text style={{ paddingLeft: 13, fontSize: 20, fontWeight: "300" }}>
          Đăng Ký Làm shipper
        </Text>
        <Icons.ArrowRight
          color={Colors.black}
          style={{ width: 20, height: 20, paddingRight: 40 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.containerItem}
        onPress={() => navigation.navigate("SignUpRestaurant")}
      >
        <Text style={{ paddingLeft: 13, fontSize: 20, fontWeight: "300" }}>
          Đăng Ký Trở Thành Quán Ăn
        </Text>
        <Icons.ArrowRight
          color={Colors.black}
          style={{ width: 20, height: 20, paddingRight: 40 }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.containerItem} onPress={Logout}>
        <Text style={{ paddingLeft: 13, fontSize: 20, fontWeight: "300" }}>
          Logout
        </Text>
        <Icons.ArrowRight
          color={Colors.black}
          style={{ width: 20, height: 20, paddingRight: 40 }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  avatarInfor: {
    marginBottom: 10,
  },
  nameInfor: {
    fontWeight: "bold",
    fontSize: 25,
    color: Colors.black,
  },
  containerItem: {
    backgroundColor: "#F8F8F8",
    height: 50,
    marginTop: 12,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: widthScreen * 0.9,
  },
});
