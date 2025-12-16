import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const value = await AsyncStorage.getItem("isLoggedIn");
    setIsLoggedIn(value === "true");
  };

  if (isLoggedIn === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return isLoggedIn ? <Redirect href="/home" /> : <Redirect href="/login" />;
}
