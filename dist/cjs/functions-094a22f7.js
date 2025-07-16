'use strict';

const utils = require('./utils-9593f611.js');

const _formatDate = (date) => {
    // Month Name 3 letters, Day, Year
    return utils.hooks(date).format('MMM DD, YYYY');
};
const _getDay = (date) => {
    // formate it as day number/month number and day name
    return utils.hooks(date).format('DD/MM ddd');
};
const _formatTime = (hour, minute) => {
    // format them as AM/PM using moment.js
    return utils.hooks(`${hour}:${minute}`, 'HH:mm').format('hh:mm A');
    // return moment(`${hour}:${minute}`, 'HH:mm').format('HH:mm');
};

exports._formatDate = _formatDate;
exports._formatTime = _formatTime;
exports._getDay = _getDay;

//# sourceMappingURL=functions-094a22f7.js.map