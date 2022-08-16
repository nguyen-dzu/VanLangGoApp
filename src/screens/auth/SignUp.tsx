import { StackScreenProps } from "@react-navigation/stack";
import { Formik } from "formik";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text, TextInput } from "../../components/common";
import KeyboardAwareScrollView from "../../components/Layout/KeyboardAwareScrollView";
import { Colors, Layout } from "../../constant";
import { AuthStackParamList } from "../../types";
import * as Yup from "yup";
import { authApi } from "../../api";
import axios from "axios";
import { useAppDispatch } from "../../hooks/useRedux";
import { actions } from "../../reduxStore/slices";
import { storage, toast } from "../../helpers";
import { ILogin, ISignUp } from "../../api/apiInterfaces";
import { validation } from "../../configs/validationInput";
import { useConfirmExitApp } from "../../hooks";
import api from "../../api/api";
import Social from "./Social";
  
export default function ({
  navigation,
}: StackScreenProps<AuthStackParamList, "SignUp">) {
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();
  useConfirmExitApp();
  const initialValues = {
    emailAddress: "",
    password: "",
    fullName: "",
    phoneNumber: "",
    roleId: "c812fa79-de2f-11ec-8bb8-448a5b2c2d80",
  };
  const title = {
    emailAddress: "Email",
    password: "Nhập mật khẩu",
    fullName: "Họ Và Tên",
    phoneNumber: "Số điện thoại",
  };
  const validationSchema = Yup.object().shape({
    emailAddress: validation.emailAddress(title.emailAddress),
    password: validation.password(title.password),
    fullName: validation.fullName(title.fullName),
    phoneNumber: validation.phoneNumber(title.phoneNumber),
  });
  async function SignUp(params: ISignUp) {
    setLoading(true);
    let loginParam = {
      emailAddress: params.emailAddress,
      password: params.password,
      fullName: params.fullName,
      phoneNumber: params.phoneNumber,
      roleId: params.roleId,
    };
    try {
      const data = await authApi.signUp(loginParam);
      setLoading(false);
      toast.success("Đăng Ký Thành Công!");
      if (data) {
        navigation.replace("Login");
      }else{
        toast.error('Đăng Ký Không Thành Công')
      }
    } catch (error) {
      setLoading(false);
      toast.error(error);
    }
  }

  const toLogin = () => {
    navigation.replace('Login')
  }
  return (
    <SafeAreaView edges={["top", "bottom"]}>
      <KeyboardAwareScrollView>
      <View style={{ paddingHorizontal: 30 }}>
        <Text style={styles.heading}>Đăng ký</Text>
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
                  label="Password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  error={errors.password}
                  touched={touched.password}
                  placeholder="password"
                  icon="lock"
                  secureTextEntry={true}
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
                  label="Số Điện Thoại"
                  onChangeText={handleChange("phoneNumber")}
                  onBlur={handleBlur("phoneNumber")}
                  value={values.phoneNumber}
                  placeholder="+84 123123XXX"
                  error={errors.phoneNumber}
                  touched={touched.phoneNumber}
                  icon="phone"
                  secureTextEntry={false}
                />
                <Button
                  style={styles.buttonLogin}
                  onPress={handleSubmit as () => void}
                >
                  Đăng Ký
                </Button>

                <Social
                  type="signUp"
                  onPress={toLogin}
                />
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
    backgroundColor: Colors.gray6,
  },
});
