<<<<<<< HEAD

import { StatusBar } from "react-native";



=======
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/Componets/MainNavigator";
import { StatusBar } from "expo-status-bar";
import Color from "./src/Componets/Color";



>>>>>>> new-branch

export default function App() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
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
=======
      <StatusBar style="light" backgroundColor={Color.primary}/>
      <MainNavigator />
>>>>>>> new-branch
    </NavigationContainer>
  );
}
