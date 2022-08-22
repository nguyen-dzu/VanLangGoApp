import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { authApi } from "../../api";
import { Avatar, Text } from "../../components/common";
import { Colors, Icons, Layout } from "../../constant";
import { toast } from "../../helpers";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { actions } from "../../reduxStore/slices";
import { BASE_URL, RootStackParamList } from "../../types";
const widthScreen = Dimensions.get("window").width;

export default function Profile({
  navigation,
}: StackScreenProps<RootStackParamList, "Profile">) {
  const {info} = useAppSelector(state =>  state.auth)
  useEffect(() => {
    
  }, []);
  
  return (
    <SafeAreaView>
      <TouchableOpacity style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: 15,
        marginVertical: 10
      }} 
      onPress={() => navigation.navigate('EditProfile')}>
        <Icons.Edit />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <View style={{
          alignItems: 'center'
        }}>
          {info.avatar ? (
            <Avatar
              source={{
                uri: `${BASE_URL}/${info.avatar}`,
              }}
              style={styles.avatarInfor}
            />
          ) : (
            <Avatar
              style={styles.avatarInfor}
              source={require("../../assets/images/default-avatar.png")}
            />
          )}
          <Text style={styles.nameInfor}>
            {info.isActive ? <Icons.Tick color={'#007bff'} /> : <Icons.Tick color={'#dc3545'} /> }
            
            {info.fullName}
          </Text>
          
        </View>
      <View>
        <View style={styles.containerItem}>
          <Text style={{ paddingLeft: 13, fontSize: 20, fontWeight: "300" }}>
            <Text style={{
              fontWeight: '600',
              color: '#999999'
            }} >Email: </Text>
            {info.emailAddress}
          </Text>
        </View>
        <View style={styles.containerItem}>
          <Text style={{ paddingLeft: 13, fontSize: 20, fontWeight: "300" }}>
            <Text style={{
              fontWeight: '600',
              color: '#999999'
            }} >Số Điện Thoại: </Text>
            {info.phoneNumber}
          </Text>
        </View>
        <View style={styles.containerItem}>
          <Text style={{ paddingLeft: 13, fontSize: 20, fontWeight: "300" }}>
            <Text style={{
              fontWeight: '600',
              color: '#999999'
            }} >Bạn Đang Là: </Text>
            {info.roleId == "c812fa79-de2f-11ec-8bb8-448a5b2c2d80" ? 'Khách Hàng' : info.roleId == "c812fa78-de2f-11ec-8bb8-448a5b2c2d80" ? 'Shipper' : info.roleId == "c812fa79-de2f-11ec-8bb8-448a5b3c2d80"? 'Chủ Quán Ăn' : '' }
          </Text>
        </View>
      </View>
      </View>
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
    textAlign: "center",
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
