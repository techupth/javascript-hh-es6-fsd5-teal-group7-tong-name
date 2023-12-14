let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
  hobbies: ["Football", "Coding"],
};

let additionalHobbies = ["Painting", "Yoga"];

let newStudentProfile = {
  ...studentProfile,
  hobbies: {
    ...studentProfile.additionalHobbies,
  },
};

console.log(newStudentProfile);
