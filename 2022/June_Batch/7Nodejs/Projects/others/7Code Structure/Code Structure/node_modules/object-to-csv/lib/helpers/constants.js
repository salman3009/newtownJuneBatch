/**
 * @description Defaults for the ObjectToCSV class
 * @kind constant
 */
const DEFAULTS = {
    KEYS: [],
    DATA: [],
    FILE_NAME:'file',
    SHOULD_EXPAND_OBJECTS: false,
    END_OF_LINE_VALUE: '\n',
    DELIMITER: ',',
    QUOTE: '\"',
    BOOLEAN_VALUES: {
        true: 'TRUE',
        false: 'FALSE',
    },
};

/**
 * @description The current version of the ObjectToCSV class
 * @kind constant
 */
const VERSION = '1.0.2';

//

module.exports = {
    DEFAULTS,
    VERSION,
};