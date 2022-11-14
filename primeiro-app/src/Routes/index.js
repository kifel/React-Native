import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StackRoutes } from "./stack";

// [x]Rotas completas
export const Rotas = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};
