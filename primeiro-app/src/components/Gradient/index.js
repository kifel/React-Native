import { LinearGradient } from "expo-linear-gradient";

export const Gradient = ({ position }) => {
  if (position === "top") {
    return (
      <LinearGradient
        colors={["#00ffff", "transparent"]}
        style={{
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          height: "30%",
          width: "100%",
          top: 0,
          zIndex: -1,
        }}
      />
    );
  } else {
    return (
      <LinearGradient
        colors={["transparent", "#00ffff"]}
        style={{
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          height: "30%",
          width: "100%",
          bottom: 0,
          zIndex: -1,
        }}
      />
    );
  }
};
