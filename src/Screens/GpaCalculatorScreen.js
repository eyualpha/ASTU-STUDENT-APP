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
    <View>
      <Text>GpaCalculator</Text>
    </View>
  );
};

export default GpaCalculator;

const styles = StyleSheet.create({});
