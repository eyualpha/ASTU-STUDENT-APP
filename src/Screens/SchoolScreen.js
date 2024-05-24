import React, { useState } from "react";
import { View, StyleSheet, SectionList } from "react-native";
import { List, Card, Paragraph } from "react-native-paper";
import Collapsible from "react-native-collapsible";

const collegeData = {
  collegeImage: require("../Assets/Images/image.jpg"),
  collegeDescription:
    "Welcome to XYZ College, a place of excellence and learning.",
  departments: [
    {
      id: "1",
      name: "Computer Science and Engineering",
      image: require("../Assets/Images/image.jpg"),
      description:
        "The Computer Science department offers various courses in programming, algorithms, and more.",
      courses: [
        { name: "Data Structures", code: "CS101" },
        { name: "Algorithms", code: "CS102" },
        { name: "Databases", code: "CS103" },
        { name: "Operating Systems", code: "CS104" },
      ],
    },
    {
      id: "2",
      name: "Software Engineering",
      image: require("../Assets/Images/image.jpg"),
      description:
        "The Mechanical Engineering department provides courses on thermodynamics, mechanics, and more.",
      courses: [
        { name: "Thermodynamics", code: "ME101" },
        { name: "Fluid Mechanics", code: "ME102" },
        { name: "Solid Mechanics", code: "ME103" },
        { name: "Dynamics", code: "ME104" },
      ],
    },
    {
      id: "3",
      name: "Electronics and Communication Engineering",
      image: require("../Assets/Images/image.jpg"),
      description:
        "The Mechanical Engineering department provides courses on thermodynamics, mechanics, and more.",
      courses: [
        { name: "Thermodynamics", code: "ME101" },
        { name: "Fluid Mechanics", code: "ME102" },
        { name: "Solid Mechanics", code: "ME103" },
        { name: "Dynamics", code: "ME104" },
      ],
    },
    {
      id: "4",
      name: "Electrical Power and Control Engineering",
      image: require("../Assets/Images/image.jpg"),
      description:
        "The Mechanical Engineering department provides courses on thermodynamics, mechanics, and more.",
      courses: [
        { name: "Thermodynamics", code: "ME101" },
        { name: "Fluid Mechanics", code: "ME102" },
        { name: "Solid Mechanics", code: "ME103" },
        { name: "Dynamics", code: "ME104" },
      ],
    },
  ],
};

const School = () => {
  const [expandedDepartment, setExpandedDepartment] = useState(null);

  const handlePress = (id) => {
    setExpandedDepartment(expandedDepartment === id ? null : id);
  };

  const renderDepartmentHeader = ({ section: { id, name } }) => (
    <List.Item
      title={name}
      left={(props) => <List.Icon {...props} icon="school" />}
      onPress={() => handlePress(id)}
    />
  );

  const renderDepartmentContent = ({
    section: { id, image, description, courses },
  }) => (
    <Collapsible collapsed={expandedDepartment !== id}>
      <Card style={styles.departmentCard}>
        <Card.Cover source={image} style={styles.departmentImage} />
        <Card.Content>
          <Paragraph>{description}</Paragraph>
          <List.Section>
            <List.Subheader>Courses</List.Subheader>
            {courses.map((course, index) => (
              <List.Item
                key={index}
                title={`${course.name} (${course.code})`}
                left={(props) => <List.Icon {...props} icon="book" />}
              />
            ))}
          </List.Section>
        </Card.Content>
      </Card>
    </Collapsible>
  );

  return (
    <View style={styles.container}>
      <Card style={styles.collegeCard}>
        <Card.Cover
          source={collegeData.collegeImage}
          style={styles.collegeImage}
        />
        <Card.Content>
          <Paragraph style={styles.collegeDescription}>
            {collegeData.collegeDescription}
          </Paragraph>
        </Card.Content>
      </Card>
      <SectionList
        sections={collegeData.departments.map((department) => ({
          ...department,
          data: [{}], // This is required by SectionList to render content
        }))}
        keyExtractor={(item, index) => index.toString()}
        renderSectionHeader={renderDepartmentHeader}
        renderItem={renderDepartmentContent}
        showsVerticalScrollIndicator={false} // Hides the vertical scroll indicator
      />
    </View>
  );
};

export default School;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  collegeCard: {
    marginBottom: 20,
    margin: 15,
  },
  collegeImage: {
    height: 150,
  },
  collegeDescription: {
    marginTop: 10,
    fontSize: 16,
  },
  departmentCard: {
    marginBottom: 20,
    marginHorizontal: 5,
  },
  departmentImage: {
    height: 150,
  },
});
