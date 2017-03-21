/**
 * Generic Error Response
 *
 * Usage:
 * return res.error(404, 'UserNotFound', 'There is no User with this ID');
 *
 */

module.exports = function error (code, status, message, data) {
    if(typeof data !== 'object') {
        throw new TypeError('`data` should be an object');
    }

    if(!data) {
        data = [];
    }

    return this.res.json(code, data.concat({
        _error: {
            code: code,
            status: status,
            message: message
        }

    }));
};
