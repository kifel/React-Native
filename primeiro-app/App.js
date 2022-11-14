import React from "react";
import { StatusBar } from "react-native";
import { Rotas } from "./src/Routes";

export default function App() {
  return (
    <>
      <Rotas />
      <StatusBar barStyle="dark-content"/>
    </>
  );
}
