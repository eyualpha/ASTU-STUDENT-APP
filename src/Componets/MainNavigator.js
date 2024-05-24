import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "../Screens/HomeScreen";
import CafeMenuScreen from "../Screens/CafeMenuScreen";
import GpaCalculator from "../Screens/GpaCalculatorScreen";
import CgpaCalculator from "../Screens/CgpaCalculatorScreen";
import RuleRegulation from "../Screens/RuleRegulationScreen";
import LocationScreen from "../Screens/LocationListScreen";
import { createStackNavigator } from "@react-navigation/stack";
import School from "../Screens/SchoolScreen";
import Color from "./Color";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: Color.primary,
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
          />
        ),
      })}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="GPA Calculator" component={GpaCalculator} />
      <Stack.Screen name="CGPA Calculator" component={CgpaCalculator} />
      <Stack.Screen name="Rules And Regulations" component={RuleRegulation} />
      <Stack.Screen name="Campus Cafe Menu" component={CafeMenuScreen} />
      <Stack.Screen name="Campus Locations" component={LocationScreen} />
      <Stack.Screen name="School" component={School} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
