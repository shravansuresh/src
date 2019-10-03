window.studConfig = [
  {
    title: "ID",
    key: "studentID"
  },
  {
    title: "Name",
    key: "name"
  },
  {
    title: "Age",
    key: "age"
  }
];

// window.studConfig = ["ID", "Name", "Age"];

let storedData1 = localStorage.getItem("studArry");
let toJSON1 = JSON.parse(storedData1);
window.studData = toJSON1;
window.studStorageId = "studArry";
window.studType = ["number", "text", "number"];
