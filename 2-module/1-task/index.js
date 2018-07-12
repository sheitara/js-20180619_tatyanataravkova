/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */



function clone (obj) {

    let cloneObj = {};

    if (typeof obj != "object") {
        return obj;
    }

    for (let key in obj) {
        if ( (typeof obj[key]=== "object") && obj[key] ) {
            cloneObj[key] = this.clone(obj[key]);
        } else {
            cloneObj[key] = obj[key];
        }
    }
    return cloneObj;

}