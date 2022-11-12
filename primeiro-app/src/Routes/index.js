import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack";

// [x]Rotas completas
export const Routes = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};
