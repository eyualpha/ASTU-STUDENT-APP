import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/Screens/HomeScreen";
import GpaCalculator from "./src/Screens/GpaCalculatorScreen";
import CgpaCalculator from "./src/Screens/CgpaCalculatorScreen";
import RuleRegulation from "./src/Screens/RuleRegulationScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GpaCalculator" component={GpaCalculator} />
        <Stack.Screen name="CgpaCalculator" component={CgpaCalculator} />
        <Stack.Screen name="RuleRegulation" component={RuleRegulation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
