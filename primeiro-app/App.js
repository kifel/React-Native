import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [text, onChangeText] = React.useState(undefined);
  const [senha, onChangeSenha] = React.useState(undefined);

  return (
    <View style={styles.container}>
      <Text style={[styles.tittle,styles.textColor]}>Login</Text>
      <TextInput
        placeholder="Digite o seu login"
        value={text}
        onChangeText={onChangeText}
      ></TextInput>
      <TextInput
        placeholder="Digite o sua senha"
        value={senha}
        onChangeText={onChangeSenha}
      ></TextInput>
      <Text>Esqueceu sua senha? Clique aqui!</Text>
      <Text>Cadastre-se</Text>
      <Text>ENTRAR</Text>
      <Text>Não possuiu cadastro? Cadastre-se!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textColor: {
    color: "#120A8F",
  },
  tittle: {
    fontWeight: "bold",
    fontSize: 30,
  },
});
