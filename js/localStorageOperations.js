$(() => {
    window.saveToStorage = (storageId, data) => {
        switch(storageId){
            case "studArry":
                window.studData = data;
                break;
            case "empArry":
                window.empData = data;
                break;
            default:
                break;
        }
        let storingData = JSON.stringify(data);
        localStorage.setItem(storageId, storingData);
    }
    
    window.retrieveFromStorage = (storageId) => {
        let localStoredData = localStorage.getItem(storageId);
        let dataJSON = JSON.parse(localStoredData);
        return dataJSON;    
    }
});