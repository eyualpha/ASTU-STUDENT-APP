import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { rulesData } from "../Componets/Data/RuleAndRegulationData";

const ExpandableItem = ({ item, onToggle, expanded }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => onToggle(item.id)}
        style={styles.titleContainer}
      >
        <Text style={styles.titleText}>{item.title}</Text>
      </TouchableOpacity>
      {expanded && (
        <Text style={styles.descriptionText}>{item.description}</Text>
      )}
    </View>
  );
};
const RuleRegulation = () => {
  const [expandedItemId, setExpandedItemId] = useState(null);

  const handleToggle = (id) => {
    setExpandedItemId((prevId) => (prevId === id ? null : id));
  };

  const renderItem = ({ item }) => (
    <ExpandableItem
      item={item}
      onToggle={handleToggle}
      expanded={item.id === expandedItemId}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={rulesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default RuleRegulation;

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
    fontSize: 16,
    fontWeight: "bold",
  },
  descriptionText: {
    marginTop: 5,
    fontSize: 14,
    color: "#666",
  },
});
