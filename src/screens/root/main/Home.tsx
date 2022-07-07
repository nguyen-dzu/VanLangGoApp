import React, { useRef, useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { RootStackParamList } from "../../../types";
import { StackScreenProps } from "@react-navigation/stack";
import { Colors, Icons, Layout } from "../../../constant";
import { dataSrc } from "../../../components/Layout/srcBanner";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
  ITEM_WIDTH_PRODUCT,
} from "../../../components/Layout/CarouselItem";
import { Image, Text, TextInput } from "../../../components/common";
import { ItemProduct } from "../../../components/Layout";
const widthScreen = Dimensions.get("window").width;
const widthContainer = Math.round(SLIDER_WIDTH * 0.8);

export default function ({
  navigation,
}: StackScreenProps<RootStackParamList, "Home">) {
  const isCarousel = useRef(null);
  const [index, setIndex] = useState(0);
  const goToNavInfor = () => navigation.navigate("NavInfor");
  const goToNotification = () => navigation.navigate("Notification")
  const goToAddress = () => navigation.navigate('Address')
  function RenderHeader() {
    return (
      <View style={style.detailLocaltion}>
        <TouchableOpacity style={style.touchLocation} onPress={goToAddress}>
          <Icons.Location
            color={Colors.gray6}
            style={{
              width: 20,
              height: 20,
            }}
          />
          <Text style={style.titleLocation}>Location</Text>
          <Icons.ArrowRight
            color={Colors.gray2}
            style={{
              justifyContent: "flex-end",
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 15,
              marginRight: 20,
              justifyContent: "center",
            }}
            onPress={goToNotification}
          >
            <Icons.Mail color={Colors.gray2} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 15,
              paddingRight: 5,
              justifyContent: "center",
            }}
            onPress={goToNavInfor}
          >
            <Icons.ThreeMinus color={Colors.gray2} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <SafeAreaView style={style.container}>
      <RenderHeader />
      <TouchableOpacity
        style={{
          paddingVertical: 10,
          backgroundColor: Colors.background,
          flexDirection: "row",
          paddingHorizontal: 5,
          justifyContent: "space-between",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <TextInput
          containerStyle={{ marginBottom: 0 }}
          placeholder="Tìm kiếm Món Ăn, Quán Ăn ... "
          style={{
            borderRadius: 30,
            width: 400,
          }}
          icon={"search"}
        />
      </TouchableOpacity>
      <ScrollView>
        <View>
          <Carousel
            ref={isCarousel}
            data={dataSrc}
            renderItem={CarouselItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            inactiveSlideShift={1}
            useScrollView={true}
            autoplay
            onSnapToItem={(index) => setIndex(index)}
            loop
          />
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 12,
            height: 40,
            marginLeft: 23,
            marginRight: 23,
          }}
        >
          <View style={style.contentPromo}>
            <Icons.StarFill color={"#FAC917"} style={{ marginRight: 5 }} />
            <Text>15 Điểm</Text>
          </View>
          <View style={style.contentPromo}>
            <Text>Mã khuyến mãi của bạn</Text>
            <View
              style={{
                borderRadius: 50,
                width: 24,
                height: 24,
                backgroundColor: Colors.gray6,
                marginLeft: 10,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: Colors.white,
                  fontWeight: "500",
                  textAlign: "center",
                  alignItems: "center",
                  fontSize: 17,
                  paddingTop: 3,
                }}
              >
                5
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 12,
          }}
        >
          <View style={style.containerIcon}>
            <TouchableOpacity>
              <Image source={require("../../../assets/images/douong.png")} />
              <Text style={style.titleIcon}>Đồ Uống</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require("../../../assets/images/com.png")} />
              <Text style={style.titleIcon}>Cơm</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require("../../../assets/images/donuoc.png")} />
              <Text style={style.titleIcon}>Đồ Nước</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require("../../../assets/images/anvat.png")} />
              <Text style={style.titleIcon}>Ăn Vặt</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 19,
              marginLeft: 24,
            }}
          >
            <TouchableOpacity
              style={{
                marginRight: 35,
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../../assets/images/doannhanh.png")}
                style={{ alignItems: "center" }}
              />
              <Text style={style.titleIcon}>Đồ Ăn Nhanh</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require("../../../assets/images/trasua.png")} />
              <Text style={style.titleIcon}>Trà Sữa</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            marginTop: 11,
          }}
        >
          <View
            style={{
              width: widthScreen * 0.9,
              height: 0,
              borderWidth: 1,
              borderColor: "#C9C9C9",
            }}
          ></View>
          <View>
            <TouchableOpacity
              style={{
                height: 24,
                marginTop: 12,
                borderRadius: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: widthScreen * 0.9,
              }}
            >
              <Text
                style={{
                  color: "#444444",
                }}
              >
                Đặt Lại
              </Text>
              <Icons.ArrowRight color={"#444444"} />
            </TouchableOpacity>
            <TouchableOpacity style={style.containerItem}>
              <Text
                style={{ paddingLeft: 13, fontSize: 20, fontWeight: "300" }}
              >
                Trà Sữa Xe Gỗ
              </Text>
              <Text style={{ paddingRight: 20 }}>111/79 Đặng Thùy Trâm</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              height: 24,
              marginTop: 20,
              borderRadius: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: widthScreen * 0.9,
            }}
          >
            <Text
              style={{
                color: "#444444",
                fontSize: 20,
                fontWeight: "500",
              }}
            >
              Cổng Đặng Thùy Trâm
            </Text>
            <Icons.ArrowRight color={"#444444"} />
          </TouchableOpacity>
          <View style={{
              marginTop: 10
          }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{
                flexDirection: "row",
                marginRight: 10, 
              }}
            > 
             <ItemProduct />
             <ItemProduct />
             <ItemProduct />
             <ItemProduct />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 10,
    width: "100%",
    backgroundColor: Colors.white,
  },
  detailLocaltion: {
    flexDirection: "row",
    height: 20,
    justifyContent: "space-between",
    width: "90%",
    alignContent: "center",
  },
  touchLocation: {
    paddingLeft: 13,
    flexDirection: "row",
    alignItems: 'center'
  },
  titleLocation: {
    fontSize: 18,
    color: Colors.gray2,
    fontWeight: "600",
  },
  contentPromo: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#EEEEEE",
    borderRadius: 5,
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
  },
  containerIcon: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 19,
    marginLeft: 12,
    marginRight: 12,
    alignContent: "center",
    alignItems: "center",
  },
  titleIcon: {
    marginTop: 11,
    fontWeight: "300",
    fontSize: 15,
    textAlign: "center",
  },
  containerItem: {
    backgroundColor: "#F8F8F8",
    height: 50,
    marginTop: 5,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: widthScreen * 0.9,
  },
});
