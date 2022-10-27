/**
 * @description Internal helper to check if parameter is a string
 * @function isString
 * @param {*} str
 * @returns {boolean}
 */
const isString = (str) => {
    return (typeof str === 'string' || str instanceof String);
};

/**
 * @description Internal helper to check if string is empty
 * @function isStringEmpty
 * @param {*} str
 * @returns {boolean}
 */
const isStringEmpty = (str) => {
    if (!isString(str)) return false;
    return (str.length == 0);
};

/**
 * @description Internal helper to check if parameter is a date
 * @function isDate
 * @param {*} date
 * @returns {boolean}
 */
const isDate = (date) => {
    if (isString(date) || isArray(date) || date == undefined || date == null) return false;
    return (date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date));
};

/**
 * @description Internal helper to check if parameter is an object
 * @function isObject
 * @param {*} obj
 * @returns {boolean}
 */
const isObject = (obj) => {
    if (isArray(obj) || isDate(obj)) return false;
    return (obj !== null && typeof obj === 'object');
};

/**
 * @description Internal helper to check if parameter is an array
 * @function isArray
 * @param {*} arr
 * @returns {boolean}
 */
const isArray = (arr) => {
    return Array.isArray(arr);
};

/**
 * @description Internal helper to check if parameter is a boolean
 * @function isBoolean
 * @param {*} bool
 * @returns {boolean}
 */
const isBoolean = (bool) => {
    return (typeof(bool) === "boolean");
}

/**
 * @description Internal helper to emit a warning to the console
 * @function _WARN_
 * @param {string} title
 * @param {string} detail
 * @returns {boolean}
 */
const _WARN_ = (title = '', detail = '') => {
    process.emitWarning(title, {
        detail,
        code: 'ObjectToCSV',
    });

    return true;
};

//

module.exports = {
    isString,
    isStringEmpty,
    isDate,
    isObject,
    isArray,
    isBoolean,
    _WARN_,
};