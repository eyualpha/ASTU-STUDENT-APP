import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "../Screens/HomeScreen";
import CafeMenuScreen from "../Screens/CafeMenuScreen";
import GpaCalculator from "../Screens/GpaCalculatorScreen";
import CgpaCalculator from "../Screens/CgpaCalculatorScreen";
import RuleRegulation from "../Screens/RuleRegulationScreen";
import LocationScreen from "../Screens/LocationListScreen";
import { createStackNavigator } from "@react-navigation/stack";
import SoECC from "../Screens/SoECC";
import CivilSchool from "../Screens/CivilSchool";
import MechanicalSchool from "../Screens/MechanicalSchool";
import Color from "./Color";
import AppliedSchool from "../Screens/AppliedSchool";

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
      })}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="GPA Calculator" component={GpaCalculator} />
      <Stack.Screen name="CGPA Calculator" component={CgpaCalculator} />
      <Stack.Screen name="Rules And Regulations" component={RuleRegulation} />
      <Stack.Screen name="Campus Cafe Menu" component={CafeMenuScreen} />
      <Stack.Screen name="Campus Locations" component={LocationScreen} />
      <Stack.Screen name="SoECC" component={SoECC} />
      <Stack.Screen name="Civil School" component={CivilSchool} />
      <Stack.Screen name="Mechanical School" component={MechanicalSchool} />
      <Stack.Screen name="Applied Science School" component={AppliedSchool} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
