window.studConfig = [
  {
    title: "ID",
    key: "studentID",
    type: "number",
    optional: "no",
    unique: "yes"
  },
  {
    title: "Name",
    key: "name",
    type: "text",
    optional: "no",
    unique: "no"
  },
  {
    title: "Class",
    key: "class",
    type: "number",
    optional: "yes",
    unique: "no"
  }
];

// window.studConfig = ["ID", "Name", "Age"];

let storedData1 = localStorage.getItem("studArry");
let toJSON1 = JSON.parse(storedData1);
window.studData = toJSON1;
window.studStorageId = "studArry";

