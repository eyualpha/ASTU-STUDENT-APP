import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const HomeScreen = ({navigation}) => {
  return (
    <View>
     <Button
        title="Go to GPA Calculator"
        onPress={() => navigation.navigate("GpaCalculator")}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
