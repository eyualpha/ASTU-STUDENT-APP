import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import React, { useState } from "react";

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
  const calculateCgpa = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    semesters.forEach((semester) => {
      const gpa = parseFloat(semester.gpa);
      const credits = parseFloat(semester.credits);
      if (!isNaN(gpa) && !isNaN(credits)) {
        totalCredits += credits;
        totalPoints += gpa * credits;
      }
    });
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
    <View style={styles.container}>
      <Text style={styles.title}>CGPA Calculator</Text>
      <FlatList
        data={semesters}
        renderItem={({ item }) => (
          <View style={styles.semester}>
            <TextInput
              style={styles.input}
              placeholder="GPA"
              keyboardType="numeric"
              value={item.gpa}
              onChangeText={(value) => handleInputChange(item.id, "gpa", value)}
            />
            <TextInput
              style={styles.input}
              placeholder="Credits"
              keyboardType="numeric"
              value={item.credits}
              onChangeText={(value) =>
                handleInputChange(item.id, "credits", value)
              }
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <Button title="Add Semester" onPress={addSemester} />
      <Button title="Calculate CGPA" onPress={calculateCgpa} />
      {cgpa !== null && (
        <Text style={styles.result}>Your CGPA: {cgpa.toFixed(2)}</Text>
      )}
    </View>
  );
};

export default CgpaCalculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  semester: {
    flexDirection: "row",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    textAlign: "center",
  },
});
