'use strict';

var irDate = require('./ir-date-CbkOKs2C.js');
require('./moment-CdViwxPQ.js');
var utils = require('./utils-BJ6tgqps.js');

/** Month name (3 letters), day, year — localized, and Hijri when that preference is active. */
const _formatDate = (date) => irDate.formatDate(date, 'MMM DD, YYYY');
/** Day number/month number plus the weekday name. */
const _getDay = (date) => irDate.formatDate(date, 'DD/MM ddd');
/**
 * Formats an hour/minute pair, honouring the platform's 12h/24h preference. Builds a real `Date`
 * rather than parsing `'9:5'` as a date string, which moment's loose parser handles unreliably.
 */
const _formatTime = (hour, minute) => {
    const date = new Date();
    date.setHours(Number(hour) || 0, Number(minute) || 0, 0, 0);
    return irDate.formatTime(date);
};
/**
 * Base URL of the booking printing screen (mode and other params get appended). Alpha pages
 * (`window.environment === 'alpha'`) print through the `IRPrinting_alpha` gateway app.
 */
const getPrintingHost = () => (utils.isAlpha() ? 'test.bookingmystay.com' : 'gateway.igloorooms.com/PrintBooking');
const getPrintingBaseUrl = (aname, bookingNumber) => {
    return `https://${getPrintingHost()}/${aname}/printing/fd?id=${bookingNumber}`;
};
/**
 * Registration card (consent document) of one room, served by the same printing app as the
 * booking print. `token` is the short-living token; it's left out when it couldn't be fetched.
 */
const getRegistrationCardUrl = ({ aname, bookingNumber, roomIdentifier, token }) => {
    let url = `https://${getPrintingHost()}/${aname}/printing/doc?mode=consent&id=${encodeURIComponent(bookingNumber)}&room_identifier=${encodeURIComponent(roomIdentifier)}`;
    if (utils.isAlpha()) {
        url += '&environment=alpha';
    }
    if (token) {
        url += `&token=${encodeURIComponent(token)}`;
    }
    return url;
};
const isAgentMode = (agent) => {
    return agent && agent.payment_mode.code !== '002';
};

exports._formatDate = _formatDate;
exports._formatTime = _formatTime;
exports._getDay = _getDay;
exports.getPrintingBaseUrl = getPrintingBaseUrl;
exports.getRegistrationCardUrl = getRegistrationCardUrl;
exports.isAgentMode = isAgentMode;
