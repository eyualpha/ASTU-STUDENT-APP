import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "./Color";

const GreetingCard = () => {
  return (
    <View>
      <View style={styles.greetingSection}>
        <Text style={styles.greetingTitle}>Hello!</Text>
        <Text style={styles.greetingDetail}>
          Welcome to MY ASTU. The ultimate information guide application for
          students.
        </Text>
      </View>
    </View>
  );
};

export default GreetingCard;

const styles = StyleSheet.create({
  greetingSection: {
    backgroundColor: Color.primary,
    height: 100,
    margin: 15,
    borderRadius: 10,
    padding: 8,
  },
  greetingTitle: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  greetingDetail: {
    fontSize: 15,
    color: "#fff",
  },
});
