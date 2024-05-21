import { StyleSheet, Text, View } from "react-native";
import React from "react";

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
    <View>
      <Text>CgpaCalculator</Text>
    </View>
  );
};

export default CgpaCalculator;

const styles = StyleSheet.create({});
