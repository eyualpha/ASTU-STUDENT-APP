import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "./Color";

const TextCard = (probs) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.cardTitle}>{probs.title}</Text>
        <Text style={styles.cardDetail}>{probs.detail}</Text>
      </View>
    </View>
  );
};

export default TextCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.primary,
    height: 100,
    margin: 15,
    borderRadius: 10,
    padding: 8,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  cardDetail: {
    fontSize: 15,
    color: "#fff",
  },
});
