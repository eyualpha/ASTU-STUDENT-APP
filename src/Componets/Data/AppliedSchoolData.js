export const collegeData = {
  collegeImage: require("../../Assets/Images/applied.jpg"),
  collegeDescription: "Applied Science School",
  departments: [
    {
      id: "1",
      name: "Applied Physics",
      image: require("../../Assets/Images/phiysics.jpg"),
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
      name: "Applied Chemistry",
      image: require("../../Assets/Images/chemo.jpg"),
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
      name: "Applied Biology",
      image: require("../../Assets/Images/bio.jpg"),
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
