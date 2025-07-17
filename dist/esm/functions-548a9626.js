import { h as hooks } from './utils-d85c3476.js';

const _formatDate = (date) => {
    // Month Name 3 letters, Day, Year
    return hooks(date).format('MMM DD, YYYY');
};
const _getDay = (date) => {
    // formate it as day number/month number and day name
    return hooks(date).format('DD/MM ddd');
};
const _formatTime = (hour, minute) => {
    // format them as AM/PM using moment.js
    return hooks(`${hour}:${minute}`, 'HH:mm').format('hh:mm A');
    // return moment(`${hour}:${minute}`, 'HH:mm').format('HH:mm');
};

export { _formatDate as _, _formatTime as a, _getDay as b };

//# sourceMappingURL=functions-548a9626.js.map