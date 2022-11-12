import { LinearGradient } from "expo-linear-gradient";

// [x]LinearGradient completo
export const Gradient = () => {
  return (
    <LinearGradient
      colors={["#00ffff", "transparent", "transparent", "#00ffff"]}
      style={{
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        top: 0,
        zIndex: -1,
      }}
    />
  );
};
