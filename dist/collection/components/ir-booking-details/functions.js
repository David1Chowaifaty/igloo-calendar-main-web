import { formatDate, formatTime } from "../../utils/date/index";
import { isAlpha } from "../../utils/utils";
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
/**
 * Base URL of the booking printing screen (mode and other params get appended). Alpha pages
 * (`window.environment === 'alpha'`) print through the `IRPrinting_alpha` gateway app.
 */
export const getPrintingBaseUrl = (aname, bookingNumber) => {
    const app = isAlpha() ? 'test.bookingmystay.com' : 'gateway.igloorooms.com/PrintBooking';
    return `https://${app}/${aname}/printing/fd?id=${bookingNumber}`;
};
export const isAgentMode = (agent) => {
    return agent && agent.payment_mode.code !== '002';
};
