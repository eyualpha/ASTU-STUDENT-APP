import { StyleSheet, Text, View } from "react-native";
import React from "react";

const gradeValues = {
    "A": 4.0,
    "A+": 4.0,
    "A-": 3.75,
    "B+": 3.5,
    "B": 3.0,
    "B-": 2.75,
    "C+": 2.5,
    "C": 2.0,
    "C-": 1.75,
    "D": 1.0,
    "F": 0.0
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
  return (
    <View>
      <Text>GpaCalculator</Text>
    </View>
  );
};

export default GpaCalculator;

const styles = StyleSheet.create({});
