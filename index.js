module.exports = isObjectEmpty;

function isObjectEmpty(obj) {
    var key;

    if (obj instanceof Date) {
        return false;
    }

    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }

    return true;
};
