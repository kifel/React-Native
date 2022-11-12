import { StatusBar } from "expo-status-bar";
import { useForm } from "react-hook-form";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import Logo from "../../../assets/logo.jpeg";
import { Gradient } from "../../components/Gradient";

export default function Login() {
  const { handleSubmit, setValue } = useForm();

  const handleSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Gradient />
      <Image style={styles.logo} source={Logo} />
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Digite seu login"
        placeholderTextColor={"gray"}
        style={styles.inputLogin}
        onChangeText={(text) => setValue("login", text)}
      />
      <TextInput
        placeholder="Digite sua senha"
        placeholderTextColor={"gray"}
        style={styles.inputPassword}
        onChangeText={(text) => setValue("password", text)}
      />
      <TouchableOpacity>
        <Text style={styles.recover}>Esqueceu sua senha? Clique aqui</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.submit}
        onPress={handleSubmit(handleSubmitForm)}
      >
        <Text style={styles.textSubmit}>ENTRAR</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.recover}>Não possui cadastro? Cadastre-se!</Text>
      </TouchableOpacity>
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
  title: {
    color: "#120A8F",
    fontWeight: "bold",
    fontSize: "18px",
    marginTop: "42px",
    marginBottom: "26px",
  },
  logo: {
    width: "130px",
    height: "130px",
    borderRadius: "100.125px",
    marginTop: "-200px",
  },
  inputLogin: {
    height: "31px",
    width: "188px",
    border: "2px solid #00FFFF",
    borderRadius: "5px",
    paddingLeft: "5px",
    fontFamily: "sans-serif",
    marginBottom: "20px",
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
  },
  inputPassword: {
    height: "31px",
    width: "188px",
    border: "2px solid #00FFFF",
    borderRadius: "5px",
    paddingLeft: "5px",
    fontFamily: "sans-serif",
    marginBottom: "5px",
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
  },
  recover: {
    color: "#120A8F",
    fontFamily: "sans-serif",
    fontSize: "12px",
  },
  submit: {
    height: "33px",
    width: "131px",
    border: "2px solid #00FFFF",
    borderRadius: "5px",
    marginTop: "40px",
    marginBottom: "5px",
    justifyContent: "center",
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
  },
  textSubmit: {
    color: "#120A8F",
    fontFamily: "sans-serif",
    textAlign: "center",
    fontWeight: "bold",
  },
});
