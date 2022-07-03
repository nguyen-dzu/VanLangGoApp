import React, { useRef, useState } from "react";
import {
  Dimensions,
  SafeAreaView,
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
} from "../../../components/Layout/CarouselItem";
import { Image, Text, TextInput } from "../../../components/common";
const widthScreen = Dimensions.get("window").width;
const widthContainer = Math.round(SLIDER_WIDTH * 0.8);

export default function ({
  navigation,
}: StackScreenProps<RootStackParamList, "Home">) {
  const isCarousel = useRef(null);
  const [index, setIndex] = useState(0);
  return (
    <SafeAreaView style={style.container}>
      {/* <RenderHeader /> */}
      <View style={style.detailLocaltion}>
        <TouchableOpacity style={style.touchLocation}>
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
              marginRight: 13,
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
          >
            <Icons.Mail color={Colors.gray2} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 15,
              paddingRight: 5,
              justifyContent: "center",
            }}
          >
            <Icons.ThreeMinus color={Colors.gray2} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
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
            autoFocus
            style={{
              borderRadius: 30,
              width: 400,
            }}
            icon={"search"}
          />
        </TouchableOpacity>
        <Carousel
          layout="default"
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
      <View style={{
        marginTop: 12,
      }}>
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
        <View style={{
          flexDirection: 'row',
          marginTop: 19,
          marginLeft: 24,
        }}>
          <TouchableOpacity style={{marginRight: 35, alignContent: 'center', alignItems: 'center'}}>
            <Image source={require("../../../assets/images/doannhanh.png")} style={{alignItems: 'center'}} />
            <Text style={style.titleIcon}>Đồ Ăn Nhanh</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../../../assets/images/trasua.png")} />
            <Text style={style.titleIcon}>Trà Sữa</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 10,
    width: "100%",
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
  },
  titleLocation: {
    fontSize: 20,
    color: Colors.gray2,
    fontWeight: "600",
    width: 260,
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
  containerIcon:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 19,
    marginLeft: 12,
    marginRight: 12,
    alignContent: 'center',
    alignItems: 'center',
  },
  titleIcon: {
    marginTop: 11,
    fontWeight: '300',
    fontSize: 15,
    textAlign: 'center'
  }
});
