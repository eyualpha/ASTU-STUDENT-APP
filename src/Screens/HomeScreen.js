import { StyleSheet, Text, View, Button, Image } from "react-native";
import React from "react";
import Color from "../Componets/Color";



const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View style = {styles.greetingSection}>
        <Text style = {styles.greetingTitle}>Hello!</Text>
        <Text style ={styles.greetingDetail}>Welcome to MY ASTU. The ultimate information guide application for students.</Text>
      </View>
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
  },
  greetingSection:{
    backgroundColor: Color.primary,
    height: 100,
    margin: 15,
    borderRadius: 10,
    padding: 8
  },
  stikerStyle:{
    height: 50,
    width: 50
  },
  greetingTitle:{
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  greetingDetail:{
    fontSize: 15,
    color: '#fff'
  }
});
