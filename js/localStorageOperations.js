$(() => {
window.saveToStorage = (storageId, data) => {
    let storingData = JSON.stringify(data);
    localStorage.setItem(storageId, storingData);
}

window.retrieveFromStorage = (storageId) => {
    let storedData = localStorage.getItem(storageId);
    let toJSON = JSON.parse(storedData);
    return toJSON;    
}
});