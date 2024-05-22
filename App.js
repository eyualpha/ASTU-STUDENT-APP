import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/Screens/HomeScreen";
import GpaCalculator from "./src/Screens/GpaCalculatorScreen";
import CgpaCalculator from "./src/Screens/CgpaCalculatorScreen";
import RuleRegulation from "./src/Screens/RuleRegulationScreen";
import CafeMenuScreen from "./src/Screens/CafeMenuScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GPA Calculator" component={GpaCalculator} />
        <Stack.Screen name="CGPA Calculator" component={CgpaCalculator} />
        <Stack.Screen name="Rules And Regulations" component={RuleRegulation} />
        <Stack.Screen name="Campus Cafe Menu" component={CafeMenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
