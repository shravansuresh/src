$(() => {
  window.menu = [
    {
      title: "home",
      route: "home.html"
    },
    {
      title: "students",
      route: "students.html"
    },
    {
      title: "employee",
      route: "employee.html"
    }
  ];

  clickMenu = () => {
    let menuStr = event.target.text;
    window.location.hash = "#" + menuStr;
    createActiveMenu(menuStr);
    switch (menuStr) {
      case "home":
        $("#content").load("./pages/home/home.html");
        break;
      case "students":
        $("#content").load("./pages/students/students.html", () => {
          window.createTable("studentsTbl", window.studConfig, window.studData);
        });
        break;
      case "employee":
        $("#content").load("./pages/employee/employee.html");
        break;

      default:
        break;
    }
  };

  let selector, elems;
  selector = "ul li a";
  createActiveMenu = activeMenu => {
    elems = document.querySelectorAll(selector);
    elems.forEach(elem => {
      elem.classList.remove("active");
      elem.text == activeMenu ? elem.classList.add("active") : "";
    });
  };

  buildList = data => {
    let html = "<ul>";
    for (item in data) {
      html += "<li><a onclick='clickMenu()'>" + data[item].title + "</a></li>";
    }
    html += "</ul>";
    return html;
  };
});
