'use strict';

var irDate = require('./ir-date-BH2JQpbC.js');
require('./moment-CdViwxPQ.js');

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
const isAgentMode = (agent) => {
    return agent && agent.payment_mode.code !== '002';
};

exports._formatDate = _formatDate;
exports._formatTime = _formatTime;
exports._getDay = _getDay;
exports.isAgentMode = isAgentMode;
