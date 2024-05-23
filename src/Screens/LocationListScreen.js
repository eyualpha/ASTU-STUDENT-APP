import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

const locations = [
  {
    id: 1,
    title: "Library",
    description: "A quiet place to study and read books.",
    image: require("../Assets/Images/splash.png"),
  },
  {
    id: 2,
    title: "Library",
    description: "A quiet place to study and read books.",
    image: require("../Assets/Images/splash.png"),
  },
];
const LocationScreen = () => {
  const [expanded, setExpanded] = useState(null);

  const handlePress = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <ScrollView style={styles.container}>
      {locations.map((location) => (
        <View key={location.id} style={styles.item}>
          <TouchableOpacity onPress={() => handlePress(location.id)}>
            <Text style={styles.title}>{location.title}</Text>
          </TouchableOpacity>
          {expanded === location.id && (
            <View style={styles.details}>
              <Image source={location.image} style={styles.image} />
              <Text style={styles.description}>{location.description}</Text>
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1C588C",
  },
  details: {
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
  },
});