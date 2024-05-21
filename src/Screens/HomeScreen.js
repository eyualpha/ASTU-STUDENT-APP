import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to GPA Calculator"
        onPress={() => navigation.navigate("GpaCalculator")}
      />
      <Button
        title="Go to CGPA Calculator"
        onPress={() => navigation.navigate("CgpaCalculator")}
      />
      <Button
        title="Go to RuleRegulation"
        onPress={() => navigation.navigate("RuleRegulation")}
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
