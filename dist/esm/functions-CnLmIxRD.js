import { h as hooks } from './moment-Mki5YqAR.js';

const _formatTime = (hour, minute) => {
    // format them as AM/PM using moment.js
    return hooks(`${hour}:${minute}`, 'HH:mm').format('hh:mm A');
    // return moment(`${hour}:${minute}`, 'HH:mm').format('HH:mm');
};
const isAgentMode = (agent) => {
    return agent && agent.payment_mode.code !== '002';
};

export { _formatTime as _, isAgentMode as i };
