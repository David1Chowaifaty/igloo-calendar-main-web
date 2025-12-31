import { h as hooks } from './moment-ab846cee.js';
import { z } from './index-1e1f097b.js';
import { c as calendar_data } from './calendar-data-2ae53dc9.js';
import { l as locales } from './locales.store-cb784e95.js';

function convertDateToCustomFormat(dayWithWeekday, monthWithYear, format = 'D_M_YYYY') {
    const dateStr = `${dayWithWeekday.split(' ')[1]} ${monthWithYear}`;
    const date = hooks(dateStr, 'DD MMM YYYY');
    if (!date.isValid()) {
        throw new Error('Invalid Date');
    }
    return date.format(format);
}
function convertDateToTime(dayWithWeekday, monthWithYear) {
    const date = hooks(dayWithWeekday + ' ' + monthWithYear, 'ddd DD MMM YYYY').toDate();
    date.setHours(0, 0, 0, 0);
    return date.getTime();
}
/**
 * Determines whether the currently selected room's rateplan is valid for the
 * chosen room type. If it is **not** valid, this returns the list of
 * alternative (active) rateplans that the user can switch to.
 *
 * #### Return contract
 * - **`null`** → No UI action required. Either:
 *   - no `roomTypeId`/`roomTypes`/room type found, or
 *   - the room already has a compatible active rateplan for this room type.
 * - **`SelectOption[]`** → The current rateplan doesn't exist (or isn't active)
 *   for the chosen room type. Render these options so the user can pick one.
 *
 * #### Matching rules
 * A rateplan is considered compatible if **all** of the following match:
 * - `meal_plan.code`
 * - `custom_text`
 * - `is_active === true`
 * - `is_non_refundable` (boolean equality)
 *
 * #### Edge cases handled
 * - Missing/invalid `roomTypeId` or `roomTypes`
 * - rateplan_id type not found or has no `rateplans`
 * - Partial/undefined fields on `rateplan` (safe optional access)
 * - Localized "Non-Refundable" label missing (falls back to literal)
 * - Filters out inactive rateplans and guarantees unique options by `id`
 *
 * @param params.rateplan_id       The room currently being edited/validated.
 * @param params.roomTypes  All property room types (may be null/undefined).
 * @param params.roomTypeId The selected room type id (may be null/undefined).
 *
 * @returns `null` if no choices are needed; otherwise a list of choices.
 */
