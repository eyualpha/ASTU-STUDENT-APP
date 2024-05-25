export const collegeData = {
  collegeImage: require("../../Assets/Images/image.jpg"),
  collegeDescription: "Civil School",
  departments: [
    {
      id: "1",
      name: "Civil Engineering",
      image: require("../../Assets/Images/civil.jpg"),
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
      name: "Architectural Engineering",
      image: require("../../Assets/Images/arc.jpg"),
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
      name: "Water Engineeing",
      image: require("../../Assets/Images/water.jpg"),
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
