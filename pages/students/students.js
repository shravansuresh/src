window.studConfig = [
  {
    title: "ID",
    key: "studentID",
    type: "number",
    optional: "yes"
  },
  {
    title: "Name",
    key: "name",
    type: "text",
    optional: "yes"
  },
  {
    title: "Semester",
    key: "semester",
    type: "number",
    optional: "yes"
  }
];

// window.studConfig = ["ID", "Name", "Age"];

let storedData1 = localStorage.getItem("studArry");
let toJSON1 = JSON.parse(storedData1);
window.studData = toJSON1;
window.studStorageId = "studArry";

