import { StackScreenProps } from "@react-navigation/stack";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { cartApi, orderApi } from "../../../api";
import { Image, Text, TextInput } from "../../../components/common";
import { Colors, Icons } from "../../../constant";
import { RootStackParamList } from "../../../types";
import * as Yup from "yup";
import { validation } from "../../../configs/validationInput";
import { ICart, IOrder } from "../../../api/apiInterfaces";
import { storage, toast } from "../../../helpers";
import KeyboardAwareScrollView from "../../../components/Layout/KeyboardAwareScrollView";

const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;

export default function ({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, "Cart">) {
  const [listCart, setListCart] = useState([]);
  const initialValues = {
    address: "",
    phoneNumber: "",
    note: "",
  };
  const title = {
    address: "địa chỉ",
    phoneNumber: "số điện thoại",
    note: "",
  };
  const validationSchema = Yup.object().shape({
    address: validation.string(title.address),
    phoneNumber: validation.string(title.phoneNumber),
  });
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const getCart = async () => {
      const data = await cartApi.getAll();
      setListCart(data.data.data);
    };
    await getCart();
  };

  async function orderDetail(value: IOrder) {
    let orderParam = {
      address: value.address,
      phoneNumber: value.phoneNumber,
      note: value.note,
    };
    try {
      const data = await orderApi.postOrder(orderParam);
      toast.success("Đặt Hàng Thành Công");
      if (data) {
        const response = await cartApi.clearCart();
        storage.remove("amount");
      }
    } catch (error) {
      toast.error("Đặt Hàng Không Thành Công");
    }
    navigation.navigate("Home");
  }
  return (
    <View>
      <KeyboardAwareScrollView nestedScrollEnabled={false}>
          <SafeAreaView
            style={{
              paddingVertical: 15,
              marginHorizontal: 15,
            }}
          >
            <View style={styles.containerHeader}>
              <View>
                <Image source={require("../../../assets/icons/carIcon.png")} />
              </View>
              <View
                style={{
                  marginHorizontal: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginRight: "33%",
                }}
              >
                <View>
                  <Text
                    style={{
                      fontWeight: "400",
                      fontSize: 18,
                    }}
                  >
                    Giao bởi sinh viên
                  </Text>
                  <Text style={styles.address}>
                    Lầu 4.1, Tòa F Văn Lang Cơ Sở 3
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: widthScreen * 0.9,
                height: 0,
                borderWidth: 1,
                borderColor: "#C9C9C9",
              }}
            ></View>
            <View
              style={{
                marginVertical: 15,
              }}
            >
              <Text
                style={{
                  lineHeight: 40,
                  fontSize: 20,
                  fontWeight: "600",
                }}
              >
                Đơn Hàng Của Bạn
              </Text>
                {listCart.map((item: any, index) => {
                  return (
                    <View key={index + 1} style={{}}>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Text>X {item.amount}</Text>
                        <View
                          style={{
                            flexDirection: "row",
                            width: "90%",
                            justifyContent: "space-between",
                          }}
                        >
                          <Text style={styles.textProduct}>
                            {item.product.name}
                          </Text>
                          <Text style={styles.textProduct}>
                            {item.product.price} VNĐ
                          </Text>
                        </View>
                      </View>
                    </View>
                  );
                })}

              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text
                  style={{
                    color: Colors.gray6,
                    textDecorationLine: "underline",
                    lineHeight: 50,
                    fontSize: 16,
                  }}
                >
                  + Thêm Món
                </Text>
              </TouchableOpacity>

              <View
                style={{
                  width: widthScreen * 0.9,
                  height: 0,
                  borderWidth: 1,
                  borderColor: "#C9C9C9",
                }}
              ></View>
              <View>
                <View
                  style={{
                    marginTop: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.containerHeader}>Tạm Tính</Text>
                    <Text>25.000 VNĐ</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={styles.containerHeader}>Phí Áp Dụng</Text>
                    <Text>5.000 VNĐ</Text>
                  </View>
                </View>
              </View>
            </View>
          </SafeAreaView>
         
        <Formik
          initialValues={initialValues}
          onSubmit={orderDetail}
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
                 <View>
            <Text
              style={{
                marginHorizontal: 20,
                fontSize: 20,
                lineHeight: 30,
                fontWeight: "600",
                color: "#777777",
                marginBottom: 15,
              }}
            >
              Thông Tin Của Bạn
            </Text>
          </View>
                <View
                  style={{
                    minHeight: heightScreen * 0.24,
                    marginHorizontal: 15,
                  }}
                >
                  <TextInput
                    placeholder="Địa Chỉ Người Nhận"
                    onChangeText={handleChange("address")}
                    onBlur={handleBlur("address")}
                    value={values.address}
                    error={errors.address}
                    touched={touched.address}
                    icon="map"
                  />
                  <TextInput
                    placeholder="Số Điện Thoại Người Nhận"
                    onChangeText={handleChange("phoneNumber")}
                    onBlur={handleBlur("phoneNumber")}
                    value={values.phoneNumber}
                    error={errors.phoneNumber}
                    touched={touched.phoneNumber}
                    icon="phone-call"
                    keyboardType="number-pad"
                  />
                  <TextInput
                    multiline
                    editable
                    maxLength={100}
                    placeholder="Ghi Chú Cho Cửa Hàng"
                    onChangeText={handleChange("note")}
                    onBlur={handleBlur("note")}
                    value={values.note}
                    error={errors.note}
                    touched={touched.note}
                    style={{
                      borderWidth: 0,
                      width: widthScreen * 0.9,
                      height: 60,
                      backgroundColor: "#F8F8F8",
                      color: Colors.gray6,
                      borderRadius: 30,
                    }}
                    icon={"menu"}
                  />
                </View>
                <View>
                  <View
                    style={{
                      backgroundColor: "#F7F7F7",
                      height: 100,
                      paddingHorizontal: 20,
                      paddingVertical: 10,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                      }}
                    >
                      <Icons.Vnd />
                      <Text>Tiền Mặt</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: "600",
                            lineHeight: 30,
                            color: "#777777",
                          }}
                        >
                          Tổng Cộng
                        </Text>
                        <Text
                          style={{
                            fontSize: 18,
                            fontWeight: "600",
                            lineHeight: 20,
                            color: Colors.black,
                          }}
                        >
                          30000 VNĐ
                        </Text>
                      </View>
                      <View style={{}}>
                        <TouchableOpacity
                          style={{
                            width: 150,
                            height: 50,
                            backgroundColor: Colors.gray6,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 20,
                          }}
                          onPress={handleSubmit as () => void}
                        >
                          <Text
                            style={{
                              color: Colors.white,
                            }}
                          >
                            Đặt Hàng
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        </Formik>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  address: {
    fontWeight: "300",
    fontSize: 12,
    lineHeight: 12,
  },
  containerHeader: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    fontSize: 17,
    fontWeight: "500",
    lineHeight: 40,
  },
  textProduct: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 30,
    color: "#777777",
  },
});
