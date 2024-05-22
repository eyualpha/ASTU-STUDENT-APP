import { StyleSheet, Text, View } from "react-native";
import React from "react";

const menuData = [
  {
    day: "Monday",
    meals: {
      breakfast: "Firfir, Bread, Tea",
      lunch: "Rice with Therefore,",
      dinner: "Shiro, MIsir Wot, Kik Wot",
    },
  },
  {
    day: "Tuesday",
    meals: {
      breakfast: "Firfir, Bread, Tea",
      lunch: "Rice with Therefore,",
      dinner: "Shiro, MIsir Wot, Kik Wot",
    },
  },

  {
    day: "Wednesday",
    meals: {
      breakfast: "Firfir, Bread, Tea",
      lunch: "Rice with Therefore,",
      dinner: "Shiro, MIsir Wot, Kik Wot",
    },
  },
  {
    day: "Thursday",
    meals: {
      breakfast: "Firfir, Bread, Tea",
      lunch: "Rice with Therefore,",
      dinner: "Shiro, MIsir Wot, Kik Wot",
    },
  },
  {
    day: "Friday",
    meals: {
      breakfast: "Firfir, Bread, Tea",
      lunch: "Rice with Therefore,",
      dinner: "Shiro, MIsir Wot, Kik Wot",
    },
  },
  {
    day: "Saturday",
    meals: {
      breakfast: "Firfir, Bread, Tea",
      lunch: "Rice with Therefore,",
      dinner: "Shiro, MIsir Wot, Kik Wot",
    },
  },
  {
    day: "Sunday",
    meals: {
      breakfast: "Firfir, Bread, Tea",
      lunch: "Rice with Therefore,",
      dinner: "Shiro, MIsir Wot, Kik Wot",
    },
  },
];

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
    paddingTop: 50,
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
  },
  mealsContainer: {
    marginTop: 10,
  },
  mealText: {
    fontSize: 16,
    marginVertical: 2,
  },
  mealType: {
    fontWeight: "bold",
  },
});
