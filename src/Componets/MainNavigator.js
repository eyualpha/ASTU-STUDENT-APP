import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "../Screens/HomeScreen";
import CafeMenuScreen from "../Screens/CafeMenuScreen";
import GpaCalculator from "../Screens/GpaCalculatorScreen";
import CgpaCalculator from "../Screens/CgpaCalculatorScreen";
import RuleRegulation from "../Screens/RuleRegulationScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="GPA Calculator" component={GpaCalculator} />
      <Stack.Screen name="CGPA Calculator" component={CgpaCalculator} />
      <Stack.Screen name="Rules And Regulations" component={RuleRegulation} />
      <Stack.Screen name="Campus Cafe Menu" component={CafeMenuScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
