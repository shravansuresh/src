$(() => {
  window.menu = [
    {
      title: "Home",
      route: "home.html"
    },
    {
      title: "Students",
      route: "students.html"
    },
    {
      title: "Employee",
      route: "employee.html"
    }
  ];

  buildList = data => {
    let html = "<ul>";
    for (item in data) {
      html += "<li><a onclick='clickMenu()'>" + data[item].title + "</a></li>";
    }
    html += "</ul>";
    return html;
  };

  clickMenu = () => {
    let menuStr = event.target.text.toLowerCase();
    window.location.hash = "#" + menuStr;
    setContent(menuStr);
    createActiveMenu(menuStr);
  };

  setContent = menuStr => {
    $("#content").load("./pages/" + menuStr + "/" + menuStr + ".html", () => {
      setData(menuStr);
    });
  };

  setData = menu => {
    switch (menu) {
      case "students":
        window.createTable("studentsTbl", window.studConfig, window.studData, window.studStorageId);
        break;
      case "employee":
        window.createTable("employeesTbl", window.empConfig, window.empData, window.empStorageId);
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
});
