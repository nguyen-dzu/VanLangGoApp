import { StackScreenProps } from "@react-navigation/stack";
import { isFulfilled } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { orderApi } from "../../../api";
import { Button, Image, Text } from "../../../components/common";
import { Colors } from "../../../constant";
import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import { actions } from "../../../reduxStore/slices";
import { RootStackParamList } from "../../../types";
const widthScreen = Dimensions.get("window").width;
export default function ({
  navigation,
}: StackScreenProps<RootStackParamList, "Order">) {
  const { idOrder } = useAppSelector((state) => state.menu);
  const [loading, setLoading] = useState(false);
  const [toDoList, setToDoList]: any = useState([]);
  const [orderDetail, setOrderDetail] = useState([]);
  const priceProduct = toDoList.total - toDoList.shippingFee;
  const dispatch = useAppDispatch();
  useEffect(() => {
    setLoading(true);
    const fetchOrderDetail = async () => {
      const data = await orderApi.getAll(idOrder);
      setToDoList(data.data);
      const { orderDetails } = toDoList;
      setOrderDetail(orderDetails);
      if (data) {
        dispatch(actions.menu.setOrderStatus(true));
        dispatch(actions.menu.setListOrder(data));
        const timerLoader = setTimeout(() => {
          setLoading(!loading);
        }, 4000);
      }
    };
    fetchOrderDetail();
  }, [loading]);
  return (
    <SafeAreaView
      style={{
        marginVertical: 15,
        marginHorizontal: 15,
      }}
    >
      <View
        style={{
          height: "92%",
        }}
      >
        <View style={{
          alignItems: 'center'
        }}>
          <Image source={require("../../../assets/images/iconApp.png")} />
        </View>
        <View
          style={{
            width: widthScreen * 0.9,
            height: 0,
            borderWidth: 1,
            marginVertical: 10,
            borderColor: "#C9C9C9",
          }}
        ></View>
        <View >
          <Text
            style={{
              textAlign: 'center',
              fontSize: 23,
              fontWeight: "600",
              color: Colors.gray6
            }}
          >
            Đơn Hàng Của Bạn
          </Text>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <Text style={{
              marginRight: 10,
              fontSize: 18,
              color: '#999999',
              fontWeight: '400',
              lineHeight: 30,
            }}>Địa Chỉ Đặt Hàng: </Text>
            <Text>{toDoList.address}</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <Text style={{
              marginRight: 10,
              fontSize: 18,
              fontWeight: '400',
              color: '#999999',
              lineHeight: 30,
            }}>Số Điện Thoại: </Text>
            <Text>{toDoList.phoneNumber}</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <Text style={{
              marginRight: 10,
              fontSize: 18,
              fontWeight: '400',
              lineHeight: 30,
              color: '#999999'
            }}>Ghi Chú: </Text>
            <Text>{toDoList.note ? toDoList.note : <Text>...</Text>}</Text>
          </View>
          {orderDetail ? (
            orderDetail.map((item) => {
              <View>
                <Text>x1 Trà dâu</Text>
                <Text>25000</Text>
              </View>;
            })
          ) : (
            <Text></Text>
          )}
        </View>
        <View
          style={{
            width: widthScreen * 0.9,
            height: 0,
            borderWidth: 1,
            borderColor: "#C9C9C9",
          }}
        ></View>
        <View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 5
          }}>
            <Text style={{
              fontSize: 16,

            }}>Tạm Tính: </Text>
            <Text style={{

            }}>{priceProduct.toLocaleString("vi", {
              style: "currency",
              currency: "VND",
            })}</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 5
          }}>
            <Text style={{
              fontSize: 16,

            }}>Phí Shipp: </Text>
            <Text style={{

            }}>{toDoList.shippingFee ? toDoList.shippingFee.toLocaleString("vi", {
              style: "currency",
              currency: "VND",
            }): ''}</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 5
          }}>
            <Text style={{
              fontSize: 16,

            }}>Tổng Đơn Hàng: </Text>
            <Text style={{
              color: Colors.gray6,
            }}>{toDoList.total? toDoList.total.toLocaleString("vi", {
              style: "currency",
              currency: "VND",
            }) : ''}</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
            <Text style={{
              fontSize: 16,

            }}>Trạng Thái Đơn Hàng: </Text>
            <Text style={{
              
            }}>
              {toDoList.orderStatus == 0 ? (
                <Text  style={{
                  color: Colors.secondary,
                }}>Đang Chờ </Text>
              ) : toDoList.orderStatus == 2 ? (
                <Text style={{
                  color: Colors.tertiary,
                }}>Đang Giao</Text>
              ) : toDoList.orderStatus == 3 ? (
                <Text style={{
                  color: Colors.success,
                }}>Đã Hoàn Thành</Text>
              ) : toDoList.orderStatus == 4 ? (
                <Text style={{
                  color: Colors.error,
                }}>Đã Hủy</Text>
              ) : (
                <Text></Text>
              )}
            </Text>
          </View>
        </View>
        
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.gray6,
          height: 50,
          borderRadius: 30,
          alignItems: "center",
        }}
        onPress = {() => navigation.navigate('Home')}
      >
        <Text
          style={{
            marginVertical: 13,
            color: "#fff",
            fontSize: 20,
          }}
        >
          Home
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles =StyleSheet.create({
  
})