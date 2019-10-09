window.empConfig = [
    {
        title: "ID",
        key: "empID",
        type: "number",
        optional: "no"
    },
    {
        title: "Name",
        key: "name",
        type: "text",
        optional: "yes"
    },
    {
        title: "Date of Birth",
        key: "dob",
        type: "date",
        optional: "yes"
    },
    {
        title: "Email",
        key: "email",
        type: "email",
        optional: "yes"
    }
  ];
  
  // window.empConfig = ["ID", "Name", "Date of Birth", "Email"];
let storedData = localStorage.getItem("empArry");
let toJSON = JSON.parse(storedData);
window.empData = toJSON;
window.empStorageId = "empArry";