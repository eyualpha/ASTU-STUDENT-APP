export const collegeData = {
  collegeImage: require("../../Assets/Images/image.jpg"),
  collegeDescription:
    "The School of Civil and Architectural Engineering offers a multidisciplinary education that bridges theoretical knowledge and practical application. providing the analytical tools essential for problem-solving across scientific disciplines. This integrated approach prepares students to innovate and excel in various scientific careers, driving advancements in technology, healthcare, and industry.",
  departments: [
    {
      id: "1",
      name: "Civil Engineering",
      image: require("../../Assets/Images/civil.jpg"),
      description:
        "The Civil Engineering offers a multidisciplinary education that bridges theoretical knowledge and practical application. providing the analytical tools essential for problem-solving across scientific disciplines. This integrated approach prepares students to innovate and excel in various scientific careers, driving advancements in technology, healthcare, and industry.",
      courses: [
        { name: "Highway Engineering", code: "CE1102" },
        { name: "Aplied Mathematics-III", code: "CE2222" },
        { name: "Filud Mechanics", code: "CE103" },
        { name: "Hydrolics Engineering", code: "CSE3212" },
      ],
    },
    {
      id: "2",
      name: "Architectural Engineering",
      image: require("../../Assets/Images/arc.jpg"),
      description:
        "The School of Applied Science offers a multidisciplinary education that bridges theoretical knowledge and practical application. providing the analytical tools essential for problem-solving across scientific disciplines. This integrated approach prepares students to innovate and excel in various scientific careers, driving advancements in technology, healthcare, and industry.",
      courses: [
        { name: "Graphics", code: "AE101" },
        { name: "Designing", code: "AE102" },
        { name: "Atchitectural Theory", code: "AE103" },
        { name: "Architectural Principles", code: "AE104" },
      ],
    },
    {
      id: "3",
      name: "Water Resourse and Engineeing",
      image: require("../../Assets/Images/water.jpg"),
      description: "",
      courses: [
        { name: "Water", code: "WER101" },
        { name: "Fluid Mechanichs", code: "WRE3202" },
        { name: "Water Engineering", code: "WRE3203" },
        { name: "Water Resourse", code: "WRE2206" },
      ],
    },
  ],
};
