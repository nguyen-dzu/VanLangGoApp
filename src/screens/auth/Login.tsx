import { StackScreenProps } from "@react-navigation/stack";
import { Formik } from "formik";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Link, Text, TextInput } from "../../components/common";
import KeyboardAwareScrollView from "../../components/Layout/KeyboardAwareScrollView";
import { Colors, Layout, Style } from "../../constant";
import { AuthStackParamList } from "../../types";
import * as Yup from "yup";
import { authApi } from "../../api";
import axios from "axios";
import { useAppDispatch } from "../../hooks/useRedux";
import { actions } from "../../reduxStore/slices";
import { storage, toast } from "../../helpers";
import { ILogin } from "../../api/apiInterfaces";
import { validation } from "../../configs/validationInput";
import { useConfirmExitApp } from "../../hooks";
import api from "../../api/api";
import Social from "./Social";

export default function ({
  navigation,
}: StackScreenProps<AuthStackParamList, "Login">) {
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();
  useConfirmExitApp();
  const initialValues = {
    emailAddress: "",
    password: "",
  };
  const title = {
    emailAddress: "Email",
    password: "Nhập mật khẩu",
  };
  const validationSchema = Yup.object().shape({
    emailAddress: validation.string(title.emailAddress),
    password: validation.string(title.password),
  });
  async function login(params: ILogin) {
    setLoading(true);
    let loginParam = {
      emailAddress: params.emailAddress,
      password: params.password,
    };
    try {
      const data = await authApi.login(loginParam);
      dispatch(actions.auth.login(data));
      setLoading(false);
      if (data) {
        toast.success("Đăng nhập thành công!");
      } else {
        toast.error("Đăng Ký Không Thành Công");
      }
    } catch (error) {
      setLoading(false);
      toast.error(error);
    }
  }
  const toSignUp = () => {
    navigation.replace("SignUp");
  };
  const toForgot = () => {
    navigation.navigate("ForgotPassword");
  };
  return (
    <SafeAreaView edges={["top", "bottom"]}>
      <KeyboardAwareScrollView style={{ paddingHorizontal: 30 }}>
        <Text style={styles.heading}>Đăng nhập</Text>
        <Formik
          initialValues={initialValues}
          onSubmit={login}
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
                <Button
                  style={styles.buttonLogin}
                  onPress={handleSubmit as () => void}
                >
                  Đăng Nhập
                </Button>

                <Social type="login" onPress={toSignUp} />
                <View style={[Style.row, { justifyContent: "center" }]}>
                  <Link
                    textStyle={{ fontWeight: "bold", color: Colors.gray6 }}
                    onPress={toForgot}
                  >
                    Quên Mật Khẩu
                  </Link>
                </View>
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
    marginBottom: 10
  },
});
