import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to GPA Calculator"
        onPress={() => navigation.navigate("GPA Calculator")}
      />
      <Button
        title="Go to CGPA Calculator"
        onPress={() => navigation.navigate("CGPA Calculator")}
      />
      <Button
        title="Go to RuleRegulation"
        onPress={() => navigation.navigate("Rules And Regulations")}
      />
      <Button
        title="Go to Cafe Menu"
        onPress={() => navigation.navigate("Campus Cafe Menu")}
      />
      <Button
        title="Locations"
        onPress={() => navigation.navigate("Campus Locations")}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
