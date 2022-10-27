'use strict';

//Helpers
const Utils = require('./helpers/utilities');
const Constants = require('./helpers/constants');

/**
 * @class ObjectToCSV
 * @author Mark Miscavage <markmiscavage@protonmail.com>
 * @description A lightweight, dependency-less Node.js module to convert JSON objects to CSV format.
 * @example
 *     const ObjectToCSV = require('object-to-csv');
 *     let csv = new ObjectToCSV({...}).getCSV();
 * @public
 * @version 1.0.2
 * @license MIT
 * @kind class
 */
class ObjectToCSV {

    /**
     * @description ObjectToCSV constructor. Sets up initial variables for the class.
     * @constructor
     * @param {object} options - Options for default variables for the class
     * @returns ObjectToCSV
     */
    constructor(options={}) {
        //Options must be object
        if (!Utils.isObject(options)) Utils._WARN_('Invalid parameter', 'options must be of type: Object');

        //Set defaults
        this._keys = options.keys || Constants.DEFAULTS.KEYS;
        this._data = options.data || Constants.DEFAULTS.DATA;
        this._fileName = options.fileName || Constants.DEFAULTS.FILE_NAME;
        this._shouldExpandObjects = options.shouldExpandObjects || Constants.DEFAULTS.SHOULD_EXPAND_OBJECTS;
        this._endOfLineValue = options.endOfLineValue || Constants.DEFAULTS.END_OF_LINE_VALUE;
        this._delimiter = options.delimiter || Constants.DEFAULTS.DELIMITER;
        this._quote = options.quote || Constants.DEFAULTS.QUOTE;
        this._booleanValues = options.booleanValues || Constants.DEFAULTS.BOOLEAN_VALUES;

        //Return ObjectToCSV
        return this;
    };

    /**
     * @description Get keys for first row of csv
     * @returns {array} keys - Keys for the csv
     */
    get keys() {
        return this._keys;
    };

    /**
     * @description Set keys for first row of csv
     * @param {array} keys - Keys for the csv
     */
    set keys(keys) {
        //Set
        this._keys = this._setKeys(keys);
    };

    /**
     * @description Set keys for first row of csv
     * @function setKeys
     * @param {array} keys - Keys for the csv
     * @returns ObjectToCSV
     */
    setKeys(keys) {
        //Set
        this._keys = this._setKeys(keys);

        //Return ObjectToCSV
        return this;
    };

    /**
     * @description Get the data that fills the csv
     * @returns {array} data - Array that fills the csv
     */
    get data() {
        return this._data;
    };

    /**
     * @description Set the data that fills the csv
     * @param {array} data - Array that fills the csv
     */
    set data(data) {
        //Set
        this._data = data;
    };

    /**
     * @description Set the data that fills the csv
     * @function setData
     * @param {array} data - Array that fills the csv
     * @returns ObjectToCSV
     */
    setData(data) {
        //Set
        this._data = data;

        //Return ObjectToCSV
        return this;
    };

    /**
     * @description Get the quote around cell values and column names.
     * @returns {string} quote - String around cell values and column names (Default: ")
     */
    get quote() {
        return this._quote;
    };

    /**
     * @description Set the quote around cell values and column names.
     * @param {string} quote - String around cell values and column names (Default: ")
     */
    set quote(quote) {
        //Set
        this._quote = quote;
    };

    /**
     * @description Set the quote around cell values and column names.
     * @function setQuote
     * @param {string} quote - String around cell values and column names (Default: ")
     * @returns ObjectToCSV
     */
    setQuote(quote) {
        //Set
        this._quote = quote;

        //Return ObjectToCSV
        return this;
    };

    /**
     * @description Get the file name for downloading the csv
     * @returns {string} fileName - The file name for downloading the csv
     */
    get fileName() {
        return this._fileName;
    };

    /**
     * @description Set the file name for downloading the csv
     * @param {string} fileName - The file name for downloading the csv
     */
    set fileName(fileName) {
        //Set
        this._fileName = fileName;
    };

    /**
     * @description Set the file name for downloading the csv
     * @function setFileName
     * @param {string} fileName - The file name for downloading the csv
     * @returns ObjectToCSV
     */
    setFileName(fileName) {
        //Set
        this._fileName = fileName;

        //Return ObjectToCSV
        return this;
    };

    /**
     * @description Get the values to show if a boolean value is present in the data for the csv
     * @returns {object} booleanValues - Values to show if place of boolean values in data (Default: {true: 'TRUE', false: 'FALSE'})
     */
    get booleanValues() {
        return this._booleanValues;
    };

    /**
     * @description Set the values to show if a boolean value is present in the data for the csv
     * @param {object} booleanValues - Values to show if place of boolean values in data (Default: {true: 'TRUE', false: 'FALSE'})
     */
    set booleanValues(booleanValues) {
        //Set
        this._booleanValues = booleanValues;
    };

