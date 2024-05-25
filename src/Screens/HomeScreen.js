import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Color from "../Componets/Color";
import { IconButton, Card } from "react-native-paper";
import GreetingCard from "../Componets/GreetingCard";
import SlidingCard from "../Componets/SliderCard";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <GreetingCard /> */}
      <SlidingCard />
      <Card style={styles.card}>
        <Card.Title title="Explore Services" />
        <Card.Content style={styles.servicesContainer}>
          <TouchableOpacity
            style={styles.serviceBox}
            onPress={() => navigation.navigate("GPA Calculator")}
          >
            <IconButton icon="calculator" size={30} />
            <Text style={styles.serviceText}>GPA Calculator</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.serviceBox}
            onPress={() => navigation.navigate("CGPA Calculator")}
          >
            <IconButton icon="calculator-variant" size={30} />
            <Text style={styles.serviceText}>CGPA Calculator</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.serviceBox}
            onPress={() => navigation.navigate("Rules And Regulations")}
          >
            <IconButton icon="file-document-outline" size={30} />
            <Text style={styles.serviceText}>Rules and Regulations</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.serviceBox}
            onPress={() => navigation.navigate("Campus Cafe Menu")}
          >
            <IconButton icon="food" size={30} />
            <Text style={styles.serviceText}>Campus Cafe</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.serviceBox}
            onPress={() => navigation.navigate("Campus Locations")}
          >
            <IconButton icon="map-marker" size={30} />
            <Text style={styles.serviceText}>Locations</Text>
          </TouchableOpacity>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Schools and Courses" />
        <Card.Content style={styles.servicesContainer}>
          <TouchableOpacity
            style={styles.serviceBox}
            onPress={() => navigation.navigate("SoECC")}
          >
            <IconButton icon="school" size={30} />
            <Text style={styles.serviceText}>SoEEC</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.serviceBox}
            onPress={() => navigation.navigate("Civil School")}
          >
            <IconButton icon="school" size={30} />
            <Text style={styles.serviceText}>Civil School</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.serviceBox}
            onPress={() => navigation.navigate("Mechanical School")}
          >
            <IconButton icon="school" size={30} />
            <Text style={styles.serviceText}>Mechanical School</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.serviceBox}
            onPress={() => navigation.navigate("Applied Science School")}
          >
            <IconButton icon="school" size={30} />
            <Text style={styles.serviceText}>Applied Science</Text>
          </TouchableOpacity>
        </Card.Content>
      </Card>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  servicesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  serviceBox: {
    width: "23%",
    alignItems: "center",
    marginVertical: 8,
    borderColor: Color.IconBox,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
  },
  serviceText: {
    fontSize: 12,
    marginTop: 4,
    textAlign: "center",
  },
  eventText: {
    fontSize: 14,
    marginVertical: 4,
  },
  cardTitle: {
    fontWeight: "bold",
  },
});
