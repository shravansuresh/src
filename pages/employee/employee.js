window.empConfig = [
    {
        title: "ID",
        key: "empID"
    },
    {
        title: "Name",
        key: "name"
    },
    {
        title: "Date of Birth",
        key: "dob"
    },
    {
        title: "Email",
        key: "email"
    }
  ];
  
  // window.empConfig = ["ID", "Name", "Date of Birth", "Email"];
let storedData = localStorage.getItem("empArry");
let toJSON = JSON.parse(storedData);
window.empData = toJSON;
window.empStorageId = "empArry";
window.empType = ["number", "text", "date", "email"];