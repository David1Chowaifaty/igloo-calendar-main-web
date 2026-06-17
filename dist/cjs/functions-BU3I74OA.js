'use strict';

var moment = require('./moment-CdViwxPQ.js');

const _formatTime = (hour, minute) => {
    // format them as AM/PM using moment.js
    return moment.hooks(`${hour}:${minute}`, 'HH:mm').format('hh:mm A');
    // return moment(`${hour}:${minute}`, 'HH:mm').format('HH:mm');
};
const isAgentMode = (agent) => {
    return agent && agent.payment_mode.code !== '002';
};

exports._formatTime = _formatTime;
exports.isAgentMode = isAgentMode;
