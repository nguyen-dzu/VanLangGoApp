import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast, { BaseToast, BaseToastProps, ToastConfig } from "react-native-toast-message";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Provider } from "react-redux";
import useCachedResources from "./src/hooks/useCachedResources";
import store from "./src/reduxStore/store";
import { Layout } from "./src/constant";
import Navigation from "./src/navigation";

const toastConfigParamDefault: BaseToastProps = {
  text2Style: {
    fontSize: 14,
    lineHeight: 18,
  },
  style: {
    height: 'auto',
    paddingVertical: 10,
    minHeight: 60,
  },
  text2Props: { numberOfLines: 5 },
}

const toastConfig: ToastConfig = {
  success: props => (
    <BaseToast
      {...props}
      {...toastConfigParamDefault}
      style={[toastConfigParamDefault.style, { borderLeftColor: Colors.success }]}
    />
  ),
  error: props => (
    <BaseToast
      {...props}
      {...toastConfigParamDefault}
      style={[toastConfigParamDefault.style, { borderLeftColor: Colors.error }]}
    />
  ),
  info: props => (
    <BaseToast
      {...props}
      {...toastConfigParamDefault}
      style={[toastConfigParamDefault.style, { borderLeftColor: Colors.warning }]}
    />
  ),
}


export default function App() {
  const isLoadingComplete = useCachedResources();
    if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation/>
          <Toast
            topOffset={Layout.statusBarHeight + 10}
            visibilityTime={3000}
            config={toastConfig}
          />
          <StatusBar style="dark" />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
