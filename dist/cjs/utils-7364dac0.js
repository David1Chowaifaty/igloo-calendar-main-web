'use strict';

const moment = require('./moment-1780b03a.js');
const index = require('./index-8bb117a0.js');
const calendarData = require('./calendar-data-70bc3b4b.js');
const locales_store = require('./locales.store-32782582.js');
const type = require('./type-393ac773.js');

// export const ZIdInfo = z.object({
//   type: z.object({
//     code: z.string().min(3),
//     description: z.string(),
//   }),
//   number: z.string().min(2),
// });
// export const ZSharedPerson = z.object({
//   id: z.number(),
//   full_name: z.string().min(2),
//   country_id: z.coerce.number().min(0),
//   dob: z.coerce.date().transform(date => moment(date).format('YYYY-MM-DD')),
//   id_info: ZIdInfo,
// });
/**
 * ZIdInfo schema:
 * - `type.code`: Validates a non-empty string must be at least 3 chars.
 *   If empty string or not provided, validation is skipped.
 * - `type.description`: Same pattern for description (but no min length).
 * - `number`: Validates if non-empty string it should be at least 2 chars.
 */
const ZIdInfo = index.z.object({
    type: index.z.object({
        code: index.z
            .union([
            // If provided and non-empty, must have at least 3 chars
            index.z.string().min(3),
            // or it can be an empty string
            index.z.literal(''),
        ])
            .optional(), // or undefined
        description: index.z
            .union([
            // If provided and non-empty, no special min
            index.z.string(),
            // or it can be empty string
            index.z.literal(''),
        ])
            .optional(),
    }),
    number: index.z
        .union([
        // If provided and non-empty, must have at least 2 chars
        index.z.string().min(2),
        // or it can be empty string
        index.z.literal(''),
    ])
        .optional()
        .nullable(),
});
/**
 * ZSharedPerson schema:
 * - `id`: Optional numeric field.
 * - `full_name`: If provided and non-empty, must be at least 2 chars.
 * - `country_id`: If provided, coerced to number, must be >= 0.
 * - `dob`: If provided, coerced to Date and formatted. Otherwise skipped.
 * - `id_info`: The nested object above; can also be omitted entirely.
 */
