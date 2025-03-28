import { h as hooks } from './moment-Mki5YqAR.js';

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

export { _formatTime as _, _formatDate as a, _getDay as b };
//# sourceMappingURL=functions-CIqUU5YU.js.map

//# sourceMappingURL=functions-CIqUU5YU.js.map