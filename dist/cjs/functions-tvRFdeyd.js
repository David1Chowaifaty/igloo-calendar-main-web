'use strict';

var moment = require('./moment-CdViwxPQ.js');

const _formatDate = (date) => {
    // Month Name 3 letters, Day, Year
    return moment.hooks(date).format('MMM DD, YYYY');
};
const _getDay = (date) => {
    // formate it as day number/month number and day name
    return moment.hooks(date).format('DD/MM ddd');
};
// export const _formatTime = (hour: string, minute: string) => {
//   // format them as AM/PM using moment.js
//   return moment(`${hour}:${minute}`, 'HH:mm').format('h:mm A');
//   // return moment(`${hour}:${minute}`, 'HH:mm').format('HH:mm');
// };
const _formatTime = (hour, minute) => {
    const uses12HourFormat = new Intl.DateTimeFormat(undefined, {
        hour: 'numeric',
    }).resolvedOptions().hour12;
    return moment.hooks(`${hour}:${minute}`, 'HH:mm').format(uses12HourFormat ? 'h:mm A' : 'HH:mm');
};
const isAgentMode = (agent) => {
    return agent && agent.payment_mode.code !== '002';
};

exports._formatDate = _formatDate;
exports._formatTime = _formatTime;
exports._getDay = _getDay;
exports.isAgentMode = isAgentMode;