    /**
     * @description Set the values to show if a boolean value is present in the data for the csv
     * @function setBooleanValues
     * @param {object} booleanValues - Values to show if place of boolean values in data (Default: {true: 'TRUE', false: 'FALSE'})
     * @returns ObjectToCSV
     */
    setBooleanValues(booleanValues) {
        //Set
        this._booleanValues = booleanValues;

        //Return ObjectToCSV
        return this;
    };

    /**
     * @description Should flatten nested objects
     * @returns {boolean} shouldExpandObjects - Should flatten nested objects
     */
    get shouldExpandObjects() {
        return this._shouldExpandObjects;
    };

    /**
     * @description Should flatten nested objects
     * @param {boolean} shouldExpandObjects - Should flatten nested objects
     * @returns ObjectToCSV
     */
    set shouldExpandObjects(shouldExpandObjects) {
        this._shouldExpandObjects = shouldExpandObjects;
    };

    /**
     * @description Should flatten nested objects
     * @function setShouldExpandObjects
     * @param {boolean} shouldExpandObjects - Should flatten nested objects
     * @returns ObjectToCSV
     */
    setShouldExpandObjects(shouldExpandObjects) {
        //Set
        this._shouldExpandObjects = shouldExpandObjects;

        //Return ObjectToCSV
        return this;
    };

    /**
     * @description Specify an end of line value for separating rows other than the default line ending.
     * @param {string} endOfLineValue - String to use as end of line value (Default: '\n')
     */
    set endOfLineValue(endOfLineValue) {
        //Must be a string and exist
        if (!Utils.isString(endOfLineValue) || Utils.isStringEmpty(endOfLineValue)) Utils._WARN_('Invalid parameter', 'endOfLineValue must be of type: String and greater than 0 characters.');

        //Set
        this._endOfLineValue = endOfLineValue;
    };

    /**
     * @description Get the end of line value for separating rows
     * @returns {string} endOfLineValue - String to use as end of line value (Default: '\n')
     */
    get endOfLineValue() {
        return this._endOfLineValue;
    };

    /**
     * @description Specify an end of line value for separating rows other than the default line ending.
     * @function setEndOfLineValue
     * @param {string} endOfLineValue - String to use as end of line value (Default: '\n')
     * @returns ObjectToCSV
     */
    setEndOfLineValue(endOfLineValue) {
        //Must be a string and exist
        if (!Utils.isString(endOfLineValue) || Utils.isStringEmpty(endOfLineValue)) Utils._WARN_('Invalid parameter', 'endOfLineValue must be of type: String and greater than 0 characters.');

        //Set
        this._endOfLineValue = endOfLineValue;

        //Return ObjectToCSV
        return this;
    };

    /**
     * @description Specify a delimiter other than the default comma to use.
     * @returns {string} delimiter - String to use as delimiter (Default: ',')
     */
    get delimiter() {
        return this._delimiter;
    };

    /**
     * @description Set CSV delimiter of columns
     * @function setDelimiter
     * @param {string} delimiter - String to use as delimiter (Default: ',')
     */
    set delimiter(delimiter) {
        //Must be a string and exist
        if (!Utils.isString(delimiter) || Utils.isStringEmpty(delimiter)) Utils._WARN_('Invalid parameter', 'delimiter must be of type: String and greater than 0 characters.');

        //Set
        this._delimiter = delimiter;
    };

    /**
     * @description Set CSV delimiter of columns
     * @function setDelimiter
     * @param {string} delimiter - String to use as delimiter (Default: ',')
     * @returns ObjectToCSV
     */
    setDelimiter(delimiter) {
        //Must be a string and exist
        if (!Utils.isString(delimiter) || Utils.isStringEmpty(delimiter)) Utils._WARN_('Invalid parameter', 'delimiter must be of type: String and greater than 0 characters.');

        //Set
        this._delimiter = delimiter;

        //Return ObjectToCSV
        return this;
    };

    /**
     * @description Get CSV as a string from given attributes
     * @function getCSV
     * @returns {string} - CSV data as a string
     */
    getCSV() {
        //Get csv data
        let csvData = this._buildCSVData();

        //Placeholder for return string
        let csv = '';

        //Make data array[[]] into CSV text format
        for (let i = 0; i < csvData.length; i++) {
            //Row (array)
            let row = csvData[i];

            //Cycle row (inner array)
            for (let k = 0; k < row.length; k++) {
                let item = this._buildRowItemCell(row[k]);

                //Append: item
                csv += item;

                //Don't add comma to last row
                if (k !== row.length - 1) csv += this._delimiter;
            };

            //New line
            csv += this._endOfLineValue;
        };

        //Return the csv as a string
        return csv;
    };

