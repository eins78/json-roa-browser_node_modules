/**
 *
 * Query for an element's tag name.
 *
 * @param {String} ID ID of a WebElement JSON object to route the command to
 * @returns {String}  the element's tag name, as a lowercase string
 *
 * @see  https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/element/:id/name
 * @type protocol
 *
 */

import { ProtocolError } from '../utils/ErrorHandler'

let elementIdName = function (id) {
    if (typeof id !== 'string' && typeof id !== 'number') {
        throw new ProtocolError('number or type of arguments don\'t agree with elementIdName protocol command')
    }

    return this.requestHandler.create(`/session/:sessionId/element/${id}/name`)
}

export default elementIdName