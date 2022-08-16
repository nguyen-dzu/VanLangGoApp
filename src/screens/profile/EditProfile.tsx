import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "../../components/common";
import { Colors } from "../../constant";
import { RootStackParamList } from "../../types";
import { Formik } from "formik";
import * as Yup from "yup";
import { validation } from "../../configs/validationInput";
import { IProfile } from "../../api/apiInterfaces";
import { authApi } from "../../api";
import { toast } from "../../helpers";
import KeyboardAwareScrollView from "../../components/Layout/KeyboardAwareScrollView";
import { useAppSelector } from "../../hooks/useRedux";

export default function EditProfile({
  navigation,
}: StackScreenProps<RootStackParamList, "EditProfile">) {
  const {info} = useAppSelector(state =>  state.auth)

  const [loading, setLoading] = useState(false);
  const initialValues = {
    fullName: "",
    phoneNumber: "",
  };
  const title = {
    fullName: "Họ Và Tên",
    phoneNumber: "Số điện thoại",
  };
  const validationSchema = Yup.object().shape({
    fullName: validation.fullName(title.fullName),
    phoneNumber: validation.phoneNumber(title.phoneNumber),
  });
  async function SignUp(params: IProfile) {
    setLoading(true);
    let loginParam = {
      fullName: params.fullName,
      phoneNumber: params.phoneNumber,
    };
    try {
      // const data = await authApi.signUp(loginParam);
      // setLoading(false);
      // toast.success("Đăng Ký Thành Công!");
      // if (data) {
      //   navigation.replace("Login");
      // }else{
      //   toast.error('Đăng Ký Không Thành Công')
      // }
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
      <KeyboardAwareScrollView>
        <View style={{ paddingHorizontal: 30 }}>
          <Text style={styles.heading}>Chỉnh Sửa Trang Cá Nhân</Text>
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
                    label="Họ Tên"
                    onChangeText={handleChange("fullName")}
                    onBlur={handleBlur("fullName")}
                    value={values.fullName}
                    placeholder= {`${info.fullName}`}
                    error={errors.fullName}
                    touched={touched.fullName}
                    icon="user"
                  />
                  <TextInput
                    label="Số Điện Thoại"
                    onChangeText={handleChange("phoneNumber")}
                    onBlur={handleBlur("phoneNumber")}
                    value={values.phoneNumber}
                    placeholder= {`${info.phoneNumber}`}
                    error={errors.phoneNumber}
                    touched={touched.phoneNumber}
                    icon="phone"
                    secureTextEntry={false}
                  />
                  <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                    <Button
                      style={styles.buttonLogin}
                      onPress={handleSubmit as () => void}
                    >
                      lưu
                    </Button>
                    <Button
                      style={styles.buttonLogin}
                      onPress={() => navigation.goBack()}
                    >
                      Hủy
                    </Button>
                  </View>
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
    fontSize: 25,
  },
  buttonLogin: {
    backgroundColor: Colors.gray6,
    width: 150
  },
});
