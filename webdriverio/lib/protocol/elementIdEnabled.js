/**
 *
 * Determine if an element is currently enabled.
 *
 * @param {String} ID ID of a WebElement JSON object to route the command to
 * @returns {Boolean} true if the element is enabled
 *
 * @see  https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/element/:id/enabled
 * @type protocol
 *
 */

import { ProtocolError } from '../utils/ErrorHandler'

let elementIdEnabled = function (id) {
    if (typeof id !== 'string' && typeof id !== 'number') {
        throw new ProtocolError('number or type of arguments don\'t agree with elementIdEnabled protocol command')
    }

    return this.requestHandler.create(`/session/:sessionId/element/${id}/enabled`)
}

export default elementIdEnabled
