import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Dimensions, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar, Text } from "../../../components/common";
import { Colors, Icons, Style } from "../../../constant";
import { RootStackParamList } from "../../../types";
const widthScreen = Dimensions.get("window").width;

export default function ({
  navigation,
}: StackScreenProps<RootStackParamList, "NavInfor">) {
  return (
    <SafeAreaView style={{
        marginTop: 8,
        alignItems: 'center'
    }}>
        <TouchableOpacity style={{alignItems: 'center', marginBottom: 30}}>
          <Avatar source={require("../../../assets/images/banner3.jpg")} style={styles.avatarInfor} />
          <Text style= {styles.nameInfor}>Nguyễn Hoàng Vũ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerItem}>
            <Text style={{paddingLeft: 13, fontSize: 20, fontWeight: '300'}}>
                Đăng Ký Làm shipper
            </Text>
            <Icons.ArrowRight color={Colors.black} style={{width: 20, height: 20, paddingRight: 40}} />
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    avatarInfor: {
        marginBottom: 10
    },
    nameInfor: {
        fontWeight: 'bold',
        fontSize: 25,
        color: Colors.black
    },
    containerItem: {
        backgroundColor: '#F8F8F8',
        height: 50,
        marginTop: 12,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: widthScreen * 0.9
    }
})
