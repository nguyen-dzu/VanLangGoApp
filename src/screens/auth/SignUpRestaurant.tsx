import { StackScreenProps } from "@react-navigation/stack";
import { Formik } from "formik";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text, TextInput } from "../../components/common";
import KeyboardAwareScrollView from "../../components/Layout/KeyboardAwareScrollView";
import { Colors, Layout } from "../../constant";
import { AuthStackParamList, RootStackParamList } from "../../types";
import * as Yup from "yup";
import { authApi } from "../../api";
import axios from "axios";
import { useAppDispatch } from "../../hooks/useRedux";
import { actions } from "../../reduxStore/slices";
import { storage, toast } from "../../helpers";
import { ILogin, ISignUp, ISignUpRestaurant } from "../../api/apiInterfaces";
import { validation } from "../../configs/validationInput";
import { useConfirmExitApp } from "../../hooks";
import api from "../../api/api";
import Social from "./Social";

export default function ({
  navigation,
}: StackScreenProps<RootStackParamList, "SignUpRestaurant">) {
  const [loading, setLoading] = useState(false);

  useConfirmExitApp();
  const initialValues = {
    restaurantName: "",
    address: "",
    addressType: 0,
    emailAddress: "",
    fullName: "",
    phoneNumber: "",
  };
  const title = {
    restaurantName: "Tên Quán Ăn",
    address: "Địa Chỉ Quán Ăn",
    addressType: "Khu Vực",
    emailAddress: "Email",
    fullName: "Họ Và Tên",
    phoneNumber: "Số Điện Thoại",
  };
  const validationSchema = Yup.object().shape({
    restaurantName: validation.restaurantName(title.restaurantName),
    address: validation.address(title.address),
    addressType: validation.addressType(title.addressType),
    emailAddress: validation.emailAddress(title.emailAddress),
    fullName: validation.fullName(title.fullName),
    phoneNumber: validation.phoneNumber(title.phoneNumber),
  });
  async function SignUp(params: ISignUpRestaurant) {
    setLoading(true);
    let loginParam = {
      restaurantName: params.restaurantName,
      address: params.address,
      addressType: params.addressType,
      emailAddress: params.emailAddress,
      fullName: params.fullName,
      phoneNumber: params.phoneNumber,
    };
    try {
      const data = await authApi.signUpRestaurant(loginParam);
      setLoading(false);
      toast.success("Đăng Ký Thành Công!");
      toast.warning("Kiểm Tra Email Của Bạn Để Có Thông Tin Đăng Nhập Nhé !");
      if (data) {
        navigation.goBack();
      }
    } catch (error) {
      setLoading(false);
      toast.error(error);
    }
  }

  const toLogin = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView edges={["top", "bottom"]}>
      <KeyboardAwareScrollView>
      <View style={{ paddingHorizontal: 30 }}>
        <Text style={styles.heading}>Đăng ký quán ăn</Text>
        <Formik
          initialValues={initialValues}
          onSubmit={SignUp}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => {
            return (
              <View
                style={{
                  flexDirection: "column",
                }}
              >
                <TextInput
                  label="Tên Quán Ăn"
                  onChangeText={handleChange("restaurantName")}
                  onBlur={handleBlur("restaurantName")}
                  value={values.restaurantName}
                  error={errors.restaurantName}
                  touched={touched.restaurantName}
                  icon="shopping-cart"
                />
                <TextInput
                  label="Địa Chỉ Quán Ăn"
                  onChangeText={handleChange("address")}
                  onBlur={handleBlur("address")}
                  value={values.address}
                  error={errors.address}
                  touched={touched.address}
                  icon="map"
                />
                
                <TextInput
                  label="Email"
                  onChangeText={handleChange("emailAddress")}
                  onBlur={handleBlur("emailAddress")}
                  value={values.emailAddress}
                  error={errors.emailAddress}
                  touched={touched.emailAddress}
                  icon="mail"
                />
                <TextInput
                  label="Họ Và Tên"
                  onChangeText={handleChange("fullName")}
                  onBlur={handleBlur("fullName")}
                  value={values.fullName}
                  error={errors.fullName}
                  touched={touched.fullName}
                  icon="user"
                />
                <TextInput
                  label="Số Điện Thoại"
                  onChangeText={handleChange("phoneNumber")}
                  onBlur={handleBlur("phoneNumber")}
                  value={values.phoneNumber}
                  error={errors.phoneNumber}
                  touched={touched.phoneNumber}
                  placeholder="phoneNumber"
                  icon="phone"
                  secureTextEntry={true}
                />
                <Button
                  style={styles.buttonLogin}
                  onPress={handleSubmit as () => void}
                >
                  Đăng Ký
                </Button>

              </View>
            );
          }}
        </Formik>
      </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: 30,
    color: Colors.gray1,
    textTransform: "uppercase",
    marginTop: 100,
    fontSize: 25,
    marginBottom: 35,
  },
  buttonLogin: {
    backgroundColor: Colors.gray6,
  },
});
