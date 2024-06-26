import app_store, { changeLocale, updateUserPreference } from "../stores/app.store";
import clsx from "clsx";
import { addDays, differenceInCalendarDays, format } from "date-fns";
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
//# sourceMappingURL=utils.js.map
