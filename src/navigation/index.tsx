import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import AuthNavigator from "./AuthNavigator";
import RootNavigator from "./RootNavigator";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { useState } from "react";
import { storage, toast } from "../helpers";
import { actions } from "../reduxStore/slices";
import Loader from "../components/common/Loader";

export default function Navigation() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const token = useAppSelector((state) => state.auth.token);
  React.useEffect(() => {
    getToken();
  }, []);

  async function getToken() {
    setLoading(true);
    try {
      const token = await storage.get("token");
      if (token) {
        dispatch(actions.auth.login(token));
      }
    } catch (error) {
      toast.error(error);
    }
    setLoading(false);
  }

  return (
    <NavigationContainer>
      {token ? <RootNavigator /> : <AuthNavigator />}
      <Loader loading={loading} />
    </NavigationContainer>
  );
}
