window.empConfig = [
    {
        title: "ID",
        key: "empID",
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
        title: "Date of Birth",
        key: "dob",
        type: "date",
        optional: "yes",
        unique: "no"
    },
    {
        title: "Email",
        key: "email",
        type: "email",
        optional: "no",
        unique: "yes"
    }
  ];
  
  // window.empConfig = ["ID", "Name", "Date of Birth", "Email"];
let storedData = localStorage.getItem("empArry");
let toJSON = JSON.parse(storedData);
window.empData = toJSON;
window.empStorageId = "empArry";