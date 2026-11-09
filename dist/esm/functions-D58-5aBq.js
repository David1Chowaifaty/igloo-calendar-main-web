import { f as formatDate, d as formatTime } from './ir-date-XXNYhmSL.js';
import './moment-Mki5YqAR.js';

/** Month name (3 letters), day, year — localized, and Hijri when that preference is active. */
const _formatDate = (date) => formatDate(date, 'MMM DD, YYYY');
/** Day number/month number plus the weekday name. */
const _getDay = (date) => formatDate(date, 'DD/MM ddd');
/**
 * Formats an hour/minute pair, honouring the platform's 12h/24h preference. Builds a real `Date`
 * rather than parsing `'9:5'` as a date string, which moment's loose parser handles unreliably.
 */
const _formatTime = (hour, minute) => {
    const date = new Date();
    date.setHours(Number(hour) || 0, Number(minute) || 0, 0, 0);
    return formatTime(date);
};
/**
 * Base URL of the booking printing screen (mode and other params get appended). Alpha pages
 * (`window.environment === 'alpha'`) print through the `IRPrinting_alpha` gateway app.
 */
const getPrintingBaseUrl = (aname, bookingNumber) => {
    const isAlpha = typeof window !== 'undefined' && window.environment === 'alpha';
    const app = isAlpha ? 'IRPrinting_alpha' : 'PrintBooking';
    return `https://gateway.igloorooms.com/${app}/${aname}/printing/fd?id=${bookingNumber}`;
};
const isAgentMode = (agent) => {
    return agent && agent.payment_mode.code !== '002';
};

export { _formatTime as _, _formatDate as a, _getDay as b, getPrintingBaseUrl as g, isAgentMode as i };
