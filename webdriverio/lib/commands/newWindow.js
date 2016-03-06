/**
 *
 * Open new window in browser. This command is the equivalent function to `window.open()`. This command does not
 * work in mobile environments.
 *
 * __Note:__ When calling this command you automatically switch to the new window.
 *
 * <example>
    :newWindow.js
    client
        .url('http://google.com')
        .getTitle().then(function(title) {
            console.log(title); // outputs: "Google"
        })
        .newWindow('http://webdriver.io', 'WebdriverIO window', 'width=420,height=230,resizable,scrollbars=yes,status=1')
        .getTitle().then(function(title) {
            console.log(title);
            // outputs the following:
            // "WebdriverIO - Selenium 2.0 javascript bindings for nodejs"
        })
        .close()
        .getTitle().then(function(title) {
            console.log(title); // outputs: "Google"
        })
        .end();
 * </example>
 *
 * @param {String} url            website URL to open
 * @param {String} windowName     name of the new window
 * @param {String} windowFeatures features of opened window (e.g. size, position, scrollbars, etc.)
 *
 * @uses protocol/execute, window/getTabIds, window/switchTab
 * @type window
 *
 */

import newWindowHelper from '../scripts/newWindow'
import { CommandError } from '../utils/ErrorHandler'

let newWindow = function (url, windowName = '', windowFeatures = '') {
    /*!
     * parameter check
     */
    if (typeof url !== 'string' || typeof windowName !== 'string' || typeof windowFeatures !== 'string') {
        throw new CommandError('number or type of arguments don\'t agree with newWindow command')
    }

    /*!
     * mobile check
     */
    if (this.isMobile) {
        throw new CommandError('newWindow command is not supported on mobile platforms')
    }

    return this.execute(newWindowHelper, url, windowName, windowFeatures).getTabIds().then(
        (tabs) => this.switchTab(tabs[tabs.length - 1]))
}

export default newWindow