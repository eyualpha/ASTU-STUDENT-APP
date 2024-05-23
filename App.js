import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/Componets/MainNavigator";
import { StatusBar } from "expo-status-bar";
import Color from "./src/Componets/Color";




export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor={Color.primary}/>
      <MainNavigator />
    </NavigationContainer>
  );
}
