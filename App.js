import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./src/Screens/HomeScreen";
import GpaCalculator from "./src/Screens/GpaCalculatorScreen";
import CgpaCalculator from "./src/Screens/CgpaCalculatorScreen";
import RuleRegulation from "./src/Screens/RuleRegulationScreen";
import CafeMenuScreen from "./src/Screens/CafeMenuScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#1C588C" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: "#1C588C",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#fff",
          },
          headerLeft: () =>
            navigation.canGoBack() && (
              <Icon
                name="arrow-back"
                size={25}
                color="#fff"
                style={{ marginLeft: 15 }}
                onPress={() => navigation.goBack()}
              />
            ),
          headerRight: () => (
            <Icon
              name="menu"
              size={25}
              color="#fff"
              style={{ marginRight: 15 }}
              onPress={() => {}}
            />
          ),
        })}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GPA Calculator" component={GpaCalculator} />
        <Stack.Screen name="CGPA Calculator" component={CgpaCalculator} />
        <Stack.Screen name="Rules And Regulations" component={RuleRegulation} />
        <Stack.Screen name="Campus Cafe Menu" component={CafeMenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
