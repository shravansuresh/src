$(() => {
  window.createTable = (tableDiv, config, data) => {
    let myTableDiv = document.getElementById(tableDiv);
    let table = document.createElement("table");
    let tableBody = document.createElement("tbody");
    table.appendChild(tableBody);

    //Table header
    let tr = document.createElement("tr");
    tableBody.appendChild(tr);
    config.forEach((row, rowIdx) => {
      for (const col in row) {
        let th = document.createElement("th");
        th.width = "75";
        th.appendChild(document.createTextNode(row[col]));
        tr.appendChild(th);
        debugger;
      }
    });

    // Table body
    data.forEach((row, rowIdx) => {
      let tr = document.createElement("tr");
      for (const col in row) {
        let td = document.createElement("td");
        td.appendChild(document.createTextNode(row[col]));
        tr.appendChild(td);
      }
      tableBody.appendChild(tr);
    });

    myTableDiv.appendChild(table);
  };
});
