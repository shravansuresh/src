$(() => {
    window.addRowModal = (tableArr, type, tableDiv) => {
        alert(tableDiv);
        document.getElementById(tableDiv).style.display = "none";
        let headArr = tableArr;
        let inputType = type;
        let i = 0;
        let form = document.createElement("FORM");
        form.setAttribute("type", "text");
        form.setAttribute("id", "formData");
        document.getElementById("modalBody").appendChild(form);
        headArr.forEach(element => {
            let label = document.createElement("LABEL");
            label.innerHTML = element.title;
            form.appendChild(label);
            let input = document.createElement("INPUT");
            input.setAttribute("type", inputType[i]);
            if(inputType[i] == "date"){
                input.setAttribute("max", "2000-12-31");
            }
            else if(inputType[i] == "tel"){
                input.setAttribute("pattern", "+91[0-9]{4}[0-9]{6}");
                input.setAttribute("placeholder","+91-XXXX-XXXXXX"); 
            }
            input.setAttribute("id", element.title);
            form.appendChild(input);
            let lineBreak = document.createElement('br');
            form.appendChild(lineBreak);
            i++
        });
        
        let modal = document.getElementById("formModal");
        modal.style.display ="block";
        var span =document.getElementsByClassName("close")[0];
        span.onclick = function(){ 
            window.location.reload();
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                window.location.reload();
            }
        }  
    }
    
    window.handleForm = (tableDiv, storageId, tableArr) => {
        let headArr = tableArr;
        debugger
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
            }
            else{
                data = window.retrieveFromStorage(storageId);
                data.push(rowObj);
                window.saveToStorage(storageId, data);
            }
            window.createTable(tableDiv, headArr, data)
        }
        document.getElementById(tableDiv).getElementsByTagName('table').style.display = "";
    }
    
    window.formValidation = (headArr) => {
        let typeArr=["number", "text", "date", "email"];
        let count = 0;
        headArr.forEach((item, index) =>{
            type = typeArr[index];
            let formValue = document.forms["formData"][item.title].value;
            if(formValue == 0 ){
                alert(item.title+" field empty");
            }
            else if(type == "number"){
                let numberPattern = /^[-+]?\d+$/;
                if(numberPattern.test(formValue) === true){
                    if(formUniqueChecker(formValue, index, tableDiv) == 1)
                    {
                        alert(item+" already exist");
                    }
                    else if(formValue < 0)
                    {
                        alert("Invalid "+item);
                    }
                    else{
                        count++;
                    }   
                } 
                else{
                    alert("Invalid "+item);
                }
            }
            else if(type == "text"){
                let namePattern = /^[a-zA-Z ]*$/;
                
                if(namePattern.test(formValue) === true){
                    count++;
                }
                else{
                    alert(item+" must be in alphabets only");
                }
            }
            else if(type == "email"){
                let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                if(emailPattern.test(formValue) === true){
                    if(formUniqueChecker(formValue, index, tableDiv) == 1)
                    {
                        alert(item+" already exist");
                    }
                    else{
                        count++;
                    }
                    
                } 
                else{
                    alert("Invalid Email");
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