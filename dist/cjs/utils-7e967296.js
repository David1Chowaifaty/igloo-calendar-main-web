'use strict';

const moment = require('./moment-1780b03a.js');
const index = require('./index-db8b30d9.js');

function dateToFormattedString(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // +1 because months are 0-based in JS
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}
function formatLegendColors(legendData) {
    let formattedLegendData = {};
    const statusId = {
        'IN-HOUSE': { id: 1, clsName: 'IN_HOUSE' },
        'CONFIRMED': { id: 2, clsName: 'CONFIRMED' },
        'PENDING-CONFIRMATION': { id: 3, clsName: 'PENDING_CONFIRMATION' },
        'SPLIT-UNIT': { id: 4, clsName: 'SPLIT_UNIT' },
        'CHECKED-IN': { id: 5, clsName: 'CHECKED_IN' },
        'CHECKED-OUT': { id: 5, clsName: 'CHECKED_OUT' },
        'BLOCKED': { id: 6, clsName: 'BLOCKED' },
        'BLOCKED-WITH-DATES': { id: 7, clsName: 'BLOCKED_WITH_DATES' },
        'NOTES': { id: 8, clsName: 'NOTES' },
        'OUTSTANDING-BALANCE': { id: 9, clsName: 'OUTSTANDING_BALANCE' },
        'TEMP-EVENT': { id: 10, clsName: 'PENDING_CONFIRMATION' },
    };
    legendData.forEach(legend => {
        formattedLegendData[legend.id] = legend;
        formattedLegendData.statusId = statusId; // NOTE: This will overwrite the 'statusId' property with every iteration.
    });
    return formattedLegendData;
}
function isBlockUnit(status_code) {
    return ['003', '002', '004'].includes(status_code);
}
const findCountry = (id, countries) => countries.find(country => country.id === id);
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
function computeEndDate(startDate, numberOfDays) {
    const dateObj = moment.hooks(startDate, 'D_M_YYYY');
    dateObj.add(numberOfDays, 'days');
    return dateObj.format('YYYY-MM-DD');
}
function convertDMYToISO(date) {
    const dateObj = moment.hooks(date, 'D_M_YYYY');
    return dateObj.format('YYYY-MM-DD');
}
function addTwoMonthToDate(date) {
    return moment.hooks(date).add(2, 'months').format('YYYY-MM-DD');
}
function formatDate(dateString, option = 'DD MMM YYYY') {
    const formattedDate = moment.hooks(dateString, option).format('ddd, DD MMM YYYY');
    return formattedDate;
}
function getNextDay(date) {
    return moment.hooks(date).add(1, 'days').format('YYYY-MM-DD');
}
function convertDatePrice(date) {
    return moment.hooks(date, 'YYYY-MM-DD').format('DD/MM ddd');
}
function getDaysArray(date1, date2) {
    let dates = [];
    let start = moment.hooks.min(moment.hooks(date1).add(1, 'days'), moment.hooks(date2));
    let end = moment.hooks.max(moment.hooks(date1), moment.hooks(date2));
    while (start < end) {
        dates.push(start.format('YYYY-MM-DD'));
        start = start.clone().add(1, 'days');
    }
    return dates;
}
function renderTime(time) {
    return time < 10 ? time.toString().padStart(2, '0') : time.toString();
}
function validateEmail(email) {
    if (email === '') {
        return true;
    }
    const parsedEmailResults = index.z.string().email().safeParse(email);
    return !parsedEmailResults.success;
}
function formatAmount(currency, amount) {
    return currency + amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
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
function manageAnchorSession(data, mode = 'add') {
    const anchor = JSON.parse(sessionStorage.getItem('backend_anchor'));
    if (anchor) {
        if (mode === 'add') {
            return sessionStorage.setItem('backend_anchor', JSON.stringify(Object.assign(Object.assign({}, anchor), data)));
        }
        else if (mode === 'remove') {
            const keys = Object.keys(data);
            keys.forEach(key => {
                if (key in anchor) {
                    delete anchor[key];
                }
            });
            return sessionStorage.setItem('backend_anchor', JSON.stringify(anchor));
        }
    }
    else {
        if (mode === 'add') {
            return sessionStorage.setItem('backend_anchor', JSON.stringify(Object.assign({}, data)));
        }
    }
}
function checkUserAuthState() {
    const anchor = JSON.parse(sessionStorage.getItem('backend_anchor'));
    if (anchor) {
        return anchor.login || null;
    }
    return null;
}

exports.addTwoMonthToDate = addTwoMonthToDate;
exports.checkUserAuthState = checkUserAuthState;
exports.computeEndDate = computeEndDate;
exports.convertDMYToISO = convertDMYToISO;
exports.convertDatePrice = convertDatePrice;
exports.dateToFormattedString = dateToFormattedString;
exports.extras = extras;
exports.findCountry = findCountry;
exports.formatAmount = formatAmount;
exports.formatDate = formatDate;
exports.formatLegendColors = formatLegendColors;
exports.getDaysArray = getDaysArray;
exports.getNextDay = getNextDay;
exports.getReleaseHoursString = getReleaseHoursString;
exports.isBlockUnit = isBlockUnit;
exports.manageAnchorSession = manageAnchorSession;
exports.renderTime = renderTime;
exports.validateEmail = validateEmail;

//# sourceMappingURL=utils-7e967296.js.map