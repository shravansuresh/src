function editRow(editBtn, headArr, storageId){
    let rowIndex = editBtn.parentNode.rowIndex;
    let rows = document.getElementById("tableId").rows;
    if(rows[rowIndex].cells[0].contentEditable == "true"){
        if(editRowValidation(rowIndex, headArr) == headArr.length){
            editBtn.innerHTML = '<img src="./assets/images/edit.png" width="30px" height="30px">';
            headArr.forEach( (item, index) => {
                rows[rowIndex].cells[index].contentEditable = "false";
                rows[rowIndex].cells[index].style.backgroundColor = "#E8E8E8";
            }); 
            let rowObj = {};
            headArr.forEach((item, index) => {
                rowObj[item.title] = rows[rowIndex].cells[index].innerText;
            });
            let rowData = retrieveFromStorage(storageId);
            rowData.splice(rowIndex-1, 1, rowObj);
            saveToStorage(storageId, rowData);
        } 
        else{
            rows[rowIndex].cells[0].focus();
        }        
    }
    else{ 
        editBtn.innerHTML = '<img src="./assets/images/save.jpg" width="30px" height="30px">';
        headArr.forEach((item, index) => {
            rows[rowIndex].cells[index].contentEditable = "true";
            rows[rowIndex].cells[index].style.backgroundColor = "white";   
        });
        rows[rowIndex].cells[0].focus();
    }
}

function editRowValidation(rowIndex, headArr){
    debugger
    let rows = document.getElementById("tableId").rows;
    let count = 0;
    headArr.forEach((item, index) => {
            let type = item.type;
            if(rows[rowIndex].cells[index].innerText.length == 0 && item.optional == "no"){
                alert(item.title+" field empty");
            }
            else if(rows[rowIndex].cells[index].innerText.length == 0 && item.optional == "yes"){
                count++;
            }
            else if(type == "number"){
                let numberPattern = /^[-+]?\d+$/;
                if(numberPattern.test(rows[rowIndex].cells[index].innerText) === true){
                    if(editUniqueChecker(rows[rowIndex].cells[index].innerText, index, rowIndex) == 1 && item.unique == "yes")
                    {
                        alert(headArr[index].title+" already exist");
                    }
                    else if(rows[rowIndex].cells[index].innerText < 0)
                    {
                        alert("Invalid "+headArr[index].title);
                    }
                    else{
                        count++;
                    }
                } 
                else{
                    alert("Invalid "+headArr[index].title);
                }
            }   
            else if(type == "text"){
                let namePattern = /^[a-zA-Z\s]*$/;
            
                if(namePattern.test(rows[rowIndex].cells[index].innerText) === true){
                    if(editUniqueChecker(rows[rowIndex].cells[index].innerText, index, rowIndex) == 1 && item.unique == "yes")
                    {
                        alert(headArr[index].title+" already exist");
                    }
                    else{
                        count++;
                    }
                }
                else{
                    alert(headArr[index].title+" must be in alphabets only");
                }
            }
            else if(type == "date"){
                if(rows[rowIndex].cells[index].innerText < "2000-12-31"){
                    count++;
                }
                else{
                    alert("Enter valid date")
                }
            }
            else if(type == "email"){
                let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                if(emailPattern.test(rows[rowIndex].cells[index].innerText) === true){
                    if(editUniqueChecker(rows[rowIndex].cells[index].innerText, index, rowIndex) == 1 && item.unique == "yes")
                    {
                        alert(headArr[index].title+" already exist");
                    }
                    else{
                        count++;
                    }
                
                } 
                else{
                    alert("Invalid "+headArr[index].title);
                }
            }
    });
    return count;
}

function editUniqueChecker(value, colIndex, rowIndex){
    let index;
    let rows = document.getElementById("tableId").rows;
    let unique = 0;
    for(index=0; index < rows.length; index++){
        if(index !== rowIndex && value == rows[index].cells[colIndex].innerText) {
            unique = 1;
            return unique;
        }
    }
} 