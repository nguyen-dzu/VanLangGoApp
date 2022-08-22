import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import {
  Avatar,
  Button,
  Image,
  Text,
  TextInput,
} from "../../components/common";
import { Colors, Icons, Style } from "../../constant";
import { BASE_URL, RootStackParamList } from "../../types";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import KeyboardAwareScrollView from "../../components/Layout/KeyboardAwareScrollView";
import * as ImagePicker from "expo-image-picker";
import { authApi } from "../../api";
import { validation } from "../../configs/validationInput";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { useConfirmExitApp } from "../../hooks";
import ModalUploadImage from "../../components/Layout/ModalUploadImage";
import { actions } from "../../reduxStore/slices";
import { toast } from "../../helpers";
import { IProfile } from "../../api/apiInterfaces";
export default function EditProfile({
  navigation,
}: StackScreenProps<RootStackParamList, "EditProfile">) {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const { info } = useAppSelector((state) => state.auth);
  useConfirmExitApp();
  const dispatch = useAppDispatch();
  const initialValues = {
    fullName: "",
    phoneNumber: "",
    avatar: ''
  };
  const title = {
    FullName: "Họ Và Tên",
    PhoneNumber: "Số Điện Thoại",
  };
  const validationSchema = Yup.object().shape({
    FullName: validation.fullName(title.FullName),
    PhoneNumber: validation.phoneNumber(title.PhoneNumber),
  });
  async function handelSupmit(params: IProfile) {
    setLoading(true);
    let values = {
      fullName: params.FullName,
      phoneNumber: params.PhoneNumber,
      avatar: params.Avatar ? params.Avatar : '',
    };
    try {
      const data = await authApi.editProfile(values);
      setLoading(false);
      if (data) {
        toast.success("Đăng nhập thành công!");
        navigation.goBack()
      } else {
        toast.error("Đăng Ký Không Thành Công");
      }
    } catch (error) {
      setLoading(false);
      toast.error(error);
    }
  }
  const updateAvatar = async (images: string[]) => {
    dispatch(actions.loader.showLoader());
    setImage(images[0]);
    dispatch(actions.loader.hideLoader());
  };
  return (
    <SafeAreaView
      style={{
        marginHorizontal: 15,
        marginVertical: 30,
      }}
    >
      <ModalUploadImage
        style={{ alignSelf: "center", ...Style.my1 }}
        onConfirm={updateAvatar}
        imagePickerProps={{ allowsEditing: true, aspect: [1, 1] }}
      >
        <Avatar
          source={
            info?.avatar
              ? { uri: `${BASE_URL}/${info.avatar}` }
              : {uri: image}
          }
          style={{ alignSelf: "center" }}
          background
        />
        <Icons.Edit
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
          }}
        />
      </ModalUploadImage>

      <Formik
        initialValues={initialValues}
        onSubmit={handelSupmit}
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
            <View>
              <TextInput
                label="Họ Và Tên"
                onChangeText={handleChange("FullName")}
                onBlur={handleBlur("FullName")}
                value={values.FullName}
                placeholder={`${info.fullName}`}
                error={errors.FullName}
                touched={touched.FullName}
                icon="user"
              />
              <TextInput
                label="Số Điện Thoại"
                onChangeText={handleChange("PhoneNumber")}
                onBlur={handleBlur("PhoneNumber")}
                value={values.PhoneNumber}
                error={errors.PhoneNumber}
                placeholder={`${info.phoneNumber}`}
                touched={touched.PhoneNumber}
                icon="phone"
              />
              <Button onPress={handleSubmit as () => void}>Lưu</Button>
            </View>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
}
