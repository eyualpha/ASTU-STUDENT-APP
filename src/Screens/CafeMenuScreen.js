import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Color from "../Componets/Color";
import { menuData } from "../Componets/Data/CampusCafeMenuData";
import TextCard from "../Componets/TextCard";

const ExpandableItem = ({ item, onToggle, expanded }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => onToggle(item.day)}
        style={styles.titleContainer}
      >
        <Text style={styles.titleText}>{item.day}</Text>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.mealsContainer}>
          <Text style={styles.mealText}>
            <Text style={styles.mealType}>Breakfast:</Text>{" "}
            {item.meals.breakfast}
          </Text>
          <Text style={styles.mealText}>
            <Text style={styles.mealType}>Lunch:</Text> {item.meals.lunch}
          </Text>
          <Text style={styles.mealText}>
            <Text style={styles.mealType}>Dinner:</Text> {item.meals.dinner}
          </Text>
        </View>
      )}
    </View>
  );
};
const CafeMenuScreen = () => {
  const [expandedDay, setExpandedDay] = useState(null);

  const handleToggle = (day) => {
    setExpandedDay((prevDay) => (prevDay === day ? null : day));
  };

  const renderItem = ({ item }) => (
    <ExpandableItem
      item={item}
      onToggle={handleToggle}
      expanded={item.day === expandedDay}
    />
  );
  return (
    <View style={styles.container}>
      <TextCard
        title="Cafe Menu"
        detail="Welcome to ASTU Students cafe. the menu is liste below"
      />
      <FlatList
        data={menuData}
        renderItem={renderItem}
        keyExtractor={(item) => item.day}
      />
    </View>
  );
};

export default CafeMenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  itemContainer: {
    backgroundColor: "#ffffff",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  titleContainer: {
    padding: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: Color.primary,
  },
  mealsContainer: {
    marginTop: 10,
    backgroundColor: "#f1f1f1",
    padding: 5,
    borderRadius: 5,
  },
  mealText: {
    fontSize: 16,
    marginVertical: 2,
    fontStyle: "italic",
  },
  mealType: {
    fontWeight: "bold",
    fontStyle: "italic",
  },
});
