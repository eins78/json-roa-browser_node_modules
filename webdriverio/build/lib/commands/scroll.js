/**
 *
 * Scroll to a specific element. You can also append/pass two offset values as parameter
 * to scroll to a specific position.
 *
 * <example>
    :scroll.js
    client
        // scroll to specific element
        .scroll('#myElement')

        // scroll to specific element with offset
        // scroll offset will be added to elements position
        .scroll('#myElement', 100, 100)

        // scroll to specific x and y position
        .scroll(0, 250)
        .end();
 * </example>
 *
 * @param {String=}  selector  element to scroll to
 * @param {Number}   xoffset   x offset to scroll to
 * @param {Number}   yoffset   y offset to scroll to
 *
 * @uses protocol/element, protocol/elementIdLocation, protocol/touchScroll, protocol/execute
 * @type utility
 *
 */

'use strict';

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _scriptsScroll = require('../scripts/scroll');

var _scriptsScroll2 = _interopRequireDefault(_scriptsScroll);

var scroll = function scroll(selector) {
    var _this = this;

    var xoffset = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
    var yoffset = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

    if (typeof selector === 'number' && typeof xoffset === 'number') {
        yoffset = xoffset;
        xoffset = selector;
        selector = null;
    }

    if (this.isMobile) {
        var queue = _Promise.resolve();

        if (selector) {
            queue = this.element(selector);
        }

        return queue.then(function (res) {
            if (typeof res !== 'undefined') {
                selector = res.value.ELEMENT;
            }

            return _this.touchScroll(selector, xoffset, yoffset);
        });
    }

    if (selector) {
        return this.element(selector).then(function (res) {
            return _this.elementIdLocation(res.value.ELEMENT);
        }).then(function (location) {
            return _this.execute(_scriptsScroll2['default'], location.value.x + xoffset, location.value.y + yoffset);
        });
    }

    return this.execute(_scriptsScroll2['default'], xoffset, yoffset);
};

exports['default'] = scroll;
module.exports = exports['default'];
