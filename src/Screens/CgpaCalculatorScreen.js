import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Alert,
  ScrollView,
} from "react-native";
import {
  IconButton,
  Card,
  Title,
  Provider as PaperProvider,
} from "react-native-paper";

const CgpaCalculator = () => {
  const [semesters, setSemesters] = useState([
    { id: "1", gpa: "", credits: "" },
  ]);
  const [cgpa, setCgpa] = useState(null);

  const addSemester = () => {
    setSemesters([
      ...semesters,
      { id: (semesters.length + 1).toString(), gpa: "", credits: "" },
    ]);
  };

  const removeSemester = (id) => {
    setSemesters(semesters.filter((semester) => semester.id !== id));
  };

  const calculateCgpa = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    let hasInvalidInput = false;

    semesters.forEach((semester) => {
      const gpa = parseFloat(semester.gpa);
      const credits = parseFloat(semester.credits);

      if (isNaN(gpa) || isNaN(credits) || gpa < 0 || gpa > 4 || credits <= 0) {
        hasInvalidInput = true;
      } else {
        totalCredits += credits;
        totalPoints += gpa * credits;
      }
    });

    if (hasInvalidInput || totalCredits === 0) {
      Alert.alert(
        "Invalid input",
        "Please provide valid GPA (0-4) and credits (greater than 0) for all semesters."
      );
      setCgpa(null);
      return;
    }

    setCgpa(totalPoints / totalCredits);
  };

  const handleInputChange = (id, field, value) => {
    const updatedSemesters = semesters.map((semester) => {
      if (semester.id === id) {
        return { ...semester, [field]: value };
      }
      return semester;
    });
    setSemesters(updatedSemesters);
  };

  return (
    <PaperProvider>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Title style={styles.title}>Commulative Grade Point Average</Title>
          <Card style={styles.card}>
            <FlatList
              data={semesters}
              renderItem={({ item }) => (
                <View style={styles.semester}>
                  <TextInput
                    style={styles.input}
                    placeholder="GPA"
                    keyboardType="numeric"
                    value={item.gpa}
                    onChangeText={(value) =>
                      handleInputChange(item.id, "gpa", value)
                    }
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Semester Credit"
                    keyboardType="numeric"
                    value={item.credits}
                    onChangeText={(value) =>
                      handleInputChange(item.id, "credits", value)
                    }
                  />
                  <IconButton
                    icon="delete"
                    color="red"
                    size={24}
                    onPress={() => removeSemester(item.id)}
                  />
                </View>
              )}
              keyExtractor={(item) => item.id}
              ListFooterComponent={<View />}
            />
          </Card>
          <View style={styles.buttonContainer}>
            <IconButton
              icon="plus-box"
              color="#6200ee"
              size={30}
              onPress={addSemester}
            />
            <IconButton
              icon="equal-box"
              color="#6200ee"
              size={30}
              onPress={calculateCgpa}
            />
          </View>
          {cgpa !== null && (
            <Text style={styles.result}>Your CGPA: {cgpa.toFixed(2)}</Text>
          )}
        </View>
      </ScrollView>
    </PaperProvider>
  );
};

export default CgpaCalculator;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#000",
  },
  card: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#fff",
  },
  semester: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 5,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  result: {
    marginTop: 20,
    fontSize: 20,
    textAlign: "center",
    color: "#6200ee",
  },
});
