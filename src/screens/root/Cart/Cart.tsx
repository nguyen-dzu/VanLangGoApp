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
import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import { actions } from "../../../reduxStore/slices";

const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;

export default function ({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, "Cart">) {
  const [listCart, setListCart] = useState([]);
  const priceShip = 10000;
  const [price, setPrice] = useState(0);
  const totalPrice = price + priceShip;
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const list = useAppSelector((state) => state.menu.detailCart);
  const upAmount = (item: any) => {
    dispatch(actions.menu.increaseAmount(item));
  };
  const dowAmount = async (item: any) => {
    dispatch(actions.menu.decreaseAmount(item));
  };
  const initialValues = {
    address: "",
    phoneNumber: "",
    note: "",
  };
  const title = {
    address: "địa chỉ",
    phoneNumber: "số điện thoại",
    note: "ghi chú",
  };
  const validationSchema = Yup.object().shape({
    address: validation.string(title.address),
    phoneNumber: validation.string(title.phoneNumber),
  });
  useEffect(() => {
    getData();
  }, [loading, list]);
  const getData = async () => {
    const getCart = async () => {
      const data = await cartApi.getAll();
      dispatch(actions.menu.setDetailCart(data.data.data));
      setPrice(data.data.sumPrice);
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
      dispatch(actions.menu.setOrderDetail(data.data.id));
      if (data) {
        const response = await cartApi.clearCart();
        toast.success("Đặt Hàng Thành Công");
        navigation.navigate("Order");
      }
    } catch (error) {
      toast.error("Đặt Hàng Không Thành Công");
    }
  }

  async function removeItemCart(item: any) {
    const data = await cartApi.delCart(item.productId);
    try {
      if (data) {
        setLoading(true);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View>
      <SafeAreaView
        style={{
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
          <ScrollView
            style={{
              height: 80,
            }}
          >
            {list.map((item: any, index) => {
              return (
                <View key={index + 1} style={{}}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity onPress={() => upAmount(item.productId)}>
                      <Icons.ArrowRight
                        color={Colors.gray6}
                        style={styles.up}
                      />
                    </TouchableOpacity>
                    <View
                      style={{
                        borderColor: "#999999",
                        borderWidth: 1,
                        width: 20,
                        height: 20,
                        alignItems: "center",
                      }}
                    >
                      <Text>{item.amount}</Text>
                    </View>
                    <TouchableOpacity onPress={() => dowAmount(item.productId)}>
                      <Icons.ArrowRight
                        color={Colors.gray6}
                        style={styles.dow}
                      />
                    </TouchableOpacity>
                    <View
                      style={{
                        flexDirection: "row",
                        width: "70%",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={styles.textProduct}>
                        {item.product.name}
                      </Text>
                      <Text style={styles.textProduct}>
                        {item.product.price.toLocaleString("vi", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </Text>
                    </View>
                    <TouchableOpacity onPress={() => removeItemCart(item)}>
                      <Icons.Cancel color={Colors.gray6} />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </ScrollView>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text
              style={{
                color: Colors.gray6,
                textDecorationLine: "underline",
                lineHeight: 30,
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
                marginTop: 5,
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
                <Text>
                  {price.toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  })}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.containerHeader}>Phí Áp Dụng</Text>
                <Text>
                  {priceShip.toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  })}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <KeyboardAwareScrollView
        style={{ marginVertical: 10 }}
        nestedScrollEnabled={false}
      >
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
                          {totalPrice}
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
    lineHeight: 30,
  },
  textProduct: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 30,
    color: "#777777",
    marginHorizontal: 10,
  },
  up: {
    transform: [{ rotate: "-90deg" }],
  },
  dow: {
    transform: [{ rotate: "90deg" }],
  },
});