function checkMealPlan({ rateplan_id, roomTypes, roomTypeId }) {
    if (!roomTypeId || !Array.isArray(roomTypes) || roomTypes.length === 0) {
        return null;
    }
    const roomtype = roomTypes.find(rt => rt?.id === roomTypeId);
    if (!roomtype || !Array.isArray(roomtype.rateplans) || roomtype.rateplans.length === 0) {
        return null;
    }
    const rateplan = (() => {
        for (const rt of roomTypes) {
            const ratePlan = rt.rateplans.find(rp => rp.id.toString() === rateplan_id.toString());
            if (ratePlan) {
                return ratePlan;
            }
        }
        return null;
    })();
    const current = {
        mealPlanCode: rateplan?.meal_plan?.code ?? null,
        customText: rateplan?.custom_text ?? null,
        isNonRefundable: Boolean(rateplan?.is_non_refundable),
    };
    const hasCompatibleActiveRateplan = roomtype.rateplans.some(rp => Boolean(rp?.is_active) &&
        (rp?.meal_plan?.code ?? null) === current.mealPlanCode &&
        (rp?.custom_text ?? null) === current.customText &&
        Boolean(rp?.is_non_refundable) === current.isNonRefundable);
    if (hasCompatibleActiveRateplan) {
        const rp = roomtype.rateplans.find(rp => Boolean(rp?.is_active) &&
            (rp?.meal_plan?.code ?? null) === current.mealPlanCode &&
            (rp?.custom_text ?? null) === current.customText &&
            Boolean(rp?.is_non_refundable) === current.isNonRefundable);
        return {
            custom_text: rp.custom_text,
            text: rp.short_name,
            value: rp.id.toString(),
        };
    }
    const nonRefundableLabel = locales?.entries?.Lcz_NonRefundable ?? 'Non-Refundable';
    const seen = new Set();
    const options = [];
    for (const rp of roomtype.rateplans) {
        if (!rp || !rp.is_active || seen.has(rp.id))
            continue;
        seen.add(rp.id);
        const suffix = rp.is_non_refundable ? ` ${nonRefundableLabel}` : '';
        const text = `${rp.short_name ?? ''}${suffix}`.trim();
        if (!text)
            continue;
        options.push({
            text,
            custom_text: rp.custom_text,
            value: String(rp.id),
        });
    }
    return options;
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
        'OUTSTANDING-BALANCE': { id: 10, clsName: 'OUTSTANDING_BALANCE' },
        'TEMP-EVENT': { id: 11, clsName: 'PENDING_CONFIRMATION' },
    };
    // const statusId = (() => {
    //   let d = {};
    //   legendData.forEach(element => {
    //     d[toStatusCode(element.name)] = { id: Number(element?.id), clsName: normalizeStatus(element.name) };
    //   });
    //   return d;
    // })();
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
    const dateObj = hooks(startDate, 'D_M_YYYY');
    dateObj.add(numberOfDays, 'days');
    return dateObj.format('YYYY-MM-DD');
}
function convertDMYToISO(date) {
    const dateObj = hooks(date, 'D_M_YYYY');
    return dateObj.format('YYYY-MM-DD');
}
function addTwoMonthToDate(date) {
    return hooks(date).add(2, 'months').format('YYYY-MM-DD');
}
function formatDate(dateString, option = 'DD MMM YYYY') {
    const formattedDate = hooks(dateString, option).format('ddd, DD MMM YYYY');
    return formattedDate;
}
function getNextDay(date) {
    return hooks(date).add(1, 'days').format('YYYY-MM-DD');
}
function convertDatePrice(date) {
    return hooks(date, 'YYYY-MM-DD').format('DD/MM ddd');
}
function getDaysArray(date1, date2) {
    let dates = [];
    let start = hooks.min(hooks(date1).add(1, 'days'), hooks(date2));
    let end = hooks.max(hooks(date1), hooks(date2));
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
    const parsedEmailResults = z.string().email().safeParse(email);
    return !parsedEmailResults.success;
}
function formatAmount(currency, amount) {
    return currency + ' ' + amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
/**
 * Determines whether the given user has privileged (global or elevated) access.
 *
 * Privileged users are typically system administrators or MPO users
 * who can access data across all properties rather than being restricted
 * to a specific property.
 *
 * @param userTypeCode - Numeric code representing the user's role.
 *   - `1` → Super Admin
 *   - `4` → MPO (Multi-Property Operator)
 *
 * @returns `true` if the user has elevated/global access, otherwise `false`.
 *
 * @example
 * ```ts
 * isPrivilegedUser(1); // true (Super Admin)
 * isPrivilegedUser(4); // true (MPO)
 * isPrivilegedUser(2); // false
 * ```
 */
const isPrivilegedUser = (userTypeCode) => {
    // User type codes that have global or elevated access
    const privilegedUserTypes = [1, 4]; // 4 = MPO, 1 = Super Admin
    return privilegedUserTypes.includes(userTypeCode);
};
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
            return sessionStorage.setItem('backend_anchor', JSON.stringify({ ...anchor, ...data }));
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
            return sessionStorage.setItem('backend_anchor', JSON.stringify({ ...data }));
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
/**
 * Determines whether a booking is eligible for check-in.
 *
 * @param params - An object containing the booking event, calendar data, current check-in status, and a flag indicating if check-in or checkout is allowed.
 * @returns True if check-in is allowed; otherwise, false.
 */
function canCheckIn({ from_date, to_date, isCheckedIn }) {
    if (!calendar_data.checkin_enabled || calendar_data.is_automatic_check_in_out) {
        return false;
    }
    if (isCheckedIn) {
        return false;
    }
    const now = hooks();
    if ((now.isSameOrAfter(new Date(from_date), 'days') && now.isBefore(new Date(to_date), 'days')) ||
        now.isSame(new Date(to_date), 'days')
    // && !compareTime(now.toDate(), createDateWithOffsetAndHour(calendarData.checkin_checkout_hours?.offset, calendarData.checkin_checkout_hours?.hour))
    ) {
        return true;
    }
    return false;
}
function canCheckout({ to_date, inOutCode, skipAutoCheckout = false }) {
    if ((!calendar_data.checkin_enabled || calendar_data.is_automatic_check_in_out) && !skipAutoCheckout) {
        return false;
    }
    if (inOutCode === '002') {
        return false;
    }
    return hooks().startOf('day').isSameOrAfter(hooks(to_date, 'YYYY-MM-DD').startOf('date'), 'dates');
}
/**
 * Downloads a file from a given URL.
 *
 * @param url - The URL of the file to download.
 * @param filename - The name of the file to save. If not provided, the URL will be used as the filename.
 */
function downloadFile(url, filename) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
/**
 * Converts an integer value into a float by shifting the decimal point.
 *
 * @param value - The integer value to convert (e.g. 29016).
 * @param decimalPlaces - The number of decimal places to shift (e.g. 2 results in 290.16).
 * @returns The converted floating point number.
 */
function toFloat(value, decimalPlaces) {
    const factor = Math.pow(10, decimalPlaces);
    return value / factor;
}
async function sleep(time = 200) {
    return new Promise(r => setTimeout(() => r(null), time));
}
function handleBodyOverflow(open) {
    const attr = 'data-ir-scroll-locked';
    let counter = document.body.getAttribute(attr);
    if (!document.getElementById('scroll-lock-style')) {
        const style = document.createElement('style');
        style.id = 'scroll-lock-style';
        style.innerHTML = `
      body:dir(ltr)[data-ir-scroll-locked] {
        overflow: hidden !important;
        overscroll-behavior: contain;
        position: relative !important;
        padding-left: 0px;
        padding-top: 0px;
        padding-right: 0px;
        margin-left: 0;
        margin-top: 0;
        margin-right: 15px !important;
      }
      body:dir(rtl)[data-ir-scroll-locked] {
        overflow: hidden !important;
        overscroll-behavior: contain;
        position: relative !important;
        padding-left: 0px;
        padding-top: 0px;
        padding-right: 0px;
        margin-right: 0;
        margin-top: 0;
        margin-left: 15px !important;
      }
    `;
        document.head.appendChild(style);
    }
    if (!counter) {
        document.body.setAttribute(attr, '1');
    }
    else {
        const newCount = open ? Number(counter) + 1 : Number(counter) - 1;
        document.body.setAttribute(attr, newCount.toString());
        if (newCount <= 0) {
            document.body.removeAttribute(attr);
        }
    }
}
/**
 * Checks whether a given date falls on a weekend (Saturday or Sunday).
 *
 * @param date   - The date to check, as a string (parsed using the given `format`).
 * @param format - Moment.js format used to parse `date`. Defaults to `'YYYY-MM-DD'`.
 * @returns `true` if the parsed date is a Saturday or Sunday, otherwise `false`.
 */
function isWeekend(date, format = 'YYYY-MM-DD') {
    const d = hooks(date, format);
    return d.day() === 0 || d.day() === 6;
}

export { getDaysArray as A, convertDatePrice as B, formatDate as C, findCountry as D, downloadFile as a, dateDifference as b, isBlockUnit as c, dateToFormattedString as d, extras as e, formatAmount as f, getReleaseHoursString as g, handleBodyOverflow as h, isPrivilegedUser as i, convertDateToCustomFormat as j, convertDateToTime as k, canCheckIn as l, checkUserAuthState as m, manageAnchorSession as n, canCheckout as o, formatLegendColors as p, getNextDay as q, renderTime as r, sleep as s, toFloat as t, addTwoMonthToDate as u, validateEmail as v, convertDMYToISO as w, computeEndDate as x, checkMealPlan as y, isWeekend as z };

//# sourceMappingURL=utils-bfc706ab.js.map