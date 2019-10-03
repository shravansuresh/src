$(() => {
    
    window.dltRow = (dltBtn, storageId) => {
        if (confirm("Confim Deletion?") == true) {
            debugger
            let tableId = document.getElementById("tableId");
            let rowIndex = (dltBtn.parentNode.rowIndex)-1;
            alert(rowIndex);
            let tableData = retrieveFromStorage("empArry");
            tableData.splice(rowIndex, 1);
            tableId.deleteRow(dltBtn.parentNode.rowIndex);
        saveToStorage("empArry", tableData);  
        }  
    }
});