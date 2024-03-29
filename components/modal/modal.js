$(() => {
    window.addRowModal = (tableArr, tableDiv) => {
        let headArr = tableArr;
        let i = 0;
        let form = document.createElement("FORM");
        form.setAttribute("type", "text");
        form.setAttribute("id", "formData");
        document.getElementById("modalBody").appendChild(form);
        headArr.forEach(element => {
            let label = document.createElement("LABEL");
            if(element.optional == "no"){
                label.innerHTML = element.title+"<sup>*</sup>";
            }
            else{
                label.innerHTML = element.title+" (optional)";
            }  
            form.appendChild(label);
            let input = document.createElement("INPUT");
            input.setAttribute("type", element.type);
            if(element.type == "date"){
                input.setAttribute("max", "2000-12-31");
            }
            else if(element.type == "tel"){
                input.setAttribute("pattern", "+91[0-9]{4}[0-9]{6}");
                input.setAttribute("placeholder","+91-XXXX-XXXXXX"); 
            }
            input.setAttribute("id", element.title);
            form.appendChild(input);
            let lineBreak = document.createElement('br');
            form.appendChild(lineBreak);
        });
        let modal = document.getElementById("formModal");
        modal.style.display ="block";
        var span =document.getElementsByClassName("close")[0];
        span.onclick = function(){ 
            modal.style.display ="none";
            $("#modalBody").load(location.href + " #modalBody");
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display ="none";
                $("#modalBody").load(location.href + " #modalBody");
            }
        }
    }
    
    window.handleForm = (tableDiv, storageId, tableArr) => {
        let headArr = tableArr;
        if(formValidation(headArr, tableDiv) == headArr.length){
            let data = [];
            let rowObj = {};
            let i =0;
            let form = document.getElementById("formData");
            headArr.forEach(element => {
                rowObj[element.title] = form[i].value;
                i++;
            });
            if(retrieveFromStorage(storageId) == null){
                data.push(rowObj);
                window.saveToStorage(storageId, data);
                let modal = document.getElementById("formModal");
                modal.style.display ="none";
                $("#modalBody").load(location.href + " #modalBody");
                let stored = retrieveFromStorage(storageId);
                window.createTable(tableDiv, headArr, stored, storageId);
            }
            else{
                data = retrieveFromStorage(storageId);
                data.push(rowObj);
                window.saveToStorage(storageId, data);
                let modal = document.getElementById("formModal");
                modal.style.display ="none";
                $("#modalBody").load(location.href + " #modalBody");
                let stored = retrieveFromStorage(storageId);
                window.createTable(tableDiv, headArr, stored, storageId);
            }
            
        }
    }
    
    window.formValidation = (headArr, tableDiv) => {
        let count = 0;
        debugger
        headArr.forEach((item, index) =>{
                let type = item.type;
                let formValue = document.forms["formData"][item.title].value;
                if(formValue.length == 0 && item.optional == "no" ){
                    alert(item.title+" field empty");
                }
                else if(formValue.length == 0 && item.optional == "yes"){
                    count++;
                }
                else if(type == "number"){
                    let numberPattern = /^[-+]?\d+$/;
                    if(numberPattern.test(formValue) === true){
                        if(formUniqueChecker(formValue, index, tableDiv) == 1 && item.unique == "yes")
                        {
                            alert(item.title+" already exist");
                        }
                        else if(formValue < 0)
                        {
                            alert("Invalid "+item.title);
                        }
                        else{
                            count++;
                        }   
                    } 
                    else{
                        alert("Invalid "+item.title);
                    }
                }
                else if(type == "text"){
                    let namePattern = /^[a-zA-Z\s]*$/;
                    if(namePattern.test(formValue) === true){
                        if(formUniqueChecker(formValue, index, tableDiv) == 1 && item.unique == "yes")
                        {
                            alert(item.title+" already exist");
                        }
                        else{
                            count++;
                        }
                    }
                    else if(item.optional == "yes" && formValue.length == 0){
                        count++;
                    }
                    else{
                        alert("Invalid "+item.title);
                    }
                }
                else if(type == "email"){
                    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                    if(emailPattern.test(formValue) === true){
                        if(formUniqueChecker(formValue, index, tableDiv) == 1 && item.unique == "yes")
                        {
                            alert(item.title+" already exist");
                        }
                        else{
                            count++;
                        }
                    }
                    else if(item.optional == "yes" && formValue.length == 0){
                        count++;
                    }
                    else{
                        alert("Invalid "+item.title);
                    }
                }
                else if(type == "date"){
                    if(formValue <= "2000-12-31"){
                        count++;
                    }
                    else{
                        alert("Enter valid date")
                    }
                }
                else if(type == "tel"){
                    count++;
                }
        });
        return count;
    }
    
    window.formUniqueChecker = (value, colIndex, tableDiv) => {
        let index;
        let rows = document.getElementById(tableDiv).getElementsByTagName("tr");
        for(index=1; index < rows.length; index++){
            if(value == rows[index].cells[colIndex].innerText) {
                unique = 1;
                return unique;
            }
        } 
    }
    
    window.clearForm = () => {
        document.getElementById("formData").reset();
    }
    
    });