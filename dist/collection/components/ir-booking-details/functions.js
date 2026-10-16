import { formatDate, formatTime } from "../../utils/date/index";
/** Month name (3 letters), day, year — localized, and Hijri when that preference is active. */
export const _formatDate = (date) => formatDate(date, 'MMM DD, YYYY');
/** Day number/month number plus the weekday name. */
export const _getDay = (date) => formatDate(date, 'DD/MM ddd');
/**
 * Formats an hour/minute pair, honouring the platform's 12h/24h preference. Builds a real `Date`
 * rather than parsing `'9:5'` as a date string, which moment's loose parser handles unreliably.
 */
export const _formatTime = (hour, minute) => {
    const date = new Date();
    date.setHours(Number(hour) || 0, Number(minute) || 0, 0, 0);
    return formatTime(date);
};
export const isAgentMode = (agent) => {
    return agent && agent.payment_mode.code !== '002';
};