const ZSharedPerson = index.z.object({
    id: index.z.number().optional(),
    // full_name: z
    //   .union([
    //     z.string().min(2), // if provided and non-empty, must have min length 2
    //     z.literal(''), // or it can be empty string
    //   ])
    //   .optional(),
    first_name: index.z
        .union([
        index.z.string().min(2), // if provided and non-empty, must have min length 2
        index.z.literal(''), // or it can be empty string
    ])
        .optional(),
    // .nullable(),
    last_name: index.z.string().optional(),
    // .union([
    //   z.string().min(2), // if provided and non-empty, must have min length 2
    //   z.literal(''), // or it can be empty string
    // ])
    // .nullable(),
    country_id: index.z.coerce
        .number()
        .min(0) // if provided, must be >= 0
        .optional(),
    dob: index.z
        .string()
        .nullable()
        .optional()
        .refine(value => value === undefined || moment.hooks(value, 'DD/MM/YYYY', true).isValid() || value === '' || value === null, 'Invalid date format')
        .transform(value => {
        if (value === undefined || value === '' || value === null)
            return null;
        const isDDMMYYYY = moment.hooks(value, 'DD/MM/YYYY', true).isValid();
        return isDDMMYYYY ? null : moment.hooks(value, 'DD/MM/YYYY').format('YYYY-MM-DD');
    }),
    id_info: ZIdInfo.optional(),
    is_main: index.z.boolean().default(false),
});
// export const ZSharedPersons = z.array(ZSharedPerson).superRefine((data, ctx) => {
//   for (const d of data) {
//     validateSharedPerson(d, ctx);
//   }
// });
function validateSharedPerson(data) {
    ZSharedPerson.parse(data);
    const hasValue = (field) => {
        return field !== null && field !== undefined && field.trim() !== '';
    };
    const ctx = [];
    if (data.is_main) {
        if (!hasValue(data.first_name)) {
            ctx.push({
                path: ['first_name'],
                code: index.ZodIssueCode.custom,
                message: 'First name is required for main guest',
            });
        }
        // if (!hasValue(data.last_name)) {
        //   ctx.push({
        //     path: ['last_name'],
        //     code: ZodIssueCode.custom,
        //     message: 'Last name is required for main guest',
        //   });
        // }
    }
    // For non-main guests: check if ANY field has data
    const hasAnyFieldData = hasValue(data.first_name) ||
        // hasValue(data.last_name) ||
        hasValue(data.dob) ||
        (data.country_id !== null && data.country_id !== undefined && data.country_id > 0) ||
        hasValue(data.id_info?.number);
    // If any field has data, then first_name and last_name become required
    if (hasAnyFieldData) {
        if (!hasValue(data.first_name)) {
            ctx.push({
                path: ['first_name'],
                code: index.ZodIssueCode.custom,
                message: 'First name is required when other guest information is provided',
            });
        }
        // if (!hasValue(data.last_name)) {
        //   ctx.push({
        //     path: ['last_name'],
        //     code: ZodIssueCode.custom,
        //     message: 'Last name is required when other guest information is provided',
        //   });
        // }
    }
    if (ctx.length >= 1) {
        throw new index.ZodError(ctx);
    }
}
const ExtraServiceSchema = index.z.object({
    booking_system_id: index.z.number().optional(),
    cost: index.z.coerce.number().nullable(),
    currency_id: index.z.number().min(1),
    description: index.z.string().min(1),
    end_date: index.z.string().nullable().optional().default(null),
    start_date: index.z.string().nonempty(),
    price: index.z.coerce.number().min(0.01),
    system_id: index.z.number().optional(),
    category: index.z.object({ code: index.z.string().nonempty() }).nullable().optional(),
    agent: type.AgentBaseSchema.extend({
        address: index.z.string().nullable(),
        agent_rate_type_code: type.AgentBaseSchema.shape.agent_rate_type_code.nullable(),
        agent_type_code: type.AgentBaseSchema.shape.agent_type_code.nullable(),
        city: index.z.string().nullable(),
        contact_name: index.z.string().nullable(),
        email: index.z.string().email().nullable(),
        is_active: index.z.boolean().nullable(),
        is_send_guest_confirmation_email: index.z.boolean().nullable(),
        notes: index.z.string().nullable(),
        payment_mode: type.AgentBaseSchema.shape.payment_mode.nullable(),
        phone: index.z.string().nullable(),
        tax_nbr: index.z.string().nullable(),
        cl_post_timing: type.AgentBaseSchema.shape.cl_post_timing.nullable(),
    }).nullable(),
});
const ROOM_IN_OUT = {
    CHECKIN: '001',
    CHECKOUT: '002',
    NOSHOW: '000',
};

const LANGUAGE_KEY_MAP = {
    en: 'CODE_VALUE_EN',
    ar: 'CODE_VALUE_AR',
    de: 'CODE_VALUE_DE',
    el: 'CODE_VALUE_EL',
    fr: 'CODE_VALUE_FR',
    he: 'CODE_VALUE_HE',
    pl: 'CODE_VALUE_PL',
    ru: 'CODE_VALUE_RU',
    ua: 'CODE_VALUE_UA',
};
/**
 * Returns the localised display string for an {@link IEntries} entry.
 *
 * Resolution order:
 * 1. `CODE_VALUE_<language>` — if present and non-empty.
 * 2. `CODE_VALUE_EN` — English fallback.
 * 3. `CODE_NAME` — last-resort fallback when both the requested language
 *    and English values are absent.
 *
 * @param entry - The `IEntries` object to translate.
 * @param language - BCP-47-style language code (e.g. `"fr"`, `"ar"`).
 *   Defaults to `"en"`.
 * @returns The best available display string for the requested language.
 *
 * @example
 * ```ts
 * const label = getEntryValue({ entry: someEntry, language: 'fr' });
 * // → "Petit-déjeuner" (falls back to "Breakfast" if French is null)
 * ```
 */
