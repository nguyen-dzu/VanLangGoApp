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
import { storage, toast } from "../../helpers";
import { ILogin, ISignUp, ISignUpShipper } from "../../api/apiInterfaces";
import { validation } from "../../configs/validationInput";
import { useConfirmExitApp } from "../../hooks";
import Social from "./Social";

export default function ({
  navigation,
}: StackScreenProps<RootStackParamList, "SignUpShipper">) {
  const [loading, setLoading] = useState(false);

  useConfirmExitApp();
  const initialValues = {
    emailAddress: "",
  fullName: "",
  phoneNumber: ""
  };
  const title = {
    emailAddress: "Email",
    fullName: "Họ Và Tên",
    phoneNumber: "Số điện thoại",
  };
  const validationSchema = Yup.object().shape({
    emailAddress: validation.emailAddress(title.emailAddress),
    fullName: validation.fullName(title.fullName),
    phoneNumber: validation.phoneNumber(title.phoneNumber),
  });
  async function SignUp(params: ISignUpShipper) {
    setLoading(true);
    let loginParam = {
      emailAddress: params.emailAddress,
      fullName: params.fullName,
      phoneNumber: params.phoneNumber,
    };
    try {
      const data = await authApi.signUpShipper(loginParam);
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
  }
  return (
    <SafeAreaView edges={["top", "bottom"]}>
      <KeyboardAwareScrollView>
      <View style={{ paddingHorizontal: 30 }}>
        <Text style={styles.heading}>Đăng ký shipper</Text>
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
                  label="Email"
                  onChangeText={handleChange("emailAddress")}
                  onBlur={handleBlur("emailAddress")}
                  value={values.emailAddress}
                  placeholder="examble: abc@gmail.com"
                  error={errors.emailAddress}
                  touched={touched.emailAddress}
                  icon="mail"
                />
                <TextInput
                  label="Họ Tên"
                  onChangeText={handleChange("fullName")}
                  onBlur={handleBlur("fullName")}
                  value={values.fullName}
                  placeholder="Nguyễn Văn A"
                  error={errors.fullName}
                  touched={touched.fullName}
                  icon="user"
                />
                <TextInput
                  label="số điện thoại"
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
    marginBottom: 35,
    fontSize: 25
  },
  buttonLogin: {
    marginBottom: 10,
    backgroundColor: Colors.gray6,
  },
});
