module.exports = isObjectEmpty;

function isObjectEmpty(obj) {
    var key;

    if (obj instanceof Date || obj instanceof String || obj instanceof Number) {
        return false;
    }

    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }

    return true;
};
