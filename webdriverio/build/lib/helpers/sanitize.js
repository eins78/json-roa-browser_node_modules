'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var sanitizeString = function sanitizeString(str) {
    if (!str) {
        return '';
    }

    return String(str).replace(/\./g, '_').replace(/\s/g, '').toLowerCase();
};

/**
 * formats capability object into sanitized string for e.g.filenames
 * @param {Object} caps  Selenium capabilities
 */
var caps = function caps(_caps) {
    var result = undefined;

    /**
     * mobile caps
     */
    if (_caps.deviceName) {
        result = [sanitizeString(_caps.deviceName), sanitizeString(_caps.platformName), sanitizeString(_caps.platformVersion), sanitizeString(_caps.app)];
    } else {
        result = [sanitizeString(_caps.browserName), sanitizeString(_caps.version), sanitizeString(_caps.platform)];
    }

    result = result.filter(function (n) {
        return n !== undefined && n !== '';
    });
    return result.join('.');
};

/**
 * formats arguments into string
 * @param  {Array} args arguments object
 */
var args = function args(_args) {
    return _args.map(function (arg) {
        if (typeof arg === 'function' || typeof arg === 'string' && arg.indexOf('return (function') === 0) {
            return '<Function>';
        } else if (typeof arg === 'string') {
            return '"' + arg + '"';
        } else if (Array.isArray(arg)) {
            return arg.join(', ');
        }

        return arg;
    }).join(', ');
};

var css = function css(value) {
    if (!value) {
        return value;
    }

    return value.trim().replace(/'/g, '').replace(/"/g, '').toLowerCase();
};

exports['default'] = {
    css: css,
    args: args,
    caps: caps
};
module.exports = exports['default'];
