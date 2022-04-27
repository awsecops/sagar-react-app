
//sample localstorage service for store data into local storage

export function    SetItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export  function   GetItem(key) {

    var data = localStorage.getItem(key);
    if (data != null) {
        return JSON.parse(data);
    }
    return null;


}

