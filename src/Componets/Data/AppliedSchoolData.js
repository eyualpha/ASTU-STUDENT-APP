export const collegeData = {
  collegeImage: require("../../Assets/Images/applied.jpg"),
  collegeDescription:
    "The School of Applied Science offers a multidisciplinary education that bridges theoretical knowledge and practical application. Key departments include Physics, which explores the fundamental principles governing the natural world; Chemistry, focusing on chemical reactions and material properties; and Mathematics, providing the analytical tools essential for problem-solving across scientific disciplines. This integrated approach prepares students to innovate and excel in various scientific careers, driving advancements in technology, healthcare, and industry.",
  departments: [
    {
      id: "1",
      name: "Applied Physics",
      image: require("../../Assets/Images/phiysics.jpg"),
      description:
        "The Applied Phiysics offers a multidisciplinary education that bridges theoretical knowledge and practical application. Key departments include Physics, which explores the fundamental principles governing the natural world; Chemistry, focusing on chemical reactions and material properties; and Mathematics, providing the analytical tools essential for problem-solving across scientific disciplines. This integrated approach prepares students to innovate and excel in various scientific careers, driving advancements in technology, healthcare, and industry.",
      courses: [
        { name: "Kinematics", code: "AP1102" },
        { name: "Dynamics", code: "AP2222" },
        { name: "Matter", code: "AP103" },
        { name: "Projectile", code: "AP3212" },
      ],
    },
    {
      id: "2",
      name: "Applied Chemistry",
      image: require("../../Assets/Images/chemo.jpg"),
      description:
        "The Applied Chemistry Department offers a multidisciplinary education that bridges theoretical knowledge and practical application. Key departments include Physics, which explores the fundamental principles governing the natural world; Chemistry, focusing on chemical reactions and material properties; and Mathematics, providing the analytical tools essential for problem-solving across scientific disciplines. This integrated approach prepares students to innovate and excel in various scientific careers, driving advancements in technology, healthcare, and industry.",
      courses: [
        { name: "Chemical Reactions", code: "AC101" },
        { name: "Equilibrium", code: "SE102" },
        { name: "Atoms", code: "Web103" },
        { name: "Atomic Reactions", code: "CSE104" },
      ],
    },
    {
      id: "3",
      name: "Applied Biology",
      image: require("../../Assets/Images/bio.jpg"),
      description:
        "The Applied Biology Department offers a multidisciplinary education that bridges theoretical knowledge and practical application. Key departments include Physics, which explores the fundamental principles governing the natural world; Chemistry, focusing on chemical reactions and material properties; and Mathematics, providing the analytical tools essential for problem-solving across scientific disciplines. This integrated approach prepares students to innovate and excel in various scientific careers, driving advancements in technology, healthcare, and industry.",
      courses: [
        { name: "Cells", code: "AB101" },
        { name: "Cellular Reactions", code: "AB3202" },
        { name: "Reproduction", code: "AB3203" },
        { name: "Platss", code: "AB2206" },
      ],
    },
  ],
};
