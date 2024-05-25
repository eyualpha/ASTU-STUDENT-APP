export const collegeData = {
  collegeImage: require("../../Assets/Images/image.jpg"),
  collegeDescription:
    "School of Electrical Engineering and Computing (SoEEC) is aimed to produce a world calss competenet elctrical engineers and computing professionals who are equipped with necessary skills and knowledge to solve indivdual and organizational problems of the country and bring growth to the whole world. The contain the following Departments.",
  departments: [
    {
      id: "1",
      name: "Computer Science and Engineering",
      image: require("../../Assets/Images/CSE.jpg"),
      description:
        "The Computer Science and Engineerig major at ASTU is structured in a way that supports the study of both theoretical and engineering aspects of computers. it finds balance between breadth and depth to provide a sold foundation inthe basic science and mathematics on one hand and professionalism, leadership and skills on the other hand.",
      courses: [
        { name: "Data Structures", code: "CSE1102" },
        { name: "Algorithms", code: "CSE2222" },
        { name: "Databases", code: "CSE103" },
        { name: "Operating Systems", code: "CSE3212" },
      ],
    },
    {
      id: "2",
      name: "Software Engineering",
      image: require("../../Assets/Images/software.jpg"),
      description:
        "The Software Engineering department provides solution oriented courses to make students real world problem solvers and and develop ultimate systems.",
      courses: [
        { name: "Mobile Development", code: "SE101" },
        { name: "Formal Methods", code: "SE102" },
        { name: " Engineering Web Based systems", code: "Web103" },
        { name: "Object Orientd Programming", code: "CSE104" },
      ],
    },
    {
      id: "3",
      name: "Electronics and Communication Engineering",
      image: require("../../Assets/Images/ECE.jpg"),
      description:
        "The Electronics and Communication Engineering is a program that aims to integrate separate engineering fields to meet the joint demands made by the electronics and communication engineering world, the program includes design, implementation and testing a wide range of electronic and communication systems.",
      courses: [
        { name: "Digital Logic Design", code: "ME101" },
        { name: "Communicaiton Systems", code: "ECE3202" },
        { name: "MIcroprocessor and Interfacing", code: "ECE3203" },
        { name: "Digital Signal Processing", code: "ECE2206" },
      ],
    },
    {
      id: "4",
      name: "Electrical Power and Control Engineering",
      image: require("../../Assets/Images/POWER.jpg"),
      description:
        "Electrical power and control engineering is aimed to build the gratuates with basic foundation in the fundamental areas of Electrical power and control Engineering (circuits and systems, electro magnatic and control systems and power engineering) to provide techinical proefficiency needed in the field.",
      courses: [
        { name: "Electronic Circuit-1", code: "ME101" },
        { name: "Electro magnetic field", code: "MATH2101" },
        { name: "Computational Methods", code: "MATH2101" },
        { name: "Power Electronics", code: "ECE2202" },
      ],
    },
  ],
};
