export const collegeData = {
  collegeImage: require("../../Assets/Images/mech.jpg"),
  collegeDescription: "Mechanical School",
  departments: [
    {
      id: "1",
      name: "Mechanical Engineering",
      image: require("../../Assets/Images/mechanical.jpg"),
      description: "",
      courses: [
        { name: "Data Structures", code: "CSE1102" },
        { name: "Algorithms", code: "CSE2222" },
        { name: "Databases", code: "CSE103" },
        { name: "Operating Systems", code: "CSE3212" },
      ],
    },
    {
      id: "2",
      name: "Chemical Engineering",
      image: require("../../Assets/Images/chemical.png"),
      description: "",
      courses: [
        { name: "Mobile Development", code: "SE101" },
        { name: "Formal Methods", code: "SE102" },
        { name: " Engineering Web Based systems", code: "Web103" },
        { name: "Object Orientd Programming", code: "CSE104" },
      ],
    },
    {
      id: "3",
      name: "Material Science and Engineeing",
      image: require("../../Assets/Images/mech.jpg"),
      description: "",
      courses: [
        { name: "Digital Logic Design", code: "ME101" },
        { name: "Communicaiton Systems", code: "ECE3202" },
        { name: "MIcroprocessor and Interfacing", code: "ECE3203" },
        { name: "Digital Signal Processing", code: "ECE2206" },
      ],
    },
  ],
};
