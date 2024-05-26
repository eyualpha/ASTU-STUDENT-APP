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
import TextCard from "../Componets/TextCard";

const LocationScreen = () => {
  const [expanded, setExpanded] = useState(null);

  const handlePress = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <View style = {styles.container}>
      <TextCard title = 'Reminder' detail ='All the location are taken from the square infront of Priesdent`s office and Central library'/>
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
    </View>
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
    margin: 15,
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
