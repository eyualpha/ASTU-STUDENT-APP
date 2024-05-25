import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Button } from "react-native-paper";
import Modal from "react-native-modal";

const Sidebar = (probs) => {
  return (
    <View style={styles.container}>
      <Modal
        isVisible={probs.visiblity}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        style={styles.modal}
      >
        <View style={styles.sidebar}>
          <Text style={styles.title}>Services</Text>
          <TouchableOpacity style={styles.serviceItem}>
            <Text style={styles.serviceText}>Service 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <Text style={styles.serviceText}>Service 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <Text style={styles.serviceText}>Service 3</Text>
          </TouchableOpacity>
          <Button mode="contained">Close Sidebar</Button>
        </View>
      </Modal>
    </View>
  );
};

const { width } = Dimensions.get("window");
const sidebarWidth = width * 0.6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  modal: {
    margin: 0,
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  sidebar: {
    width: sidebarWidth,
    height: "100%",
    backgroundColor: "#fff",
    padding: 0,
    margin: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 15,
    backgroundColor: "#6200ee",
    color: "#fff",
    textAlign: "center",
  },
  serviceItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  serviceText: {
    fontSize: 18,
  },
});

export default Sidebar;
