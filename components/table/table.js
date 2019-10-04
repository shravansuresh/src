$(() => {
  window.createTable = (tableDiv, config, data, storageId) => {
    debugger
    console.log(storageId);
    let myTableDiv = document.getElementById(tableDiv);
    myTableDiv.innerHTML = '';
    let table = document.createElement("table");
    table.setAttribute("class", "tableId");
    table.setAttribute("id", "tableId");
    let tableBody = document.createElement("tbody");
    table.appendChild(tableBody);

    //Table header
    let tr = document.createElement("tr");
    tableBody.appendChild(tr);
    for (let [key, value] of Object.entries(config)) {
      let th = document.createElement("th");
      th.setAttribute("class", "tHead");
      let ascBtn = document.createElement("BUTTON");
      th.appendChild(document.createTextNode(value.title));
      ascBtn.setAttribute("class", "sortBtn");
      ascBtn.innerHTML = '<img src="./assets/images/up.png" width="15px" height="auto">';
      ascBtn.setAttribute('id', value.title);
      ascBtn.addEventListener("click", function(event) {
        sortRow(this, 'asc', config, storageId);
        event.preventDefault();
      });
      th.appendChild(ascBtn);
      tr.appendChild(th);
    }

    // Table body
    // data.forEach((row, rowIdx) => {
    //   let tr = document.createElement("tr");
    //   for (const col in row) {
    //     let td = document.createElement("td");
    //     td.appendChild(document.createTextNode(row[col]));
    //     tr.appendChild(td);
    //   }
    //   tableBody.appendChild(tr);
    // });

    //myTableDiv.appendChild(table);
    if(data != null){
        data.forEach(item => {
            let tr = tableBody.insertRow(-1);
            for (let [key, value] of Object.entries(item)) {
                let td = document.createElement("td");
                td.innerHTML = value;
                if(isNaN(value)){
                    if(isNaN(value.slice(0,3))){
                        td.style.textAlign = "left";
                    }
                    else{
                        td.style.textAlign = "right";
                    }
                }
                else{
                    td.style.textAlign = "right"
                }
                tr.appendChild(td);
            }
            let editBtn = document.createElement("BUTTON");
            editBtn.setAttribute("class", "Btn");
            editBtn.innerHTML = '<img src="./assets/images/edit.png" width="30px" height="30px">';
            editBtn.addEventListener("click", function(event) {
                editRow(this, config, storageId);
                event.preventDefault();
            });
            tr.appendChild(editBtn);
            let dltBtn = document.createElement("BUTTON");
            dltBtn.setAttribute("class", "Btn");
            dltBtn.innerHTML = '<img src="./assets/images/delete.png" width="30px" height="30px">';
            dltBtn.addEventListener("click", function(event) {
                window.dltRow(this, storageId);
                event.preventDefault();
            });
            tr.appendChild(dltBtn);
        });
        myTableDiv.appendChild(table);
        document.getElementById("search").style.display = "block";
    }
  };
});
