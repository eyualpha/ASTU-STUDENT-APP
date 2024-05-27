import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Alert,
  ScrollView,
} from "react-native";
import {
  IconButton,
  Provider as PaperProvider,
  Card,
  Title,
} from "react-native-paper";
import Color from "../Componets/Color";

const gradeValues = {
  A: 4.0,
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

  const deleteSubject = (id) => {
    setSubjects(subjects.filter((subject) => subject.id !== id));
  };

  const calculateGpa = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    let hasInvalidInput = false;

    for (const subject of subjects) {
      const gradeValue = gradeValues[subject.grade.toUpperCase()];
      const credit = parseFloat(subject.credit);

      if (gradeValue === undefined || isNaN(credit) || credit <= 0) {
        hasInvalidInput = true;
        break;
      }

      totalCredits += credit;
      totalPoints += gradeValue * credit;
    }

    if (hasInvalidInput || totalCredits === 0) {
      Alert.alert(
        "Invalid input",
        "Please enter valid grades (A-F) and positive course credits."
      );
      setGpa(null);
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
    <PaperProvider>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Title style={styles.title}>Grade Point Average </Title>
          <Card style={styles.card}>
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
                  <IconButton
                    icon="delete"
                    color="red"
                    size={20}
                    onPress={() => deleteSubject(item.id)}
                  />
                </View>
              )}
              keyExtractor={(item) => item.id}
              ListFooterComponent={<View />}
            />
          </Card>
          <View style={styles.buttonContainer}>
            <IconButton icon="plus-box" size={40} onPress={addSubject} />
            <IconButton icon="equal-box" size={40} onPress={calculateGpa} />
          </View>
          {gpa !== null && (
            <Text style={styles.result}>Your GPA: {gpa.toFixed(2)}</Text>
          )}
        </View>
      </ScrollView>
    </PaperProvider>
  );
};

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
  subject: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
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
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: Color.primary,
    alignSelf: "center",
    padding: 10,
    borderRadius: 5,
  },
});

export default GpaCalculator;
