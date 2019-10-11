$(() => {
    //$("#studTableOp").load("./components/tableOp/tableOp.html");
    window.createOperationDiv = (divId, storageId, tableDiv, config) =>{
        debugger
        let div = document.getElementById(divId);
        let operationDiv = document.createElement("DIV");
        operationDiv.setAttribute("id", "tableOp");
        let addBtn = document.createElement("BUTTON");
        addBtn.setAttribute("class", "addBtn");
        addBtn.setAttribute("title", "add details");
        addBtn.innerHTML = '<img src="./assets/images/add.png" width="50px" height="50px">';
        addBtn.addEventListener("click", function(event) {
            addRowModal(config, tableDiv);
            event.preventDefault();
        });
        let searchDiv = document.createElement("DIV");
        searchDiv.setAttribute("id", "search")
        let searchBox = document.createElement("INPUT");
        searchBox.setAttribute("type", "search");
        searchBox.setAttribute("id", "searchTable");
        searchBox.setAttribute("class", "searchTable");
        searchBox.setAttribute("placeholder", "search");
        searchBox.addEventListener("keyup", function(event) {
            searchTable(storageId);
            event.preventDefault();
        });
        searchDiv.appendChild(searchBox);
        operationDiv.appendChild(addBtn);
        operationDiv.appendChild(searchDiv);
        div.appendChild(operationDiv);
    }
});