    /**
     * @description Get response headers for sending a CSV download to the client
     * @function getResponseHeaders
     * @returns {object} - {'Content-Disposition': '...', 'Content-Type': '...'}
     */
    getResponseHeaders() {
        return {
            'Content-Disposition': `attachment; filename=${this._fileName}.csv`,
            'Content-Type': 'text/csv',
        };
    };

    /**
     * @description Build the array of initial data for CSV
     * @function _buildCSVData
     * @returns {object}
     */
    _buildCSVData() {
        //Placeholder for setting up csv data
        let csvData = [];

        //Set first row of CSV as the keys
        csvData.push(
            this._keys.map((key, index) => {
                return this._getKeyByIndex(index).as;
            })
        );

        //Cycle data
        for (let dataIndex = 0; dataIndex < this._data.length; dataIndex++) {
            //Create row
            let row = [];

            //Cycle keys
            for (let keyIndex = 0; keyIndex < this._keys.length; keyIndex++) {
                //Get key
                let key = this._getKeyByIndex(keyIndex).key;
                //Get data
                let keyData = this._getDataForKeyByIndex(dataIndex, key);

                //Push index for row
                row.push(keyData);
            };

            //Add row
            csvData.push(row);
        }

        //Return now
        return csvData;
    };

    /**
     * @description Helper to set this.keys
     * @function _setKeys
     * @param {array} keys
     * @returns {array} keys - [{key:'', as:''},...]
     */
    _setKeys(keys) {
        //If is a string and empty, show warning, return undefined
        if (Utils.isString(keys) && Utils.isStringEmpty(keys)) {
            Utils._WARN_('Invalid parameter', 'keys must be of type: Array. If is a string or only a single key, it must greater than 0 characters.');
            return undefined;
        }
        //If is a string, and not empty, show warning, convert to array, continue
        else if (Utils.isString(keys) && !Utils.isStringEmpty(keys)) {
            Utils._WARN_('Invalid parameter', 'keys must be of type: Array. Converting to an array and continuing.');
            keys = [keys];
        }
        //If is not an array, show warning, return undefined
        else if (Utils.isString(keys) && !Utils.isStringEmpty(keys)) {
            Utils._WARN_('Invalid parameter', 'keys must be of type: Array');
            return undefined;
        }

        //Placeholder
        let _keys = [];

        //Cycle keys
        keyLoop:
        for (let i = 0; i < keys.length; i++) {
            let item = keys[i];

            //If key is an object, it must be in the format of {key: '', as: ''}
            if (Utils.isObject(item)) {
                let itemKey = item['key'] || undefined;
                let itemAs = item['as'] || undefined;

                //If either is undefined, warn and skip
                if (itemKey == undefined || itemAs == undefined) {
                    Utils._WARN_('Invalid parameter', 'keys must be of type: Array. If setting keys, use the format [{key:"", as:""}, ...]');
                    continue keyLoop;
                }

                //Push
                _keys.push({
                    key: itemKey,
                    as: itemAs,
                });
            }
            else if (Utils.isString(item)) {
                //Is string, set in format above
                _keys.push({
                    key: item,
                    as: item,
                });
            }
        };

        //Set
        this._keys = _keys;

        //Return
        return _keys;
    }

    /**
     * @description Helper to get the data cell using quote and item
     * @function _buildRowItemCell
     * @param {*} item - Item from this.data[i]
     * @returns {string}
     */
    _buildRowItemCell(item) {
        //Build cell
        return `${this._quote}${item}${this._quote}`;
    };

    /**
     * @description Helper to get key by index in this.keys
     * @function _getKeyByIndex
     * @param {number} index - Index within this._keys
     * @returns {object} key - {key:'', as:''}
     */
    _getKeyByIndex(index) {
        //Must be an array
        if (!Utils.isArray(this._keys)) {
            return {key:'', as:''};
        }
        //Check if out of bounds
        if (this._keys.length < index - 1) {
            return {key:'', as:''};
        }

        //Return object
        return this._keys[index];
    };

    /**
     * @description Helper to get data for key by index
     * @function _getDataForKeyByIndex
     * @param {number} index - Index within this._data
     * @param {object} key - Key (key.key)
     * @returns {string}
     */
    _getDataForKeyByIndex(index, key) {
        //Must be an array
        if (!Utils.isArray(this._data)) {
            return undefined;
        }
        //Check if out of bounds
        if (this._keys.length < index - 1) {
            return undefined;
        }

        //Get item
        let item = this._data[index][key];

        //Manipulate

        //Check if is object or array and we want to expand
        if ((Utils.isArray(item) || Utils.isObject(item)) && this._shouldExpandObjects) {
            item = JSON.stringify(item);
        }
        //Check if is boolean
        if (Utils.isBoolean(item)) {
            if (item === false) item = this._booleanValues.false;
            else if (item === true) item = this._booleanValues.true;
        }

        //Return item
        return item;
    };
};

//Set Constants
ObjectToCSV.VERSION = Constants.VERSION;

//

module.exports = exports = ObjectToCSV;