/**
 * Flick on the touch screen using finger motion events. This flick command starts
 * at a particular screen location.
 *
 * @param {String} ID      ID of the element where the flick starts
 * @param {Number} xoffset the x offset in pixels to flick by
 * @param {Number} yoffset the y offset in pixels to flick by
 * @param {Number} speed   the speed in pixels per seconds
 *
 * @see  https://code.google.com/p/selenium/wiki/JsonWireProtocol#session/:sessionId/touch/flick
 * @type protocol
 *
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _utilsErrorHandler = require('../utils/ErrorHandler');

var touchFlick = function touchFlick(id, xoffset, yoffset, speed) {
    var data = {};

    if (typeof id === 'number' && typeof xoffset === 'number') {
        data = {
            xoffset: id,
            yoffset: xoffset
        };
    } else if (!id && typeof xoffset === 'number' && typeof yoffset === 'number') {
        data = { xoffset: xoffset, yoffset: yoffset };
    } else if (typeof id === 'string' && typeof xoffset === 'number' && typeof yoffset === 'number' && typeof speed === 'number') {
        data = { element: id, xoffset: xoffset, yoffset: yoffset, speed: speed };
    } else {
        throw new _utilsErrorHandler.ProtocolError('number or type of arguments don\'t agree with touchFlick command');
    }

    return this.requestHandler.create('/session/:sessionId/touch/flick', data);
};

exports['default'] = touchFlick;
module.exports = exports['default'];
