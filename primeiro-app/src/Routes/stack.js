import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../pages/Login";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Login" component={Login} />
    </Navigator>
  );
}
