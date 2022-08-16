import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { useConfirmExitApp } from "../../hooks";
import { AuthStackParamList } from "../../types";
import * as Yup from "yup";
import { validation } from "../../configs/validationInput";
import { toast } from "../../helpers";
import { SafeAreaView, StyleSheet, View } from "react-native";
import KeyboardAwareScrollView from "../../components/Layout/KeyboardAwareScrollView";
import { Button, Text, TextInput } from "../../components/common";
import { Formik } from "formik";
import Social from "./Social";
import { Colors } from "../../constant";
import { authApi } from "../../api";
import { IResetPassword } from "../../api/apiInterfaces";

export default function ResetPassword({
  navigation,
}: StackScreenProps<AuthStackParamList, "ResetPassword">) {
  const [loading, setLoading] = useState(false);

  useConfirmExitApp();
  const initialValues = {
    emailAddress: "",
    code: "",
    password: "",
    confirmPassword: "",
  };
  const title = {
    emailAddress: "Email",
    code: "Mã",
    password: "Mật Khẩu",
    confirmPassword: "Nhập Lại Mật Khẩu",
  };
  const validationSchema = Yup.object().shape({
    emailAddress: validation.emailAddress(title.emailAddress),
    code: validation.string(title.code),
    password: validation.password(title.password),
    confirmPassword: validation.password_confirmation(title.confirmPassword),
  });
  async function ForgotPass(params: IResetPassword) {
    setLoading(true);
    let loginParam = {
      emailAddress: params.emailAddress,
      code: params.code,
      password: params.password,
      confirmPassword: params.confirmPassword,
    };
    try {
      const data = await authApi.forgetPass(loginParam);
      setLoading(false);
      toast.success("vào mail của bạn để lấy mã đăng nhập nhé");
      if (data) {
        navigation.replace("Login");
      } else {
        toast.error("email không tồn tại");
      }
    } catch (error) {
      setLoading(false);
      toast.error(error);
    }
  }
  const toLogin = () => {
    navigation.replace("Login");
  };
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView style={{ paddingHorizontal: 30 }}>
        <Text style={styles.heading}>Đăng nhập</Text>
        <Formik
          initialValues={initialValues}
          onSubmit={ForgotPass}
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
                  label="Mã Xác Thực"
                  onChangeText={handleChange("code")}
                  onBlur={handleBlur("code")}
                  value={values.code}
                  error={errors.code}
                  touched={touched.code}
                  icon="code"
                />
                <TextInput
                  label="Mật khẩu"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  error={errors.password}
                  touched={touched.password}
                  icon="lock"
                  secureTextEntry={true}
                />
                <TextInput
                  label="Xác nhận mật khẩu"
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                  error={errors.confirmPassword}
                  touched={touched.confirmPassword}
                  icon="lock"
                  secureTextEntry={true}
                />
                <Button
                  style={styles.buttonLogin}
                  onPress={handleSubmit as () => void}
                >
                  Xác Nhận
                </Button>

                <Social type="login" onPress={toLogin} />
              </View>
            );
          }}
        </Formik>
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
    fontSize: 25,
  },
  buttonLogin: {
    backgroundColor: Colors.gray6,
  },
});
