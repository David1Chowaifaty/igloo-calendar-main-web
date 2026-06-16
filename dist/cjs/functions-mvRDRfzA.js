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
const _formatTime = (hour, minute) => {
    // format them as AM/PM using moment.js
    return moment.hooks(`${hour}:${minute}`, 'HH:mm').format('hh:mm A');
    // return moment(`${hour}:${minute}`, 'HH:mm').format('HH:mm');
};
const isAgentMode = (agent) => {
    return agent && agent.payment_mode.code !== '002';
};

exports._formatDate = _formatDate;
exports._formatTime = _formatTime;
exports._getDay = _getDay;
exports.isAgentMode = isAgentMode;