function getEntryValue({ entry, language = 'en' }) {
    const key = LANGUAGE_KEY_MAP[language] ?? 'CODE_VALUE_EN';
    const localised = entry[key];
    if (localised)
        return localised;
    const english = entry['CODE_VALUE_EN'];
    if (english)
        return english;
    return entry.CODE_NAME;
}
function convertDateToCustomFormat(dayWithWeekday, monthWithYear, format = 'D_M_YYYY') {
    const dateStr = `${dayWithWeekday.split(' ')[1]} ${monthWithYear}`;
    const date = moment.hooks(dateStr, 'DD MMM YYYY');
    if (!date.isValid()) {
        throw new Error('Invalid Date');
    }
    return date.format(format);
}
function convertDateToTime(dayWithWeekday, monthWithYear) {
    const date = moment.hooks(dayWithWeekday + ' ' + monthWithYear, 'ddd DD MMM YYYY').toDate();
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
    const nonRefundableLabel = locales_store.locales?.entries?.Lcz_NonRefundable ?? 'Non-Refundable';
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
    formattedLegendData[1].color = 'var(--wa-color-success-fill-loud)';
    formattedLegendData[2].color = 'var(--wa-color-success-fill-loud)';
    formattedLegendData[3].color = 'var(--wa-color-surface-default)';
    formattedLegendData[6].color = 'var(--wa-color-danger-fill-loud)';
    // formattedLegendData[7].color = 'var(--wa-color-danger-fill-loud)';
    // formattedLegendData[11].color = 'var(--wa-color-warning-fill-normal)';
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
    if (!calendarData.calendar_data.checkin_enabled || calendarData.calendar_data.is_automatic_check_in_out) {
        return false;
    }
    if (isCheckedIn) {
        return false;
    }
    const now = moment.hooks();
    if ((now.isSameOrAfter(new Date(from_date), 'days') && now.isBefore(new Date(to_date), 'days')) ||
        now.isSame(new Date(to_date), 'days')
    // && !compareTime(now.toDate(), createDateWithOffsetAndHour(calendarData.checkin_checkout_hours?.offset, calendarData.checkin_checkout_hours?.hour))
    ) {
        return true;
    }
    return false;
}
function canCheckout({ to_date, inOutCode, skipAutoCheckout = false }) {
    if ((!calendarData.calendar_data.checkin_enabled || calendarData.calendar_data.is_automatic_check_in_out) && !skipAutoCheckout) {
        return false;
    }
    if (inOutCode === ROOM_IN_OUT.CHECKOUT) {
        return false;
    }
    if (inOutCode === ROOM_IN_OUT.CHECKIN) {
        return true;
    }
    return moment.hooks().startOf('day').isSameOrAfter(moment.hooks(to_date, 'YYYY-MM-DD').startOf('date'), 'dates');
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
    const d = moment.hooks(date, format);
    return d.day() === 0 || d.day() === 6;
}
function getFormSubmitter(e) {
    const submitter = e.submitter;
    return submitter.value;
}

exports.ExtraServiceSchema = ExtraServiceSchema;
exports.ROOM_IN_OUT = ROOM_IN_OUT;
exports.ZSharedPerson = ZSharedPerson;
exports.addTwoMonthToDate = addTwoMonthToDate;
exports.canCheckIn = canCheckIn;
exports.canCheckout = canCheckout;
exports.checkMealPlan = checkMealPlan;
exports.checkUserAuthState = checkUserAuthState;
exports.computeEndDate = computeEndDate;
exports.convertDMYToISO = convertDMYToISO;
exports.convertDatePrice = convertDatePrice;
exports.convertDateToCustomFormat = convertDateToCustomFormat;
exports.convertDateToTime = convertDateToTime;
exports.dateDifference = dateDifference;
exports.dateToFormattedString = dateToFormattedString;
exports.downloadFile = downloadFile;
exports.extras = extras;
exports.findCountry = findCountry;
exports.formatAmount = formatAmount;
exports.formatDate = formatDate;
exports.formatLegendColors = formatLegendColors;
exports.getDaysArray = getDaysArray;
exports.getEntryValue = getEntryValue;
exports.getFormSubmitter = getFormSubmitter;
exports.getNextDay = getNextDay;
exports.getReleaseHoursString = getReleaseHoursString;
exports.handleBodyOverflow = handleBodyOverflow;
exports.isBlockUnit = isBlockUnit;
exports.isPrivilegedUser = isPrivilegedUser;
exports.isWeekend = isWeekend;
exports.manageAnchorSession = manageAnchorSession;
exports.renderTime = renderTime;
exports.sleep = sleep;
exports.toFloat = toFloat;
exports.validateEmail = validateEmail;
exports.validateSharedPerson = validateSharedPerson;

//# sourceMappingURL=utils-7364dac0.js.map