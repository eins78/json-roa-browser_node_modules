/**
 *
 * Send a sequence of key strokes to an element (clears value before). You can also use
 * unicode characters like Left arrow or Back space. WebdriverIO will take care of
 * translating them into unicode characters. You’ll find all supported characters
 * [here](https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/element/:id/value).
 * To do that, the value has to correspond to a key from the table.
 *
 * <example>
    :setValue.js
    client
        .setValue('.input', 'test123')
        .getValue('.input').then(function(value) {
            assert(value === 'test123'); // true
        });
 * </example>
 *
 * @param {String}         selector   Input element
 * @param {String|Number=} values     Input element
 *
 * @uses protocol/elements, protocol/elementIdClear, protocol/elementIdValue
 * @type action
 *
 */

'use strict';

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _utilsErrorHandler = require('../utils/ErrorHandler');

var setValue = function setValue(selector, value) {
    var _this = this;

    /*!
     * parameter check
     */
    if (typeof value === 'number') {
        value = value.toString();
    }

    if (typeof value !== 'string' && !Array.isArray(value)) {
        throw new _utilsErrorHandler.CommandError('number or type of arguments don\'t agree with setValue command');
    }

    return this.elements(selector).then(function (res) {
        /**
         * throw NoSuchElement error if no element was found
         */
        if (!res.value || res.value.length === 0) {
            throw new _utilsErrorHandler.CommandError(7);
        }

        var elementIdValueCommands = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = _getIterator(res.value), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var elem = _step.value;

                elementIdValueCommands.push(_this.elementIdClear(elem.ELEMENT).elementIdValue(elem.ELEMENT, value));
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator['return']) {
                    _iterator['return']();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return _this.unify(elementIdValueCommands, {
            extractValue: true
        });
    });
};

exports['default'] = setValue;
module.exports = exports['default'];
