import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { StyleSheet, Text, View } from "react-native";
import React from "react";

import HomeScreen from "./src/Screens/HomeScreen";
import GpaCalculator from "./src/Screens/GpaCalculatorScreen";
import CgpaCalculator from "./src/Screens/CgpaCalculatorScreen";
import RuleRegulation from "./src/Screens/RuleRegulationScreen";
import CafeMenuScreen from "./src/Screens/CafeMenuScreen";

const MainStackNavigator = () => {
  return (
    <View>
      <Text>MainStackNavigator</Text>
    </View>
  );
};

export default MainStackNavigator;

const styles = StyleSheet.create({});
