import { StyleSheet, Text, View } from "react-native";
import React from "react";

const gradeValues = {
  A: 4.0,
  "A+": 4.0,
  "A-": 3.75,
  "B+": 3.5,
  B: 3.0,
  "B-": 2.75,
  "C+": 2.5,
  C: 2.0,
  "C-": 1.75,
  D: 1.0,
  F: 0.0,
};

const GpaCalculator = () => {
  const [subjects, setSubjects] = useState([
    { id: "1", grade: "", credit: "" },
  ]);
  const [gpa, setGpa] = useState(null);

  const addSubject = () => {
    setSubjects([
      ...subjects,
      { id: (subjects.length + 1).toString(), grade: "", credit: "" },
    ]);
  };

  const calculateGpa = () => {
    let totalCredits = 0;
    let totalPoints = 0;

    for (const subject of subjects) {
      const gradeValue = gradeValues[subject.grade.toUpperCase()];
      const credit = parseFloat(subject.credit);

      if (gradeValue === undefined || isNaN(credit)) {
        Alert.alert("Invalid input", "Please enter valid grades and credits.");
        return;
      }

      totalCredits += credit;
      totalPoints += gradeValue * credit;
    }

    if (totalCredits === 0) {
      Alert.alert("Invalid input", "Total credits cannot be zero.");
      return;
    }

    setGpa(totalPoints / totalCredits);
  };

  const handleInputChange = (id, field, value) => {
    const updatedSubjects = subjects.map((subject) => {
      if (subject.id === id) {
        return { ...subject, [field]: value };
      }
      return subject;
    });
    setSubjects(updatedSubjects);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GPA Calculator</Text>
      <FlatList
        data={subjects}
        renderItem={({ item }) => (
          <View style={styles.subject}>
            <TextInput
              style={styles.input}
              placeholder="Grade"
              value={item.grade}
              onChangeText={(value) =>
                handleInputChange(item.id, "grade", value)
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Credit"
              keyboardType="numeric"
              value={item.credit}
              onChangeText={(value) =>
                handleInputChange(item.id, "credit", value)
              }
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <Button title="Add Subject" onPress={addSubject} />
      <Button title="Calculate GPA" onPress={calculateGpa} />
      {gpa !== null && (
        <Text style={styles.result}>Your GPA: {gpa.toFixed(2)}</Text>
      )}
    </View>
  );
};

export default GpaCalculator;

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
  subject: {
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
