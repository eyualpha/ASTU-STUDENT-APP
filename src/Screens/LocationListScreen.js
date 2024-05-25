import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { locations } from "../Componets/Data/LocationData";

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
    borderColor: "gray",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1C588C",
    marginLeft: 15,
  },
  details: {
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
  },
});
