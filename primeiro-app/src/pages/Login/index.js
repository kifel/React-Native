import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useForm } from "react-hook-form";
import { TouchableOpacity } from "react-native";
import Logo from "../../../assets/logo.jpeg";
import { Gradient } from "../../components/Gradient";
import {
  Container,
  CreateAccount,
  InputLogin,
  InputPassword,
  LogoImage,
  Recover,
  Submit,
  TextSubmit,
  Title
} from "./styles";

//[x] Login Page Completa

export default function Login() {
  const { handleSubmit, setValue } = useForm();
  const navigation = useNavigation();

  const handleSubmitForm = (data) => {
    console.log(data);
  };

  const screenRecover = () => {
    navigation.navigate("Recover");
  };

  return (
    <Container>
      <Gradient />
      <LogoImage source={Logo} />
      <Title>Login</Title>
      <InputLogin
        placeholder="Digite seu login"
        placeholderTextColor={"gray"}
        onChangeText={(text) => setValue("login", text)}
      />
      <InputPassword
        placeholder="Digite sua senha"
        placeholderTextColor={"gray"}
        onChangeText={(text) => setValue("password", text)}
      />
      <TouchableOpacity onPress={screenRecover}>
        <Recover>Esqueceu sua senha? Clique aqui</Recover>
      </TouchableOpacity>
      <Submit onPress={handleSubmit(handleSubmitForm)}>
        <TextSubmit>ENTRAR</TextSubmit>
      </Submit>
      {/* [ ] Precisa adicionar a rota */}
      <TouchableOpacity>
        <CreateAccount>Não possui cadastro? Cadastre-se!</CreateAccount>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </Container>
  );
}
