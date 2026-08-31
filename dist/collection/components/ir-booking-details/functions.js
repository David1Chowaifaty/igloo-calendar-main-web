import moment from "moment";
export const _formatDate = (date) => {
    // Month Name 3 letters, Day, Year
    return moment(date).format('MMM DD, YYYY');
};
export const _getDay = (date) => {
    // formate it as day number/month number and day name
    return moment(date).format('DD/MM ddd');
};
// export const _formatTime = (hour: string, minute: string) => {
//   // format them as AM/PM using moment.js
//   return moment(`${hour}:${minute}`, 'HH:mm').format('h:mm A');
//   // return moment(`${hour}:${minute}`, 'HH:mm').format('HH:mm');
// };
export const _formatTime = (hour, minute) => {
    const uses12HourFormat = new Intl.DateTimeFormat(undefined, {
        hour: 'numeric',
    }).resolvedOptions().hour12;
    return moment(`${hour}:${minute}`, 'HH:mm').format(uses12HourFormat ? 'h:mm A' : 'HH:mm');
};
export const isAgentMode = (agent) => {
    return agent && agent.payment_mode.code !== '002';
};
