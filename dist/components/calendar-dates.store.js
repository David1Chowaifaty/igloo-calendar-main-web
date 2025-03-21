import { h as hooks } from './moment.js';
import './calendar-data.js';
import './locales.store.js';
import { c as createStore } from './index2.js';

function convertDateToCustomFormat(dayWithWeekday, monthWithYear) {
    const dateStr = `${dayWithWeekday.split(' ')[1]} ${monthWithYear}`;
    const date = hooks(dateStr, 'DD MMM YYYY');
    if (!date.isValid()) {
        throw new Error('Invalid Date');
    }
    return date.format('D_M_YYYY');
}
function convertDateToTime(dayWithWeekday, monthWithYear) {
    const date = hooks(dayWithWeekday + ' ' + monthWithYear, 'ddd DD MMM YYYY').toDate();
    date.setHours(0, 0, 0, 0);
    return date.getTime();
}
function dateDifference(FROM_DATE, TO_DATE) {
    const startDate = new Date(FROM_DATE);
    const endDate = new Date(TO_DATE);
    return Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
}
function dateToFormattedString(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // +1 because months are 0-based in JS
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}
function isBlockUnit(status_code) {
    return ['003', '002', '004'].includes(status_code);
}
function getReleaseHoursString(releaseDate) {
    const dt = new Date();
    const releaseAfterHours = releaseDate;
    dt.setHours(dt.getHours() + releaseAfterHours, dt.getMinutes(), 0, 0);
    return {
        BLOCKED_TILL_DATE: dateToFormattedString(dt),
        BLOCKED_TILL_HOUR: dt.getHours().toString(),
        BLOCKED_TILL_MINUTE: dt.getMinutes().toString(),
    };
}
const extras = [
    {
        key: 'private_note',
        value: '',
    },
    {
        key: 'is_backend',
        value: true,
    },
    {
        key: 'ERROR_EMAIL',
        value: '',
    },
    {
        key: 'agent_payment_mode',
        value: '',
    },
    { key: 'payment_code', value: '' },
];

const initialState = {
    days: [],
    months: [],
    fromDate: '',
    toDate: '',
};
const { state: calendar_dates, onChange: onCalendarDatesChange } = createStore(initialState);

export { convertDateToCustomFormat as a, convertDateToTime as b, calendar_dates as c, dateDifference as d, extras as e, dateToFormattedString as f, getReleaseHoursString as g, isBlockUnit as i };

//# sourceMappingURL=calendar-dates.store.js.map