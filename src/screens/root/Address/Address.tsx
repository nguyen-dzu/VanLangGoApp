import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import { Text } from "../../../components/common";
import { useAppDispatch } from "../../../hooks/useRedux";
import { actions } from "../../../reduxStore/slices";
import { RootStackParamList } from "../../../types";

export default function ({
  navigation,
}: StackScreenProps<RootStackParamList, "Address">) {
  const dispatch = useAppDispatch();
  navigation.replace("Login");
  dispatch(actions.auth.logout());

  return (
    <View>
      <Text>hello</Text>
    </View>
  );
}
