import app_store, { changeLocale, updateUserPreference } from "../stores/app.store";
import booking_store, { modifyBookingStore } from "../stores/booking";
import clsx from "clsx";
import { addDays, differenceInCalendarDays, format, isBefore } from "date-fns";
import { ar, es, fr, de, pl, uk, ru, el, enUS } from "date-fns/locale";
import { twMerge } from "tailwind-merge";
// import DOMPurify from 'dompurify';
const localeMap = {
    en: enUS,
    ar: ar,
    fr: fr,
    es: es,
    de: de,
    pl: pl,
    ua: uk,
    ru: ru,
    el: el,
};
export function matchLocale(locale) {
    return localeMap[locale.toLowerCase()] || enUS;
}
export function getAbbreviatedWeekdays(locale) {
    const baseDate = new Date(2020, 5, 7);
    let weekdays = [];
    for (let i = 0; i < 7; i++) {
        const weekday = format(addDays(baseDate, i), 'eee', { locale });
        weekdays.push(weekday);
    }
    return weekdays.slice(1, 7).concat(weekdays.slice(0, 1));
}
export function setLanguagePreference(language) {
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 10);
    const cookieValue = `language=${language}; expires=${expiryDate.toUTCString()}; path=/; Secure; SameSite=Lax`;
    document.cookie = cookieValue;
}
export function getLanguagePreference() {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith('language=')) {
            return cookie.substring('language='.length);
        }
    }
    return null;
}
export function getAvailableRooms(assignable_units) {
    let result = [];
    assignable_units.map(unit => {
        if (unit.Is_Fully_Available) {
            result.push({ name: unit.name, id: unit.pr_id });
        }
    });
    return result;
}
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
export const formatAmount = (amount, currency = 'USD', decimals = 2) => {
    const numberFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    });
    return numberFormatter.format(amount);
};
export function getDateDifference(date1, date2) {
    return differenceInCalendarDays(date2, date1);
}
export function renderTime(time) {
    return time < 10 ? time.toString().padStart(2, '0') : time.toString();
}
export function getUserPrefernce(lang = undefined) {
    const p = JSON.parse(localStorage.getItem('user_preference'));
    if (p) {
        const { direction, currency_id } = p;
        changeLocale(direction, matchLocale(p.language_id));
        updateUserPreference({
            currency_id,
            language_id: p.language_id,
        });
    }
    else {
        updateUserPreference({
            language_id: lang || 'en',
        });
    }
}
export function runScriptAndRemove(scriptContent) {
    const script = document.createElement('script');
    script.textContent = scriptContent;
    document.body.appendChild(script);
    document.body.removeChild(script);
}
export function setDefaultLocale({ currency }) {
    app_store.userPreferences = Object.assign(Object.assign({}, app_store.userPreferences), { currency_id: currency.code.toString() });
    // matchLocale(language_id)
}
export function getCookies() {
    const cookies = {};
    const cookiesArray = document.cookie.split('; ');
    cookiesArray.forEach(cookie => {
        const [name, value] = cookie.split('=');
        if (name && value) {
            cookies[decodeURIComponent(name)] = decodeURIComponent(value);
        }
    });
    return cookies;
}
export function getCookie(name) {
    const cookies = getCookies();
    return cookies[name] || null;
}
export function manageAnchorSession(data, mode = 'add') {
    const anchor = JSON.parse(sessionStorage.getItem('anchor'));
    if (anchor) {
        if (mode === 'add') {
            return sessionStorage.setItem('anchor', JSON.stringify(Object.assign(Object.assign({}, anchor), data)));
        }
        else if (mode === 'remove') {
            const keys = Object.keys(data);
            keys.forEach(key => {
                if (key in anchor) {
                    delete anchor[key];
                }
            });
            return sessionStorage.setItem('anchor', JSON.stringify(anchor));
        }
    }
    else {
        if (mode === 'add') {
            return sessionStorage.setItem('anchor', JSON.stringify(Object.assign({}, data)));
        }
    }
}
export function injectHTML(htmlContent, target = 'body', position = 'last') {
    // const safeContent = DOMPurify.sanitize(htmlContent);
    // console.log(safeContent, htmlContent);
    const element = document.createRange().createContextualFragment(htmlContent);
    const destination = target === 'head' ? document.head : document.body;
    if (position === 'first') {
        destination.insertBefore(element, destination.firstChild);
    }
    else {
        destination.appendChild(element);
    }
}
export function checkAffiliate(afName) {
    var _a;
    if (afName) {
        const affiliate = (_a = app_store === null || app_store === void 0 ? void 0 : app_store.property) === null || _a === void 0 ? void 0 : _a.affiliates.find(aff => aff.afname.toLowerCase().trim() === afName);
        if (!affiliate) {
            return null;
        }
        return affiliate;
    }
    return null;
}
export function formatFullLocation(property) {
    var _a, _b, _c, _d, _e;
    return [(_a = property === null || property === void 0 ? void 0 : property.area) !== null && _a !== void 0 ? _a : null, (_c = (_b = property === null || property === void 0 ? void 0 : property.city) === null || _b === void 0 ? void 0 : _b.name) !== null && _c !== void 0 ? _c : null, (_e = (_d = property === null || property === void 0 ? void 0 : property.country) === null || _d === void 0 ? void 0 : _d.name) !== null && _e !== void 0 ? _e : null].filter(f => f !== null).join(', ');
}
export function formatImageAlt(alt, roomTypeName = null) {
    return [roomTypeName, alt, `${app_store.property.name}, ${app_store.property.country.name}`].filter(f => f !== null).join(' - ');
}
export function validateCoupon(coupon) {
    if (!coupon) {
        return false;
    }
    let isValidCoupon = false;
    const c = app_store.property.promotions.find(p => p.key === coupon.trim());
    if (c) {
        if (isBefore(new Date(c.to), new Date())) {
            return false;
        }
        isValidCoupon = true;
        modifyBookingStore('bookingAvailabilityParams', Object.assign(Object.assign({}, booking_store.bookingAvailabilityParams), { coupon, loyalty: false }));
    }
    return isValidCoupon;
}
export function validateAgentCode(code) {
    var _a;
    if (!code) {
        return false;
    }
    let isValidCode = false;
    const agent = (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.agents.find(a => a.code === this.code.trim());
    if (agent) {
        isValidCode = true;
        booking_store.bookingAvailabilityParams = Object.assign(Object.assign({}, booking_store.bookingAvailabilityParams), { agent: agent.id });
    }
    return isValidCode;
}
//# sourceMappingURL=utils.js.map
