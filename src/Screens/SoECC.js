import React, { useState } from "react";
import { View, StyleSheet, SectionList } from "react-native";
import { List, Card, Paragraph } from "react-native-paper";
import Collapsible from "react-native-collapsible";
import { collegeData } from "../Componets/Data/SoEECdata";


const SoECC = () => {
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

export default SoECC;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  collegeCard: {
    marginBottom: 20,
    margin: 15,
  },
  collegeImage: {
    height: 50,
  },
  collegeDescription: {
    marginTop: 10,
    fontSize: 16,
  },
  departmentCard: {
    marginBottom: 20,
    marginHorizontal: 15,
  },
  departmentImage: {
    height: 150,
    marginBottom: 10
  },
});
