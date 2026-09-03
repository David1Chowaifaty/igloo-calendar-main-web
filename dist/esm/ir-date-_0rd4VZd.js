import { c as createStore } from './index-CimhgHoX.js';
import { l as locales } from './locales.store-C9qsbKR0.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { g as getDefaultExportFromCjs } from './_commonjsHelpers-BFTU3MAI.js';

const initialState = {
    resolved: 'gregory',
    override: null,
    // Latin by default: the API boundary is always Latin and every existing screen renders it,
    // so following the locale's native digits is an explicit opt-in.
    numberingSystem: 'latn',
};
const { state: calendarPreference} = createStore(initialState);

const STORAGE_KEY = 'ir_calendar_system'; // sibling naming convention to the existing 'ir_language' key
const NUMBERING_STORAGE_KEY = 'ir_numbering_system';
const NUMBERING_SYSTEMS = ['auto', 'latn', 'arab', 'arabext'];
/** Narrows arbitrary input (localStorage, URL param) to a valid preference, or `null`. */
function parseNumberingSystem(raw) {
    return NUMBERING_SYSTEMS.includes(raw) ? raw : null;
}
/** Reads the persisted digit-script preference, or `null` if unset / storage unavailable. */
function readStoredNumberingSystem() {
    try {
        return parseNumberingSystem(localStorage.getItem(NUMBERING_STORAGE_KEY));
    }
    catch {
        return null;
    }
}
/** Persists (or clears, on `null`) the digit-script preference. Never throws. */
function persistNumberingSystem(value) {
    try {
        if (value === null) {
            localStorage.removeItem(NUMBERING_STORAGE_KEY);
        }
        else {
            localStorage.setItem(NUMBERING_STORAGE_KEY, value);
        }
    }
    catch {
        // localStorage unavailable (private mode, disabled cookies, etc.) — preference won't persist.
    }
}
/**
 * Locales whose users conventionally expect the Hijri calendar by default. This is a curated
 * allowlist, not a query of the device's actual OS calendar setting — there is no standard web
 * API that exposes "OS calendar mode". `Intl.DateTimeFormat(locale).resolvedOptions().calendar`
 * only reflects Hijri when the locale tag itself carries a `-u-ca-islamic*` extension (e.g. the
 * OS set `navigator.language` to `ar-SA-u-ca-islamic-umalqura`), which most browsers/OSes do not
 * do by default even when the OS calendar app is set to Hijri. Extend this list deliberately;
 * do not replace it with a bare `resolvedOptions().calendar` read and assume it is more reliable
 * than it actually is.
 */
const HIJRI_DEFAULT_LOCALES = new Set(['ar-sa']);
/**
 * Detects the calendar system implied by the browser's language/locale settings.
 * Checks for an explicit `-u-ca-islamic*` extension first (the one case where the platform
 * really does tell us), then falls back to the curated locale allowlist above.
 */
function detectDeviceCalendar() {
    try {
        const lang = navigator.language || 'en';
        const resolved = new Intl.DateTimeFormat(lang).resolvedOptions();
        if (resolved.calendar === 'islamic' || resolved.calendar === 'islamic-umalqura') {
            return 'islamic-umalqura';
        }
        if (HIJRI_DEFAULT_LOCALES.has(lang.toLowerCase())) {
            return 'islamic-umalqura';
        }
        return 'gregory';
    }
    catch {
        return 'gregory';
    }
}
/** Reads the persisted manual override, or `null` if none is set / storage is unavailable. */
function readStoredOverride() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw === 'gregory' || raw === 'islamic-umalqura' ? raw : null;
    }
    catch {
        return null;
    }
}
/** Persists (or clears, on `null`) the manual override. Never throws. */
function persistOverride(value) {
    try {
        if (value === null) {
            localStorage.removeItem(STORAGE_KEY);
        }
        else {
            localStorage.setItem(STORAGE_KEY, value);
        }
    }
    catch {
        // localStorage unavailable (private mode, disabled cookies, etc.) — override just won't persist.
    }
}
/** Resolution order: manual override wins; else device auto-detect; else Gregorian. */
function resolveCalendarSystem() {
    return readStoredOverride() ?? detectDeviceCalendar();
}

/**
 * Owns the calendar-preference store's lifecycle: resolves the initial value, reacts to
 * cross-tab storage changes, and exposes `setOverride` as the integration point for a future
 * settings UI. Deliberately parallel to `LanguageObserver` (not folded into it) — its trigger
 * is storage events + explicit calls, not a `<html lang>` `MutationObserver`.
 *
 * Call `init()` once, from `src/global/app.ts`.
 */
class CalendarPreferenceController {
    static listeners = new Set();
    static initialized = false;
    static init() {
        if (this.initialized)
            return;
        this.initialized = true;
        this.applyUrlOverrideIfPresent();
        calendarPreference.override = this.readOverrideFromStore();
        calendarPreference.numberingSystem = readStoredNumberingSystem() ?? calendarPreference.numberingSystem;
        this.refresh();
        window.addEventListener('storage', e => {
            if (e.key === STORAGE_KEY)
                this.refresh();
            if (e.key === NUMBERING_STORAGE_KEY) {
                calendarPreference.numberingSystem = readStoredNumberingSystem() ?? 'latn';
            }
        });
    }
    /** Sets (or clears, on `null`) the persisted manual override and re-resolves immediately. */
    static setOverride(value) {
        persistOverride(value);
        calendarPreference.override = value;
        this.refresh();
    }
    /**
     * Sets the digit script dates render in. `'auto'` follows the moment locale's own numerals
     * (Arabic-Indic under `ar`); anything else forces that script. Never affects `toApiDate` —
     * the API boundary is Latin by construction.
     */
    static setNumberingSystem(value) {
        persistNumberingSystem(value);
        calendarPreference.numberingSystem = value;
    }
    /** Secondary escape hatch for non-component `.ts` code that needs push notification rather than a store read. */
    static subscribe(listener) {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }
    static refresh() {
        const next = resolveCalendarSystem();
        if (next !== calendarPreference.resolved) {
            calendarPreference.resolved = next;
            this.listeners.forEach(listener => listener(next));
        }
    }
    static readOverrideFromStore() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw === 'gregory' || raw === 'islamic-umalqura' ? raw : null;
        }
        catch {
            return null;
        }
    }
    /**
     * QA/manual-verification hook: `?calendar=islamic-umalqura|gregory` and `?numbers=arab|latn|
     * arabext|auto` in the URL set the persisted preferences once, on load. `<ir-locale-switcher>`
     * is the interactive equivalent.
     */
    static applyUrlOverrideIfPresent() {
        try {
            const params = new URLSearchParams(window.location.search);
            const param = params.get('calendar');
            if (param === 'gregory' || param === 'islamic-umalqura') {
                persistOverride(param);
            }
            const numbers = parseNumberingSystem(params.get('numbers'));
            if (numbers) {
                persistNumberingSystem(numbers);
            }
        }
        catch {
            // URLSearchParams/window.location unavailable in this environment — skip.
        }
    }
}

/**
 * Tracks `<html lang>` with a single shared `MutationObserver` and fans changes out
 * to every subscriber, instead of each component wiring up its own observer.
 *
 * Usage inside a Stencil component:
 *   componentDidLoad() {
 *     this.unsubscribeLang = LanguageObserver.subscribe(lang => this.handleLangChange(lang));
 *   }
 *   disconnectedCallback() {
 *     this.unsubscribeLang?.();
 *   }
 */
class LanguageObserver {
    static observer;
    static listeners = new Set();
    /** Current `<html lang>` value, or `'en'` if unset. */
    static getLang() {
        return document.documentElement.lang || 'en';
    }
    /** Subscribes to `<html lang>` changes. Returns an unsubscribe function. */
    static subscribe(listener) {
        this.listeners.add(listener);
        this.ensureObserver();
        return () => this.unsubscribe(listener);
    }
    static unsubscribe(listener) {
        this.listeners.delete(listener);
        if (this.listeners.size === 0) {
            this.observer?.disconnect();
            this.observer = undefined;
        }
    }
    static ensureObserver() {
        if (this.observer || typeof MutationObserver === 'undefined')
            return;
        this.observer = new MutationObserver(() => {
            const lang = this.getLang();
            this.listeners.forEach(listener => listener(lang));
        });
        this.observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    }
}

var momentHijri$2 = {exports: {}};

function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var moment$1 = {exports: {}};

var moment = moment$1.exports;

var hasRequiredMoment;

function requireMoment () {
	if (hasRequiredMoment) return moment$1.exports;
	hasRequiredMoment = 1;
	(function (module, exports) {
(function (global, factory) {
		    module.exports = factory() ;
		}(moment, (function () {
		    var hookCallback;

		    function hooks() {
		        return hookCallback.apply(null, arguments);
		    }

		    // This is done to register the method called with moment()
		    // without creating circular dependencies.
		    function setHookCallback(callback) {
		        hookCallback = callback;
		    }

		    function isArray(input) {
		        return (
		            input instanceof Array ||
		            Object.prototype.toString.call(input) === '[object Array]'
		        );
		    }

		    function isObject(input) {
		        // IE8 will treat undefined and null as object if it wasn't for
		        // input != null
		        return (
		            input != null &&
		            Object.prototype.toString.call(input) === '[object Object]'
		        );
		    }

		    function hasOwnProp(a, b) {
		        return Object.prototype.hasOwnProperty.call(a, b);
		    }

		    function isObjectEmpty(obj) {
		        if (Object.getOwnPropertyNames) {
		            return Object.getOwnPropertyNames(obj).length === 0;
		        } else {
		            var k;
		            for (k in obj) {
		                if (hasOwnProp(obj, k)) {
		                    return false;
		                }
		            }
		            return true;
		        }
		    }

		    function isUndefined(input) {
		        return input === void 0;
		    }

		    function isNumber(input) {
		        return (
		            typeof input === 'number' ||
		            Object.prototype.toString.call(input) === '[object Number]'
		        );
		    }

		    function isDate(input) {
		        return (
		            input instanceof Date ||
		            Object.prototype.toString.call(input) === '[object Date]'
		        );
		    }

		    function map(arr, fn) {
		        var res = [],
		            i,
		            arrLen = arr.length;
		        for (i = 0; i < arrLen; ++i) {
		            res.push(fn(arr[i], i));
		        }
		        return res;
		    }

		    function extend(a, b) {
		        for (var i in b) {
		            if (hasOwnProp(b, i)) {
		                a[i] = b[i];
		            }
		        }

		        if (hasOwnProp(b, 'toString')) {
		            a.toString = b.toString;
		        }

		        if (hasOwnProp(b, 'valueOf')) {
		            a.valueOf = b.valueOf;
		        }

		        return a;
		    }

		    function createUTC(input, format, locale, strict) {
		        return createLocalOrUTC(input, format, locale, strict, true).utc();
		    }

		    function defaultParsingFlags() {
		        // We need to deep clone this object.
		        return {
		            empty: false,
		            unusedTokens: [],
		            unusedInput: [],
		            overflow: -2,
		            charsLeftOver: 0,
		            nullInput: false,
		            invalidEra: null,
		            invalidMonth: null,
		            invalidFormat: false,
		            userInvalidated: false,
		            iso: false,
		            parsedDateParts: [],
		            era: null,
		            meridiem: null,
		            rfc2822: false,
		            weekdayMismatch: false,
		        };
		    }

		    function getParsingFlags(m) {
		        if (m._pf == null) {
		            m._pf = defaultParsingFlags();
		        }
		        return m._pf;
		    }

		    var some;
		    if (Array.prototype.some) {
		        some = Array.prototype.some;
		    } else {
		        some = function (fun) {
		            var t = Object(this),
		                len = t.length >>> 0,
		                i;

		            for (i = 0; i < len; i++) {
		                if (i in t && fun.call(this, t[i], i, t)) {
		                    return true;
		                }
		            }

		            return false;
		        };
		    }

		    function isValid(m) {
		        var flags = null,
		            parsedParts = false,
		            isNowValid = m._d && !isNaN(m._d.getTime());
		        if (isNowValid) {
		            flags = getParsingFlags(m);
		            parsedParts = some.call(flags.parsedDateParts, function (i) {
		                return i != null;
		            });
		            isNowValid =
		                flags.overflow < 0 &&
		                !flags.empty &&
		                !flags.invalidEra &&
		                !flags.invalidMonth &&
		                !flags.invalidWeekday &&
		                !flags.weekdayMismatch &&
		                !flags.nullInput &&
		                !flags.invalidFormat &&
		                !flags.userInvalidated &&
		                (!flags.meridiem || (flags.meridiem && parsedParts));
		            if (m._strict) {
		                isNowValid =
		                    isNowValid &&
		                    flags.charsLeftOver === 0 &&
		                    flags.unusedTokens.length === 0 &&
		                    flags.bigHour === undefined;
		            }
		        }
		        if (Object.isFrozen == null || !Object.isFrozen(m)) {
		            m._isValid = isNowValid;
		        } else {
		            return isNowValid;
		        }
		        return m._isValid;
		    }

		    function createInvalid(flags) {
		        var m = createUTC(NaN);
		        if (flags != null) {
		            extend(getParsingFlags(m), flags);
		        } else {
		            getParsingFlags(m).userInvalidated = true;
		        }

		        return m;
		    }

		    // Plugins that add properties should also add the key here (null value),
		    // so we can properly clone ourselves.
		    var momentProperties = (hooks.momentProperties = []),
		        updateInProgress = false;

		    function copyConfig(to, from) {
		        var i,
		            prop,
		            val,
		            momentPropertiesLen = momentProperties.length;

		        if (!isUndefined(from._isAMomentObject)) {
		            to._isAMomentObject = from._isAMomentObject;
		        }
		        if (!isUndefined(from._i)) {
		            to._i = from._i;
		        }
		        if (!isUndefined(from._f)) {
		            to._f = from._f;
		        }
		        if (!isUndefined(from._l)) {
		            to._l = from._l;
		        }
		        if (!isUndefined(from._strict)) {
		            to._strict = from._strict;
		        }
		        if (!isUndefined(from._tzm)) {
		            to._tzm = from._tzm;
		        }
		        if (!isUndefined(from._isUTC)) {
		            to._isUTC = from._isUTC;
		        }
		        if (!isUndefined(from._offset)) {
		            to._offset = from._offset;
		        }
		        if (!isUndefined(from._pf)) {
		            to._pf = getParsingFlags(from);
		        }
		        if (!isUndefined(from._locale)) {
		            to._locale = from._locale;
		        }

		        if (momentPropertiesLen > 0) {
		            for (i = 0; i < momentPropertiesLen; i++) {
		                prop = momentProperties[i];
		                val = from[prop];
		                if (!isUndefined(val)) {
		                    to[prop] = val;
		                }
		            }
		        }

		        return to;
		    }

		    // Moment prototype object
		    function Moment(config) {
		        copyConfig(this, config);
		        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
		        if (!this.isValid()) {
		            this._d = new Date(NaN);
		        }
		        // Prevent infinite loop in case updateOffset creates new moment
		        // objects.
		        if (updateInProgress === false) {
		            updateInProgress = true;
		            hooks.updateOffset(this);
		            updateInProgress = false;
		        }
		    }

		    function isMoment(obj) {
		        return (
		            obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
		        );
		    }

		    function warn(msg) {
		        if (
		            hooks.suppressDeprecationWarnings === false &&
		            typeof console !== 'undefined' &&
		            console.warn
		        ) {
		            console.warn('Deprecation warning: ' + msg);
		        }
		    }

		    function deprecate(msg, fn) {
		        var firstTime = true;

		        return extend(function () {
		            if (hooks.deprecationHandler != null) {
		                hooks.deprecationHandler(null, msg);
		            }
		            if (firstTime) {
		                var args = [],
		                    arg,
		                    i,
		                    key,
		                    argLen = arguments.length;
		                for (i = 0; i < argLen; i++) {
		                    arg = '';
		                    if (typeof arguments[i] === 'object') {
		                        arg += '\n[' + i + '] ';
		                        for (key in arguments[0]) {
		                            if (hasOwnProp(arguments[0], key)) {
		                                arg += key + ': ' + arguments[0][key] + ', ';
		                            }
		                        }
		                        arg = arg.slice(0, -2); // Remove trailing comma and space
		                    } else {
		                        arg = arguments[i];
		                    }
		                    args.push(arg);
		                }
		                warn(
		                    msg +
		                        '\nArguments: ' +
		                        Array.prototype.slice.call(args).join('') +
		                        '\n' +
		                        new Error().stack
		                );
		                firstTime = false;
		            }
		            return fn.apply(this, arguments);
		        }, fn);
		    }

		    var deprecations = {};

		    function deprecateSimple(name, msg) {
		        if (hooks.deprecationHandler != null) {
		            hooks.deprecationHandler(name, msg);
		        }
		        if (!deprecations[name]) {
		            warn(msg);
		            deprecations[name] = true;
		        }
		    }

		    hooks.suppressDeprecationWarnings = false;
		    hooks.deprecationHandler = null;

		    function isFunction(input) {
		        return (
		            (typeof Function !== 'undefined' && input instanceof Function) ||
		            Object.prototype.toString.call(input) === '[object Function]'
		        );
		    }

		    function set(config) {
		        var prop, i;
		        for (i in config) {
		            if (hasOwnProp(config, i)) {
		                prop = config[i];
		                if (isFunction(prop)) {
		                    this[i] = prop;
		                } else {
		                    this['_' + i] = prop;
		                }
		            }
		        }
		        this._config = config;
		        // Lenient ordinal parsing accepts just a number in addition to
		        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
		        // TODO: Remove "ordinalParse" fallback in next major release.
		        this._dayOfMonthOrdinalParseLenient = new RegExp(
		            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
		                '|' +
		                /\d{1,2}/.source
		        );
		    }

		    function mergeConfigs(parentConfig, childConfig) {
		        var res = extend({}, parentConfig),
		            prop;
		        for (prop in childConfig) {
		            if (hasOwnProp(childConfig, prop)) {
		                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
		                    res[prop] = {};
		                    extend(res[prop], parentConfig[prop]);
		                    extend(res[prop], childConfig[prop]);
		                } else if (childConfig[prop] != null) {
		                    res[prop] = childConfig[prop];
		                } else {
		                    delete res[prop];
		                }
		            }
		        }
		        for (prop in parentConfig) {
		            if (
		                hasOwnProp(parentConfig, prop) &&
		                !hasOwnProp(childConfig, prop) &&
		                isObject(parentConfig[prop])
		            ) {
		                // make sure changes to properties don't modify parent config
		                res[prop] = extend({}, res[prop]);
		            }
		        }
		        return res;
		    }

		    function Locale(config) {
		        if (config != null) {
		            this.set(config);
		        }
		    }

		    var keys;

		    if (Object.keys) {
		        keys = Object.keys;
		    } else {
		        keys = function (obj) {
		            var i,
		                res = [];
		            for (i in obj) {
		                if (hasOwnProp(obj, i)) {
		                    res.push(i);
		                }
		            }
		            return res;
		        };
		    }

		    var defaultCalendar = {
		        sameDay: '[Today at] LT',
		        nextDay: '[Tomorrow at] LT',
		        nextWeek: 'dddd [at] LT',
		        lastDay: '[Yesterday at] LT',
		        lastWeek: '[Last] dddd [at] LT',
		        sameElse: 'L',
		    };

		    function calendar(key, mom, now) {
		        var output = this._calendar[key] || this._calendar['sameElse'];
		        return isFunction(output) ? output.call(mom, now) : output;
		    }

		    function zeroFill(number, targetLength, forceSign) {
		        var absNumber = '' + Math.abs(number),
		            zerosToFill = targetLength - absNumber.length,
		            sign = number >= 0;
		        return (
		            (sign ? (forceSign ? '+' : '') : '-') +
		            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
		            absNumber
		        );
		    }

		    var formattingTokens =
		            /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
		        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
		        formatFunctions = {},
		        formatTokenFunctions = {};

		    // token:    'M'
		    // padded:   ['MM', 2]
		    // ordinal:  'Mo'
		    // callback: function () { this.month() + 1 }
		    function addFormatToken(token, padded, ordinal, callback) {
		        var func = callback;
		        if (typeof callback === 'string') {
		            func = function () {
		                return this[callback]();
		            };
		        }
		        if (token) {
		            formatTokenFunctions[token] = func;
		        }
		        if (padded) {
		            formatTokenFunctions[padded[0]] = function () {
		                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
		            };
		        }
		        if (ordinal) {
		            formatTokenFunctions[ordinal] = function () {
		                return this.localeData().ordinal(
		                    func.apply(this, arguments),
		                    token
		                );
		            };
		        }
		    }

		    function removeFormattingTokens(input) {
		        if (input.match(/\[[\s\S]/)) {
		            return input.replace(/^\[|\]$/g, '');
		        }
		        return input.replace(/\\/g, '');
		    }

		    function makeFormatFunction(format) {
		        var array = format.match(formattingTokens),
		            i,
		            length;

		        for (i = 0, length = array.length; i < length; i++) {
		            if (formatTokenFunctions[array[i]]) {
		                array[i] = formatTokenFunctions[array[i]];
		            } else {
		                array[i] = removeFormattingTokens(array[i]);
		            }
		        }

		        return function (mom) {
		            var output = '',
		                i;
		            for (i = 0; i < length; i++) {
		                output += isFunction(array[i])
		                    ? array[i].call(mom, format)
		                    : array[i];
		            }
		            return output;
		        };
		    }

		    // format date using native date object
		    function formatMoment(m, format) {
		        if (!m.isValid()) {
		            return m.localeData().invalidDate();
		        }

		        format = expandFormat(format, m.localeData());
		        formatFunctions[format] =
		            formatFunctions[format] || makeFormatFunction(format);

		        return formatFunctions[format](m);
		    }

		    function expandFormat(format, locale) {
		        var i = 5;

		        function replaceLongDateFormatTokens(input) {
		            return locale.longDateFormat(input) || input;
		        }

		        localFormattingTokens.lastIndex = 0;
		        while (i >= 0 && localFormattingTokens.test(format)) {
		            format = format.replace(
		                localFormattingTokens,
		                replaceLongDateFormatTokens
		            );
		            localFormattingTokens.lastIndex = 0;
		            i -= 1;
		        }

		        return format;
		    }

		    var defaultLongDateFormat = {
		        LTS: 'h:mm:ss A',
		        LT: 'h:mm A',
		        L: 'MM/DD/YYYY',
		        LL: 'MMMM D, YYYY',
		        LLL: 'MMMM D, YYYY h:mm A',
		        LLLL: 'dddd, MMMM D, YYYY h:mm A',
		    };

		    function longDateFormat(key) {
		        var format = this._longDateFormat[key],
		            formatUpper = this._longDateFormat[key.toUpperCase()];

		        if (format || !formatUpper) {
		            return format;
		        }

		        this._longDateFormat[key] = formatUpper
		            .match(formattingTokens)
		            .map(function (tok) {
		                if (
		                    tok === 'MMMM' ||
		                    tok === 'MM' ||
		                    tok === 'DD' ||
		                    tok === 'dddd'
		                ) {
		                    return tok.slice(1);
		                }
		                return tok;
		            })
		            .join('');

		        return this._longDateFormat[key];
		    }

		    var defaultInvalidDate = 'Invalid date';

		    function invalidDate() {
		        return this._invalidDate;
		    }

		    var defaultOrdinal = '%d',
		        defaultDayOfMonthOrdinalParse = /\d{1,2}/;

		    function ordinal(number) {
		        return this._ordinal.replace('%d', number);
		    }

		    var defaultRelativeTime = {
		        future: 'in %s',
		        past: '%s ago',
		        s: 'a few seconds',
		        ss: '%d seconds',
		        m: 'a minute',
		        mm: '%d minutes',
		        h: 'an hour',
		        hh: '%d hours',
		        d: 'a day',
		        dd: '%d days',
		        w: 'a week',
		        ww: '%d weeks',
		        M: 'a month',
		        MM: '%d months',
		        y: 'a year',
		        yy: '%d years',
		    };

		    function relativeTime(number, withoutSuffix, string, isFuture) {
		        var output = this._relativeTime[string];
		        return isFunction(output)
		            ? output(number, withoutSuffix, string, isFuture)
		            : output.replace(/%d/i, number);
		    }

		    function pastFuture(diff, output) {
		        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
		        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
		    }

		    var aliases = {
		        D: 'date',
		        dates: 'date',
		        date: 'date',
		        d: 'day',
		        days: 'day',
		        day: 'day',
		        e: 'weekday',
		        weekdays: 'weekday',
		        weekday: 'weekday',
		        E: 'isoWeekday',
		        isoweekdays: 'isoWeekday',
		        isoweekday: 'isoWeekday',
		        DDD: 'dayOfYear',
		        dayofyears: 'dayOfYear',
		        dayofyear: 'dayOfYear',
		        h: 'hour',
		        hours: 'hour',
		        hour: 'hour',
		        ms: 'millisecond',
		        milliseconds: 'millisecond',
		        millisecond: 'millisecond',
		        m: 'minute',
		        minutes: 'minute',
		        minute: 'minute',
		        M: 'month',
		        months: 'month',
		        month: 'month',
		        Q: 'quarter',
		        quarters: 'quarter',
		        quarter: 'quarter',
		        s: 'second',
		        seconds: 'second',
		        second: 'second',
		        gg: 'weekYear',
		        weekyears: 'weekYear',
		        weekyear: 'weekYear',
		        GG: 'isoWeekYear',
		        isoweekyears: 'isoWeekYear',
		        isoweekyear: 'isoWeekYear',
		        w: 'week',
		        weeks: 'week',
		        week: 'week',
		        W: 'isoWeek',
		        isoweeks: 'isoWeek',
		        isoweek: 'isoWeek',
		        y: 'year',
		        years: 'year',
		        year: 'year',
		    };

		    function normalizeUnits(units) {
		        return typeof units === 'string'
		            ? aliases[units] || aliases[units.toLowerCase()]
		            : undefined;
		    }

		    function normalizeObjectUnits(inputObject) {
		        var normalizedInput = {},
		            normalizedProp,
		            prop;

		        for (prop in inputObject) {
		            if (hasOwnProp(inputObject, prop)) {
		                normalizedProp = normalizeUnits(prop);
		                if (normalizedProp) {
		                    normalizedInput[normalizedProp] = inputObject[prop];
		                }
		            }
		        }

		        return normalizedInput;
		    }

		    var priorities = {
		        date: 9,
		        day: 11,
		        weekday: 11,
		        isoWeekday: 11,
		        dayOfYear: 4,
		        hour: 13,
		        millisecond: 16,
		        minute: 14,
		        month: 8,
		        quarter: 7,
		        second: 15,
		        weekYear: 1,
		        isoWeekYear: 1,
		        week: 5,
		        isoWeek: 5,
		        year: 1,
		    };

		    function getPrioritizedUnits(unitsObj) {
		        var units = [],
		            u;
		        for (u in unitsObj) {
		            if (hasOwnProp(unitsObj, u)) {
		                units.push({ unit: u, priority: priorities[u] });
		            }
		        }
		        units.sort(function (a, b) {
		            return a.priority - b.priority;
		        });
		        return units;
		    }

		    var match1 = /\d/, //       0 - 9
		        match2 = /\d\d/, //      00 - 99
		        match3 = /\d{3}/, //     000 - 999
		        match4 = /\d{4}/, //    0000 - 9999
		        match6 = /[+-]?\d{6}/, // -999999 - 999999
		        match1to2 = /\d\d?/, //       0 - 99
		        match3to4 = /\d\d\d\d?/, //     999 - 9999
		        match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
		        match1to3 = /\d{1,3}/, //       0 - 999
		        match1to4 = /\d{1,4}/, //       0 - 9999
		        match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
		        matchUnsigned = /\d+/, //       0 - inf
		        matchSigned = /[+-]?\d+/, //    -inf - inf
		        matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
		        matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
		        matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
		        // any word (or two) characters or numbers including two/three word month in arabic.
		        // includes scottish gaelic two word and hyphenated months
		        matchWord =
		            /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
		        match1to2NoLeadingZero = /^[1-9]\d?/, //         1-99
		        match1to2HasZero = /^([1-9]\d|\d)/, //           0-99
		        regexes;

		    regexes = {};

		    function addRegexToken(token, regex, strictRegex) {
		        regexes[token] = isFunction(regex)
		            ? regex
		            : function (isStrict, localeData) {
		                  return isStrict && strictRegex ? strictRegex : regex;
		              };
		    }

		    function getParseRegexForToken(token, config) {
		        if (!hasOwnProp(regexes, token)) {
		            return new RegExp(unescapeFormat(token));
		        }

		        return regexes[token](config._strict, config._locale);
		    }

		    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
		    function unescapeFormat(s) {
		        return regexEscape(
		            s
		                .replace('\\', '')
		                .replace(
		                    /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
		                    function (matched, p1, p2, p3, p4) {
		                        return p1 || p2 || p3 || p4;
		                    }
		                )
		        );
		    }

		    function regexEscape(s) {
		        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
		    }

		    function absFloor(number) {
		        if (number < 0) {
		            // -0 -> 0
		            return Math.ceil(number) || 0;
		        } else {
		            return Math.floor(number);
		        }
		    }

		    function toInt(argumentForCoercion) {
		        var coercedNumber = +argumentForCoercion,
		            value = 0;

		        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
		            value = absFloor(coercedNumber);
		        }

		        return value;
		    }

		    var tokens = {};

		    function addParseToken(token, callback) {
		        var i,
		            func = callback,
		            tokenLen;
		        if (typeof token === 'string') {
		            token = [token];
		        }
		        if (isNumber(callback)) {
		            func = function (input, array) {
		                array[callback] = toInt(input);
		            };
		        }
		        tokenLen = token.length;
		        for (i = 0; i < tokenLen; i++) {
		            tokens[token[i]] = func;
		        }
		    }

		    function addWeekParseToken(token, callback) {
		        addParseToken(token, function (input, array, config, token) {
		            config._w = config._w || {};
		            callback(input, config._w, config, token);
		        });
		    }

		    function addTimeToArrayFromToken(token, input, config) {
		        if (input != null && hasOwnProp(tokens, token)) {
		            tokens[token](input, config._a, config, token);
		        }
		    }

		    function isLeapYear(year) {
		        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
		    }

		    var YEAR = 0,
		        MONTH = 1,
		        DATE = 2,
		        HOUR = 3,
		        MINUTE = 4,
		        SECOND = 5,
		        MILLISECOND = 6,
		        WEEK = 7,
		        WEEKDAY = 8;

		    // FORMATTING

		    addFormatToken('Y', 0, 0, function () {
		        var y = this.year();
		        return y <= 9999 ? zeroFill(y, 4) : '+' + y;
		    });

		    addFormatToken(0, ['YY', 2], 0, function () {
		        return this.year() % 100;
		    });

		    addFormatToken(0, ['YYYY', 4], 0, 'year');
		    addFormatToken(0, ['YYYYY', 5], 0, 'year');
		    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

		    // PARSING

		    addRegexToken('Y', matchSigned);
		    addRegexToken('YY', match1to2, match2);
		    addRegexToken('YYYY', match1to4, match4);
		    addRegexToken('YYYYY', match1to6, match6);
		    addRegexToken('YYYYYY', match1to6, match6);

		    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
		    addParseToken('YYYY', function (input, array) {
		        array[YEAR] =
		            input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
		    });
		    addParseToken('YY', function (input, array) {
		        array[YEAR] = hooks.parseTwoDigitYear(input);
		    });
		    addParseToken('Y', function (input, array) {
		        array[YEAR] = parseInt(input, 10);
		    });

		    // HELPERS

		    function daysInYear(year) {
		        return isLeapYear(year) ? 366 : 365;
		    }

		    // HOOKS

		    hooks.parseTwoDigitYear = function (input) {
		        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
		    };

		    // MOMENTS

		    var getSetYear = makeGetSet('FullYear', true);

		    function getIsLeapYear() {
		        return isLeapYear(this.year());
		    }

		    function makeGetSet(unit, keepTime) {
		        return function (value) {
		            if (value != null) {
		                set$1(this, unit, value);
		                hooks.updateOffset(this, keepTime);
		                return this;
		            } else {
		                return get(this, unit);
		            }
		        };
		    }

		    function get(mom, unit) {
		        if (!mom.isValid()) {
		            return NaN;
		        }

		        var d = mom._d,
		            isUTC = mom._isUTC;

		        switch (unit) {
		            case 'Milliseconds':
		                return isUTC ? d.getUTCMilliseconds() : d.getMilliseconds();
		            case 'Seconds':
		                return isUTC ? d.getUTCSeconds() : d.getSeconds();
		            case 'Minutes':
		                return isUTC ? d.getUTCMinutes() : d.getMinutes();
		            case 'Hours':
		                return isUTC ? d.getUTCHours() : d.getHours();
		            case 'Date':
		                return isUTC ? d.getUTCDate() : d.getDate();
		            case 'Day':
		                return isUTC ? d.getUTCDay() : d.getDay();
		            case 'Month':
		                return isUTC ? d.getUTCMonth() : d.getMonth();
		            case 'FullYear':
		                return isUTC ? d.getUTCFullYear() : d.getFullYear();
		            default:
		                return NaN; // Just in case
		        }
		    }

		    function set$1(mom, unit, value) {
		        var d, isUTC, year, month, date;

		        if (!mom.isValid() || isNaN(value)) {
		            return;
		        }

		        d = mom._d;
		        isUTC = mom._isUTC;

		        switch (unit) {
		            case 'Milliseconds':
		                return void (isUTC
		                    ? d.setUTCMilliseconds(value)
		                    : d.setMilliseconds(value));
		            case 'Seconds':
		                return void (isUTC ? d.setUTCSeconds(value) : d.setSeconds(value));
		            case 'Minutes':
		                return void (isUTC ? d.setUTCMinutes(value) : d.setMinutes(value));
		            case 'Hours':
		                return void (isUTC ? d.setUTCHours(value) : d.setHours(value));
		            case 'Date':
		                return void (isUTC ? d.setUTCDate(value) : d.setDate(value));
		            // case 'Day': // Not real
		            //    return void (isUTC ? d.setUTCDay(value) : d.setDay(value));
		            // case 'Month': // Not used because we need to pass two variables
		            //     return void (isUTC ? d.setUTCMonth(value) : d.setMonth(value));
		            case 'FullYear':
		                break; // See below ...
		            default:
		                return; // Just in case
		        }

		        year = value;
		        month = mom.month();
		        date = mom.date();
		        date = date === 29 && month === 1 && !isLeapYear(year) ? 28 : date;
		        void (isUTC
		            ? d.setUTCFullYear(year, month, date)
		            : d.setFullYear(year, month, date));
		    }

		    // MOMENTS

		    function stringGet(units) {
		        units = normalizeUnits(units);
		        if (isFunction(this[units])) {
		            return this[units]();
		        }
		        return this;
		    }

		    function stringSet(units, value) {
		        if (typeof units === 'object') {
		            units = normalizeObjectUnits(units);
		            var prioritized = getPrioritizedUnits(units),
		                i,
		                prioritizedLen = prioritized.length;
		            for (i = 0; i < prioritizedLen; i++) {
		                this[prioritized[i].unit](units[prioritized[i].unit]);
		            }
		        } else {
		            units = normalizeUnits(units);
		            if (isFunction(this[units])) {
		                return this[units](value);
		            }
		        }
		        return this;
		    }

		    function mod(n, x) {
		        return ((n % x) + x) % x;
		    }

		    var indexOf;

		    if (Array.prototype.indexOf) {
		        indexOf = Array.prototype.indexOf;
		    } else {
		        indexOf = function (o) {
		            // I know
		            var i;
		            for (i = 0; i < this.length; ++i) {
		                if (this[i] === o) {
		                    return i;
		                }
		            }
		            return -1;
		        };
		    }

		    function daysInMonth(year, month) {
		        if (isNaN(year) || isNaN(month)) {
		            return NaN;
		        }
		        var modMonth = mod(month, 12);
		        year += (month - modMonth) / 12;
		        return modMonth === 1
		            ? isLeapYear(year)
		                ? 29
		                : 28
		            : 31 - ((modMonth % 7) % 2);
		    }

		    // FORMATTING

		    addFormatToken('M', ['MM', 2], 'Mo', function () {
		        return this.month() + 1;
		    });

		    addFormatToken('MMM', 0, 0, function (format) {
		        return this.localeData().monthsShort(this, format);
		    });

		    addFormatToken('MMMM', 0, 0, function (format) {
		        return this.localeData().months(this, format);
		    });

		    // PARSING

		    addRegexToken('M', match1to2, match1to2NoLeadingZero);
		    addRegexToken('MM', match1to2, match2);
		    addRegexToken('MMM', function (isStrict, locale) {
		        return locale.monthsShortRegex(isStrict);
		    });
		    addRegexToken('MMMM', function (isStrict, locale) {
		        return locale.monthsRegex(isStrict);
		    });

		    addParseToken(['M', 'MM'], function (input, array) {
		        array[MONTH] = toInt(input) - 1;
		    });

		    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
		        var month = config._locale.monthsParse(input, token, config._strict);
		        // if we didn't find a month name, mark the date as invalid.
		        if (month != null) {
		            array[MONTH] = month;
		        } else {
		            getParsingFlags(config).invalidMonth = input;
		        }
		    });

		    // LOCALES

		    var defaultLocaleMonths =
		            'January_February_March_April_May_June_July_August_September_October_November_December'.split(
		                '_'
		            ),
		        defaultLocaleMonthsShort =
		            'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
		        MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
		        defaultMonthsShortRegex = matchWord,
		        defaultMonthsRegex = matchWord;

		    function localeMonths(m, format) {
		        if (!m) {
		            return isArray(this._months)
		                ? this._months
		                : this._months['standalone'];
		        }
		        return isArray(this._months)
		            ? this._months[m.month()]
		            : this._months[
		                  (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
		                      ? 'format'
		                      : 'standalone'
		              ][m.month()];
		    }

		    function localeMonthsShort(m, format) {
		        if (!m) {
		            return isArray(this._monthsShort)
		                ? this._monthsShort
		                : this._monthsShort['standalone'];
		        }
		        return isArray(this._monthsShort)
		            ? this._monthsShort[m.month()]
		            : this._monthsShort[
		                  MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
		              ][m.month()];
		    }

		    function handleStrictParse(monthName, format, strict) {
		        var i,
		            ii,
		            mom,
		            llc = monthName.toLocaleLowerCase();
		        if (!this._monthsParse) {
		            // this is not used
		            this._monthsParse = [];
		            this._longMonthsParse = [];
		            this._shortMonthsParse = [];
		            for (i = 0; i < 12; ++i) {
		                mom = createUTC([2000, i]);
		                this._shortMonthsParse[i] = this.monthsShort(
		                    mom,
		                    ''
		                ).toLocaleLowerCase();
		                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
		            }
		        }

		        if (strict) {
		            if (format === 'MMM') {
		                ii = indexOf.call(this._shortMonthsParse, llc);
		                return ii !== -1 ? ii : null;
		            } else {
		                ii = indexOf.call(this._longMonthsParse, llc);
		                return ii !== -1 ? ii : null;
		            }
		        } else {
		            if (format === 'MMM') {
		                ii = indexOf.call(this._shortMonthsParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._longMonthsParse, llc);
		                return ii !== -1 ? ii : null;
		            } else {
		                ii = indexOf.call(this._longMonthsParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._shortMonthsParse, llc);
		                return ii !== -1 ? ii : null;
		            }
		        }
		    }

		    function localeMonthsParse(monthName, format, strict) {
		        var i, mom, regex;

		        if (this._monthsParseExact) {
		            return handleStrictParse.call(this, monthName, format, strict);
		        }

		        if (!this._monthsParse) {
		            this._monthsParse = [];
		            this._longMonthsParse = [];
		            this._shortMonthsParse = [];
		        }

		        // TODO: add sorting
		        // Sorting makes sure if one month (or abbr) is a prefix of another
		        // see sorting in computeMonthsParse
		        for (i = 0; i < 12; i++) {
		            // make the regex if we don't have it already
		            mom = createUTC([2000, i]);
		            if (strict && !this._longMonthsParse[i]) {
		                this._longMonthsParse[i] = new RegExp(
		                    '^' + this.months(mom, '').replace('.', '') + '$',
		                    'i'
		                );
		                this._shortMonthsParse[i] = new RegExp(
		                    '^' + this.monthsShort(mom, '').replace('.', '') + '$',
		                    'i'
		                );
		            }
		            if (!strict && !this._monthsParse[i]) {
		                regex =
		                    '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
		                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
		            }
		            // test the regex
		            if (
		                strict &&
		                format === 'MMMM' &&
		                this._longMonthsParse[i].test(monthName)
		            ) {
		                return i;
		            } else if (
		                strict &&
		                format === 'MMM' &&
		                this._shortMonthsParse[i].test(monthName)
		            ) {
		                return i;
		            } else if (!strict && this._monthsParse[i].test(monthName)) {
		                return i;
		            }
		        }
		    }

		    // MOMENTS

		    function setMonth(mom, value) {
		        if (!mom.isValid()) {
		            // No op
		            return mom;
		        }

		        if (typeof value === 'string') {
		            if (/^\d+$/.test(value)) {
		                value = toInt(value);
		            } else {
		                value = mom.localeData().monthsParse(value);
		                // TODO: Another silent failure?
		                if (!isNumber(value)) {
		                    return mom;
		                }
		            }
		        }

		        var month = value,
		            date = mom.date();

		        date = date < 29 ? date : Math.min(date, daysInMonth(mom.year(), month));
		        void (mom._isUTC
		            ? mom._d.setUTCMonth(month, date)
		            : mom._d.setMonth(month, date));
		        return mom;
		    }

		    function getSetMonth(value) {
		        if (value != null) {
		            setMonth(this, value);
		            hooks.updateOffset(this, true);
		            return this;
		        } else {
		            return get(this, 'Month');
		        }
		    }

		    function getDaysInMonth() {
		        return daysInMonth(this.year(), this.month());
		    }

		    function monthsShortRegex(isStrict) {
		        if (this._monthsParseExact) {
		            if (!hasOwnProp(this, '_monthsRegex')) {
		                computeMonthsParse.call(this);
		            }
		            if (isStrict) {
		                return this._monthsShortStrictRegex;
		            } else {
		                return this._monthsShortRegex;
		            }
		        } else {
		            if (!hasOwnProp(this, '_monthsShortRegex')) {
		                this._monthsShortRegex = defaultMonthsShortRegex;
		            }
		            return this._monthsShortStrictRegex && isStrict
		                ? this._monthsShortStrictRegex
		                : this._monthsShortRegex;
		        }
		    }

		    function monthsRegex(isStrict) {
		        if (this._monthsParseExact) {
		            if (!hasOwnProp(this, '_monthsRegex')) {
		                computeMonthsParse.call(this);
		            }
		            if (isStrict) {
		                return this._monthsStrictRegex;
		            } else {
		                return this._monthsRegex;
		            }
		        } else {
		            if (!hasOwnProp(this, '_monthsRegex')) {
		                this._monthsRegex = defaultMonthsRegex;
		            }
		            return this._monthsStrictRegex && isStrict
		                ? this._monthsStrictRegex
		                : this._monthsRegex;
		        }
		    }

		    function computeMonthsParse() {
		        function cmpLenRev(a, b) {
		            return b.length - a.length;
		        }

		        var shortPieces = [],
		            longPieces = [],
		            mixedPieces = [],
		            i,
		            mom,
		            shortP,
		            longP;
		        for (i = 0; i < 12; i++) {
		            // make the regex if we don't have it already
		            mom = createUTC([2000, i]);
		            shortP = regexEscape(this.monthsShort(mom, ''));
		            longP = regexEscape(this.months(mom, ''));
		            shortPieces.push(shortP);
		            longPieces.push(longP);
		            mixedPieces.push(longP);
		            mixedPieces.push(shortP);
		        }
		        // Sorting makes sure if one month (or abbr) is a prefix of another it
		        // will match the longer piece.
		        shortPieces.sort(cmpLenRev);
		        longPieces.sort(cmpLenRev);
		        mixedPieces.sort(cmpLenRev);

		        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
		        this._monthsShortRegex = this._monthsRegex;
		        this._monthsStrictRegex = new RegExp(
		            '^(' + longPieces.join('|') + ')',
		            'i'
		        );
		        this._monthsShortStrictRegex = new RegExp(
		            '^(' + shortPieces.join('|') + ')',
		            'i'
		        );
		    }

		    function createDate(y, m, d, h, M, s, ms) {
		        // can't just apply() to create a date:
		        // https://stackoverflow.com/q/181348
		        var date;
		        // the date constructor remaps years 0-99 to 1900-1999
		        if (y < 100 && y >= 0) {
		            // preserve leap years using a full 400 year cycle, then reset
		            date = new Date(y + 400, m, d, h, M, s, ms);
		            if (isFinite(date.getFullYear())) {
		                date.setFullYear(y);
		            }
		        } else {
		            date = new Date(y, m, d, h, M, s, ms);
		        }

		        return date;
		    }

		    function createUTCDate(y) {
		        var date, args;
		        // the Date.UTC function remaps years 0-99 to 1900-1999
		        if (y < 100 && y >= 0) {
		            args = Array.prototype.slice.call(arguments);
		            // preserve leap years using a full 400 year cycle, then reset
		            args[0] = y + 400;
		            date = new Date(Date.UTC.apply(null, args));
		            if (isFinite(date.getUTCFullYear())) {
		                date.setUTCFullYear(y);
		            }
		        } else {
		            date = new Date(Date.UTC.apply(null, arguments));
		        }

		        return date;
		    }

		    // start-of-first-week - start-of-year
		    function firstWeekOffset(year, dow, doy) {
		        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
		            fwd = 7 + dow - doy,
		            // first-week day local weekday -- which local weekday is fwd
		            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

		        return -fwdlw + fwd - 1;
		    }

		    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
		    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
		        var localWeekday = (7 + weekday - dow) % 7,
		            weekOffset = firstWeekOffset(year, dow, doy),
		            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
		            resYear,
		            resDayOfYear;

		        if (dayOfYear <= 0) {
		            resYear = year - 1;
		            resDayOfYear = daysInYear(resYear) + dayOfYear;
		        } else if (dayOfYear > daysInYear(year)) {
		            resYear = year + 1;
		            resDayOfYear = dayOfYear - daysInYear(year);
		        } else {
		            resYear = year;
		            resDayOfYear = dayOfYear;
		        }

		        return {
		            year: resYear,
		            dayOfYear: resDayOfYear,
		        };
		    }

		    function weekOfYear(mom, dow, doy) {
		        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
		            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
		            resWeek,
		            resYear;

		        if (week < 1) {
		            resYear = mom.year() - 1;
		            resWeek = week + weeksInYear(resYear, dow, doy);
		        } else if (week > weeksInYear(mom.year(), dow, doy)) {
		            resWeek = week - weeksInYear(mom.year(), dow, doy);
		            resYear = mom.year() + 1;
		        } else {
		            resYear = mom.year();
		            resWeek = week;
		        }

		        return {
		            week: resWeek,
		            year: resYear,
		        };
		    }

		    function weeksInYear(year, dow, doy) {
		        var weekOffset = firstWeekOffset(year, dow, doy),
		            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
		        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
		    }

		    // FORMATTING

		    addFormatToken('w', ['ww', 2], 'wo', 'week');
		    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

		    // PARSING

		    addRegexToken('w', match1to2, match1to2NoLeadingZero);
		    addRegexToken('ww', match1to2, match2);
		    addRegexToken('W', match1to2, match1to2NoLeadingZero);
		    addRegexToken('WW', match1to2, match2);

		    addWeekParseToken(
		        ['w', 'ww', 'W', 'WW'],
		        function (input, week, config, token) {
		            week[token.substr(0, 1)] = toInt(input);
		        }
		    );

		    // HELPERS

		    // LOCALES

		    function localeWeek(mom) {
		        return weekOfYear(mom, this._week.dow, this._week.doy).week;
		    }

		    var defaultLocaleWeek = {
		        dow: 0, // Sunday is the first day of the week.
		        doy: 6, // The week that contains Jan 6th is the first week of the year.
		    };

		    function localeFirstDayOfWeek() {
		        return this._week.dow;
		    }

		    function localeFirstDayOfYear() {
		        return this._week.doy;
		    }

		    // MOMENTS

		    function getSetWeek(input) {
		        var week = this.localeData().week(this);
		        return input == null ? week : this.add((input - week) * 7, 'd');
		    }

		    function getSetISOWeek(input) {
		        var week = weekOfYear(this, 1, 4).week;
		        return input == null ? week : this.add((input - week) * 7, 'd');
		    }

		    // FORMATTING

		    addFormatToken('d', 0, 'do', 'day');

		    addFormatToken('dd', 0, 0, function (format) {
		        return this.localeData().weekdaysMin(this, format);
		    });

		    addFormatToken('ddd', 0, 0, function (format) {
		        return this.localeData().weekdaysShort(this, format);
		    });

		    addFormatToken('dddd', 0, 0, function (format) {
		        return this.localeData().weekdays(this, format);
		    });

		    addFormatToken('e', 0, 0, 'weekday');
		    addFormatToken('E', 0, 0, 'isoWeekday');

		    // PARSING

		    addRegexToken('d', match1to2);
		    addRegexToken('e', match1to2);
		    addRegexToken('E', match1to2);
		    addRegexToken('dd', function (isStrict, locale) {
		        return locale.weekdaysMinRegex(isStrict);
		    });
		    addRegexToken('ddd', function (isStrict, locale) {
		        return locale.weekdaysShortRegex(isStrict);
		    });
		    addRegexToken('dddd', function (isStrict, locale) {
		        return locale.weekdaysRegex(isStrict);
		    });

		    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
		        var weekday = config._locale.weekdaysParse(input, token, config._strict);
		        // if we didn't get a weekday name, mark the date as invalid
		        if (weekday != null) {
		            week.d = weekday;
		        } else {
		            getParsingFlags(config).invalidWeekday = input;
		        }
		    });

		    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
		        week[token] = toInt(input);
		    });

		    // HELPERS

		    function parseWeekday(input, locale) {
		        if (typeof input !== 'string') {
		            return input;
		        }

		        if (!isNaN(input)) {
		            return parseInt(input, 10);
		        }

		        input = locale.weekdaysParse(input);
		        if (typeof input === 'number') {
		            return input;
		        }

		        return null;
		    }

		    function parseIsoWeekday(input, locale) {
		        if (typeof input === 'string') {
		            return locale.weekdaysParse(input) % 7 || 7;
		        }
		        return isNaN(input) ? null : input;
		    }

		    // LOCALES
		    function shiftWeekdays(ws, n) {
		        return ws.slice(n, 7).concat(ws.slice(0, n));
		    }

		    var defaultLocaleWeekdays =
		            'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
		        defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
		        defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
		        defaultWeekdaysRegex = matchWord,
		        defaultWeekdaysShortRegex = matchWord,
		        defaultWeekdaysMinRegex = matchWord;

		    function localeWeekdays(m, format) {
		        var weekdays = isArray(this._weekdays)
		            ? this._weekdays
		            : this._weekdays[
		                  m && m !== true && this._weekdays.isFormat.test(format)
		                      ? 'format'
		                      : 'standalone'
		              ];
		        return m === true
		            ? shiftWeekdays(weekdays, this._week.dow)
		            : m
		              ? weekdays[m.day()]
		              : weekdays;
		    }

		    function localeWeekdaysShort(m) {
		        return m === true
		            ? shiftWeekdays(this._weekdaysShort, this._week.dow)
		            : m
		              ? this._weekdaysShort[m.day()]
		              : this._weekdaysShort;
		    }

		    function localeWeekdaysMin(m) {
		        return m === true
		            ? shiftWeekdays(this._weekdaysMin, this._week.dow)
		            : m
		              ? this._weekdaysMin[m.day()]
		              : this._weekdaysMin;
		    }

		    function handleStrictParse$1(weekdayName, format, strict) {
		        var i,
		            ii,
		            mom,
		            llc = weekdayName.toLocaleLowerCase();
		        if (!this._weekdaysParse) {
		            this._weekdaysParse = [];
		            this._shortWeekdaysParse = [];
		            this._minWeekdaysParse = [];

		            for (i = 0; i < 7; ++i) {
		                mom = createUTC([2000, 1]).day(i);
		                this._minWeekdaysParse[i] = this.weekdaysMin(
		                    mom,
		                    ''
		                ).toLocaleLowerCase();
		                this._shortWeekdaysParse[i] = this.weekdaysShort(
		                    mom,
		                    ''
		                ).toLocaleLowerCase();
		                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
		            }
		        }

		        if (strict) {
		            if (format === 'dddd') {
		                ii = indexOf.call(this._weekdaysParse, llc);
		                return ii !== -1 ? ii : null;
		            } else if (format === 'ddd') {
		                ii = indexOf.call(this._shortWeekdaysParse, llc);
		                return ii !== -1 ? ii : null;
		            } else {
		                ii = indexOf.call(this._minWeekdaysParse, llc);
		                return ii !== -1 ? ii : null;
		            }
		        } else {
		            if (format === 'dddd') {
		                ii = indexOf.call(this._weekdaysParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._shortWeekdaysParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._minWeekdaysParse, llc);
		                return ii !== -1 ? ii : null;
		            } else if (format === 'ddd') {
		                ii = indexOf.call(this._shortWeekdaysParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._weekdaysParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._minWeekdaysParse, llc);
		                return ii !== -1 ? ii : null;
		            } else {
		                ii = indexOf.call(this._minWeekdaysParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._weekdaysParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._shortWeekdaysParse, llc);
		                return ii !== -1 ? ii : null;
		            }
		        }
		    }

		    function localeWeekdaysParse(weekdayName, format, strict) {
		        var i, mom, regex;

		        if (this._weekdaysParseExact) {
		            return handleStrictParse$1.call(this, weekdayName, format, strict);
		        }

		        if (!this._weekdaysParse) {
		            this._weekdaysParse = [];
		            this._minWeekdaysParse = [];
		            this._shortWeekdaysParse = [];
		            this._fullWeekdaysParse = [];
		        }

		        for (i = 0; i < 7; i++) {
		            // make the regex if we don't have it already

		            mom = createUTC([2000, 1]).day(i);
		            if (strict && !this._fullWeekdaysParse[i]) {
		                this._fullWeekdaysParse[i] = new RegExp(
		                    '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
		                    'i'
		                );
		                this._shortWeekdaysParse[i] = new RegExp(
		                    '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
		                    'i'
		                );
		                this._minWeekdaysParse[i] = new RegExp(
		                    '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
		                    'i'
		                );
		            }
		            if (!this._weekdaysParse[i]) {
		                regex =
		                    '^' +
		                    this.weekdays(mom, '') +
		                    '|^' +
		                    this.weekdaysShort(mom, '') +
		                    '|^' +
		                    this.weekdaysMin(mom, '');
		                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
		            }
		            // test the regex
		            if (
		                strict &&
		                format === 'dddd' &&
		                this._fullWeekdaysParse[i].test(weekdayName)
		            ) {
		                return i;
		            } else if (
		                strict &&
		                format === 'ddd' &&
		                this._shortWeekdaysParse[i].test(weekdayName)
		            ) {
		                return i;
		            } else if (
		                strict &&
		                format === 'dd' &&
		                this._minWeekdaysParse[i].test(weekdayName)
		            ) {
		                return i;
		            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
		                return i;
		            }
		        }
		    }

		    // MOMENTS

		    function getSetDayOfWeek(input) {
		        if (!this.isValid()) {
		            return input != null ? this : NaN;
		        }

		        var day = get(this, 'Day');
		        if (input != null) {
		            input = parseWeekday(input, this.localeData());
		            return this.add(input - day, 'd');
		        } else {
		            return day;
		        }
		    }

		    function getSetLocaleDayOfWeek(input) {
		        if (!this.isValid()) {
		            return input != null ? this : NaN;
		        }
		        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
		        return input == null ? weekday : this.add(input - weekday, 'd');
		    }

		    function getSetISODayOfWeek(input) {
		        if (!this.isValid()) {
		            return input != null ? this : NaN;
		        }

		        // behaves the same as moment#day except
		        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
		        // as a setter, sunday should belong to the previous week.

		        if (input != null) {
		            var weekday = parseIsoWeekday(input, this.localeData());
		            return this.day(this.day() % 7 ? weekday : weekday - 7);
		        } else {
		            return this.day() || 7;
		        }
		    }

		    function weekdaysRegex(isStrict) {
		        if (this._weekdaysParseExact) {
		            if (!hasOwnProp(this, '_weekdaysRegex')) {
		                computeWeekdaysParse.call(this);
		            }
		            if (isStrict) {
		                return this._weekdaysStrictRegex;
		            } else {
		                return this._weekdaysRegex;
		            }
		        } else {
		            if (!hasOwnProp(this, '_weekdaysRegex')) {
		                this._weekdaysRegex = defaultWeekdaysRegex;
		            }
		            return this._weekdaysStrictRegex && isStrict
		                ? this._weekdaysStrictRegex
		                : this._weekdaysRegex;
		        }
		    }

		    function weekdaysShortRegex(isStrict) {
		        if (this._weekdaysParseExact) {
		            if (!hasOwnProp(this, '_weekdaysRegex')) {
		                computeWeekdaysParse.call(this);
		            }
		            if (isStrict) {
		                return this._weekdaysShortStrictRegex;
		            } else {
		                return this._weekdaysShortRegex;
		            }
		        } else {
		            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
		                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
		            }
		            return this._weekdaysShortStrictRegex && isStrict
		                ? this._weekdaysShortStrictRegex
		                : this._weekdaysShortRegex;
		        }
		    }

		    function weekdaysMinRegex(isStrict) {
		        if (this._weekdaysParseExact) {
		            if (!hasOwnProp(this, '_weekdaysRegex')) {
		                computeWeekdaysParse.call(this);
		            }
		            if (isStrict) {
		                return this._weekdaysMinStrictRegex;
		            } else {
		                return this._weekdaysMinRegex;
		            }
		        } else {
		            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
		                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
		            }
		            return this._weekdaysMinStrictRegex && isStrict
		                ? this._weekdaysMinStrictRegex
		                : this._weekdaysMinRegex;
		        }
		    }

		    function computeWeekdaysParse() {
		        function cmpLenRev(a, b) {
		            return b.length - a.length;
		        }

		        var minPieces = [],
		            shortPieces = [],
		            longPieces = [],
		            mixedPieces = [],
		            i,
		            mom,
		            minp,
		            shortp,
		            longp;
		        for (i = 0; i < 7; i++) {
		            // make the regex if we don't have it already
		            mom = createUTC([2000, 1]).day(i);
		            minp = regexEscape(this.weekdaysMin(mom, ''));
		            shortp = regexEscape(this.weekdaysShort(mom, ''));
		            longp = regexEscape(this.weekdays(mom, ''));
		            minPieces.push(minp);
		            shortPieces.push(shortp);
		            longPieces.push(longp);
		            mixedPieces.push(minp);
		            mixedPieces.push(shortp);
		            mixedPieces.push(longp);
		        }
		        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
		        // will match the longer piece.
		        minPieces.sort(cmpLenRev);
		        shortPieces.sort(cmpLenRev);
		        longPieces.sort(cmpLenRev);
		        mixedPieces.sort(cmpLenRev);

		        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
		        this._weekdaysShortRegex = this._weekdaysRegex;
		        this._weekdaysMinRegex = this._weekdaysRegex;

		        this._weekdaysStrictRegex = new RegExp(
		            '^(' + longPieces.join('|') + ')',
		            'i'
		        );
		        this._weekdaysShortStrictRegex = new RegExp(
		            '^(' + shortPieces.join('|') + ')',
		            'i'
		        );
		        this._weekdaysMinStrictRegex = new RegExp(
		            '^(' + minPieces.join('|') + ')',
		            'i'
		        );
		    }

		    // FORMATTING

		    function hFormat() {
		        return this.hours() % 12 || 12;
		    }

		    function kFormat() {
		        return this.hours() || 24;
		    }

		    addFormatToken('H', ['HH', 2], 0, 'hour');
		    addFormatToken('h', ['hh', 2], 0, hFormat);
		    addFormatToken('k', ['kk', 2], 0, kFormat);

		    addFormatToken('hmm', 0, 0, function () {
		        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
		    });

		    addFormatToken('hmmss', 0, 0, function () {
		        return (
		            '' +
		            hFormat.apply(this) +
		            zeroFill(this.minutes(), 2) +
		            zeroFill(this.seconds(), 2)
		        );
		    });

		    addFormatToken('Hmm', 0, 0, function () {
		        return '' + this.hours() + zeroFill(this.minutes(), 2);
		    });

		    addFormatToken('Hmmss', 0, 0, function () {
		        return (
		            '' +
		            this.hours() +
		            zeroFill(this.minutes(), 2) +
		            zeroFill(this.seconds(), 2)
		        );
		    });

		    function meridiem(token, lowercase) {
		        addFormatToken(token, 0, 0, function () {
		            return this.localeData().meridiem(
		                this.hours(),
		                this.minutes(),
		                lowercase
		            );
		        });
		    }

		    meridiem('a', true);
		    meridiem('A', false);

		    // PARSING

		    function matchMeridiem(isStrict, locale) {
		        return locale._meridiemParse;
		    }

		    addRegexToken('a', matchMeridiem);
		    addRegexToken('A', matchMeridiem);
		    addRegexToken('H', match1to2, match1to2HasZero);
		    addRegexToken('h', match1to2, match1to2NoLeadingZero);
		    addRegexToken('k', match1to2, match1to2NoLeadingZero);
		    addRegexToken('HH', match1to2, match2);
		    addRegexToken('hh', match1to2, match2);
		    addRegexToken('kk', match1to2, match2);

		    addRegexToken('hmm', match3to4);
		    addRegexToken('hmmss', match5to6);
		    addRegexToken('Hmm', match3to4);
		    addRegexToken('Hmmss', match5to6);

		    addParseToken(['H', 'HH'], HOUR);
		    addParseToken(['k', 'kk'], function (input, array, config) {
		        var kInput = toInt(input);
		        array[HOUR] = kInput === 24 ? 0 : kInput;
		    });
		    addParseToken(['a', 'A'], function (input, array, config) {
		        config._isPm = config._locale.isPM(input);
		        config._meridiem = input;
		    });
		    addParseToken(['h', 'hh'], function (input, array, config) {
		        array[HOUR] = toInt(input);
		        getParsingFlags(config).bigHour = true;
		    });
		    addParseToken('hmm', function (input, array, config) {
		        var pos = input.length - 2;
		        array[HOUR] = toInt(input.substr(0, pos));
		        array[MINUTE] = toInt(input.substr(pos));
		        getParsingFlags(config).bigHour = true;
		    });
		    addParseToken('hmmss', function (input, array, config) {
		        var pos1 = input.length - 4,
		            pos2 = input.length - 2;
		        array[HOUR] = toInt(input.substr(0, pos1));
		        array[MINUTE] = toInt(input.substr(pos1, 2));
		        array[SECOND] = toInt(input.substr(pos2));
		        getParsingFlags(config).bigHour = true;
		    });
		    addParseToken('Hmm', function (input, array, config) {
		        var pos = input.length - 2;
		        array[HOUR] = toInt(input.substr(0, pos));
		        array[MINUTE] = toInt(input.substr(pos));
		    });
		    addParseToken('Hmmss', function (input, array, config) {
		        var pos1 = input.length - 4,
		            pos2 = input.length - 2;
		        array[HOUR] = toInt(input.substr(0, pos1));
		        array[MINUTE] = toInt(input.substr(pos1, 2));
		        array[SECOND] = toInt(input.substr(pos2));
		    });

		    // LOCALES

		    function localeIsPM(input) {
		        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
		        // Using charAt should be more compatible.
		        return (input + '').toLowerCase().charAt(0) === 'p';
		    }

		    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
		        // Setting the hour should keep the time, because the user explicitly
		        // specified which hour they want. So trying to maintain the same hour (in
		        // a new timezone) makes sense. Adding/subtracting hours does not follow
		        // this rule.
		        getSetHour = makeGetSet('Hours', true);

		    function localeMeridiem(hours, minutes, isLower) {
		        if (hours > 11) {
		            return isLower ? 'pm' : 'PM';
		        } else {
		            return isLower ? 'am' : 'AM';
		        }
		    }

		    var baseConfig = {
		        calendar: defaultCalendar,
		        longDateFormat: defaultLongDateFormat,
		        invalidDate: defaultInvalidDate,
		        ordinal: defaultOrdinal,
		        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
		        relativeTime: defaultRelativeTime,

		        months: defaultLocaleMonths,
		        monthsShort: defaultLocaleMonthsShort,

		        week: defaultLocaleWeek,

		        weekdays: defaultLocaleWeekdays,
		        weekdaysMin: defaultLocaleWeekdaysMin,
		        weekdaysShort: defaultLocaleWeekdaysShort,

		        meridiemParse: defaultLocaleMeridiemParse,
		    };

		    // internal storage for locale config files
		    var locales = {},
		        localeFamilies = {},
		        globalLocale;

		    function commonPrefix(arr1, arr2) {
		        var i,
		            minl = Math.min(arr1.length, arr2.length);
		        for (i = 0; i < minl; i += 1) {
		            if (arr1[i] !== arr2[i]) {
		                return i;
		            }
		        }
		        return minl;
		    }

		    function normalizeLocale(key) {
		        return key ? key.toLowerCase().replace('_', '-') : key;
		    }

		    // pick the locale from the array
		    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
		    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
		    function chooseLocale(names) {
		        var i = 0,
		            j,
		            next,
		            locale,
		            split;

		        while (i < names.length) {
		            split = normalizeLocale(names[i]).split('-');
		            j = split.length;
		            next = normalizeLocale(names[i + 1]);
		            next = next ? next.split('-') : null;
		            while (j > 0) {
		                locale = loadLocale(split.slice(0, j).join('-'));
		                if (locale) {
		                    return locale;
		                }
		                if (
		                    next &&
		                    next.length >= j &&
		                    commonPrefix(split, next) >= j - 1
		                ) {
		                    //the next array item is better than a shallower substring of this one
		                    break;
		                }
		                j--;
		            }
		            i++;
		        }
		        return globalLocale;
		    }

		    function isLocaleNameSane(name) {
		        // Prevent names that look like filesystem paths, i.e contain '/' or '\'
		        // Ensure name is available and function returns boolean
		        return !!(name && name.match('^[^/\\\\]*$'));
		    }

		    function loadLocale(name) {
		        var oldLocale = null,
		            aliasedRequire;
		        // TODO: Find a better way to register and load all the locales in Node
		        if (
		            locales[name] === undefined &&
		            'object' !== 'undefined' &&
		            module &&
		            module.exports &&
		            isLocaleNameSane(name)
		        ) {
		            try {
		                oldLocale = globalLocale._abbr;
		                aliasedRequire = commonjsRequire;
		                aliasedRequire('./locale/' + name);
		                getSetGlobalLocale(oldLocale);
		            } catch (e) {
		                // mark as not found to avoid repeating expensive file require call causing high CPU
		                // when trying to find en-US, en_US, en-us for every format call
		                locales[name] = null; // null means not found
		            }
		        }
		        return locales[name];
		    }

		    // This function will load locale and then set the global locale.  If
		    // no arguments are passed in, it will simply return the current global
		    // locale key.
		    function getSetGlobalLocale(key, values) {
		        var data;
		        if (key) {
		            if (isUndefined(values)) {
		                data = getLocale(key);
		            } else {
		                data = defineLocale(key, values);
		            }

		            if (data) {
		                // moment.duration._locale = moment._locale = data;
		                globalLocale = data;
		            } else {
		                if (typeof console !== 'undefined' && console.warn) {
		                    //warn user if arguments are passed but the locale could not be set
		                    console.warn(
		                        'Locale ' + key + ' not found. Did you forget to load it?'
		                    );
		                }
		            }
		        }

		        return globalLocale._abbr;
		    }

		    function defineLocale(name, config) {
		        if (config !== null) {
		            var locale,
		                parentConfig = baseConfig;
		            config.abbr = name;
		            if (locales[name] != null) {
		                deprecateSimple(
		                    'defineLocaleOverride',
		                    'use moment.updateLocale(localeName, config) to change ' +
		                        'an existing locale. moment.defineLocale(localeName, ' +
		                        'config) should only be used for creating a new locale ' +
		                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
		                );
		                parentConfig = locales[name]._config;
		            } else if (config.parentLocale != null) {
		                if (locales[config.parentLocale] != null) {
		                    parentConfig = locales[config.parentLocale]._config;
		                } else {
		                    locale = loadLocale(config.parentLocale);
		                    if (locale != null) {
		                        parentConfig = locale._config;
		                    } else {
		                        if (!localeFamilies[config.parentLocale]) {
		                            localeFamilies[config.parentLocale] = [];
		                        }
		                        localeFamilies[config.parentLocale].push({
		                            name: name,
		                            config: config,
		                        });
		                        return null;
		                    }
		                }
		            }
		            locales[name] = new Locale(mergeConfigs(parentConfig, config));

		            if (localeFamilies[name]) {
		                localeFamilies[name].forEach(function (x) {
		                    defineLocale(x.name, x.config);
		                });
		            }

		            // backwards compat for now: also set the locale
		            // make sure we set the locale AFTER all child locales have been
		            // created, so we won't end up with the child locale set.
		            getSetGlobalLocale(name);

		            return locales[name];
		        } else {
		            // useful for testing
		            delete locales[name];
		            return null;
		        }
		    }

		    function updateLocale(name, config) {
		        if (config != null) {
		            var locale,
		                tmpLocale,
		                parentConfig = baseConfig;

		            if (locales[name] != null && locales[name].parentLocale != null) {
		                // Update existing child locale in-place to avoid memory-leaks
		                locales[name].set(mergeConfigs(locales[name]._config, config));
		            } else {
		                // MERGE
		                tmpLocale = loadLocale(name);
		                if (tmpLocale != null) {
		                    parentConfig = tmpLocale._config;
		                }
		                config = mergeConfigs(parentConfig, config);
		                if (tmpLocale == null) {
		                    // updateLocale is called for creating a new locale
		                    // Set abbr so it will have a name (getters return
		                    // undefined otherwise).
		                    config.abbr = name;
		                }
		                locale = new Locale(config);
		                locale.parentLocale = locales[name];
		                locales[name] = locale;
		            }

		            // backwards compat for now: also set the locale
		            getSetGlobalLocale(name);
		        } else {
		            // pass null for config to unupdate, useful for tests
		            if (locales[name] != null) {
		                if (locales[name].parentLocale != null) {
		                    locales[name] = locales[name].parentLocale;
		                    if (name === getSetGlobalLocale()) {
		                        getSetGlobalLocale(name);
		                    }
		                } else if (locales[name] != null) {
		                    delete locales[name];
		                }
		            }
		        }
		        return locales[name];
		    }

		    // returns locale data
		    function getLocale(key) {
		        var locale;

		        if (key && key._locale && key._locale._abbr) {
		            key = key._locale._abbr;
		        }

		        if (!key) {
		            return globalLocale;
		        }

		        if (!isArray(key)) {
		            //short-circuit everything else
		            locale = loadLocale(key);
		            if (locale) {
		                return locale;
		            }
		            key = [key];
		        }

		        return chooseLocale(key);
		    }

		    function listLocales() {
		        return keys(locales);
		    }

		    function checkOverflow(m) {
		        var overflow,
		            a = m._a;

		        if (a && getParsingFlags(m).overflow === -2) {
		            overflow =
		                a[MONTH] < 0 || a[MONTH] > 11
		                    ? MONTH
		                    : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
		                      ? DATE
		                      : a[HOUR] < 0 ||
		                          a[HOUR] > 24 ||
		                          (a[HOUR] === 24 &&
		                              (a[MINUTE] !== 0 ||
		                                  a[SECOND] !== 0 ||
		                                  a[MILLISECOND] !== 0))
		                        ? HOUR
		                        : a[MINUTE] < 0 || a[MINUTE] > 59
		                          ? MINUTE
		                          : a[SECOND] < 0 || a[SECOND] > 59
		                            ? SECOND
		                            : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
		                              ? MILLISECOND
		                              : -1;

		            if (
		                getParsingFlags(m)._overflowDayOfYear &&
		                (overflow < YEAR || overflow > DATE)
		            ) {
		                overflow = DATE;
		            }
		            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
		                overflow = WEEK;
		            }
		            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
		                overflow = WEEKDAY;
		            }

		            getParsingFlags(m).overflow = overflow;
		        }

		        return m;
		    }

		    // iso 8601 regex
		    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
		    var extendedIsoRegex =
		            /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
		        basicIsoRegex =
		            /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
		        tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
		        isoDates = [
		            ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
		            ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
		            ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
		            ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
		            ['YYYY-DDD', /\d{4}-\d{3}/],
		            ['YYYY-MM', /\d{4}-\d\d/, false],
		            ['YYYYYYMMDD', /[+-]\d{10}/],
		            ['YYYYMMDD', /\d{8}/],
		            ['GGGG[W]WWE', /\d{4}W\d{3}/],
		            ['GGGG[W]WW', /\d{4}W\d{2}/, false],
		            ['YYYYDDD', /\d{7}/],
		            ['YYYYMM', /\d{6}/, false],
		            ['YYYY', /\d{4}/, false],
		        ],
		        // iso time formats and regexes
		        isoTimes = [
		            ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
		            ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
		            ['HH:mm:ss', /\d\d:\d\d:\d\d/],
		            ['HH:mm', /\d\d:\d\d/],
		            ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
		            ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
		            ['HHmmss', /\d\d\d\d\d\d/],
		            ['HHmm', /\d\d\d\d/],
		            ['HH', /\d\d/],
		        ],
		        aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
		        // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
		        rfc2822 =
		            /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
		        obsOffsets = {
		            UT: 0,
		            GMT: 0,
		            EDT: -4 * 60,
		            EST: -5 * 60,
		            CDT: -5 * 60,
		            CST: -6 * 60,
		            MDT: -6 * 60,
		            MST: -7 * 60,
		            PDT: -7 * 60,
		            PST: -8 * 60,
		        };

		    // date from iso format
		    function configFromISO(config) {
		        var i,
		            l,
		            string = config._i,
		            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
		            allowTime,
		            dateFormat,
		            timeFormat,
		            tzFormat,
		            isoDatesLen = isoDates.length,
		            isoTimesLen = isoTimes.length;

		        if (match) {
		            getParsingFlags(config).iso = true;
		            for (i = 0, l = isoDatesLen; i < l; i++) {
		                if (isoDates[i][1].exec(match[1])) {
		                    dateFormat = isoDates[i][0];
		                    allowTime = isoDates[i][2] !== false;
		                    break;
		                }
		            }
		            if (dateFormat == null) {
		                config._isValid = false;
		                return;
		            }
		            if (match[3]) {
		                for (i = 0, l = isoTimesLen; i < l; i++) {
		                    if (isoTimes[i][1].exec(match[3])) {
		                        // match[2] should be 'T' or space
		                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
		                        break;
		                    }
		                }
		                if (timeFormat == null) {
		                    config._isValid = false;
		                    return;
		                }
		            }
		            if (!allowTime && timeFormat != null) {
		                config._isValid = false;
		                return;
		            }
		            if (match[4]) {
		                if (tzRegex.exec(match[4])) {
		                    tzFormat = 'Z';
		                } else {
		                    config._isValid = false;
		                    return;
		                }
		            }
		            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
		            configFromStringAndFormat(config);
		        } else {
		            config._isValid = false;
		        }
		    }

		    function extractFromRFC2822Strings(
		        yearStr,
		        monthStr,
		        dayStr,
		        hourStr,
		        minuteStr,
		        secondStr
		    ) {
		        var result = [
		            untruncateYear(yearStr),
		            defaultLocaleMonthsShort.indexOf(monthStr),
		            parseInt(dayStr, 10),
		            parseInt(hourStr, 10),
		            parseInt(minuteStr, 10),
		        ];

		        if (secondStr) {
		            result.push(parseInt(secondStr, 10));
		        }

		        return result;
		    }

		    function untruncateYear(yearStr) {
		        var year = parseInt(yearStr, 10);
		        if (year <= 49) {
		            return 2000 + year;
		        } else if (year <= 999) {
		            return 1900 + year;
		        }
		        return year;
		    }

		    function preprocessRFC2822(s) {
		        // Remove comments and folding whitespace and replace multiple-spaces with a single space
		        return s
		            .replace(/\([^()]*\)|[\n\t]/g, ' ')
		            .replace(/(\s\s+)/g, ' ')
		            .replace(/^\s\s*/, '')
		            .replace(/\s\s*$/, '');
		    }

		    function checkWeekday(weekdayStr, parsedInput, config) {
		        if (weekdayStr) {
		            // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
		            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
		                weekdayActual = new Date(
		                    parsedInput[0],
		                    parsedInput[1],
		                    parsedInput[2]
		                ).getDay();
		            if (weekdayProvided !== weekdayActual) {
		                getParsingFlags(config).weekdayMismatch = true;
		                config._isValid = false;
		                return false;
		            }
		        }
		        return true;
		    }

		    function calculateOffset(obsOffset, militaryOffset, numOffset) {
		        if (obsOffset) {
		            return obsOffsets[obsOffset];
		        } else if (militaryOffset) {
		            // the only allowed military tz is Z
		            return 0;
		        } else {
		            var hm = parseInt(numOffset, 10),
		                m = hm % 100,
		                h = (hm - m) / 100;
		            return h * 60 + m;
		        }
		    }

		    // date and time from ref 2822 format
		    function configFromRFC2822(config) {
		        var match = rfc2822.exec(preprocessRFC2822(config._i)),
		            parsedArray;
		        if (match) {
		            parsedArray = extractFromRFC2822Strings(
		                match[4],
		                match[3],
		                match[2],
		                match[5],
		                match[6],
		                match[7]
		            );
		            if (!checkWeekday(match[1], parsedArray, config)) {
		                return;
		            }

		            config._a = parsedArray;
		            config._tzm = calculateOffset(match[8], match[9], match[10]);

		            config._d = createUTCDate.apply(null, config._a);
		            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

		            getParsingFlags(config).rfc2822 = true;
		        } else {
		            config._isValid = false;
		        }
		    }

		    // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
		    function configFromString(config) {
		        var matched = aspNetJsonRegex.exec(config._i);
		        if (matched !== null) {
		            config._d = new Date(+matched[1]);
		            return;
		        }

		        configFromISO(config);
		        if (config._isValid === false) {
		            delete config._isValid;
		        } else {
		            return;
		        }

		        configFromRFC2822(config);
		        if (config._isValid === false) {
		            delete config._isValid;
		        } else {
		            return;
		        }

		        if (config._strict) {
		            config._isValid = false;
		        } else {
		            // Final attempt, use Input Fallback
		            hooks.createFromInputFallback(config);
		        }
		    }

		    hooks.createFromInputFallback = deprecate(
		        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
		            'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
		            'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
		        function (config) {
		            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
		        }
		    );

		    // Pick the first defined of two or three arguments.
		    function defaults(a, b, c) {
		        if (a != null) {
		            return a;
		        }
		        if (b != null) {
		            return b;
		        }
		        return c;
		    }

		    function currentDateArray(config) {
		        // hooks is actually the exported moment object
		        var nowValue = new Date(hooks.now());
		        if (config._useUTC) {
		            return [
		                nowValue.getUTCFullYear(),
		                nowValue.getUTCMonth(),
		                nowValue.getUTCDate(),
		            ];
		        }
		        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
		    }

		    // convert an array to a date.
		    // the array should mirror the parameters below
		    // note: all values past the year are optional and will default to the lowest possible value.
		    // [year, month, day , hour, minute, second, millisecond]
		    function configFromArray(config) {
		        var i,
		            date,
		            input = [],
		            currentDate,
		            expectedWeekday,
		            yearToUse;

		        if (config._d) {
		            return;
		        }

		        currentDate = currentDateArray(config);

		        //compute day of the year from weeks and weekdays
		        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
		            dayOfYearFromWeekInfo(config);
		        }

		        //if the day of the year is set, figure out what it is
		        if (config._dayOfYear != null) {
		            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

		            if (
		                config._dayOfYear > daysInYear(yearToUse) ||
		                config._dayOfYear === 0
		            ) {
		                getParsingFlags(config)._overflowDayOfYear = true;
		            }

		            date = createUTCDate(yearToUse, 0, config._dayOfYear);
		            config._a[MONTH] = date.getUTCMonth();
		            config._a[DATE] = date.getUTCDate();
		        }

		        // Default to current date.
		        // * if no year, month, day of month are given, default to today
		        // * if day of month is given, default month and year
		        // * if month is given, default only year
		        // * if year is given, don't default anything
		        for (i = 0; i < 3 && config._a[i] == null; ++i) {
		            config._a[i] = input[i] = currentDate[i];
		        }

		        // Zero out whatever was not defaulted, including time
		        for (; i < 7; i++) {
		            config._a[i] = input[i] =
		                config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
		        }

		        // Check for 24:00:00.000
		        if (
		            config._a[HOUR] === 24 &&
		            config._a[MINUTE] === 0 &&
		            config._a[SECOND] === 0 &&
		            config._a[MILLISECOND] === 0
		        ) {
		            config._nextDay = true;
		            config._a[HOUR] = 0;
		        }

		        config._d = (config._useUTC ? createUTCDate : createDate).apply(
		            null,
		            input
		        );
		        expectedWeekday = config._useUTC
		            ? config._d.getUTCDay()
		            : config._d.getDay();

		        // Apply timezone offset from input. The actual utcOffset can be changed
		        // with parseZone.
		        if (config._tzm != null) {
		            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
		        }

		        if (config._nextDay) {
		            config._a[HOUR] = 24;
		        }

		        // check for mismatching day of week
		        if (
		            config._w &&
		            typeof config._w.d !== 'undefined' &&
		            config._w.d !== expectedWeekday
		        ) {
		            getParsingFlags(config).weekdayMismatch = true;
		        }
		    }

		    function dayOfYearFromWeekInfo(config) {
		        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;

		        w = config._w;
		        if (w.GG != null || w.W != null || w.E != null) {
		            dow = 1;
		            doy = 4;

		            // TODO: We need to take the current isoWeekYear, but that depends on
		            // how we interpret now (local, utc, fixed offset). So create
		            // a now version of current config (take local/utc/offset flags, and
		            // create now).
		            weekYear = defaults(
		                w.GG,
		                config._a[YEAR],
		                weekOfYear(createLocal(), 1, 4).year
		            );
		            week = defaults(w.W, 1);
		            weekday = defaults(w.E, 1);
		            if (weekday < 1 || weekday > 7) {
		                weekdayOverflow = true;
		            }
		        } else {
		            dow = config._locale._week.dow;
		            doy = config._locale._week.doy;

		            curWeek = weekOfYear(createLocal(), dow, doy);

		            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

		            // Default to current week.
		            week = defaults(w.w, curWeek.week);

		            if (w.d != null) {
		                // weekday -- low day numbers are considered next week
		                weekday = w.d;
		                if (weekday < 0 || weekday > 6) {
		                    weekdayOverflow = true;
		                }
		            } else if (w.e != null) {
		                // local weekday -- counting starts from beginning of week
		                weekday = w.e + dow;
		                if (w.e < 0 || w.e > 6) {
		                    weekdayOverflow = true;
		                }
		            } else {
		                // default to beginning of week
		                weekday = dow;
		            }
		        }
		        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
		            getParsingFlags(config)._overflowWeeks = true;
		        } else if (weekdayOverflow != null) {
		            getParsingFlags(config)._overflowWeekday = true;
		        } else {
		            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
		            config._a[YEAR] = temp.year;
		            config._dayOfYear = temp.dayOfYear;
		        }
		    }

		    // constant that refers to the ISO standard
		    hooks.ISO_8601 = function () {};

		    // constant that refers to the RFC 2822 form
		    hooks.RFC_2822 = function () {};

		    // date from string and format string
		    function configFromStringAndFormat(config) {
		        // TODO: Move this to another part of the creation flow to prevent circular deps
		        if (config._f === hooks.ISO_8601) {
		            configFromISO(config);
		            return;
		        }
		        if (config._f === hooks.RFC_2822) {
		            configFromRFC2822(config);
		            return;
		        }
		        config._a = [];
		        getParsingFlags(config).empty = true;

		        // This array is used to make a Date, either with `new Date` or `Date.UTC`
		        var string = '' + config._i,
		            i,
		            parsedInput,
		            tokens,
		            token,
		            skipped,
		            stringLength = string.length,
		            totalParsedInputLength = 0,
		            era,
		            tokenLen;

		        tokens =
		            expandFormat(config._f, config._locale).match(formattingTokens) || [];
		        tokenLen = tokens.length;
		        for (i = 0; i < tokenLen; i++) {
		            token = tokens[i];
		            parsedInput = (string.match(getParseRegexForToken(token, config)) ||
		                [])[0];
		            if (parsedInput) {
		                skipped = string.substr(0, string.indexOf(parsedInput));
		                if (skipped.length > 0) {
		                    getParsingFlags(config).unusedInput.push(skipped);
		                }
		                string = string.slice(
		                    string.indexOf(parsedInput) + parsedInput.length
		                );
		                totalParsedInputLength += parsedInput.length;
		            }
		            // don't parse if it's not a known token
		            if (formatTokenFunctions[token]) {
		                if (parsedInput) {
		                    getParsingFlags(config).empty = false;
		                } else {
		                    getParsingFlags(config).unusedTokens.push(token);
		                }
		                addTimeToArrayFromToken(token, parsedInput, config);
		            } else if (config._strict && !parsedInput) {
		                getParsingFlags(config).unusedTokens.push(token);
		            }
		        }

		        // add remaining unparsed input length to the string
		        getParsingFlags(config).charsLeftOver =
		            stringLength - totalParsedInputLength;
		        if (string.length > 0) {
		            getParsingFlags(config).unusedInput.push(string);
		        }

		        // clear _12h flag if hour is <= 12
		        if (
		            config._a[HOUR] <= 12 &&
		            getParsingFlags(config).bigHour === true &&
		            config._a[HOUR] > 0
		        ) {
		            getParsingFlags(config).bigHour = undefined;
		        }

		        getParsingFlags(config).parsedDateParts = config._a.slice(0);
		        getParsingFlags(config).meridiem = config._meridiem;
		        // handle meridiem
		        config._a[HOUR] = meridiemFixWrap(
		            config._locale,
		            config._a[HOUR],
		            config._meridiem
		        );

		        // handle era
		        era = getParsingFlags(config).era;
		        if (era !== null) {
		            config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
		        }

		        configFromArray(config);
		        checkOverflow(config);
		    }

		    function meridiemFixWrap(locale, hour, meridiem) {
		        var isPm;

		        if (meridiem == null) {
		            // nothing to do
		            return hour;
		        }
		        if (locale.meridiemHour != null) {
		            return locale.meridiemHour(hour, meridiem);
		        } else if (locale.isPM != null) {
		            // Fallback
		            isPm = locale.isPM(meridiem);
		            if (isPm && hour < 12) {
		                hour += 12;
		            }
		            if (!isPm && hour === 12) {
		                hour = 0;
		            }
		            return hour;
		        } else {
		            // this is not supposed to happen
		            return hour;
		        }
		    }

		    // date from string and array of format strings
		    function configFromStringAndArray(config) {
		        var tempConfig,
		            bestMoment,
		            scoreToBeat,
		            i,
		            currentScore,
		            validFormatFound,
		            bestFormatIsValid = false,
		            configfLen = config._f.length;

		        if (configfLen === 0) {
		            getParsingFlags(config).invalidFormat = true;
		            config._d = new Date(NaN);
		            return;
		        }

		        for (i = 0; i < configfLen; i++) {
		            currentScore = 0;
		            validFormatFound = false;
		            tempConfig = copyConfig({}, config);
		            if (config._useUTC != null) {
		                tempConfig._useUTC = config._useUTC;
		            }
		            tempConfig._f = config._f[i];
		            configFromStringAndFormat(tempConfig);

		            if (isValid(tempConfig)) {
		                validFormatFound = true;
		            }

		            // if there is any input that was not parsed add a penalty for that format
		            currentScore += getParsingFlags(tempConfig).charsLeftOver;

		            //or tokens
		            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

		            getParsingFlags(tempConfig).score = currentScore;

		            if (!bestFormatIsValid) {
		                if (
		                    scoreToBeat == null ||
		                    currentScore < scoreToBeat ||
		                    validFormatFound
		                ) {
		                    scoreToBeat = currentScore;
		                    bestMoment = tempConfig;
		                    if (validFormatFound) {
		                        bestFormatIsValid = true;
		                    }
		                }
		            } else {
		                if (currentScore < scoreToBeat) {
		                    scoreToBeat = currentScore;
		                    bestMoment = tempConfig;
		                }
		            }
		        }

		        extend(config, bestMoment || tempConfig);
		    }

		    function configFromObject(config) {
		        if (config._d) {
		            return;
		        }

		        var i = normalizeObjectUnits(config._i),
		            dayOrDate = i.day === undefined ? i.date : i.day;
		        config._a = map(
		            [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
		            function (obj) {
		                return obj && parseInt(obj, 10);
		            }
		        );

		        configFromArray(config);
		    }

		    function createFromConfig(config) {
		        var res = new Moment(checkOverflow(prepareConfig(config)));
		        if (res._nextDay) {
		            // Adding is smart enough around DST
		            res.add(1, 'd');
		            res._nextDay = undefined;
		        }

		        return res;
		    }

		    function prepareConfig(config) {
		        var input = config._i,
		            format = config._f;

		        config._locale = config._locale || getLocale(config._l);

		        if (input === null || (format === undefined && input === '')) {
		            return createInvalid({ nullInput: true });
		        }

		        if (typeof input === 'string') {
		            config._i = input = config._locale.preparse(input);
		        }

		        if (isMoment(input)) {
		            return new Moment(checkOverflow(input));
		        } else if (isDate(input)) {
		            config._d = input;
		        } else if (isArray(format)) {
		            configFromStringAndArray(config);
		        } else if (format) {
		            configFromStringAndFormat(config);
		        } else {
		            configFromInput(config);
		        }

		        if (!isValid(config)) {
		            config._d = null;
		        }

		        return config;
		    }

		    function configFromInput(config) {
		        var input = config._i;
		        if (isUndefined(input)) {
		            config._d = new Date(hooks.now());
		        } else if (isDate(input)) {
		            config._d = new Date(input.valueOf());
		        } else if (typeof input === 'string') {
		            configFromString(config);
		        } else if (isArray(input)) {
		            config._a = map(input.slice(0), function (obj) {
		                return parseInt(obj, 10);
		            });
		            configFromArray(config);
		        } else if (isObject(input)) {
		            configFromObject(config);
		        } else if (isNumber(input)) {
		            // from milliseconds
		            config._d = new Date(input);
		        } else {
		            hooks.createFromInputFallback(config);
		        }
		    }

		    function createLocalOrUTC(input, format, locale, strict, isUTC) {
		        var c = {};

		        if (format === true || format === false) {
		            strict = format;
		            format = undefined;
		        }

		        if (locale === true || locale === false) {
		            strict = locale;
		            locale = undefined;
		        }

		        if (
		            (isObject(input) && isObjectEmpty(input)) ||
		            (isArray(input) && input.length === 0)
		        ) {
		            input = undefined;
		        }
		        // object construction must be done this way.
		        // https://github.com/moment/moment/issues/1423
		        c._isAMomentObject = true;
		        c._useUTC = c._isUTC = isUTC;
		        c._l = locale;
		        c._i = input;
		        c._f = format;
		        c._strict = strict;

		        return createFromConfig(c);
		    }

		    function createLocal(input, format, locale, strict) {
		        return createLocalOrUTC(input, format, locale, strict, false);
		    }

		    var prototypeMin = deprecate(
		            'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
		            function () {
		                var other = createLocal.apply(null, arguments);
		                if (this.isValid() && other.isValid()) {
		                    return other < this ? this : other;
		                } else {
		                    return createInvalid();
		                }
		            }
		        ),
		        prototypeMax = deprecate(
		            'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
		            function () {
		                var other = createLocal.apply(null, arguments);
		                if (this.isValid() && other.isValid()) {
		                    return other > this ? this : other;
		                } else {
		                    return createInvalid();
		                }
		            }
		        );

		    // Pick a moment m from moments so that m[fn](other) is true for all
		    // other. This relies on the function fn to be transitive.
		    //
		    // moments should either be an array of moment objects or an array, whose
		    // first element is an array of moment objects.
		    function pickBy(fn, moments) {
		        var res, i;
		        if (moments.length === 1 && isArray(moments[0])) {
		            moments = moments[0];
		        }
		        if (!moments.length) {
		            return createLocal();
		        }
		        res = moments[0];
		        for (i = 1; i < moments.length; ++i) {
		            if (!moments[i].isValid() || moments[i][fn](res)) {
		                res = moments[i];
		            }
		        }
		        return res;
		    }

		    // TODO: Use [].sort instead?
		    function min() {
		        var args = [].slice.call(arguments, 0);

		        return pickBy('isBefore', args);
		    }

		    function max() {
		        var args = [].slice.call(arguments, 0);

		        return pickBy('isAfter', args);
		    }

		    var now = function () {
		        return Date.now ? Date.now() : +new Date();
		    };

		    var ordering = [
		        'year',
		        'quarter',
		        'month',
		        'week',
		        'day',
		        'hour',
		        'minute',
		        'second',
		        'millisecond',
		    ];

		    function isDurationValid(m) {
		        var key,
		            unitHasDecimal = false,
		            i,
		            orderLen = ordering.length;
		        for (key in m) {
		            if (
		                hasOwnProp(m, key) &&
		                !(
		                    indexOf.call(ordering, key) !== -1 &&
		                    (m[key] == null || !isNaN(m[key]))
		                )
		            ) {
		                return false;
		            }
		        }

		        for (i = 0; i < orderLen; ++i) {
		            if (m[ordering[i]]) {
		                if (unitHasDecimal) {
		                    return false; // only allow non-integers for smallest unit
		                }
		                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
		                    unitHasDecimal = true;
		                }
		            }
		        }

		        return true;
		    }

		    function isValid$1() {
		        return this._isValid;
		    }

		    function createInvalid$1() {
		        return createDuration(NaN);
		    }

		    function Duration(duration) {
		        var normalizedInput = normalizeObjectUnits(duration),
		            years = normalizedInput.year || 0,
		            quarters = normalizedInput.quarter || 0,
		            months = normalizedInput.month || 0,
		            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
		            days = normalizedInput.day || 0,
		            hours = normalizedInput.hour || 0,
		            minutes = normalizedInput.minute || 0,
		            seconds = normalizedInput.second || 0,
		            milliseconds = normalizedInput.millisecond || 0;

		        this._isValid = isDurationValid(normalizedInput);

		        // representation for dateAddRemove
		        this._milliseconds =
		            +milliseconds +
		            seconds * 1e3 + // 1000
		            minutes * 6e4 + // 1000 * 60
		            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
		        // Because of dateAddRemove treats 24 hours as different from a
		        // day when working around DST, we need to store them separately
		        this._days = +days + weeks * 7;
		        // It is impossible to translate months into days without knowing
		        // which months you are are talking about, so we have to store
		        // it separately.
		        this._months = +months + quarters * 3 + years * 12;

		        this._data = {};

		        this._locale = getLocale();

		        this._bubble();
		    }

		    function isDuration(obj) {
		        return obj instanceof Duration;
		    }

		    function absRound(number) {
		        if (number < 0) {
		            return Math.round(-1 * number) * -1;
		        } else {
		            return Math.round(number);
		        }
		    }

		    // compare two arrays, return the number of differences
		    function compareArrays(array1, array2, dontConvert) {
		        var len = Math.min(array1.length, array2.length),
		            lengthDiff = Math.abs(array1.length - array2.length),
		            diffs = 0,
		            i;
		        for (i = 0; i < len; i++) {
		            if (
		                (toInt(array1[i]) !== toInt(array2[i]))
		            ) {
		                diffs++;
		            }
		        }
		        return diffs + lengthDiff;
		    }

		    // FORMATTING

		    function offset(token, separator) {
		        addFormatToken(token, 0, 0, function () {
		            var offset = this.utcOffset(),
		                sign = '+';
		            if (offset < 0) {
		                offset = -offset;
		                sign = '-';
		            }
		            return (
		                sign +
		                zeroFill(~~(offset / 60), 2) +
		                separator +
		                zeroFill(~~offset % 60, 2)
		            );
		        });
		    }

		    offset('Z', ':');
		    offset('ZZ', '');

		    // PARSING

		    addRegexToken('Z', matchShortOffset);
		    addRegexToken('ZZ', matchShortOffset);
		    addParseToken(['Z', 'ZZ'], function (input, array, config) {
		        config._useUTC = true;
		        config._tzm = offsetFromString(matchShortOffset, input);
		    });

		    // HELPERS

		    // timezone chunker
		    // '+10:00' > ['10',  '00']
		    // '-1530'  > ['-15', '30']
		    var chunkOffset = /([\+\-]|\d\d)/gi;

		    function offsetFromString(matcher, string) {
		        var matches = (string || '').match(matcher),
		            chunk,
		            parts,
		            minutes;

		        if (matches === null) {
		            return null;
		        }

		        chunk = matches[matches.length - 1] || [];
		        parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
		        minutes = +(parts[1] * 60) + toInt(parts[2]);

		        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
		    }

		    // Return a moment from input, that is local/utc/zone equivalent to model.
		    function cloneWithOffset(input, model) {
		        var res, diff;
		        if (model._isUTC) {
		            res = model.clone();
		            diff =
		                (isMoment(input) || isDate(input)
		                    ? input.valueOf()
		                    : createLocal(input).valueOf()) - res.valueOf();
		            // Use low-level api, because this fn is low-level api.
		            res._d.setTime(res._d.valueOf() + diff);
		            hooks.updateOffset(res, false);
		            return res;
		        } else {
		            return createLocal(input).local();
		        }
		    }

		    function getDateOffset(m) {
		        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
		        // https://github.com/moment/moment/pull/1871
		        return -Math.round(m._d.getTimezoneOffset());
		    }

		    // HOOKS

		    // This function will be called whenever a moment is mutated.
		    // It is intended to keep the offset in sync with the timezone.
		    hooks.updateOffset = function () {};

		    // MOMENTS

		    // keepLocalTime = true means only change the timezone, without
		    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
		    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
		    // +0200, so we adjust the time as needed, to be valid.
		    //
		    // Keeping the time actually adds/subtracts (one hour)
		    // from the actual represented time. That is why we call updateOffset
		    // a second time. In case it wants us to change the offset again
		    // _changeInProgress == true case, then we have to adjust, because
		    // there is no such time in the given timezone.
		    function getSetOffset(input, keepLocalTime, keepMinutes) {
		        var offset = this._offset || 0,
		            localAdjust;
		        if (!this.isValid()) {
		            return input != null ? this : NaN;
		        }
		        if (input != null) {
		            if (typeof input === 'string') {
		                input = offsetFromString(matchShortOffset, input);
		                if (input === null) {
		                    return this;
		                }
		            } else if (Math.abs(input) < 16 && !keepMinutes) {
		                input = input * 60;
		            }
		            if (!this._isUTC && keepLocalTime) {
		                localAdjust = getDateOffset(this);
		            }
		            this._offset = input;
		            this._isUTC = true;
		            if (localAdjust != null) {
		                this.add(localAdjust, 'm');
		            }
		            if (offset !== input) {
		                if (!keepLocalTime || this._changeInProgress) {
		                    addSubtract(
		                        this,
		                        createDuration(input - offset, 'm'),
		                        1,
		                        false
		                    );
		                } else if (!this._changeInProgress) {
		                    this._changeInProgress = true;
		                    hooks.updateOffset(this, true);
		                    this._changeInProgress = null;
		                }
		            }
		            return this;
		        } else {
		            return this._isUTC ? offset : getDateOffset(this);
		        }
		    }

		    function getSetZone(input, keepLocalTime) {
		        if (input != null) {
		            if (typeof input !== 'string') {
		                input = -input;
		            }

		            this.utcOffset(input, keepLocalTime);

		            return this;
		        } else {
		            return -this.utcOffset();
		        }
		    }

		    function setOffsetToUTC(keepLocalTime) {
		        return this.utcOffset(0, keepLocalTime);
		    }

		    function setOffsetToLocal(keepLocalTime) {
		        if (this._isUTC) {
		            this.utcOffset(0, keepLocalTime);
		            this._isUTC = false;

		            if (keepLocalTime) {
		                this.subtract(getDateOffset(this), 'm');
		            }
		        }
		        return this;
		    }

		    function setOffsetToParsedOffset() {
		        if (this._tzm != null) {
		            this.utcOffset(this._tzm, false, true);
		        } else if (typeof this._i === 'string') {
		            var tZone = offsetFromString(matchOffset, this._i);
		            if (tZone != null) {
		                this.utcOffset(tZone);
		            } else {
		                this.utcOffset(0, true);
		            }
		        }
		        return this;
		    }

		    function hasAlignedHourOffset(input) {
		        if (!this.isValid()) {
		            return false;
		        }
		        input = input ? createLocal(input).utcOffset() : 0;

		        return (this.utcOffset() - input) % 60 === 0;
		    }

		    function isDaylightSavingTime() {
		        return (
		            this.utcOffset() > this.clone().month(0).utcOffset() ||
		            this.utcOffset() > this.clone().month(5).utcOffset()
		        );
		    }

		    function isDaylightSavingTimeShifted() {
		        if (!isUndefined(this._isDSTShifted)) {
		            return this._isDSTShifted;
		        }

		        var c = {},
		            other;

		        copyConfig(c, this);
		        c = prepareConfig(c);

		        if (c._a) {
		            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
		            this._isDSTShifted =
		                this.isValid() && compareArrays(c._a, other.toArray()) > 0;
		        } else {
		            this._isDSTShifted = false;
		        }

		        return this._isDSTShifted;
		    }

		    function isLocal() {
		        return this.isValid() ? !this._isUTC : false;
		    }

		    function isUtcOffset() {
		        return this.isValid() ? this._isUTC : false;
		    }

		    function isUtc() {
		        return this.isValid() ? this._isUTC && this._offset === 0 : false;
		    }

		    // ASP.NET json date format regex
		    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
		        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
		        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
		        // and further modified to allow for strings containing both week and day
		        isoRegex =
		            /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

		    function createDuration(input, key) {
		        var duration = input,
		            // matching against regexp is expensive, do it on demand
		            match = null,
		            sign,
		            ret,
		            diffRes;

		        if (isDuration(input)) {
		            duration = {
		                ms: input._milliseconds,
		                d: input._days,
		                M: input._months,
		            };
		        } else if (isNumber(input) || !isNaN(+input)) {
		            duration = {};
		            if (key) {
		                duration[key] = +input;
		            } else {
		                duration.milliseconds = +input;
		            }
		        } else if ((match = aspNetRegex.exec(input))) {
		            sign = match[1] === '-' ? -1 : 1;
		            duration = {
		                y: 0,
		                d: toInt(match[DATE]) * sign,
		                h: toInt(match[HOUR]) * sign,
		                m: toInt(match[MINUTE]) * sign,
		                s: toInt(match[SECOND]) * sign,
		                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
		            };
		        } else if ((match = isoRegex.exec(input))) {
		            sign = match[1] === '-' ? -1 : 1;
		            duration = {
		                y: parseIso(match[2], sign),
		                M: parseIso(match[3], sign),
		                w: parseIso(match[4], sign),
		                d: parseIso(match[5], sign),
		                h: parseIso(match[6], sign),
		                m: parseIso(match[7], sign),
		                s: parseIso(match[8], sign),
		            };
		        } else if (duration == null) {
		            // checks for null or undefined
		            duration = {};
		        } else if (
		            typeof duration === 'object' &&
		            ('from' in duration || 'to' in duration)
		        ) {
		            diffRes = momentsDifference(
		                createLocal(duration.from),
		                createLocal(duration.to)
		            );

		            duration = {};
		            duration.ms = diffRes.milliseconds;
		            duration.M = diffRes.months;
		        }

		        ret = new Duration(duration);

		        if (isDuration(input) && hasOwnProp(input, '_locale')) {
		            ret._locale = input._locale;
		        }

		        if (isDuration(input) && hasOwnProp(input, '_isValid')) {
		            ret._isValid = input._isValid;
		        }

		        return ret;
		    }

		    createDuration.fn = Duration.prototype;
		    createDuration.invalid = createInvalid$1;

		    function parseIso(inp, sign) {
		        // We'd normally use ~~inp for this, but unfortunately it also
		        // converts floats to ints.
		        // inp may be undefined, so careful calling replace on it.
		        var res = inp && parseFloat(inp.replace(',', '.'));
		        // apply sign while we're at it
		        return (isNaN(res) ? 0 : res) * sign;
		    }

		    function positiveMomentsDifference(base, other) {
		        var res = {};

		        res.months =
		            other.month() - base.month() + (other.year() - base.year()) * 12;
		        if (base.clone().add(res.months, 'M').isAfter(other)) {
		            --res.months;
		        }

		        res.milliseconds = +other - +base.clone().add(res.months, 'M');

		        return res;
		    }

		    function momentsDifference(base, other) {
		        var res;
		        if (!(base.isValid() && other.isValid())) {
		            return { milliseconds: 0, months: 0 };
		        }

		        other = cloneWithOffset(other, base);
		        if (base.isBefore(other)) {
		            res = positiveMomentsDifference(base, other);
		        } else {
		            res = positiveMomentsDifference(other, base);
		            res.milliseconds = -res.milliseconds;
		            res.months = -res.months;
		        }

		        return res;
		    }

		    // TODO: remove 'name' arg after deprecation is removed
		    function createAdder(direction, name) {
		        return function (val, period) {
		            var dur, tmp;
		            //invert the arguments, but complain about it
		            if (period !== null && !isNaN(+period)) {
		                deprecateSimple(
		                    name,
		                    'moment().' +
		                        name +
		                        '(period, number) is deprecated. Please use moment().' +
		                        name +
		                        '(number, period). ' +
		                        'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
		                );
		                tmp = val;
		                val = period;
		                period = tmp;
		            }

		            dur = createDuration(val, period);
		            addSubtract(this, dur, direction);
		            return this;
		        };
		    }

		    function addSubtract(mom, duration, isAdding, updateOffset) {
		        var milliseconds = duration._milliseconds,
		            days = absRound(duration._days),
		            months = absRound(duration._months);

		        if (!mom.isValid()) {
		            // No op
		            return;
		        }

		        updateOffset = updateOffset == null ? true : updateOffset;

		        if (months) {
		            setMonth(mom, get(mom, 'Month') + months * isAdding);
		        }
		        if (days) {
		            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
		        }
		        if (milliseconds) {
		            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
		        }
		        if (updateOffset) {
		            hooks.updateOffset(mom, days || months);
		        }
		    }

		    var add = createAdder(1, 'add'),
		        subtract = createAdder(-1, 'subtract');

		    function isString(input) {
		        return typeof input === 'string' || input instanceof String;
		    }

		    // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
		    function isMomentInput(input) {
		        return (
		            isMoment(input) ||
		            isDate(input) ||
		            isString(input) ||
		            isNumber(input) ||
		            isNumberOrStringArray(input) ||
		            isMomentInputObject(input) ||
		            input === null ||
		            input === undefined
		        );
		    }

		    function isMomentInputObject(input) {
		        var objectTest = isObject(input) && !isObjectEmpty(input),
		            propertyTest = false,
		            properties = [
		                'years',
		                'year',
		                'y',
		                'months',
		                'month',
		                'M',
		                'days',
		                'day',
		                'd',
		                'dates',
		                'date',
		                'D',
		                'hours',
		                'hour',
		                'h',
		                'minutes',
		                'minute',
		                'm',
		                'seconds',
		                'second',
		                's',
		                'milliseconds',
		                'millisecond',
		                'ms',
		            ],
		            i,
		            property,
		            propertyLen = properties.length;

		        for (i = 0; i < propertyLen; i += 1) {
		            property = properties[i];
		            propertyTest = propertyTest || hasOwnProp(input, property);
		        }

		        return objectTest && propertyTest;
		    }

		    function isNumberOrStringArray(input) {
		        var arrayTest = isArray(input),
		            dataTypeTest = false;
		        if (arrayTest) {
		            dataTypeTest =
		                input.filter(function (item) {
		                    return !isNumber(item) && isString(input);
		                }).length === 0;
		        }
		        return arrayTest && dataTypeTest;
		    }

		    function isCalendarSpec(input) {
		        var objectTest = isObject(input) && !isObjectEmpty(input),
		            propertyTest = false,
		            properties = [
		                'sameDay',
		                'nextDay',
		                'lastDay',
		                'nextWeek',
		                'lastWeek',
		                'sameElse',
		            ],
		            i,
		            property;

		        for (i = 0; i < properties.length; i += 1) {
		            property = properties[i];
		            propertyTest = propertyTest || hasOwnProp(input, property);
		        }

		        return objectTest && propertyTest;
		    }

		    function getCalendarFormat(myMoment, now) {
		        var diff = myMoment.diff(now, 'days', true);
		        return diff < -6
		            ? 'sameElse'
		            : diff < -1
		              ? 'lastWeek'
		              : diff < 0
		                ? 'lastDay'
		                : diff < 1
		                  ? 'sameDay'
		                  : diff < 2
		                    ? 'nextDay'
		                    : diff < 7
		                      ? 'nextWeek'
		                      : 'sameElse';
		    }

		    function calendar$1(time, formats) {
		        // Support for single parameter, formats only overload to the calendar function
		        if (arguments.length === 1) {
		            if (!arguments[0]) {
		                time = undefined;
		                formats = undefined;
		            } else if (isMomentInput(arguments[0])) {
		                time = arguments[0];
		                formats = undefined;
		            } else if (isCalendarSpec(arguments[0])) {
		                formats = arguments[0];
		                time = undefined;
		            }
		        }
		        // We want to compare the start of today, vs this.
		        // Getting start-of-today depends on whether we're local/utc/offset or not.
		        var now = time || createLocal(),
		            sod = cloneWithOffset(now, this).startOf('day'),
		            format = hooks.calendarFormat(this, sod) || 'sameElse',
		            output =
		                formats &&
		                (isFunction(formats[format])
		                    ? formats[format].call(this, now)
		                    : formats[format]);

		        return this.format(
		            output || this.localeData().calendar(format, this, createLocal(now))
		        );
		    }

		    function clone() {
		        return new Moment(this);
		    }

		    function isAfter(input, units) {
		        var localInput = isMoment(input) ? input : createLocal(input);
		        if (!(this.isValid() && localInput.isValid())) {
		            return false;
		        }
		        units = normalizeUnits(units) || 'millisecond';
		        if (units === 'millisecond') {
		            return this.valueOf() > localInput.valueOf();
		        } else {
		            return localInput.valueOf() < this.clone().startOf(units).valueOf();
		        }
		    }

		    function isBefore(input, units) {
		        var localInput = isMoment(input) ? input : createLocal(input);
		        if (!(this.isValid() && localInput.isValid())) {
		            return false;
		        }
		        units = normalizeUnits(units) || 'millisecond';
		        if (units === 'millisecond') {
		            return this.valueOf() < localInput.valueOf();
		        } else {
		            return this.clone().endOf(units).valueOf() < localInput.valueOf();
		        }
		    }

		    function isBetween(from, to, units, inclusivity) {
		        var localFrom = isMoment(from) ? from : createLocal(from),
		            localTo = isMoment(to) ? to : createLocal(to);
		        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
		            return false;
		        }
		        inclusivity = inclusivity || '()';
		        return (
		            (inclusivity[0] === '('
		                ? this.isAfter(localFrom, units)
		                : !this.isBefore(localFrom, units)) &&
		            (inclusivity[1] === ')'
		                ? this.isBefore(localTo, units)
		                : !this.isAfter(localTo, units))
		        );
		    }

		    function isSame(input, units) {
		        var localInput = isMoment(input) ? input : createLocal(input),
		            inputMs;
		        if (!(this.isValid() && localInput.isValid())) {
		            return false;
		        }
		        units = normalizeUnits(units) || 'millisecond';
		        if (units === 'millisecond') {
		            return this.valueOf() === localInput.valueOf();
		        } else {
		            inputMs = localInput.valueOf();
		            return (
		                this.clone().startOf(units).valueOf() <= inputMs &&
		                inputMs <= this.clone().endOf(units).valueOf()
		            );
		        }
		    }

		    function isSameOrAfter(input, units) {
		        return this.isSame(input, units) || this.isAfter(input, units);
		    }

		    function isSameOrBefore(input, units) {
		        return this.isSame(input, units) || this.isBefore(input, units);
		    }

		    function diff(input, units, asFloat) {
		        var that, zoneDelta, output;

		        if (!this.isValid()) {
		            return NaN;
		        }

		        that = cloneWithOffset(input, this);

		        if (!that.isValid()) {
		            return NaN;
		        }

		        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

		        units = normalizeUnits(units);

		        switch (units) {
		            case 'year':
		                output = monthDiff(this, that) / 12;
		                break;
		            case 'month':
		                output = monthDiff(this, that);
		                break;
		            case 'quarter':
		                output = monthDiff(this, that) / 3;
		                break;
		            case 'second':
		                output = (this - that) / 1e3;
		                break; // 1000
		            case 'minute':
		                output = (this - that) / 6e4;
		                break; // 1000 * 60
		            case 'hour':
		                output = (this - that) / 36e5;
		                break; // 1000 * 60 * 60
		            case 'day':
		                output = (this - that - zoneDelta) / 864e5;
		                break; // 1000 * 60 * 60 * 24, negate dst
		            case 'week':
		                output = (this - that - zoneDelta) / 6048e5;
		                break; // 1000 * 60 * 60 * 24 * 7, negate dst
		            default:
		                output = this - that;
		        }

		        return asFloat ? output : absFloor(output);
		    }

		    function monthDiff(a, b) {
		        if (a.date() < b.date()) {
		            // end-of-month calculations work correct when the start month has more
		            // days than the end month.
		            return -monthDiff(b, a);
		        }
		        // difference in months
		        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
		            // b is in (anchor - 1 month, anchor + 1 month)
		            anchor = a.clone().add(wholeMonthDiff, 'months'),
		            anchor2,
		            adjust;

		        if (b - anchor < 0) {
		            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
		            // linear across the month
		            adjust = (b - anchor) / (anchor - anchor2);
		        } else {
		            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
		            // linear across the month
		            adjust = (b - anchor) / (anchor2 - anchor);
		        }

		        //check for negative zero, return zero if negative zero
		        return -(wholeMonthDiff + adjust) || 0;
		    }

		    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
		    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

		    function toString() {
		        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
		    }

		    function toISOString(keepOffset) {
		        if (!this.isValid()) {
		            return null;
		        }
		        var utc = keepOffset !== true,
		            m = utc ? this.clone().utc() : this;
		        if (m.year() < 0 || m.year() > 9999) {
		            return formatMoment(
		                m,
		                utc
		                    ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
		                    : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
		            );
		        }
		        if (isFunction(Date.prototype.toISOString)) {
		            // native implementation is ~50x faster, use it when we can
		            if (utc) {
		                return this.toDate().toISOString();
		            } else {
		                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
		                    .toISOString()
		                    .replace('Z', formatMoment(m, 'Z'));
		            }
		        }
		        return formatMoment(
		            m,
		            utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
		        );
		    }

		    /**
		     * Return a human readable representation of a moment that can
		     * also be evaluated to get a new moment which is the same
		     *
		     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
		     */
		    function inspect() {
		        if (!this.isValid()) {
		            return 'moment.invalid(/* ' + this._i + ' */)';
		        }
		        var func = 'moment',
		            zone = '',
		            prefix,
		            year,
		            datetime,
		            suffix;
		        if (!this.isLocal()) {
		            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
		            zone = 'Z';
		        }
		        prefix = '[' + func + '("]';
		        year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
		        datetime = '-MM-DD[T]HH:mm:ss.SSS';
		        suffix = zone + '[")]';

		        return this.format(prefix + year + datetime + suffix);
		    }

		    function format(inputString) {
		        if (!inputString) {
		            inputString = this.isUtc()
		                ? hooks.defaultFormatUtc
		                : hooks.defaultFormat;
		        }
		        var output = formatMoment(this, inputString);
		        return this.localeData().postformat(output);
		    }

		    function from(time, withoutSuffix) {
		        if (
		            this.isValid() &&
		            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
		        ) {
		            return createDuration({ to: this, from: time })
		                .locale(this.locale())
		                .humanize(!withoutSuffix);
		        } else {
		            return this.localeData().invalidDate();
		        }
		    }

		    function fromNow(withoutSuffix) {
		        return this.from(createLocal(), withoutSuffix);
		    }

		    function to(time, withoutSuffix) {
		        if (
		            this.isValid() &&
		            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
		        ) {
		            return createDuration({ from: this, to: time })
		                .locale(this.locale())
		                .humanize(!withoutSuffix);
		        } else {
		            return this.localeData().invalidDate();
		        }
		    }

		    function toNow(withoutSuffix) {
		        return this.to(createLocal(), withoutSuffix);
		    }

		    // If passed a locale key, it will set the locale for this
		    // instance.  Otherwise, it will return the locale configuration
		    // variables for this instance.
		    function locale(key) {
		        var newLocaleData;

		        if (key === undefined) {
		            return this._locale._abbr;
		        } else {
		            newLocaleData = getLocale(key);
		            if (newLocaleData != null) {
		                this._locale = newLocaleData;
		            }
		            return this;
		        }
		    }

		    var lang = deprecate(
		        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
		        function (key) {
		            if (key === undefined) {
		                return this.localeData();
		            } else {
		                return this.locale(key);
		            }
		        }
		    );

		    function localeData() {
		        return this._locale;
		    }

		    var MS_PER_SECOND = 1000,
		        MS_PER_MINUTE = 60 * MS_PER_SECOND,
		        MS_PER_HOUR = 60 * MS_PER_MINUTE,
		        MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

		    // actual modulo - handles negative numbers (for dates before 1970):
		    function mod$1(dividend, divisor) {
		        return ((dividend % divisor) + divisor) % divisor;
		    }

		    function localStartOfDate(y, m, d) {
		        // the date constructor remaps years 0-99 to 1900-1999
		        if (y < 100 && y >= 0) {
		            // preserve leap years using a full 400 year cycle, then reset
		            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
		        } else {
		            return new Date(y, m, d).valueOf();
		        }
		    }

		    function utcStartOfDate(y, m, d) {
		        // Date.UTC remaps years 0-99 to 1900-1999
		        if (y < 100 && y >= 0) {
		            // preserve leap years using a full 400 year cycle, then reset
		            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
		        } else {
		            return Date.UTC(y, m, d);
		        }
		    }

		    function startOf(units) {
		        var time, startOfDate;
		        units = normalizeUnits(units);
		        if (units === undefined || units === 'millisecond' || !this.isValid()) {
		            return this;
		        }

		        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

		        switch (units) {
		            case 'year':
		                time = startOfDate(this.year(), 0, 1);
		                break;
		            case 'quarter':
		                time = startOfDate(
		                    this.year(),
		                    this.month() - (this.month() % 3),
		                    1
		                );
		                break;
		            case 'month':
		                time = startOfDate(this.year(), this.month(), 1);
		                break;
		            case 'week':
		                time = startOfDate(
		                    this.year(),
		                    this.month(),
		                    this.date() - this.weekday()
		                );
		                break;
		            case 'isoWeek':
		                time = startOfDate(
		                    this.year(),
		                    this.month(),
		                    this.date() - (this.isoWeekday() - 1)
		                );
		                break;
		            case 'day':
		            case 'date':
		                time = startOfDate(this.year(), this.month(), this.date());
		                break;
		            case 'hour':
		                time = this._d.valueOf();
		                time -= mod$1(
		                    time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
		                    MS_PER_HOUR
		                );
		                break;
		            case 'minute':
		                time = this._d.valueOf();
		                time -= mod$1(time, MS_PER_MINUTE);
		                break;
		            case 'second':
		                time = this._d.valueOf();
		                time -= mod$1(time, MS_PER_SECOND);
		                break;
		        }

		        this._d.setTime(time);
		        hooks.updateOffset(this, true);
		        return this;
		    }

		    function endOf(units) {
		        var time, startOfDate;
		        units = normalizeUnits(units);
		        if (units === undefined || units === 'millisecond' || !this.isValid()) {
		            return this;
		        }

		        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

		        switch (units) {
		            case 'year':
		                time = startOfDate(this.year() + 1, 0, 1) - 1;
		                break;
		            case 'quarter':
		                time =
		                    startOfDate(
		                        this.year(),
		                        this.month() - (this.month() % 3) + 3,
		                        1
		                    ) - 1;
		                break;
		            case 'month':
		                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
		                break;
		            case 'week':
		                time =
		                    startOfDate(
		                        this.year(),
		                        this.month(),
		                        this.date() - this.weekday() + 7
		                    ) - 1;
		                break;
		            case 'isoWeek':
		                time =
		                    startOfDate(
		                        this.year(),
		                        this.month(),
		                        this.date() - (this.isoWeekday() - 1) + 7
		                    ) - 1;
		                break;
		            case 'day':
		            case 'date':
		                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
		                break;
		            case 'hour':
		                time = this._d.valueOf();
		                time +=
		                    MS_PER_HOUR -
		                    mod$1(
		                        time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
		                        MS_PER_HOUR
		                    ) -
		                    1;
		                break;
		            case 'minute':
		                time = this._d.valueOf();
		                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
		                break;
		            case 'second':
		                time = this._d.valueOf();
		                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
		                break;
		        }

		        this._d.setTime(time);
		        hooks.updateOffset(this, true);
		        return this;
		    }

		    function valueOf() {
		        return this._d.valueOf() - (this._offset || 0) * 60000;
		    }

		    function unix() {
		        return Math.floor(this.valueOf() / 1000);
		    }

		    function toDate() {
		        return new Date(this.valueOf());
		    }

		    function toArray() {
		        var m = this;
		        return [
		            m.year(),
		            m.month(),
		            m.date(),
		            m.hour(),
		            m.minute(),
		            m.second(),
		            m.millisecond(),
		        ];
		    }

		    function toObject() {
		        var m = this;
		        return {
		            years: m.year(),
		            months: m.month(),
		            date: m.date(),
		            hours: m.hours(),
		            minutes: m.minutes(),
		            seconds: m.seconds(),
		            milliseconds: m.milliseconds(),
		        };
		    }

		    function toJSON() {
		        // new Date(NaN).toJSON() === null
		        return this.isValid() ? this.toISOString() : null;
		    }

		    function isValid$2() {
		        return isValid(this);
		    }

		    function parsingFlags() {
		        return extend({}, getParsingFlags(this));
		    }

		    function invalidAt() {
		        return getParsingFlags(this).overflow;
		    }

		    function creationData() {
		        return {
		            input: this._i,
		            format: this._f,
		            locale: this._locale,
		            isUTC: this._isUTC,
		            strict: this._strict,
		        };
		    }

		    addFormatToken('N', 0, 0, 'eraAbbr');
		    addFormatToken('NN', 0, 0, 'eraAbbr');
		    addFormatToken('NNN', 0, 0, 'eraAbbr');
		    addFormatToken('NNNN', 0, 0, 'eraName');
		    addFormatToken('NNNNN', 0, 0, 'eraNarrow');

		    addFormatToken('y', ['y', 1], 'yo', 'eraYear');
		    addFormatToken('y', ['yy', 2], 0, 'eraYear');
		    addFormatToken('y', ['yyy', 3], 0, 'eraYear');
		    addFormatToken('y', ['yyyy', 4], 0, 'eraYear');

		    addRegexToken('N', matchEraAbbr);
		    addRegexToken('NN', matchEraAbbr);
		    addRegexToken('NNN', matchEraAbbr);
		    addRegexToken('NNNN', matchEraName);
		    addRegexToken('NNNNN', matchEraNarrow);

		    addParseToken(
		        ['N', 'NN', 'NNN', 'NNNN', 'NNNNN'],
		        function (input, array, config, token) {
		            var era = config._locale.erasParse(input, token, config._strict);
		            if (era) {
		                getParsingFlags(config).era = era;
		            } else {
		                getParsingFlags(config).invalidEra = input;
		            }
		        }
		    );

		    addRegexToken('y', matchUnsigned);
		    addRegexToken('yy', matchUnsigned);
		    addRegexToken('yyy', matchUnsigned);
		    addRegexToken('yyyy', matchUnsigned);
		    addRegexToken('yo', matchEraYearOrdinal);

		    addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
		    addParseToken(['yo'], function (input, array, config, token) {
		        var match;
		        if (config._locale._eraYearOrdinalRegex) {
		            match = input.match(config._locale._eraYearOrdinalRegex);
		        }

		        if (config._locale.eraYearOrdinalParse) {
		            array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
		        } else {
		            array[YEAR] = parseInt(input, 10);
		        }
		    });

		    function localeEras(m, format) {
		        var i,
		            l,
		            date,
		            eras = this._eras || getLocale('en')._eras;
		        for (i = 0, l = eras.length; i < l; ++i) {
		            switch (typeof eras[i].since) {
		                case 'string':
		                    // truncate time
		                    date = hooks(eras[i].since).startOf('day');
		                    eras[i].since = date.valueOf();
		                    break;
		            }

		            switch (typeof eras[i].until) {
		                case 'undefined':
		                    eras[i].until = +Infinity;
		                    break;
		                case 'string':
		                    // truncate time
		                    date = hooks(eras[i].until).startOf('day').valueOf();
		                    eras[i].until = date.valueOf();
		                    break;
		            }
		        }
		        return eras;
		    }

		    function localeErasParse(eraName, format, strict) {
		        var i,
		            l,
		            eras = this.eras(),
		            name,
		            abbr,
		            narrow;
		        eraName = eraName.toUpperCase();

		        for (i = 0, l = eras.length; i < l; ++i) {
		            name = eras[i].name.toUpperCase();
		            abbr = eras[i].abbr.toUpperCase();
		            narrow = eras[i].narrow.toUpperCase();

		            if (strict) {
		                switch (format) {
		                    case 'N':
		                    case 'NN':
		                    case 'NNN':
		                        if (abbr === eraName) {
		                            return eras[i];
		                        }
		                        break;

		                    case 'NNNN':
		                        if (name === eraName) {
		                            return eras[i];
		                        }
		                        break;

		                    case 'NNNNN':
		                        if (narrow === eraName) {
		                            return eras[i];
		                        }
		                        break;
		                }
		            } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
		                return eras[i];
		            }
		        }
		    }

		    function localeErasConvertYear(era, year) {
		        var dir = era.since <= era.until ? 1 : -1;
		        if (year === undefined) {
		            return hooks(era.since).year();
		        } else {
		            return hooks(era.since).year() + (year - era.offset) * dir;
		        }
		    }

		    function getEraName() {
		        var i,
		            l,
		            val,
		            eras = this.localeData().eras();
		        for (i = 0, l = eras.length; i < l; ++i) {
		            // truncate time
		            val = this.clone().startOf('day').valueOf();

		            if (eras[i].since <= val && val <= eras[i].until) {
		                return eras[i].name;
		            }
		            if (eras[i].until <= val && val <= eras[i].since) {
		                return eras[i].name;
		            }
		        }

		        return '';
		    }

		    function getEraNarrow() {
		        var i,
		            l,
		            val,
		            eras = this.localeData().eras();
		        for (i = 0, l = eras.length; i < l; ++i) {
		            // truncate time
		            val = this.clone().startOf('day').valueOf();

		            if (eras[i].since <= val && val <= eras[i].until) {
		                return eras[i].narrow;
		            }
		            if (eras[i].until <= val && val <= eras[i].since) {
		                return eras[i].narrow;
		            }
		        }

		        return '';
		    }

		    function getEraAbbr() {
		        var i,
		            l,
		            val,
		            eras = this.localeData().eras();
		        for (i = 0, l = eras.length; i < l; ++i) {
		            // truncate time
		            val = this.clone().startOf('day').valueOf();

		            if (eras[i].since <= val && val <= eras[i].until) {
		                return eras[i].abbr;
		            }
		            if (eras[i].until <= val && val <= eras[i].since) {
		                return eras[i].abbr;
		            }
		        }

		        return '';
		    }

		    function getEraYear() {
		        var i,
		            l,
		            dir,
		            val,
		            eras = this.localeData().eras();
		        for (i = 0, l = eras.length; i < l; ++i) {
		            dir = eras[i].since <= eras[i].until ? 1 : -1;

		            // truncate time
		            val = this.clone().startOf('day').valueOf();

		            if (
		                (eras[i].since <= val && val <= eras[i].until) ||
		                (eras[i].until <= val && val <= eras[i].since)
		            ) {
		                return (
		                    (this.year() - hooks(eras[i].since).year()) * dir +
		                    eras[i].offset
		                );
		            }
		        }

		        return this.year();
		    }

		    function erasNameRegex(isStrict) {
		        if (!hasOwnProp(this, '_erasNameRegex')) {
		            computeErasParse.call(this);
		        }
		        return isStrict ? this._erasNameRegex : this._erasRegex;
		    }

		    function erasAbbrRegex(isStrict) {
		        if (!hasOwnProp(this, '_erasAbbrRegex')) {
		            computeErasParse.call(this);
		        }
		        return isStrict ? this._erasAbbrRegex : this._erasRegex;
		    }

		    function erasNarrowRegex(isStrict) {
		        if (!hasOwnProp(this, '_erasNarrowRegex')) {
		            computeErasParse.call(this);
		        }
		        return isStrict ? this._erasNarrowRegex : this._erasRegex;
		    }

		    function matchEraAbbr(isStrict, locale) {
		        return locale.erasAbbrRegex(isStrict);
		    }

		    function matchEraName(isStrict, locale) {
		        return locale.erasNameRegex(isStrict);
		    }

		    function matchEraNarrow(isStrict, locale) {
		        return locale.erasNarrowRegex(isStrict);
		    }

		    function matchEraYearOrdinal(isStrict, locale) {
		        return locale._eraYearOrdinalRegex || matchUnsigned;
		    }

		    function computeErasParse() {
		        var abbrPieces = [],
		            namePieces = [],
		            narrowPieces = [],
		            mixedPieces = [],
		            i,
		            l,
		            erasName,
		            erasAbbr,
		            erasNarrow,
		            eras = this.eras();

		        for (i = 0, l = eras.length; i < l; ++i) {
		            erasName = regexEscape(eras[i].name);
		            erasAbbr = regexEscape(eras[i].abbr);
		            erasNarrow = regexEscape(eras[i].narrow);

		            namePieces.push(erasName);
		            abbrPieces.push(erasAbbr);
		            narrowPieces.push(erasNarrow);
		            mixedPieces.push(erasName);
		            mixedPieces.push(erasAbbr);
		            mixedPieces.push(erasNarrow);
		        }

		        this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
		        this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
		        this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
		        this._erasNarrowRegex = new RegExp(
		            '^(' + narrowPieces.join('|') + ')',
		            'i'
		        );
		    }

		    // FORMATTING

		    addFormatToken(0, ['gg', 2], 0, function () {
		        return this.weekYear() % 100;
		    });

		    addFormatToken(0, ['GG', 2], 0, function () {
		        return this.isoWeekYear() % 100;
		    });

		    function addWeekYearFormatToken(token, getter) {
		        addFormatToken(0, [token, token.length], 0, getter);
		    }

		    addWeekYearFormatToken('gggg', 'weekYear');
		    addWeekYearFormatToken('ggggg', 'weekYear');
		    addWeekYearFormatToken('GGGG', 'isoWeekYear');
		    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

		    // ALIASES

		    // PARSING

		    addRegexToken('G', matchSigned);
		    addRegexToken('g', matchSigned);
		    addRegexToken('GG', match1to2, match2);
		    addRegexToken('gg', match1to2, match2);
		    addRegexToken('GGGG', match1to4, match4);
		    addRegexToken('gggg', match1to4, match4);
		    addRegexToken('GGGGG', match1to6, match6);
		    addRegexToken('ggggg', match1to6, match6);

		    addWeekParseToken(
		        ['gggg', 'ggggg', 'GGGG', 'GGGGG'],
		        function (input, week, config, token) {
		            week[token.substr(0, 2)] = toInt(input);
		        }
		    );

		    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
		        week[token] = hooks.parseTwoDigitYear(input);
		    });

		    // MOMENTS

		    function getSetWeekYear(input) {
		        return getSetWeekYearHelper.call(
		            this,
		            input,
		            this.week(),
		            this.weekday() + this.localeData()._week.dow,
		            this.localeData()._week.dow,
		            this.localeData()._week.doy
		        );
		    }

		    function getSetISOWeekYear(input) {
		        return getSetWeekYearHelper.call(
		            this,
		            input,
		            this.isoWeek(),
		            this.isoWeekday(),
		            1,
		            4
		        );
		    }

		    function getISOWeeksInYear() {
		        return weeksInYear(this.year(), 1, 4);
		    }

		    function getISOWeeksInISOWeekYear() {
		        return weeksInYear(this.isoWeekYear(), 1, 4);
		    }

		    function getWeeksInYear() {
		        var weekInfo = this.localeData()._week;
		        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
		    }

		    function getWeeksInWeekYear() {
		        var weekInfo = this.localeData()._week;
		        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
		    }

		    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
		        var weeksTarget;
		        if (input == null) {
		            return weekOfYear(this, dow, doy).year;
		        } else {
		            weeksTarget = weeksInYear(input, dow, doy);
		            if (week > weeksTarget) {
		                week = weeksTarget;
		            }
		            return setWeekAll.call(this, input, week, weekday, dow, doy);
		        }
		    }

		    function setWeekAll(weekYear, week, weekday, dow, doy) {
		        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
		            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

		        this.year(date.getUTCFullYear());
		        this.month(date.getUTCMonth());
		        this.date(date.getUTCDate());
		        return this;
		    }

		    // FORMATTING

		    addFormatToken('Q', 0, 'Qo', 'quarter');

		    // PARSING

		    addRegexToken('Q', match1);
		    addParseToken('Q', function (input, array) {
		        array[MONTH] = (toInt(input) - 1) * 3;
		    });

		    // MOMENTS

		    function getSetQuarter(input) {
		        return input == null
		            ? Math.ceil((this.month() + 1) / 3)
		            : this.month((input - 1) * 3 + (this.month() % 3));
		    }

		    // FORMATTING

		    addFormatToken('D', ['DD', 2], 'Do', 'date');

		    // PARSING

		    addRegexToken('D', match1to2, match1to2NoLeadingZero);
		    addRegexToken('DD', match1to2, match2);
		    addRegexToken('Do', function (isStrict, locale) {
		        // TODO: Remove "ordinalParse" fallback in next major release.
		        return isStrict
		            ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
		            : locale._dayOfMonthOrdinalParseLenient;
		    });

		    addParseToken(['D', 'DD'], DATE);
		    addParseToken('Do', function (input, array) {
		        array[DATE] = toInt(input.match(match1to2)[0]);
		    });

		    // MOMENTS

		    var getSetDayOfMonth = makeGetSet('Date', true);

		    // FORMATTING

		    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

		    // PARSING

		    addRegexToken('DDD', match1to3);
		    addRegexToken('DDDD', match3);
		    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
		        config._dayOfYear = toInt(input);
		    });

		    // HELPERS

		    // MOMENTS

		    function getSetDayOfYear(input) {
		        var dayOfYear =
		            Math.round(
		                (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
		            ) + 1;
		        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
		    }

		    // FORMATTING

		    addFormatToken('m', ['mm', 2], 0, 'minute');

		    // PARSING

		    addRegexToken('m', match1to2, match1to2HasZero);
		    addRegexToken('mm', match1to2, match2);
		    addParseToken(['m', 'mm'], MINUTE);

		    // MOMENTS

		    var getSetMinute = makeGetSet('Minutes', false);

		    // FORMATTING

		    addFormatToken('s', ['ss', 2], 0, 'second');

		    // PARSING

		    addRegexToken('s', match1to2, match1to2HasZero);
		    addRegexToken('ss', match1to2, match2);
		    addParseToken(['s', 'ss'], SECOND);

		    // MOMENTS

		    var getSetSecond = makeGetSet('Seconds', false);

		    // FORMATTING

		    addFormatToken('S', 0, 0, function () {
		        return ~~(this.millisecond() / 100);
		    });

		    addFormatToken(0, ['SS', 2], 0, function () {
		        return ~~(this.millisecond() / 10);
		    });

		    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
		    addFormatToken(0, ['SSSS', 4], 0, function () {
		        return this.millisecond() * 10;
		    });
		    addFormatToken(0, ['SSSSS', 5], 0, function () {
		        return this.millisecond() * 100;
		    });
		    addFormatToken(0, ['SSSSSS', 6], 0, function () {
		        return this.millisecond() * 1000;
		    });
		    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
		        return this.millisecond() * 10000;
		    });
		    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
		        return this.millisecond() * 100000;
		    });
		    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
		        return this.millisecond() * 1000000;
		    });

		    // PARSING

		    addRegexToken('S', match1to3, match1);
		    addRegexToken('SS', match1to3, match2);
		    addRegexToken('SSS', match1to3, match3);

		    var token, getSetMillisecond;
		    for (token = 'SSSS'; token.length <= 9; token += 'S') {
		        addRegexToken(token, matchUnsigned);
		    }

		    function parseMs(input, array) {
		        array[MILLISECOND] = toInt(('0.' + input) * 1000);
		    }

		    for (token = 'S'; token.length <= 9; token += 'S') {
		        addParseToken(token, parseMs);
		    }

		    getSetMillisecond = makeGetSet('Milliseconds', false);

		    // FORMATTING

		    addFormatToken('z', 0, 0, 'zoneAbbr');
		    addFormatToken('zz', 0, 0, 'zoneName');

		    // MOMENTS

		    function getZoneAbbr() {
		        return this._isUTC ? 'UTC' : '';
		    }

		    function getZoneName() {
		        return this._isUTC ? 'Coordinated Universal Time' : '';
		    }

		    var proto = Moment.prototype;

		    proto.add = add;
		    proto.calendar = calendar$1;
		    proto.clone = clone;
		    proto.diff = diff;
		    proto.endOf = endOf;
		    proto.format = format;
		    proto.from = from;
		    proto.fromNow = fromNow;
		    proto.to = to;
		    proto.toNow = toNow;
		    proto.get = stringGet;
		    proto.invalidAt = invalidAt;
		    proto.isAfter = isAfter;
		    proto.isBefore = isBefore;
		    proto.isBetween = isBetween;
		    proto.isSame = isSame;
		    proto.isSameOrAfter = isSameOrAfter;
		    proto.isSameOrBefore = isSameOrBefore;
		    proto.isValid = isValid$2;
		    proto.lang = lang;
		    proto.locale = locale;
		    proto.localeData = localeData;
		    proto.max = prototypeMax;
		    proto.min = prototypeMin;
		    proto.parsingFlags = parsingFlags;
		    proto.set = stringSet;
		    proto.startOf = startOf;
		    proto.subtract = subtract;
		    proto.toArray = toArray;
		    proto.toObject = toObject;
		    proto.toDate = toDate;
		    proto.toISOString = toISOString;
		    proto.inspect = inspect;
		    if (typeof Symbol !== 'undefined' && Symbol.for != null) {
		        proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
		            return 'Moment<' + this.format() + '>';
		        };
		    }
		    proto.toJSON = toJSON;
		    proto.toString = toString;
		    proto.unix = unix;
		    proto.valueOf = valueOf;
		    proto.creationData = creationData;
		    proto.eraName = getEraName;
		    proto.eraNarrow = getEraNarrow;
		    proto.eraAbbr = getEraAbbr;
		    proto.eraYear = getEraYear;
		    proto.year = getSetYear;
		    proto.isLeapYear = getIsLeapYear;
		    proto.weekYear = getSetWeekYear;
		    proto.isoWeekYear = getSetISOWeekYear;
		    proto.quarter = proto.quarters = getSetQuarter;
		    proto.month = getSetMonth;
		    proto.daysInMonth = getDaysInMonth;
		    proto.week = proto.weeks = getSetWeek;
		    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
		    proto.weeksInYear = getWeeksInYear;
		    proto.weeksInWeekYear = getWeeksInWeekYear;
		    proto.isoWeeksInYear = getISOWeeksInYear;
		    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
		    proto.date = getSetDayOfMonth;
		    proto.day = proto.days = getSetDayOfWeek;
		    proto.weekday = getSetLocaleDayOfWeek;
		    proto.isoWeekday = getSetISODayOfWeek;
		    proto.dayOfYear = getSetDayOfYear;
		    proto.hour = proto.hours = getSetHour;
		    proto.minute = proto.minutes = getSetMinute;
		    proto.second = proto.seconds = getSetSecond;
		    proto.millisecond = proto.milliseconds = getSetMillisecond;
		    proto.utcOffset = getSetOffset;
		    proto.utc = setOffsetToUTC;
		    proto.local = setOffsetToLocal;
		    proto.parseZone = setOffsetToParsedOffset;
		    proto.hasAlignedHourOffset = hasAlignedHourOffset;
		    proto.isDST = isDaylightSavingTime;
		    proto.isLocal = isLocal;
		    proto.isUtcOffset = isUtcOffset;
		    proto.isUtc = isUtc;
		    proto.isUTC = isUtc;
		    proto.zoneAbbr = getZoneAbbr;
		    proto.zoneName = getZoneName;
		    proto.dates = deprecate(
		        'dates accessor is deprecated. Use date instead.',
		        getSetDayOfMonth
		    );
		    proto.months = deprecate(
		        'months accessor is deprecated. Use month instead',
		        getSetMonth
		    );
		    proto.years = deprecate(
		        'years accessor is deprecated. Use year instead',
		        getSetYear
		    );
		    proto.zone = deprecate(
		        'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
		        getSetZone
		    );
		    proto.isDSTShifted = deprecate(
		        'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
		        isDaylightSavingTimeShifted
		    );

		    function createUnix(input) {
		        return createLocal(input * 1000);
		    }

		    function createInZone() {
		        return createLocal.apply(null, arguments).parseZone();
		    }

		    function preParsePostFormat(string) {
		        return string;
		    }

		    var proto$1 = Locale.prototype;

		    proto$1.calendar = calendar;
		    proto$1.longDateFormat = longDateFormat;
		    proto$1.invalidDate = invalidDate;
		    proto$1.ordinal = ordinal;
		    proto$1.preparse = preParsePostFormat;
		    proto$1.postformat = preParsePostFormat;
		    proto$1.relativeTime = relativeTime;
		    proto$1.pastFuture = pastFuture;
		    proto$1.set = set;
		    proto$1.eras = localeEras;
		    proto$1.erasParse = localeErasParse;
		    proto$1.erasConvertYear = localeErasConvertYear;
		    proto$1.erasAbbrRegex = erasAbbrRegex;
		    proto$1.erasNameRegex = erasNameRegex;
		    proto$1.erasNarrowRegex = erasNarrowRegex;

		    proto$1.months = localeMonths;
		    proto$1.monthsShort = localeMonthsShort;
		    proto$1.monthsParse = localeMonthsParse;
		    proto$1.monthsRegex = monthsRegex;
		    proto$1.monthsShortRegex = monthsShortRegex;
		    proto$1.week = localeWeek;
		    proto$1.firstDayOfYear = localeFirstDayOfYear;
		    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

		    proto$1.weekdays = localeWeekdays;
		    proto$1.weekdaysMin = localeWeekdaysMin;
		    proto$1.weekdaysShort = localeWeekdaysShort;
		    proto$1.weekdaysParse = localeWeekdaysParse;

		    proto$1.weekdaysRegex = weekdaysRegex;
		    proto$1.weekdaysShortRegex = weekdaysShortRegex;
		    proto$1.weekdaysMinRegex = weekdaysMinRegex;

		    proto$1.isPM = localeIsPM;
		    proto$1.meridiem = localeMeridiem;

		    function get$1(format, index, field, setter) {
		        var locale = getLocale(),
		            utc = createUTC().set(setter, index);
		        return locale[field](utc, format);
		    }

		    function listMonthsImpl(format, index, field) {
		        if (isNumber(format)) {
		            index = format;
		            format = undefined;
		        }

		        format = format || '';

		        if (index != null) {
		            return get$1(format, index, field, 'month');
		        }

		        var i,
		            out = [];
		        for (i = 0; i < 12; i++) {
		            out[i] = get$1(format, i, field, 'month');
		        }
		        return out;
		    }

		    // ()
		    // (5)
		    // (fmt, 5)
		    // (fmt)
		    // (true)
		    // (true, 5)
		    // (true, fmt, 5)
		    // (true, fmt)
		    function listWeekdaysImpl(localeSorted, format, index, field) {
		        if (typeof localeSorted === 'boolean') {
		            if (isNumber(format)) {
		                index = format;
		                format = undefined;
		            }

		            format = format || '';
		        } else {
		            format = localeSorted;
		            index = format;
		            localeSorted = false;

		            if (isNumber(format)) {
		                index = format;
		                format = undefined;
		            }

		            format = format || '';
		        }

		        var locale = getLocale(),
		            shift = localeSorted ? locale._week.dow : 0,
		            i,
		            out = [];

		        if (index != null) {
		            return get$1(format, (index + shift) % 7, field, 'day');
		        }

		        for (i = 0; i < 7; i++) {
		            out[i] = get$1(format, (i + shift) % 7, field, 'day');
		        }
		        return out;
		    }

		    function listMonths(format, index) {
		        return listMonthsImpl(format, index, 'months');
		    }

		    function listMonthsShort(format, index) {
		        return listMonthsImpl(format, index, 'monthsShort');
		    }

		    function listWeekdays(localeSorted, format, index) {
		        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
		    }

		    function listWeekdaysShort(localeSorted, format, index) {
		        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
		    }

		    function listWeekdaysMin(localeSorted, format, index) {
		        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
		    }

		    getSetGlobalLocale('en', {
		        eras: [
		            {
		                since: '0001-01-01',
		                until: +Infinity,
		                offset: 1,
		                name: 'Anno Domini',
		                narrow: 'AD',
		                abbr: 'AD',
		            },
		            {
		                since: '0000-12-31',
		                until: -Infinity,
		                offset: 1,
		                name: 'Before Christ',
		                narrow: 'BC',
		                abbr: 'BC',
		            },
		        ],
		        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
		        ordinal: function (number) {
		            var b = number % 10,
		                output =
		                    toInt((number % 100) / 10) === 1
		                        ? 'th'
		                        : b === 1
		                          ? 'st'
		                          : b === 2
		                            ? 'nd'
		                            : b === 3
		                              ? 'rd'
		                              : 'th';
		            return number + output;
		        },
		    });

		    // Side effect imports

		    hooks.lang = deprecate(
		        'moment.lang is deprecated. Use moment.locale instead.',
		        getSetGlobalLocale
		    );
		    hooks.langData = deprecate(
		        'moment.langData is deprecated. Use moment.localeData instead.',
		        getLocale
		    );

		    var mathAbs = Math.abs;

		    function abs() {
		        var data = this._data;

		        this._milliseconds = mathAbs(this._milliseconds);
		        this._days = mathAbs(this._days);
		        this._months = mathAbs(this._months);

		        data.milliseconds = mathAbs(data.milliseconds);
		        data.seconds = mathAbs(data.seconds);
		        data.minutes = mathAbs(data.minutes);
		        data.hours = mathAbs(data.hours);
		        data.months = mathAbs(data.months);
		        data.years = mathAbs(data.years);

		        return this;
		    }

		    function addSubtract$1(duration, input, value, direction) {
		        var other = createDuration(input, value);

		        duration._milliseconds += direction * other._milliseconds;
		        duration._days += direction * other._days;
		        duration._months += direction * other._months;

		        return duration._bubble();
		    }

		    // supports only 2.0-style add(1, 's') or add(duration)
		    function add$1(input, value) {
		        return addSubtract$1(this, input, value, 1);
		    }

		    // supports only 2.0-style subtract(1, 's') or subtract(duration)
		    function subtract$1(input, value) {
		        return addSubtract$1(this, input, value, -1);
		    }

		    function absCeil(number) {
		        if (number < 0) {
		            return Math.floor(number);
		        } else {
		            return Math.ceil(number);
		        }
		    }

		    function bubble() {
		        var milliseconds = this._milliseconds,
		            days = this._days,
		            months = this._months,
		            data = this._data,
		            seconds,
		            minutes,
		            hours,
		            years,
		            monthsFromDays;

		        // if we have a mix of positive and negative values, bubble down first
		        // check: https://github.com/moment/moment/issues/2166
		        if (
		            !(
		                (milliseconds >= 0 && days >= 0 && months >= 0) ||
		                (milliseconds <= 0 && days <= 0 && months <= 0)
		            )
		        ) {
		            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
		            days = 0;
		            months = 0;
		        }

		        // The following code bubbles up values, see the tests for
		        // examples of what that means.
		        data.milliseconds = milliseconds % 1000;

		        seconds = absFloor(milliseconds / 1000);
		        data.seconds = seconds % 60;

		        minutes = absFloor(seconds / 60);
		        data.minutes = minutes % 60;

		        hours = absFloor(minutes / 60);
		        data.hours = hours % 24;

		        days += absFloor(hours / 24);

		        // convert days to months
		        monthsFromDays = absFloor(daysToMonths(days));
		        months += monthsFromDays;
		        days -= absCeil(monthsToDays(monthsFromDays));

		        // 12 months -> 1 year
		        years = absFloor(months / 12);
		        months %= 12;

		        data.days = days;
		        data.months = months;
		        data.years = years;

		        return this;
		    }

		    function daysToMonths(days) {
		        // 400 years have 146097 days (taking into account leap year rules)
		        // 400 years have 12 months === 4800
		        return (days * 4800) / 146097;
		    }

		    function monthsToDays(months) {
		        // the reverse of daysToMonths
		        return (months * 146097) / 4800;
		    }

		    function as(units) {
		        if (!this.isValid()) {
		            return NaN;
		        }
		        var days,
		            months,
		            milliseconds = this._milliseconds;

		        units = normalizeUnits(units);

		        if (units === 'month' || units === 'quarter' || units === 'year') {
		            days = this._days + milliseconds / 864e5;
		            months = this._months + daysToMonths(days);
		            switch (units) {
		                case 'month':
		                    return months;
		                case 'quarter':
		                    return months / 3;
		                case 'year':
		                    return months / 12;
		            }
		        } else {
		            // handle milliseconds separately because of floating point math errors (issue #1867)
		            days = this._days + Math.round(monthsToDays(this._months));
		            switch (units) {
		                case 'week':
		                    return days / 7 + milliseconds / 6048e5;
		                case 'day':
		                    return days + milliseconds / 864e5;
		                case 'hour':
		                    return days * 24 + milliseconds / 36e5;
		                case 'minute':
		                    return days * 1440 + milliseconds / 6e4;
		                case 'second':
		                    return days * 86400 + milliseconds / 1000;
		                // Math.floor prevents floating point math errors here
		                case 'millisecond':
		                    return Math.floor(days * 864e5) + milliseconds;
		                default:
		                    throw new Error('Unknown unit ' + units);
		            }
		        }
		    }

		    function makeAs(alias) {
		        return function () {
		            return this.as(alias);
		        };
		    }

		    var asMilliseconds = makeAs('ms'),
		        asSeconds = makeAs('s'),
		        asMinutes = makeAs('m'),
		        asHours = makeAs('h'),
		        asDays = makeAs('d'),
		        asWeeks = makeAs('w'),
		        asMonths = makeAs('M'),
		        asQuarters = makeAs('Q'),
		        asYears = makeAs('y'),
		        valueOf$1 = asMilliseconds;

		    function clone$1() {
		        return createDuration(this);
		    }

		    function get$2(units) {
		        units = normalizeUnits(units);
		        return this.isValid() ? this[units + 's']() : NaN;
		    }

		    function makeGetter(name) {
		        return function () {
		            return this.isValid() ? this._data[name] : NaN;
		        };
		    }

		    var milliseconds = makeGetter('milliseconds'),
		        seconds = makeGetter('seconds'),
		        minutes = makeGetter('minutes'),
		        hours = makeGetter('hours'),
		        days = makeGetter('days'),
		        months = makeGetter('months'),
		        years = makeGetter('years');

		    function weeks() {
		        return absFloor(this.days() / 7);
		    }

		    var round = Math.round,
		        thresholds = {
		            ss: 44, // a few seconds to seconds
		            s: 45, // seconds to minute
		            m: 45, // minutes to hour
		            h: 22, // hours to day
		            d: 26, // days to month/week
		            w: null, // weeks to month
		            M: 11, // months to year
		        };

		    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
		    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
		        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
		    }

		    function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
		        var duration = createDuration(posNegDuration).abs(),
		            seconds = round(duration.as('s')),
		            minutes = round(duration.as('m')),
		            hours = round(duration.as('h')),
		            days = round(duration.as('d')),
		            months = round(duration.as('M')),
		            weeks = round(duration.as('w')),
		            years = round(duration.as('y')),
		            a =
		                (seconds <= thresholds.ss && ['s', seconds]) ||
		                (seconds < thresholds.s && ['ss', seconds]) ||
		                (minutes <= 1 && ['m']) ||
		                (minutes < thresholds.m && ['mm', minutes]) ||
		                (hours <= 1 && ['h']) ||
		                (hours < thresholds.h && ['hh', hours]) ||
		                (days <= 1 && ['d']) ||
		                (days < thresholds.d && ['dd', days]);

		        if (thresholds.w != null) {
		            a =
		                a ||
		                (weeks <= 1 && ['w']) ||
		                (weeks < thresholds.w && ['ww', weeks]);
		        }
		        a = a ||
		            (months <= 1 && ['M']) ||
		            (months < thresholds.M && ['MM', months]) ||
		            (years <= 1 && ['y']) || ['yy', years];

		        a[2] = withoutSuffix;
		        a[3] = +posNegDuration > 0;
		        a[4] = locale;
		        return substituteTimeAgo.apply(null, a);
		    }

		    // This function allows you to set the rounding function for relative time strings
		    function getSetRelativeTimeRounding(roundingFunction) {
		        if (roundingFunction === undefined) {
		            return round;
		        }
		        if (typeof roundingFunction === 'function') {
		            round = roundingFunction;
		            return true;
		        }
		        return false;
		    }

		    // This function allows you to set a threshold for relative time strings
		    function getSetRelativeTimeThreshold(threshold, limit) {
		        if (thresholds[threshold] === undefined) {
		            return false;
		        }
		        if (limit === undefined) {
		            return thresholds[threshold];
		        }
		        thresholds[threshold] = limit;
		        if (threshold === 's') {
		            thresholds.ss = limit - 1;
		        }
		        return true;
		    }

		    function humanize(argWithSuffix, argThresholds) {
		        if (!this.isValid()) {
		            return this.localeData().invalidDate();
		        }

		        var withSuffix = false,
		            th = thresholds,
		            locale,
		            output;

		        if (typeof argWithSuffix === 'object') {
		            argThresholds = argWithSuffix;
		            argWithSuffix = false;
		        }
		        if (typeof argWithSuffix === 'boolean') {
		            withSuffix = argWithSuffix;
		        }
		        if (typeof argThresholds === 'object') {
		            th = Object.assign({}, thresholds, argThresholds);
		            if (argThresholds.s != null && argThresholds.ss == null) {
		                th.ss = argThresholds.s - 1;
		            }
		        }

		        locale = this.localeData();
		        output = relativeTime$1(this, !withSuffix, th, locale);

		        if (withSuffix) {
		            output = locale.pastFuture(+this, output);
		        }

		        return locale.postformat(output);
		    }

		    var abs$1 = Math.abs;

		    function sign(x) {
		        return (x > 0) - (x < 0) || +x;
		    }

		    function toISOString$1() {
		        // for ISO strings we do not use the normal bubbling rules:
		        //  * milliseconds bubble up until they become hours
		        //  * days do not bubble at all
		        //  * months bubble up until they become years
		        // This is because there is no context-free conversion between hours and days
		        // (think of clock changes)
		        // and also not between days and months (28-31 days per month)
		        if (!this.isValid()) {
		            return this.localeData().invalidDate();
		        }

		        var seconds = abs$1(this._milliseconds) / 1000,
		            days = abs$1(this._days),
		            months = abs$1(this._months),
		            minutes,
		            hours,
		            years,
		            s,
		            total = this.asSeconds(),
		            totalSign,
		            ymSign,
		            daysSign,
		            hmsSign;

		        if (!total) {
		            // this is the same as C#'s (Noda) and python (isodate)...
		            // but not other JS (goog.date)
		            return 'P0D';
		        }

		        // 3600 seconds -> 60 minutes -> 1 hour
		        minutes = absFloor(seconds / 60);
		        hours = absFloor(minutes / 60);
		        seconds %= 60;
		        minutes %= 60;

		        // 12 months -> 1 year
		        years = absFloor(months / 12);
		        months %= 12;

		        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
		        s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

		        totalSign = total < 0 ? '-' : '';
		        ymSign = sign(this._months) !== sign(total) ? '-' : '';
		        daysSign = sign(this._days) !== sign(total) ? '-' : '';
		        hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

		        return (
		            totalSign +
		            'P' +
		            (years ? ymSign + years + 'Y' : '') +
		            (months ? ymSign + months + 'M' : '') +
		            (days ? daysSign + days + 'D' : '') +
		            (hours || minutes || seconds ? 'T' : '') +
		            (hours ? hmsSign + hours + 'H' : '') +
		            (minutes ? hmsSign + minutes + 'M' : '') +
		            (seconds ? hmsSign + s + 'S' : '')
		        );
		    }

		    var proto$2 = Duration.prototype;

		    proto$2.isValid = isValid$1;
		    proto$2.abs = abs;
		    proto$2.add = add$1;
		    proto$2.subtract = subtract$1;
		    proto$2.as = as;
		    proto$2.asMilliseconds = asMilliseconds;
		    proto$2.asSeconds = asSeconds;
		    proto$2.asMinutes = asMinutes;
		    proto$2.asHours = asHours;
		    proto$2.asDays = asDays;
		    proto$2.asWeeks = asWeeks;
		    proto$2.asMonths = asMonths;
		    proto$2.asQuarters = asQuarters;
		    proto$2.asYears = asYears;
		    proto$2.valueOf = valueOf$1;
		    proto$2._bubble = bubble;
		    proto$2.clone = clone$1;
		    proto$2.get = get$2;
		    proto$2.milliseconds = milliseconds;
		    proto$2.seconds = seconds;
		    proto$2.minutes = minutes;
		    proto$2.hours = hours;
		    proto$2.days = days;
		    proto$2.weeks = weeks;
		    proto$2.months = months;
		    proto$2.years = years;
		    proto$2.humanize = humanize;
		    proto$2.toISOString = toISOString$1;
		    proto$2.toString = toISOString$1;
		    proto$2.toJSON = toISOString$1;
		    proto$2.locale = locale;
		    proto$2.localeData = localeData;

		    proto$2.toIsoString = deprecate(
		        'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
		        toISOString$1
		    );
		    proto$2.lang = lang;

		    // FORMATTING

		    addFormatToken('X', 0, 0, 'unix');
		    addFormatToken('x', 0, 0, 'valueOf');

		    // PARSING

		    addRegexToken('x', matchSigned);
		    addRegexToken('X', matchTimestamp);
		    addParseToken('X', function (input, array, config) {
		        config._d = new Date(parseFloat(input) * 1000);
		    });
		    addParseToken('x', function (input, array, config) {
		        config._d = new Date(toInt(input));
		    });

		    //! moment.js

		    hooks.version = '2.30.1';

		    setHookCallback(createLocal);

		    hooks.fn = proto;
		    hooks.min = min;
		    hooks.max = max;
		    hooks.now = now;
		    hooks.utc = createUTC;
		    hooks.unix = createUnix;
		    hooks.months = listMonths;
		    hooks.isDate = isDate;
		    hooks.locale = getSetGlobalLocale;
		    hooks.invalid = createInvalid;
		    hooks.duration = createDuration;
		    hooks.isMoment = isMoment;
		    hooks.weekdays = listWeekdays;
		    hooks.parseZone = createInZone;
		    hooks.localeData = getLocale;
		    hooks.isDuration = isDuration;
		    hooks.monthsShort = listMonthsShort;
		    hooks.weekdaysMin = listWeekdaysMin;
		    hooks.defineLocale = defineLocale;
		    hooks.updateLocale = updateLocale;
		    hooks.locales = listLocales;
		    hooks.weekdaysShort = listWeekdaysShort;
		    hooks.normalizeUnits = normalizeUnits;
		    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
		    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
		    hooks.calendarFormat = getCalendarFormat;
		    hooks.prototype = proto;

		    // currently HTML5 input type only supports 24-hour formats
		    hooks.HTML5_FMT = {
		        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
		        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
		        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
		        DATE: 'YYYY-MM-DD', // <input type="date" />
		        TIME: 'HH:mm', // <input type="time" />
		        TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
		        TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
		        WEEK: 'GGGG-[W]WW', // <input type="week" />
		        MONTH: 'YYYY-MM', // <input type="month" />
		    };

		    return hooks;

		}))); 
	} (moment$1));
	return moment$1.exports;
}

var momentHijri$1 = momentHijri$2.exports;

var hasRequiredMomentHijri;

function requireMomentHijri () {
	if (hasRequiredMomentHijri) return momentHijri$2.exports;
	hasRequiredMomentHijri = 1;
	(function (module, exports) {

		/************************************
		    Expose Moment Hijri
		************************************/
		(function (root, factory) {
			/* global define */
			{
				module.exports = factory(requireMoment());
			}
		})(momentHijri$1, function (moment) { // jshint ignore:line

			if (moment == null) {
				throw new Error('Cannot find moment')
			}

			/************************************
		      Constants
		  ************************************/

			var ummalqura = {
				ummalquraData : (function (){
					let ummalquraDatByMonth = [
							/* 1356= */29, 29, 30, 29, 30, 29, 30, 30, 29, 29, 30, 29,
							/* 1357= */30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 30,
							/* 1358= */30, 30, 29, 30, 29, 29, 30, 29, 29, 30, 30, 29,
							/* 1359= */30, 30, 30, 29, 30, 29, 29, 30, 29, 29, 30, 29,
							/* 1360= */30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 30,
							/* 1361= */30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29,
							/* 1362= */30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29,
							/* 1363= */30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 30,
							/* 1364= */30, 29, 30, 29, 30, 29, 30, 28, 30, 30, 30, 29,
							/* 1365= */30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 30,
							/* 1366= */30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29,
							/* 1367= */30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29,
							/* 1368= */30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 30,
							/* 1369= */30, 29, 30, 29, 30, 29, 30, 30, 29, 30, 30, 29,
							/* 1370= */30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29,
							/* 1371= */30, 29, 30, 29, 29, 30, 29, 30, 29, 30, 30, 30,
							/* 1372= */29, 30, 29, 30, 29, 30, 29, 29, 30, 29, 30, 30,
							/* 1373= */29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30,
							/* 1374= */30, 29, 30, 29, 30, 29, 30, 30, 29, 29, 30, 30,
							/* 1375= */30, 29, 30, 29, 30, 29, 30, 29, 29, 30, 30, 29,
							/* 1376= */29, 30, 29, 29, 30, 30, 30, 29, 30, 29, 30, 29,
							/* 1377= */30, 29, 29, 30, 29, 30, 29, 30, 30, 29, 30, 30,
							/* 1378= */30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29,
							/* 1379= */29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30,
							/* 1380= */30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29,
							/* 1381= */30, 29, 30, 30, 29, 30, 29, 29, 30, 29, 30, 29,
							/* 1382= */30, 29, 30, 30, 29, 30, 30, 29, 29, 30, 29, 30,
							/* 1383= */29, 30, 29, 30, 30, 29, 30, 29, 30, 29, 30, 29,
							/* 1384= */30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29,
							/* 1385= */30, 29, 30, 30, 29, 29, 30, 29, 30, 30, 30, 29,
							/* 1386= */30, 30, 29, 29, 30, 29, 30, 29, 30, 29, 30, 30,
							/* 1387= */29, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 30,
							/* 1388= */29, 30, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29,
							/* 1389= */30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 30,
							/* 1390= */30, 29, 30, 29, 30, 29, 30, 30, 29, 30, 29, 29,
							/* 1391= */30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 30,
							/* 1392= */29, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 30,
							/* 1393= */30, 29, 30, 29, 29, 29, 30, 29, 30, 29, 30, 30,
							/* 1394= */30, 29, 30, 29, 30, 29, 30, 29, 29, 30, 30, 29,
							/* 1395= */30, 29, 30, 30, 29, 30, 29, 29, 30, 29, 30, 29,
							/* 1396= */30, 29, 30, 30, 30, 29, 30, 29, 29, 30, 29, 30,
							/* 1397= */29, 30, 29, 30, 30, 29, 30, 29, 30, 29, 30, 29,
							/* 1398= */30, 29, 30, 29, 30, 29, 30, 30, 29, 30, 29, 30,
							/* 1399= */29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 30, 29,
							/* 1400= */30, 30, 29, 30, 29, 29, 30, 29, 30, 29, 30, 30,
							/* 1401= */29, 30, 29, 30, 29, 30, 29, 29, 30, 29, 30, 29,
							/* 1402= */30, 30, 30, 29, 30, 29, 30, 29, 29, 30, 29, 30,
							/* 1403= */29, 30, 30, 30, 29, 30, 29, 30, 29, 29, 30, 29,
							/* 1404= */29, 30, 30, 29, 30, 30, 30, 29, 30, 29, 29, 30,
							/* 1405= */29, 29, 30, 30, 29, 30, 30, 29, 30, 29, 30, 29,
							/* 1406= */30, 29, 30, 29, 30, 29, 30, 29, 30, 30, 29, 30,
							/* 1407= */29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30,
							/* 1408= */30, 29, 30, 29, 30, 29, 30, 29, 29, 30, 29, 30,
							/* 1409= */30, 29, 30, 30, 29, 30, 29, 30, 29, 29, 30, 29,
							/* 1410= */30, 29, 30, 30, 30, 29, 30, 29, 30, 29, 29, 30,
							/* 1411= */29, 30, 29, 30, 30, 29, 30, 30, 29, 30, 29, 29,
							/* 1412= */30, 29, 29, 30, 30, 29, 30, 30, 30, 29, 30, 29,
							/* 1413= */29, 30, 29, 29, 30, 30, 29, 30, 30, 29, 30, 30,
							/* 1414= */29, 29, 30, 29, 29, 30, 29, 30, 30, 30, 29, 30,
							/* 1415= */29, 30, 29, 30, 29, 29, 30, 29, 30, 30, 29, 30,
							/* 1416= */30, 29, 30, 29, 30, 29, 30, 29, 29, 30, 29, 30,
							/* 1417= */30, 29, 30, 29, 30, 30, 29, 30, 29, 30, 29, 29,
							/* 1418= */30, 29, 30, 29, 30, 30, 30, 29, 30, 29, 30, 29,
							/* 1419= */29, 30, 29, 30, 29, 30, 30, 29, 30, 30, 29, 30,
							/* 1420= */29, 30, 29, 29, 30, 29, 30, 30, 30, 30, 29, 30,
							/* 1421= */29, 29, 30, 29, 29, 29, 30, 30, 30, 30, 29, 30,
							/* 1422= */30, 29, 29, 30, 29, 29, 29, 30, 30, 30, 29, 30,
							/* 1423= */30, 29, 30, 29, 30, 29, 29, 30, 29, 30, 29, 30,
							/* 1424= */30, 29, 30, 30, 29, 30, 29, 29, 30, 29, 30, 29,
							/* 1425= */30, 29, 30, 30, 29, 30, 29, 30, 30, 29, 30, 29,
							/* 1426= */29, 30, 29, 30, 29, 30, 30, 29, 30, 30, 29, 30,
							/* 1427= */29, 29, 30, 29, 29, 30, 30, 30, 29, 30, 30, 29,
							/* 1428= */30, 29, 29, 30, 29, 29, 30, 30, 30, 29, 30, 30,
							/* 1429= */29, 30, 29, 29, 30, 29, 29, 30, 30, 29, 30, 30,
							/* 1430= */29, 30, 30, 29, 29, 30, 29, 30, 29, 30, 29, 30,
							/* 1431= */29, 30, 30, 29, 30, 29, 30, 29, 30, 29, 29, 30,
							/* 1432= */29, 30, 30, 30, 29, 30, 29, 30, 29, 30, 29, 29,
							/* 1433= */30, 29, 30, 30, 29, 30, 30, 29, 30, 29, 30, 29,
							/* 1434= */29, 30, 29, 30, 29, 30, 30, 29, 30, 30, 29, 29,
							/* 1435= */30, 29, 30, 29, 30, 29, 30, 29, 30, 30, 29, 30,
							/* 1436= */29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30,
							/* 1437= */30, 29, 30, 30, 29, 29, 30, 29, 30, 29, 29, 30,
							/* 1438= */30, 29, 30, 30, 30, 29, 29, 30, 29, 29, 30, 29,
							/* 1439= */30, 29, 30, 30, 30, 29, 30, 29, 30, 29, 29, 30,
							/* 1440= */29, 30, 29, 30, 30, 30, 29, 30, 29, 30, 29, 29,
							/* 1441= */30, 29, 30, 29, 30, 30, 29, 30, 30, 29, 30, 29,
							/* 1442= */29, 30, 29, 30, 29, 30, 29, 30, 30, 29, 30, 29,
							/* 1443= */30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 30,
							/* 1444= */29, 30, 29, 30, 30, 29, 29, 30, 29, 30, 29, 30,
							/* 1445= */29, 30, 30, 30, 29, 30, 29, 29, 30, 29, 29, 30,
							/* 1446= */29, 30, 30, 30, 29, 30, 30, 29, 29, 30, 29, 29,
							/* 1447= */30, 29, 30, 30, 30, 29, 30, 29, 30, 29, 30, 29,
							/* 1448= */29, 30, 29, 30, 30, 29, 30, 30, 29, 30, 29, 30,
							/* 1449= */29, 29, 30, 29, 30, 29, 30, 30, 29, 30, 30, 29,
							/* 1450= */30, 29, 30, 29, 29, 30, 29, 30, 29, 30, 30, 29,
							/* 1451= */30, 30, 29, 30, 29, 29, 30, 29, 30, 29, 30, 29,
							/* 1452= */30, 30, 30, 29, 30, 29, 29, 30, 29, 30, 29, 30,
							/* 1453= */29, 30, 30, 30, 29, 29, 30, 29, 30, 29, 30, 29,
							/* 1454= */29, 30, 30, 30, 29, 30, 29, 30, 29, 30, 29, 30,
							/* 1455= */29, 29, 30, 30, 29, 30, 29, 30, 30, 29, 30, 29,
							/* 1456= */30, 29, 29, 30, 29, 30, 29, 30, 30, 30, 29, 30,
							/* 1457= */29, 30, 29, 29, 30, 29, 29, 30, 30, 29, 30, 30,
							/* 1458= */30, 29, 30, 29, 29, 30, 29, 29, 30, 30, 29, 30,
							/* 1459= */30, 30, 29, 30, 29, 29, 30, 29, 29, 30, 30, 29,
							/* 1460= */30, 30, 29, 30, 29, 30, 29, 30, 29, 29, 30, 30,
							/* 1461= */29, 30, 29, 30, 30, 29, 30, 29, 30, 29, 30, 29,
							/* 1462= */30, 29, 30, 29, 30, 29, 30, 29, 30, 30, 29, 30,
							/* 1463= */29, 30, 29, 29, 30, 29, 30, 30, 29, 30, 30, 29,
							/* 1464= */30, 29, 30, 29, 29, 30, 29, 30, 29, 30, 30, 30,
							/* 1465= */29, 30, 29, 30, 29, 29, 30, 29, 29, 30, 30, 30,
							/* 1466= */30, 29, 30, 29, 30, 29, 29, 30, 29, 30, 29, 30,
							/* 1467= */30, 29, 30, 30, 29, 30, 29, 29, 30, 29, 30, 29,
							/* 1468= */30, 29, 30, 30, 29, 30, 29, 30, 29, 30, 29, 30,
							/* 1469= */29, 29, 30, 30, 29, 30, 30, 29, 30, 30, 29, 29,
							/* 1470= */30, 29, 29, 30, 30, 29, 30, 29, 30, 30, 30, 29,
							/* 1471= */29, 30, 29, 29, 30, 29, 30, 30, 29, 30, 30, 29,
							/* 1472= */30, 29, 30, 29, 30, 29, 29, 30, 29, 30, 30, 29,
							/* 1473= */30, 29, 30, 30, 29, 30, 29, 29, 30, 29, 30, 29,
							/* 1474= */30, 30, 29, 30, 30, 29, 30, 29, 29, 30, 29, 30,
							/* 1475= */29, 30, 29, 30, 30, 30, 29, 30, 29, 29, 30, 29,
							/* 1476= */29, 30, 29, 30, 30, 30, 29, 30, 30, 29, 29, 30,
							/* 1477= */29, 29, 30, 29, 30, 30, 29, 30, 30, 30, 29, 29,
							/* 1478= */30, 29, 29, 30, 29, 30, 30, 29, 30, 30, 29, 30,
							/* 1479= */29, 30, 29, 29, 30, 29, 30, 29, 30, 30, 29, 30,
							/* 1480= */29, 30, 30, 29, 29, 30, 29, 30, 29, 30, 29, 30,
							/* 1481= */29, 30, 30, 29, 30, 30, 29, 30, 29, 29, 30, 29,
							/* 1482= */30, 29, 30, 30, 29, 30, 30, 29, 30, 29, 29, 30,
							/* 1483= */29, 29, 30, 30, 29, 30, 30, 30, 29, 30, 29, 29,
							/* 1484= */30, 29, 29, 30, 30, 29, 30, 30, 29, 30, 30, 29,
							/* 1485= */29, 30, 29, 29, 30, 30, 29, 30, 29, 30, 30, 30,
							/* 1486= */29, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 30,
							/* 1487= */29, 30, 29, 30, 29, 30, 29, 29, 30, 29, 30, 30,
							/* 1488= */29, 30, 30, 29, 30, 29, 30, 29, 29, 30, 29, 30,
							/* 1489= */29, 30, 30, 30, 29, 30, 29, 30, 29, 29, 30, 29,
							/* 1490= */30, 29, 30, 30, 29, 30, 30, 29, 30, 29, 29, 30,
							/* 1491= */29, 30, 29, 30, 29, 30, 30, 29, 30, 29, 30, 30,
							/* 1492= */29, 29, 30, 29, 30, 29, 30, 29, 30, 30, 29, 30,
							/* 1493= */30, 29, 29, 30, 29, 30, 29, 29, 30, 30, 29, 30,
							/* 1494= */30, 30, 29, 29, 30, 29, 29, 30, 29, 30, 29, 30,
							/* 1495= */30, 30, 29, 30, 29, 30, 29, 29, 30, 29, 30, 29,
							/* 1496= */30, 30, 30, 29, 30, 29, 30, 29, 29, 30, 29, 30,
							/* 1497= */29, 30, 30, 29, 30, 30, 29, 29, 30, 29, 30, 29,
							/* 1498= */30, 29, 30, 29, 30, 30, 29, 30, 29, 30, 29, 30,
							/* 1499= */29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 30, 29,
							/* 1500= */30, 30, 29, 29, 30, 29, 29, 30, 29, 30, 30, 30 ];
					let sum = 28607;
					const dat = [sum];
					ummalquraDatByMonth.forEach((value) => {
						sum += value;
						dat.push(sum);
					});
					return dat;
				})()
			};

			var formattingTokens = /(\[[^\[]*\])|(\\)?i(Mo|MM?M?M?|Do|DDDo|DD?D?D?|w[o|w]?|YYYYY|YYYY|YY|gg(ggg?)?)|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,
				localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g

			, parseTokenOneOrTwoDigits = /\d\d?/, parseTokenOneToThreeDigits = /\d{1,3}/, parseTokenThreeDigits = /\d{3}/, parseTokenFourDigits = /\d{1,4}/, parseTokenSixDigits = /[+\-]?\d{1,6}/, parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.?)|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/i, parseTokenT = /T/i, parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/

			, unitAliases = {
				hd: 'idate',
				hm: 'imonth',
				hy: 'iyear'
			}

			, formatFunctions = {}

			, ordinalizeTokens = 'DDD w M D'.split(' '), paddedTokens = 'M D w'.split(' ')

			, formatTokenFunctions = {
				iM: function () {
					return this.iMonth() + 1
				},
				iMMM: function (format) {
					return this.localeData().iMonthsShort(this, format)
				},
				iMMMM: function (format) {
					return this.localeData().iMonths(this, format)
				},
				iD: function () {
					return this.iDate()
				},
				iDDD: function () {
					return this.iDayOfYear()
				},
				iw: function () {
					return this.iWeek()
				},
				iYY: function () {
					return leftZeroFill(this.iYear() % 100, 2)
				},
				iYYYY: function () {
					return leftZeroFill(this.iYear(), 4)
				},
				iYYYYY: function () {
					return leftZeroFill(this.iYear(), 5)
				},
				igg: function () {
					return leftZeroFill(this.iWeekYear() % 100, 2)
				},
				igggg: function () {
					return this.iWeekYear()
				},
				iggggg: function () {
					return leftZeroFill(this.iWeekYear(), 5)
				}
			}, i;

			function padToken(func, count) {
				return function (a) {
					return leftZeroFill(func.call(this, a), count)
				}
			}

			function ordinalizeToken(func, period) {
				return function (a) {
					return this.localeData().ordinal(func.call(this, a), period)
				}
			}

			while (ordinalizeTokens.length) {
				i = ordinalizeTokens.pop();
				formatTokenFunctions['i' + i + 'o'] = ordinalizeToken(formatTokenFunctions['i' + i], i);
			}
			while (paddedTokens.length) {
				i = paddedTokens.pop();
				formatTokenFunctions['i' + i + i] = padToken(formatTokenFunctions['i' + i], 2);
			}
			formatTokenFunctions.iDDDD = padToken(formatTokenFunctions.iDDD, 3);

			/************************************
		      Helpers
		  ************************************/

			function extend(a, b) {
				var key;
				for (key in b)
					if (b.hasOwnProperty(key))
						a[key] = b[key];
				return a
			}

			function leftZeroFill(number, targetLength) {
				var output = number + '';
				while (output.length < targetLength)
					output = '0' + output;
				return output
			}

			function isArray(input) {
				return Object.prototype.toString.call(input) === '[object Array]'
			}

			function normalizeUnits(units) {
				return units ? unitAliases[units] || units.toLowerCase().replace(/(.)s$/, '$1') : units
			}

			function setDate(moment, year, month, date) {
				var utc = moment._isUTC ? 'UTC' : '';
				moment._d['set' + utc + 'FullYear'](year);
				moment._d['set' + utc + 'Month'](month);
				moment._d['set' + utc + 'Date'](date);
			}

			function objectCreate(parent) {
				function F() {}
				F.prototype = parent;
				return new F()
			}

			function getPrototypeOf(object) {
				if (Object.getPrototypeOf)
					return Object.getPrototypeOf(object)
				else if (''.__proto__) // jshint ignore:line
					return object.__proto__ // jshint ignore:line
				else
					return object.constructor.prototype
			}

			/************************************
		      Languages
		  ************************************/
			extend(getPrototypeOf(moment.localeData()), {
				_iMonths: ['Muharram'
		                , 'Safar'
		                , 'Rabi\' al-Awwal'
		                , 'Rabi\' al-Thani'
		                , 'Jumada al-Ula'
		                , 'Jumada al-Alkhirah'
		                , 'Rajab'
		                , 'Sha’ban'
		                , 'Ramadhan'
		                , 'Shawwal'
		                , 'Thul-Qi’dah'
		                , 'Thul-Hijjah'
		                ],
				iMonths: function (m) {
					return this._iMonths[m.iMonth()]
				}

				,
				_iMonthsShort: ['Muh'
		                      , 'Saf'
		                      , 'Rab-I'
		                      , 'Rab-II'
		                      , 'Jum-I'
		                      , 'Jum-II'
		                      , 'Raj'
		                      , 'Sha'
		                      , 'Ram'
		                      , 'Shw'
		                      , 'Dhu-Q'
		                      , 'Dhu-H'
		                      ],
				iMonthsShort: function (m) {
					return this._iMonthsShort[m.iMonth()]
				}

				,
				iMonthsParse: function (monthName) {
					var i, mom, regex;
					if (!this._iMonthsParse)
						this._iMonthsParse = [];
					for (i = 0; i < 12; i += 1) {
						// Make the regex if we don't have it already.
						if (!this._iMonthsParse[i]) {
							mom = hMoment([2000, (2 + i) % 12, 25]);
							regex = '^' + this.iMonths(mom, '') + '$|^' + this.iMonthsShort(mom, '') + '$';
							this._iMonthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
						}
						// Test the regex.
						if (this._iMonthsParse[i].test(monthName))
							return i
					}
				}
			});
			var iMonthNames = {
				iMonths: 'محرم_صفر_ربيع الأول_ربيع الثاني_جمادى الأولى_جمادى الآخرة_رجب_شعبان_رمضان_شوال_ذو القعدة_ذو الحجة'.split('_'),
				iMonthsShort: 'محرم_صفر_ربيع ١_ربيع ٢_جمادى ١_جمادى ٢_رجب_شعبان_رمضان_شوال_ذو القعدة_ذو الحجة'.split('_')
			};

			// Default to the momentjs 2.12+ API
			if (typeof moment.updateLocale === 'function') {
				moment.updateLocale('ar-sa', iMonthNames);
			} else {
				var oldLocale = moment.locale();
				moment.defineLocale('ar-sa', iMonthNames);
				moment.locale(oldLocale);
			}

			/************************************
		      Formatting
		  ************************************/

			function makeFormatFunction(format) {
				var array = format.match(formattingTokens),
					length = array.length,
					i;

				for (i = 0; i < length; i += 1)
					if (formatTokenFunctions[array[i]])
						array[i] = formatTokenFunctions[array[i]];

				return function (mom) {
					var output = '';
					for (i = 0; i < length; i += 1)
						output += array[i] instanceof Function ? '[' + array[i].call(mom, format) + ']' : array[i];
					return output
				}
			}

			/************************************
		      Parsing
		  ************************************/

			function getParseRegexForToken(token, config) {
				switch (token) {
				case 'iDDDD':
					return parseTokenThreeDigits
				case 'iYYYY':
					return parseTokenFourDigits
				case 'iYYYYY':
					return parseTokenSixDigits
				case 'iDDD':
					return parseTokenOneToThreeDigits
				case 'iMMM':
				case 'iMMMM':
					return parseTokenWord
				case 'iMM':
				case 'iDD':
				case 'iYY':
				case 'iM':
				case 'iD':
					return parseTokenOneOrTwoDigits
				case 'DDDD':
					return parseTokenThreeDigits
				case 'YYYY':
					return parseTokenFourDigits
				case 'YYYYY':
					return parseTokenSixDigits
				case 'S':
				case 'SS':
				case 'SSS':
				case 'DDD':
					return parseTokenOneToThreeDigits
				case 'MMM':
				case 'MMMM':
				case 'dd':
				case 'ddd':
				case 'dddd':
					return parseTokenWord
				case 'a':
				case 'A':
					return moment.localeData(config._l)._meridiemParse
				case 'X':
					return parseTokenTimestampMs
				case 'Z':
				case 'ZZ':
					return parseTokenTimezone
				case 'T':
					return parseTokenT
				case 'MM':
				case 'DD':
				case 'YY':
				case 'HH':
				case 'hh':
				case 'mm':
				case 'ss':
				case 'M':
				case 'D':
				case 'd':
				case 'H':
				case 'h':
				case 'm':
				case 's':
					return parseTokenOneOrTwoDigits
				default:
					return new RegExp(token.replace('\\', ''))
				}
			}

			function addTimeToArrayFromToken(token, input, config) {
				var a, datePartArray = config._a;

				switch (token) {
				case 'iM':
				case 'iMM':
					datePartArray[1] = input == null ? 0 : ~~input - 1;
					break
				case 'iMMM':
				case 'iMMMM':
					a = moment.localeData(config._l).iMonthsParse(input);
					if (a != null)
						datePartArray[1] = a;
					else
						config._isValid = false;
					break
				case 'iD':
				case 'iDD':
				case 'iDDD':
				case 'iDDDD':
					if (input != null)
						datePartArray[2] = ~~input;
					break
				case 'iYY':
					datePartArray[0] = ~~input + (~~input > 47 ? 1300 : 1400);
					break
				case 'iYYYY':
				case 'iYYYYY':
					datePartArray[0] = ~~input;
				}
				if (input == null)
					config._isValid = false;
			}

			function dateFromArray(config) {
				var g, h, hy = config._a[0],
					hm = config._a[1],
					hd = config._a[2];

				if ((hy == null) && (hm == null) && (hd == null))
					return [0, 0, 1]
				hy = hy || 0;
				hm = hm || 0;
				hd = hd || 1;
				if (hd < 1 || hd > hMoment.iDaysInMonth(hy, hm))
					config._isValid = false;
				g = toGregorian(hy, hm, hd);
				h = toHijri(g.gy, g.gm, g.gd);
				config._hDiff = 0;
				if (~~h.hy !== hy)
					config._hDiff += 1;
				if (~~h.hm !== hm)
					config._hDiff += 1;
				if (~~h.hd !== hd)
					config._hDiff += 1;
				return [g.gy, g.gm, g.gd]
			}

			function makeDateFromStringAndFormat(config) {
				var tokens = config._f.match(formattingTokens),
					string = config._i,
					len = tokens.length,
					i, token, parsedInput;

				config._a = [];

				for (i = 0; i < len; i += 1) {
					token = tokens[i];
					parsedInput = (getParseRegexForToken(token, config).exec(string) || [])[0];
					if (parsedInput)
						string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
					if (formatTokenFunctions[token])
						addTimeToArrayFromToken(token, parsedInput, config);
				}
				if (string)
					config._il = string;

				return dateFromArray(config)
			}

			function makeDateFromStringAndArray(config, utc) {
				var len = config._f.length
				, i
				, format
				, tempMoment
				, bestMoment
				, currentScore
				, scoreToBeat;

				if (len === 0) {
					return makeMoment(new Date(NaN))
				}

				for (i = 0; i < len; i += 1) {
					format = config._f[i];
					currentScore = 0;
					tempMoment = makeMoment(config._i, format, config._l, utc);

					if (!tempMoment.isValid()) continue

					currentScore += tempMoment._hDiff;
					if (tempMoment._il)
						currentScore += tempMoment._il.length;
					if (scoreToBeat == null || currentScore < scoreToBeat) {
						scoreToBeat = currentScore;
						bestMoment = tempMoment;
					}
				}

				return bestMoment
			}

			function removeParsedTokens(config) {
				var string = config._i,
					input = '',
					format = '',
					array = config._f.match(formattingTokens),
					len = array.length,
					i, match, parsed;

				for (i = 0; i < len; i += 1) {
					match = array[i];
					parsed = (getParseRegexForToken(match, config).exec(string) || [])[0];
					if (parsed)
						string = string.slice(string.indexOf(parsed) + parsed.length);
					if (!(formatTokenFunctions[match] instanceof Function)) {
						format += match;
						if (parsed)
							input += parsed;
					}
				}
				config._i = input;
				config._f = format;
			}

			/************************************
		      Week of Year
		  ************************************/

			function iWeekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
				var end = firstDayOfWeekOfYear - firstDayOfWeek,
					daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
					adjustedMoment;

				if (daysToDayOfWeek > end) {
					daysToDayOfWeek -= 7;
				}
				if (daysToDayOfWeek < end - 7) {
					daysToDayOfWeek += 7;
				}
				adjustedMoment = hMoment(mom).add(daysToDayOfWeek, 'd');
				return {
					week: Math.ceil(adjustedMoment.iDayOfYear() / 7),
					year: adjustedMoment.iYear()
				}
			}

			/************************************
		      Top Level Functions
		  ************************************/

			function makeMoment(input, format, lang, utc) {
				var config =
					{ _i: input
					, _f: format
					, _l: lang
					}
					, date
					, m
					, hm;
				if (format) {
					if (isArray(format)) {
						return makeDateFromStringAndArray(config, utc)
					} else {
						date = makeDateFromStringAndFormat(config);
						removeParsedTokens(config);
						format = 'YYYY-MM-DD-' + config._f;
						input = leftZeroFill(date[0], 4) + '-'
							+ leftZeroFill(date[1] + 1, 2) + '-'
							+ leftZeroFill(date[2], 2) + '-'
							+ config._i;
					}
				}
				if (utc)
					m = moment.utc(input, format, lang);
				else
					m = moment(input, format, lang);
				if (config._isValid === false)
					m._isValid = false;
				m._hDiff = config._hDiff || 0;
				hm = objectCreate(hMoment.fn);
				extend(hm, m);
				return hm
			}

			function hMoment(input, format, lang) {
				return makeMoment(input, format, lang, false)
			}

			extend(hMoment, moment);
			hMoment.fn = objectCreate(moment.fn);

			hMoment.utc = function (input, format, lang) {
				return makeMoment(input, format, lang, true)
			};

			/************************************
		      hMoment Prototype
		  ************************************/

			hMoment.fn.format = function (format) {
				var i, replace, me = this;

				if (format) {
					i = 5;
					replace = function (input) {
						return me.localeData().longDateFormat(input) || input
					};
					while (i > 0 && localFormattingTokens.test(format)) {
						i -= 1;
						format = format.replace(localFormattingTokens, replace);
					}
					if (!formatFunctions[format]) {
						formatFunctions[format] = makeFormatFunction(format);
					}
					format = formatFunctions[format](this);
				}
				return moment.fn.format.call(this, format)
			};

			hMoment.fn.iYear = function (input) {
				var lastDay, h, g;
				if (typeof input === 'number') {
					h = toHijri(this.year(), this.month(), this.date());
					lastDay = Math.min(h.hd, hMoment.iDaysInMonth(input, h.hm));
					g = toGregorian(input, h.hm, lastDay);
					setDate(this, g.gy, g.gm, g.gd);
					//Workaround: sometimes moment wont set the date correctly if current day is the last in the month
					if (this.month() !== g.gm || this.date() !== g.gd || this.year() !== g.gy) {
						setDate(this, g.gy, g.gm, g.gd);
					}
					moment.updateOffset(this);
					return this
				} else {
					return toHijri(this.year(), this.month(), this.date()).hy
				}
			};

			hMoment.fn.iMonth = function (input) {
				var lastDay, h, g;
				if (input != null) {
					if (typeof input === 'string') {
						input = this.localeData().iMonthsParse(input);
						if(input >= 0) {
							input -= 1;
						} else {
							return this
						}
					}
					h = toHijri(this.year(), this.month(), this.date());
					lastDay = Math.min(h.hd, hMoment.iDaysInMonth(h.hy, input));
					this.iYear(h.hy + div(input, 12));
					input = mod(input, 12);
					if (input < 0) {
						input += 12;
						this.iYear(this.iYear() - 1);
					}
					g = toGregorian(this.iYear(), input, lastDay);
					setDate(this, g.gy, g.gm, g.gd);
					//Workaround: sometimes moment wont set the date correctly if current day is the last in the month
					if (this.month() !== g.gm || this.date() !== g.gd || this.year() !== g.gy) {
						setDate(this, g.gy, g.gm, g.gd);
					}
					moment.updateOffset(this);
					return this
				} else {
					return toHijri(this.year(), this.month(), this.date()).hm
				}
			};

			hMoment.fn.iDate = function (input) {
				var h, g;
				if (typeof input === 'number') {
					h = toHijri(this.year(), this.month(), this.date());
					g = toGregorian(h.hy, h.hm, input);
					setDate(this, g.gy, g.gm, g.gd);
					//Workaround: sometimes moment wont set the date correctly if current day is the last in the month
					if (this.month() !== g.gm || this.date() !== g.gd || this.year() !== g.gy) {
						setDate(this, g.gy, g.gm, g.gd);
					}
					moment.updateOffset(this);
					return this
				} else {
					return toHijri(this.year(), this.month(), this.date()).hd
				}
			};

			hMoment.fn.iDayOfYear = function (input) {
				var dayOfYear = Math.round((hMoment(this).startOf('day') - hMoment(this).startOf('iYear')) / 864e5) + 1;
				return input == null ? dayOfYear : this.add(input - dayOfYear, 'd')
			};

			hMoment.fn.iDaysInMonth = function () {
				return parseInt(hMoment(this).endOf('iMonth').format('iDD'));
			};

			hMoment.fn.iWeek = function (input) {
				var week = iWeekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).week;
				return input == null ? week : this.add( (input - week) * 7, 'd')
			};

			hMoment.fn.iWeekYear = function (input) {
				var year = iWeekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
				return input == null ? year : this.add(input - year, 'y')
			};

			hMoment.fn.add = function (val, units) {
				var temp;
				if (units !== null && !isNaN(+units)) {
					temp = val;
					val = units;
					units = temp;
				}
				units = normalizeUnits(units);
				if (units === 'iyear') {
					this.iYear(this.iYear() + val);
				} else if (units === 'imonth') {
					this.iMonth(this.iMonth() + val);
				} else if (units === 'idate') {
					this.iDate(this.iDate() + val);
				}
				 else {
					moment.fn.add.call(this, val, units);
				}
				return this
			};

			hMoment.fn.subtract = function (val, units) {
				var temp;
				if (units !== null && !isNaN(+units)) {
					temp = val;
					val = units;
					units = temp;
				}
				units = normalizeUnits(units);
				if (units === 'iyear') {
					this.iYear(this.iYear() - val);
				} else if (units === 'imonth') {
					this.iMonth(this.iMonth() - val);
				} else if (units === 'idate') {
					this.iDate(this.iDate() - val);
				} else {
					moment.fn.subtract.call(this, val, units);
				}
				return this
			};

			hMoment.fn.startOf = function (units) {
				units = normalizeUnits(units);
				if (units === 'iyear' || units === 'imonth') {
					if (units === 'iyear') {
						this.iMonth(0);
					}
					this.iDate(1);
					this.hours(0);
					this.minutes(0);
					this.seconds(0);
					this.milliseconds(0);
					return this
				} else {
					return moment.fn.startOf.call(this, units)
				}
			};

			hMoment.fn.endOf = function (units) {
				units = normalizeUnits(units);
				if (units === undefined || units === 'milisecond') {
					return this
				}
				return this.startOf(units).add(1, (units === 'isoweek' ? 'week' : units)).subtract(1, 'milliseconds')
			};

			hMoment.fn.clone = function () {
				return hMoment(this)
			};

			hMoment.fn.iYears = hMoment.fn.iYear;
			hMoment.fn.iMonths = hMoment.fn.iMonth;
			hMoment.fn.iDates = hMoment.fn.iDate;
			hMoment.fn.iWeeks = hMoment.fn.iWeek;

			/************************************
		      hMoment Statics
		  ************************************/

			hMoment.iDaysInMonth = function (year, month) {
				var i = getNewMoonMJDNIndex(year, month + 1),
					daysInMonth = ummalqura.ummalquraData[i] - ummalqura.ummalquraData[i - 1];
				return daysInMonth
			};

			function toHijri(gy, gm, gd) {
				var h = d2h(g2d(gy, gm + 1, gd));
				h.hm -= 1;
				return h
			}

			function toGregorian(hy, hm, hd) {
				var g = d2g(h2d(hy, hm + 1, hd));
				g.gm -= 1;
				return g
			}

			hMoment.iConvert = {
				toHijri: toHijri,
				toGregorian: toGregorian
			};

			return hMoment

			/************************************
		      Hijri Conversion
		  ************************************/

			/*
		    Utility helper functions.
		  */

			function div(a, b) {
				return ~~ (a / b)
			}

			function mod(a, b) {
				return a - ~~(a / b) * b
			}

			/*
		    Converts a date of the Hijri calendar to the Julian Day number.

		    @param hy Hijri year (1356 to 1500)
		    @param hm Hijri month (1 to 12)
		    @param hd Hijri day (1 to 29/30)
		    @return Julian Day number
		  */

			function h2d(hy, hm, hd) {
				var i = getNewMoonMJDNIndex(hy, hm),
					mjdn = hd + ummalqura.ummalquraData[i - 1] - 1,
					jdn = mjdn + 2400000;
				return jdn
			}

			/*
		    Converts the Julian Day number to a date in the Hijri calendar.

		    @param jdn Julian Day number
		    @return
		      hy: Hijri year (1356 to 1500)
		      hm: Hijri month (1 to 12)
		      hd: Hijri day (1 to 29/30)
		  */

			function d2h(jdn) {
				var mjdn = jdn - 2400000,
					i = getNewMoonMJDNIndexByJDN(mjdn),
					totalMonths = i + 16260,
					cYears = Math.floor((totalMonths - 1) / 12),
					hy = cYears + 1,
					hm = totalMonths - 12 * cYears,
					hd = mjdn - ummalqura.ummalquraData[i - 1] + 1;

				return {
					hy: hy,
					hm: hm,
					hd: hd
				}
			}

			/*
		    Calculates the Julian Day number from Gregorian or Julian
		    calendar dates. This integer number corresponds to the noon of
		    the date (i.e. 12 hours of Universal Time).
		    The procedure was tested to be good since 1 March, -100100 (of both
		    calendars) up to a few million years into the future.

		    @param gy Calendar year (years BC numbered 0, -1, -2, ...)
		    @param gm Calendar month (1 to 12)
		    @param gd Calendar day of the month (1 to 28/29/30/31)
		    @return Julian Day number
		  */

			function g2d(gy, gm, gd) {
				var d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4) + div(153 * mod(gm + 9, 12) + 2, 5) + gd - 34840408;
				d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
				return d
			}

			/*
		    Calculates Gregorian and Julian calendar dates from the Julian Day number
		    (hdn) for the period since jdn=-34839655 (i.e. the year -100100 of both
		    calendars) to some millions years ahead of the present.

		    @param jdn Julian Day number
		    @return
		      gy: Calendar year (years BC numbered 0, -1, -2, ...)
		      gm: Calendar month (1 to 12)
		      gd: Calendar day of the month M (1 to 28/29/30/31)
		  */

			function d2g(jdn) {
				var j, i, gd, gm, gy;
				j = 4 * jdn + 139361631;
				j = j + div(div(4 * jdn + 183187720, 146097) * 3, 4) * 4 - 3908;
				i = div(mod(j, 1461), 4) * 5 + 308;
				gd = div(mod(i, 153), 5) + 1;
				gm = mod(div(i, 153), 12) + 1;
				gy = div(j, 1461) - 100100 + div(8 - gm, 6);
				return {
					gy: gy,
					gm: gm,
					gd: gd
				}
			}

			/*
		    Returns the index of the modified Julian day number of the new moon
		    by the given year and month

		    @param hy: Hijri year (1356 to 1500)
		    @param hm: Hijri month (1 to 12)
		    @return
		        i: the index of the new moon in modified Julian day number.
		  */
			function getNewMoonMJDNIndex(hy, hm) {
				var cYears = hy - 1,
					totalMonths = (cYears * 12) + 1 + (hm - 1),
					i = totalMonths - 16260;
				return i
			}

			/*
		    Returns the nearest new moon

		    @param jdn Julian Day number
		    @return
		      i: the index of a modified Julian day number.
		  */
			function getNewMoonMJDNIndexByJDN(mjdn) {
				for (var i = 0; i < ummalqura.ummalquraData.length; i=i+1) {
					if (ummalqura.ummalquraData[i] > mjdn)
						return i
				}
			}

		}); 
	} (momentHijri$2));
	return momentHijri$2.exports;
}

var momentHijriExports = requireMomentHijri();
var momentHijri = /*@__PURE__*/getDefaultExportFromCjs(momentHijriExports);

var ar$1 = {exports: {}};

var ar = ar$1.exports;

var hasRequiredAr;

function requireAr () {
	if (hasRequiredAr) return ar$1.exports;
	hasRequiredAr = 1;
	(function (module, exports) {
(function (global, factory) {
		   typeof commonjsRequire === 'function' ? factory(requireMoment()) :
		   factory(global.moment);
		}(ar, (function (moment) {
		    //! moment.js locale configuration

		    var symbolMap = {
		            1: '١',
		            2: '٢',
		            3: '٣',
		            4: '٤',
		            5: '٥',
		            6: '٦',
		            7: '٧',
		            8: '٨',
		            9: '٩',
		            0: '٠',
		        },
		        numberMap = {
		            '١': '1',
		            '٢': '2',
		            '٣': '3',
		            '٤': '4',
		            '٥': '5',
		            '٦': '6',
		            '٧': '7',
		            '٨': '8',
		            '٩': '9',
		            '٠': '0',
		        },
		        pluralForm = function (n) {
		            return n === 0
		                ? 0
		                : n === 1
		                  ? 1
		                  : n === 2
		                    ? 2
		                    : n % 100 >= 3 && n % 100 <= 10
		                      ? 3
		                      : n % 100 >= 11
		                        ? 4
		                        : 5;
		        },
		        plurals = {
		            s: [
		                'أقل من ثانية',
		                'ثانية واحدة',
		                ['ثانيتان', 'ثانيتين'],
		                '%d ثوان',
		                '%d ثانية',
		                '%d ثانية',
		            ],
		            m: [
		                'أقل من دقيقة',
		                'دقيقة واحدة',
		                ['دقيقتان', 'دقيقتين'],
		                '%d دقائق',
		                '%d دقيقة',
		                '%d دقيقة',
		            ],
		            h: [
		                'أقل من ساعة',
		                'ساعة واحدة',
		                ['ساعتان', 'ساعتين'],
		                '%d ساعات',
		                '%d ساعة',
		                '%d ساعة',
		            ],
		            d: [
		                'أقل من يوم',
		                'يوم واحد',
		                ['يومان', 'يومين'],
		                '%d أيام',
		                '%d يومًا',
		                '%d يوم',
		            ],
		            M: [
		                'أقل من شهر',
		                'شهر واحد',
		                ['شهران', 'شهرين'],
		                '%d أشهر',
		                '%d شهرا',
		                '%d شهر',
		            ],
		            y: [
		                'أقل من عام',
		                'عام واحد',
		                ['عامان', 'عامين'],
		                '%d أعوام',
		                '%d عامًا',
		                '%d عام',
		            ],
		        },
		        pluralize = function (u) {
		            return function (number, withoutSuffix, string, isFuture) {
		                var f = pluralForm(number),
		                    str = plurals[u][pluralForm(number)];
		                if (f === 2) {
		                    str = str[withoutSuffix ? 0 : 1];
		                }
		                return str.replace(/%d/i, number);
		            };
		        },
		        months = [
		            'يناير',
		            'فبراير',
		            'مارس',
		            'أبريل',
		            'مايو',
		            'يونيو',
		            'يوليو',
		            'أغسطس',
		            'سبتمبر',
		            'أكتوبر',
		            'نوفمبر',
		            'ديسمبر',
		        ];

		    var ar = moment.defineLocale('ar', {
		        months: months,
		        monthsShort: months,
		        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
		        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
		        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
		        weekdaysParseExact: true,
		        longDateFormat: {
		            LT: 'HH:mm',
		            LTS: 'HH:mm:ss',
		            L: 'D/\u200FM/\u200FYYYY',
		            LL: 'D MMMM YYYY',
		            LLL: 'D MMMM YYYY HH:mm',
		            LLLL: 'dddd D MMMM YYYY HH:mm',
		        },
		        meridiemParse: /ص|م/,
		        isPM: function (input) {
		            return 'م' === input;
		        },
		        meridiem: function (hour, minute, isLower) {
		            if (hour < 12) {
		                return 'ص';
		            } else {
		                return 'م';
		            }
		        },
		        calendar: {
		            sameDay: '[اليوم عند الساعة] LT',
		            nextDay: '[غدًا عند الساعة] LT',
		            nextWeek: 'dddd [عند الساعة] LT',
		            lastDay: '[أمس عند الساعة] LT',
		            lastWeek: 'dddd [عند الساعة] LT',
		            sameElse: 'L',
		        },
		        relativeTime: {
		            future: 'بعد %s',
		            past: 'منذ %s',
		            s: pluralize('s'),
		            ss: pluralize('s'),
		            m: pluralize('m'),
		            mm: pluralize('m'),
		            h: pluralize('h'),
		            hh: pluralize('h'),
		            d: pluralize('d'),
		            dd: pluralize('d'),
		            M: pluralize('M'),
		            MM: pluralize('M'),
		            y: pluralize('y'),
		            yy: pluralize('y'),
		        },
		        preparse: function (string) {
		            return string
		                .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
		                    return numberMap[match];
		                })
		                .replace(/،/g, ',');
		        },
		        postformat: function (string) {
		            return string
		                .replace(/\d/g, function (match) {
		                    return symbolMap[match];
		                })
		                .replace(/,/g, '،');
		        },
		        week: {
		            dow: 6, // Saturday is the first day of the week.
		            doy: 12, // The week that contains Jan 12th is the first week of the year.
		        },
		    });

		    return ar;

		}))); 
	} ());
	return ar$1.exports;
}

requireAr();

var arDz$1 = {exports: {}};

var arDz = arDz$1.exports;

var hasRequiredArDz;

function requireArDz () {
	if (hasRequiredArDz) return arDz$1.exports;
	hasRequiredArDz = 1;
	(function (module, exports) {
(function (global, factory) {
		   typeof commonjsRequire === 'function' ? factory(requireMoment()) :
		   factory(global.moment);
		}(arDz, (function (moment) {
		    //! moment.js locale configuration

		    var pluralForm = function (n) {
		            return n === 0
		                ? 0
		                : n === 1
		                  ? 1
		                  : n === 2
		                    ? 2
		                    : n % 100 >= 3 && n % 100 <= 10
		                      ? 3
		                      : n % 100 >= 11
		                        ? 4
		                        : 5;
		        },
		        plurals = {
		            s: [
		                'أقل من ثانية',
		                'ثانية واحدة',
		                ['ثانيتان', 'ثانيتين'],
		                '%d ثوان',
		                '%d ثانية',
		                '%d ثانية',
		            ],
		            m: [
		                'أقل من دقيقة',
		                'دقيقة واحدة',
		                ['دقيقتان', 'دقيقتين'],
		                '%d دقائق',
		                '%d دقيقة',
		                '%d دقيقة',
		            ],
		            h: [
		                'أقل من ساعة',
		                'ساعة واحدة',
		                ['ساعتان', 'ساعتين'],
		                '%d ساعات',
		                '%d ساعة',
		                '%d ساعة',
		            ],
		            d: [
		                'أقل من يوم',
		                'يوم واحد',
		                ['يومان', 'يومين'],
		                '%d أيام',
		                '%d يومًا',
		                '%d يوم',
		            ],
		            M: [
		                'أقل من شهر',
		                'شهر واحد',
		                ['شهران', 'شهرين'],
		                '%d أشهر',
		                '%d شهرا',
		                '%d شهر',
		            ],
		            y: [
		                'أقل من عام',
		                'عام واحد',
		                ['عامان', 'عامين'],
		                '%d أعوام',
		                '%d عامًا',
		                '%d عام',
		            ],
		        },
		        pluralize = function (u) {
		            return function (number, withoutSuffix, string, isFuture) {
		                var f = pluralForm(number),
		                    str = plurals[u][pluralForm(number)];
		                if (f === 2) {
		                    str = str[withoutSuffix ? 0 : 1];
		                }
		                return str.replace(/%d/i, number);
		            };
		        },
		        months = [
		            'جانفي',
		            'فيفري',
		            'مارس',
		            'أفريل',
		            'ماي',
		            'جوان',
		            'جويلية',
		            'أوت',
		            'سبتمبر',
		            'أكتوبر',
		            'نوفمبر',
		            'ديسمبر',
		        ];

		    var arDz = moment.defineLocale('ar-dz', {
		        months: months,
		        monthsShort: months,
		        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
		        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
		        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
		        weekdaysParseExact: true,
		        longDateFormat: {
		            LT: 'HH:mm',
		            LTS: 'HH:mm:ss',
		            L: 'D/\u200FM/\u200FYYYY',
		            LL: 'D MMMM YYYY',
		            LLL: 'D MMMM YYYY HH:mm',
		            LLLL: 'dddd D MMMM YYYY HH:mm',
		        },
		        meridiemParse: /ص|م/,
		        isPM: function (input) {
		            return 'م' === input;
		        },
		        meridiem: function (hour, minute, isLower) {
		            if (hour < 12) {
		                return 'ص';
		            } else {
		                return 'م';
		            }
		        },
		        calendar: {
		            sameDay: '[اليوم عند الساعة] LT',
		            nextDay: '[غدًا عند الساعة] LT',
		            nextWeek: 'dddd [عند الساعة] LT',
		            lastDay: '[أمس عند الساعة] LT',
		            lastWeek: 'dddd [عند الساعة] LT',
		            sameElse: 'L',
		        },
		        relativeTime: {
		            future: 'بعد %s',
		            past: 'منذ %s',
		            s: pluralize('s'),
		            ss: pluralize('s'),
		            m: pluralize('m'),
		            mm: pluralize('m'),
		            h: pluralize('h'),
		            hh: pluralize('h'),
		            d: pluralize('d'),
		            dd: pluralize('d'),
		            M: pluralize('M'),
		            MM: pluralize('M'),
		            y: pluralize('y'),
		            yy: pluralize('y'),
		        },
		        postformat: function (string) {
		            return string.replace(/,/g, '،');
		        },
		        week: {
		            dow: 0, // Sunday is the first day of the week.
		            doy: 4, // The week that contains Jan 4th is the first week of the year.
		        },
		    });

		    return arDz;

		}))); 
	} ());
	return arDz$1.exports;
}

requireArDz();

var arKw$1 = {exports: {}};

var arKw = arKw$1.exports;

var hasRequiredArKw;

function requireArKw () {
	if (hasRequiredArKw) return arKw$1.exports;
	hasRequiredArKw = 1;
	(function (module, exports) {
(function (global, factory) {
		   typeof commonjsRequire === 'function' ? factory(requireMoment()) :
		   factory(global.moment);
		}(arKw, (function (moment) {
		    //! moment.js locale configuration

		    var arKw = moment.defineLocale('ar-kw', {
		        months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split(
		            '_'
		        ),
		        monthsShort:
		            'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split(
		                '_'
		            ),
		        weekdays: 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
		        weekdaysShort: 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
		        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
		        weekdaysParseExact: true,
		        longDateFormat: {
		            LT: 'HH:mm',
		            LTS: 'HH:mm:ss',
		            L: 'DD/MM/YYYY',
		            LL: 'D MMMM YYYY',
		            LLL: 'D MMMM YYYY HH:mm',
		            LLLL: 'dddd D MMMM YYYY HH:mm',
		        },
		        calendar: {
		            sameDay: '[اليوم على الساعة] LT',
		            nextDay: '[غدا على الساعة] LT',
		            nextWeek: 'dddd [على الساعة] LT',
		            lastDay: '[أمس على الساعة] LT',
		            lastWeek: 'dddd [على الساعة] LT',
		            sameElse: 'L',
		        },
		        relativeTime: {
		            future: 'في %s',
		            past: 'منذ %s',
		            s: 'ثوان',
		            ss: '%d ثانية',
		            m: 'دقيقة',
		            mm: '%d دقائق',
		            h: 'ساعة',
		            hh: '%d ساعات',
		            d: 'يوم',
		            dd: '%d أيام',
		            M: 'شهر',
		            MM: '%d أشهر',
		            y: 'سنة',
		            yy: '%d سنوات',
		        },
		        week: {
		            dow: 0, // Sunday is the first day of the week.
		            doy: 12, // The week that contains Jan 12th is the first week of the year.
		        },
		    });

		    return arKw;

		}))); 
	} ());
	return arKw$1.exports;
}

requireArKw();

var arLy$1 = {exports: {}};

var arLy = arLy$1.exports;

var hasRequiredArLy;

function requireArLy () {
	if (hasRequiredArLy) return arLy$1.exports;
	hasRequiredArLy = 1;
	(function (module, exports) {
(function (global, factory) {
		   typeof commonjsRequire === 'function' ? factory(requireMoment()) :
		   factory(global.moment);
		}(arLy, (function (moment) {
		    //! moment.js locale configuration

		    var symbolMap = {
		            1: '1',
		            2: '2',
		            3: '3',
		            4: '4',
		            5: '5',
		            6: '6',
		            7: '7',
		            8: '8',
		            9: '9',
		            0: '0',
		        },
		        pluralForm = function (n) {
		            return n === 0
		                ? 0
		                : n === 1
		                  ? 1
		                  : n === 2
		                    ? 2
		                    : n % 100 >= 3 && n % 100 <= 10
		                      ? 3
		                      : n % 100 >= 11
		                        ? 4
		                        : 5;
		        },
		        plurals = {
		            s: [
		                'أقل من ثانية',
		                'ثانية واحدة',
		                ['ثانيتان', 'ثانيتين'],
		                '%d ثوان',
		                '%d ثانية',
		                '%d ثانية',
		            ],
		            m: [
		                'أقل من دقيقة',
		                'دقيقة واحدة',
		                ['دقيقتان', 'دقيقتين'],
		                '%d دقائق',
		                '%d دقيقة',
		                '%d دقيقة',
		            ],
		            h: [
		                'أقل من ساعة',
		                'ساعة واحدة',
		                ['ساعتان', 'ساعتين'],
		                '%d ساعات',
		                '%d ساعة',
		                '%d ساعة',
		            ],
		            d: [
		                'أقل من يوم',
		                'يوم واحد',
		                ['يومان', 'يومين'],
		                '%d أيام',
		                '%d يومًا',
		                '%d يوم',
		            ],
		            M: [
		                'أقل من شهر',
		                'شهر واحد',
		                ['شهران', 'شهرين'],
		                '%d أشهر',
		                '%d شهرا',
		                '%d شهر',
		            ],
		            y: [
		                'أقل من عام',
		                'عام واحد',
		                ['عامان', 'عامين'],
		                '%d أعوام',
		                '%d عامًا',
		                '%d عام',
		            ],
		        },
		        pluralize = function (u) {
		            return function (number, withoutSuffix, string, isFuture) {
		                var f = pluralForm(number),
		                    str = plurals[u][pluralForm(number)];
		                if (f === 2) {
		                    str = str[withoutSuffix ? 0 : 1];
		                }
		                return str.replace(/%d/i, number);
		            };
		        },
		        months = [
		            'يناير',
		            'فبراير',
		            'مارس',
		            'أبريل',
		            'مايو',
		            'يونيو',
		            'يوليو',
		            'أغسطس',
		            'سبتمبر',
		            'أكتوبر',
		            'نوفمبر',
		            'ديسمبر',
		        ];

		    var arLy = moment.defineLocale('ar-ly', {
		        months: months,
		        monthsShort: months,
		        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
		        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
		        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
		        weekdaysParseExact: true,
		        longDateFormat: {
		            LT: 'HH:mm',
		            LTS: 'HH:mm:ss',
		            L: 'D/\u200FM/\u200FYYYY',
		            LL: 'D MMMM YYYY',
		            LLL: 'D MMMM YYYY HH:mm',
		            LLLL: 'dddd D MMMM YYYY HH:mm',
		        },
		        meridiemParse: /ص|م/,
		        isPM: function (input) {
		            return 'م' === input;
		        },
		        meridiem: function (hour, minute, isLower) {
		            if (hour < 12) {
		                return 'ص';
		            } else {
		                return 'م';
		            }
		        },
		        calendar: {
		            sameDay: '[اليوم عند الساعة] LT',
		            nextDay: '[غدًا عند الساعة] LT',
		            nextWeek: 'dddd [عند الساعة] LT',
		            lastDay: '[أمس عند الساعة] LT',
		            lastWeek: 'dddd [عند الساعة] LT',
		            sameElse: 'L',
		        },
		        relativeTime: {
		            future: 'بعد %s',
		            past: 'منذ %s',
		            s: pluralize('s'),
		            ss: pluralize('s'),
		            m: pluralize('m'),
		            mm: pluralize('m'),
		            h: pluralize('h'),
		            hh: pluralize('h'),
		            d: pluralize('d'),
		            dd: pluralize('d'),
		            M: pluralize('M'),
		            MM: pluralize('M'),
		            y: pluralize('y'),
		            yy: pluralize('y'),
		        },
		        preparse: function (string) {
		            return string.replace(/،/g, ',');
		        },
		        postformat: function (string) {
		            return string
		                .replace(/\d/g, function (match) {
		                    return symbolMap[match];
		                })
		                .replace(/,/g, '،');
		        },
		        week: {
		            dow: 6, // Saturday is the first day of the week.
		            doy: 12, // The week that contains Jan 12th is the first week of the year.
		        },
		    });

		    return arLy;

		}))); 
	} ());
	return arLy$1.exports;
}

requireArLy();

var arMa$1 = {exports: {}};

var arMa = arMa$1.exports;

var hasRequiredArMa;

function requireArMa () {
	if (hasRequiredArMa) return arMa$1.exports;
	hasRequiredArMa = 1;
	(function (module, exports) {
(function (global, factory) {
		   typeof commonjsRequire === 'function' ? factory(requireMoment()) :
		   factory(global.moment);
		}(arMa, (function (moment) {
		    //! moment.js locale configuration

		    var arMa = moment.defineLocale('ar-ma', {
		        months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split(
		            '_'
		        ),
		        monthsShort:
		            'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split(
		                '_'
		            ),
		        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
		        weekdaysShort: 'احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
		        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
		        weekdaysParseExact: true,
		        longDateFormat: {
		            LT: 'HH:mm',
		            LTS: 'HH:mm:ss',
		            L: 'DD/MM/YYYY',
		            LL: 'D MMMM YYYY',
		            LLL: 'D MMMM YYYY HH:mm',
		            LLLL: 'dddd D MMMM YYYY HH:mm',
		        },
		        calendar: {
		            sameDay: '[اليوم على الساعة] LT',
		            nextDay: '[غدا على الساعة] LT',
		            nextWeek: 'dddd [على الساعة] LT',
		            lastDay: '[أمس على الساعة] LT',
		            lastWeek: 'dddd [على الساعة] LT',
		            sameElse: 'L',
		        },
		        relativeTime: {
		            future: 'في %s',
		            past: 'منذ %s',
		            s: 'ثوان',
		            ss: '%d ثانية',
		            m: 'دقيقة',
		            mm: '%d دقائق',
		            h: 'ساعة',
		            hh: '%d ساعات',
		            d: 'يوم',
		            dd: '%d أيام',
		            M: 'شهر',
		            MM: '%d أشهر',
		            y: 'سنة',
		            yy: '%d سنوات',
		        },
		        week: {
		            dow: 1, // Monday is the first day of the week.
		            doy: 4, // The week that contains Jan 4th is the first week of the year.
		        },
		    });

		    return arMa;

		}))); 
	} ());
	return arMa$1.exports;
}

requireArMa();

var arPs$1 = {exports: {}};

var arPs = arPs$1.exports;

var hasRequiredArPs;

function requireArPs () {
	if (hasRequiredArPs) return arPs$1.exports;
	hasRequiredArPs = 1;
	(function (module, exports) {
(function (global, factory) {
		   typeof commonjsRequire === 'function' ? factory(requireMoment()) :
		   factory(global.moment);
		}(arPs, (function (moment) {
		    //! moment.js locale configuration

		    var symbolMap = {
		            1: '١',
		            2: '٢',
		            3: '٣',
		            4: '٤',
		            5: '٥',
		            6: '٦',
		            7: '٧',
		            8: '٨',
		            9: '٩',
		            0: '٠',
		        },
		        numberMap = {
		            '١': '1',
		            '٢': '2',
		            '٣': '3',
		            '٤': '4',
		            '٥': '5',
		            '٦': '6',
		            '٧': '7',
		            '٨': '8',
		            '٩': '9',
		            '٠': '0',
		        };

		    var arPs = moment.defineLocale('ar-ps', {
		        months: 'كانون الثاني_شباط_آذار_نيسان_أيّار_حزيران_تمّوز_آب_أيلول_تشري الأوّل_تشرين الثاني_كانون الأوّل'.split(
		            '_'
		        ),
		        monthsShort:
		            'ك٢_شباط_آذار_نيسان_أيّار_حزيران_تمّوز_آب_أيلول_ت١_ت٢_ك١'.split('_'),
		        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
		        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
		        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
		        weekdaysParseExact: true,
		        longDateFormat: {
		            LT: 'HH:mm',
		            LTS: 'HH:mm:ss',
		            L: 'DD/MM/YYYY',
		            LL: 'D MMMM YYYY',
		            LLL: 'D MMMM YYYY HH:mm',
		            LLLL: 'dddd D MMMM YYYY HH:mm',
		        },
		        meridiemParse: /ص|م/,
		        isPM: function (input) {
		            return 'م' === input;
		        },
		        meridiem: function (hour, minute, isLower) {
		            if (hour < 12) {
		                return 'ص';
		            } else {
		                return 'م';
		            }
		        },
		        calendar: {
		            sameDay: '[اليوم على الساعة] LT',
		            nextDay: '[غدا على الساعة] LT',
		            nextWeek: 'dddd [على الساعة] LT',
		            lastDay: '[أمس على الساعة] LT',
		            lastWeek: 'dddd [على الساعة] LT',
		            sameElse: 'L',
		        },
		        relativeTime: {
		            future: 'في %s',
		            past: 'منذ %s',
		            s: 'ثوان',
		            ss: '%d ثانية',
		            m: 'دقيقة',
		            mm: '%d دقائق',
		            h: 'ساعة',
		            hh: '%d ساعات',
		            d: 'يوم',
		            dd: '%d أيام',
		            M: 'شهر',
		            MM: '%d أشهر',
		            y: 'سنة',
		            yy: '%d سنوات',
		        },
		        preparse: function (string) {
		            return string
		                .replace(/[٣٤٥٦٧٨٩٠]/g, function (match) {
		                    return numberMap[match];
		                })
		                .split('') // reversed since negative lookbehind not supported everywhere
		                .reverse()
		                .join('')
		                .replace(/[١٢](?![\u062a\u0643])/g, function (match) {
		                    return numberMap[match];
		                })
		                .split('')
		                .reverse()
		                .join('')
		                .replace(/،/g, ',');
		        },
		        postformat: function (string) {
		            return string
		                .replace(/\d/g, function (match) {
		                    return symbolMap[match];
		                })
		                .replace(/,/g, '،');
		        },
		        week: {
		            dow: 0, // Sunday is the first day of the week.
		            doy: 6, // The week that contains Jan 6th is the first week of the year.
		        },
		    });

		    return arPs;

		}))); 
	} ());
	return arPs$1.exports;
}

requireArPs();

var arSa$1 = {exports: {}};

var arSa = arSa$1.exports;

var hasRequiredArSa;

function requireArSa () {
	if (hasRequiredArSa) return arSa$1.exports;
	hasRequiredArSa = 1;
	(function (module, exports) {
(function (global, factory) {
		   typeof commonjsRequire === 'function' ? factory(requireMoment()) :
		   factory(global.moment);
		}(arSa, (function (moment) {
		    //! moment.js locale configuration

		    var symbolMap = {
		            1: '١',
		            2: '٢',
		            3: '٣',
		            4: '٤',
		            5: '٥',
		            6: '٦',
		            7: '٧',
		            8: '٨',
		            9: '٩',
		            0: '٠',
		        },
		        numberMap = {
		            '١': '1',
		            '٢': '2',
		            '٣': '3',
		            '٤': '4',
		            '٥': '5',
		            '٦': '6',
		            '٧': '7',
		            '٨': '8',
		            '٩': '9',
		            '٠': '0',
		        };

		    var arSa = moment.defineLocale('ar-sa', {
		        months: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split(
		            '_'
		        ),
		        monthsShort:
		            'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split(
		                '_'
		            ),
		        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
		        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
		        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
		        weekdaysParseExact: true,
		        longDateFormat: {
		            LT: 'HH:mm',
		            LTS: 'HH:mm:ss',
		            L: 'DD/MM/YYYY',
		            LL: 'D MMMM YYYY',
		            LLL: 'D MMMM YYYY HH:mm',
		            LLLL: 'dddd D MMMM YYYY HH:mm',
		        },
		        meridiemParse: /ص|م/,
		        isPM: function (input) {
		            return 'م' === input;
		        },
		        meridiem: function (hour, minute, isLower) {
		            if (hour < 12) {
		                return 'ص';
		            } else {
		                return 'م';
		            }
		        },
		        calendar: {
		            sameDay: '[اليوم على الساعة] LT',
		            nextDay: '[غدا على الساعة] LT',
		            nextWeek: 'dddd [على الساعة] LT',
		            lastDay: '[أمس على الساعة] LT',
		            lastWeek: 'dddd [على الساعة] LT',
		            sameElse: 'L',
		        },
		        relativeTime: {
		            future: 'في %s',
		            past: 'منذ %s',
		            s: 'ثوان',
		            ss: '%d ثانية',
		            m: 'دقيقة',
		            mm: '%d دقائق',
		            h: 'ساعة',
		            hh: '%d ساعات',
		            d: 'يوم',
		            dd: '%d أيام',
		            M: 'شهر',
		            MM: '%d أشهر',
		            y: 'سنة',
		            yy: '%d سنوات',
		        },
		        preparse: function (string) {
		            return string
		                .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
		                    return numberMap[match];
		                })
		                .replace(/،/g, ',');
		        },
		        postformat: function (string) {
		            return string
		                .replace(/\d/g, function (match) {
		                    return symbolMap[match];
		                })
		                .replace(/,/g, '،');
		        },
		        week: {
		            dow: 0, // Sunday is the first day of the week.
		            doy: 6, // The week that contains Jan 6th is the first week of the year.
		        },
		    });

		    return arSa;

		}))); 
	} ());
	return arSa$1.exports;
}

requireArSa();

var arTn$1 = {exports: {}};

var arTn = arTn$1.exports;

var hasRequiredArTn;

function requireArTn () {
	if (hasRequiredArTn) return arTn$1.exports;
	hasRequiredArTn = 1;
	(function (module, exports) {
(function (global, factory) {
		   typeof commonjsRequire === 'function' ? factory(requireMoment()) :
		   factory(global.moment);
		}(arTn, (function (moment) {
		    //! moment.js locale configuration

		    var arTn = moment.defineLocale('ar-tn', {
		        months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split(
		            '_'
		        ),
		        monthsShort:
		            'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split(
		                '_'
		            ),
		        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
		        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
		        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
		        weekdaysParseExact: true,
		        longDateFormat: {
		            LT: 'HH:mm',
		            LTS: 'HH:mm:ss',
		            L: 'DD/MM/YYYY',
		            LL: 'D MMMM YYYY',
		            LLL: 'D MMMM YYYY HH:mm',
		            LLLL: 'dddd D MMMM YYYY HH:mm',
		        },
		        calendar: {
		            sameDay: '[اليوم على الساعة] LT',
		            nextDay: '[غدا على الساعة] LT',
		            nextWeek: 'dddd [على الساعة] LT',
		            lastDay: '[أمس على الساعة] LT',
		            lastWeek: 'dddd [على الساعة] LT',
		            sameElse: 'L',
		        },
		        relativeTime: {
		            future: 'في %s',
		            past: 'منذ %s',
		            s: 'ثوان',
		            ss: '%d ثانية',
		            m: 'دقيقة',
		            mm: '%d دقائق',
		            h: 'ساعة',
		            hh: '%d ساعات',
		            d: 'يوم',
		            dd: '%d أيام',
		            M: 'شهر',
		            MM: '%d أشهر',
		            y: 'سنة',
		            yy: '%d سنوات',
		        },
		        week: {
		            dow: 1, // Monday is the first day of the week.
		            doy: 4, // The week that contains Jan 4th is the first week of the year.
		        },
		    });

		    return arTn;

		}))); 
	} ());
	return arTn$1.exports;
}

requireArTn();

var de$1 = {exports: {}};

var de = de$1.exports;

var hasRequiredDe;

function requireDe () {
	if (hasRequiredDe) return de$1.exports;
	hasRequiredDe = 1;
	(function (module, exports) {
(function (global, factory) {
		   typeof commonjsRequire === 'function' ? factory(requireMoment()) :
		   factory(global.moment);
		}(de, (function (moment) {
		    //! moment.js locale configuration

		    function processRelativeTime(number, withoutSuffix, key, isFuture) {
		        var format = {
		            m: ['eine Minute', 'einer Minute'],
		            h: ['eine Stunde', 'einer Stunde'],
		            d: ['ein Tag', 'einem Tag'],
		            dd: [number + ' Tage', number + ' Tagen'],
		            w: ['eine Woche', 'einer Woche'],
		            M: ['ein Monat', 'einem Monat'],
		            MM: [number + ' Monate', number + ' Monaten'],
		            y: ['ein Jahr', 'einem Jahr'],
		            yy: [number + ' Jahre', number + ' Jahren'],
		        };
		        return withoutSuffix ? format[key][0] : format[key][1];
		    }

		    var de = moment.defineLocale('de', {
		        months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split(
		            '_'
		        ),
		        monthsShort:
		            'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
		        monthsParseExact: true,
		        weekdays:
		            'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split(
		                '_'
		            ),
		        weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
		        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
		        weekdaysParseExact: true,
		        longDateFormat: {
		            LT: 'HH:mm',
		            LTS: 'HH:mm:ss',
		            L: 'DD.MM.YYYY',
		            LL: 'D. MMMM YYYY',
		            LLL: 'D. MMMM YYYY HH:mm',
		            LLLL: 'dddd, D. MMMM YYYY HH:mm',
		        },
		        calendar: {
		            sameDay: '[heute um] LT [Uhr]',
		            sameElse: 'L',
		            nextDay: '[morgen um] LT [Uhr]',
		            nextWeek: 'dddd [um] LT [Uhr]',
		            lastDay: '[gestern um] LT [Uhr]',
		            lastWeek: '[letzten] dddd [um] LT [Uhr]',
		        },
		        relativeTime: {
		            future: 'in %s',
		            past: 'vor %s',
		            s: 'ein paar Sekunden',
		            ss: '%d Sekunden',
		            m: processRelativeTime,
		            mm: '%d Minuten',
		            h: processRelativeTime,
		            hh: '%d Stunden',
		            d: processRelativeTime,
		            dd: processRelativeTime,
		            w: processRelativeTime,
		            ww: '%d Wochen',
		            M: processRelativeTime,
		            MM: processRelativeTime,
		            y: processRelativeTime,
		            yy: processRelativeTime,
		        },
		        dayOfMonthOrdinalParse: /\d{1,2}\./,
		        ordinal: '%d.',
		        week: {
		            dow: 1, // Monday is the first day of the week.
		            doy: 4, // The week that contains Jan 4th is the first week of the year.
		        },
		    });

		    return de;

		}))); 
	} ());
	return de$1.exports;
}

requireDe();

var el$1 = {exports: {}};

var el = el$1.exports;

var hasRequiredEl;

function requireEl () {
	if (hasRequiredEl) return el$1.exports;
	hasRequiredEl = 1;
	(function (module, exports) {
(function (global, factory) {
		   typeof commonjsRequire === 'function' ? factory(requireMoment()) :
		   factory(global.moment);
		}(el, (function (moment) {
		    //! moment.js locale configuration

		    function isFunction(input) {
		        return (
		            (typeof Function !== 'undefined' && input instanceof Function) ||
		            Object.prototype.toString.call(input) === '[object Function]'
		        );
		    }

		    var el = moment.defineLocale('el', {
		        monthsNominativeEl:
		            'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split(
		                '_'
		            ),
		        monthsGenitiveEl:
		            'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split(
		                '_'
		            ),
		        months: function (momentToFormat, format) {
		            if (!momentToFormat) {
		                return this._monthsNominativeEl;
		            } else if (
		                typeof format === 'string' &&
		                /D/.test(format.substring(0, format.indexOf('MMMM')))
		            ) {
		                // if there is a day number before 'MMMM'
		                return this._monthsGenitiveEl[momentToFormat.month()];
		            } else {
		                return this._monthsNominativeEl[momentToFormat.month()];
		            }
		        },
		        monthsShort: 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
		        weekdays: 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split(
		            '_'
		        ),
		        weekdaysShort: 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
		        weekdaysMin: 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
		        meridiem: function (hours, minutes, isLower) {
		            if (hours > 11) {
		                return isLower ? 'μμ' : 'ΜΜ';
		            } else {
		                return isLower ? 'πμ' : 'ΠΜ';
		            }
		        },
		        isPM: function (input) {
		            return (input + '').toLowerCase()[0] === 'μ';
		        },
		        meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
		        longDateFormat: {
		            LT: 'h:mm A',
		            LTS: 'h:mm:ss A',
		            L: 'DD/MM/YYYY',
		            LL: 'D MMMM YYYY',
		            LLL: 'D MMMM YYYY h:mm A',
		            LLLL: 'dddd, D MMMM YYYY h:mm A',
		        },
		        calendarEl: {
		            sameDay: '[Σήμερα {}] LT',
		            nextDay: '[Αύριο {}] LT',
		            nextWeek: 'dddd [{}] LT',
		            lastDay: '[Χθες {}] LT',
		            lastWeek: function () {
		                switch (this.day()) {
		                    case 6:
		                        return '[το προηγούμενο] dddd [{}] LT';
		                    default:
		                        return '[την προηγούμενη] dddd [{}] LT';
		                }
		            },
		            sameElse: 'L',
		        },
		        calendar: function (key, mom) {
		            var output = this._calendarEl[key],
		                hours = mom && mom.hours();
		            if (isFunction(output)) {
		                output = output.apply(mom);
		            }
		            return output.replace('{}', hours % 12 === 1 ? 'στη' : 'στις');
		        },
		        relativeTime: {
		            future: 'σε %s',
		            past: '%s πριν',
		            s: 'λίγα δευτερόλεπτα',
		            ss: '%d δευτερόλεπτα',
		            m: 'ένα λεπτό',
		            mm: '%d λεπτά',
		            h: 'μία ώρα',
		            hh: '%d ώρες',
		            d: 'μία μέρα',
		            dd: '%d μέρες',
		            M: 'ένας μήνας',
		            MM: '%d μήνες',
		            y: 'ένας χρόνος',
		            yy: '%d χρόνια',
		        },
		        dayOfMonthOrdinalParse: /\d{1,2}η/,
		        ordinal: '%dη',
		        week: {
		            dow: 1, // Monday is the first day of the week.
		            doy: 4, // The week that contains Jan 4st is the first week of the year.
		        },
		    });

		    return el;

		}))); 
	} ());
	return el$1.exports;
}

requireEl();

var fr$1 = {exports: {}};

var fr = fr$1.exports;

var hasRequiredFr;

function requireFr () {
	if (hasRequiredFr) return fr$1.exports;
	hasRequiredFr = 1;
	(function (module, exports) {
(function (global, factory) {
		   typeof commonjsRequire === 'function' ? factory(requireMoment()) :
		   factory(global.moment);
		}(fr, (function (moment) {
		    //! moment.js locale configuration

		    var monthsStrictRegex =
		            /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
		        monthsShortStrictRegex =
		            /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i,
		        monthsRegex =
		            /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
		        monthsParse = [
		            /^janv/i,
		            /^févr/i,
		            /^mars/i,
		            /^avr/i,
		            /^mai/i,
		            /^juin/i,
		            /^juil/i,
		            /^août/i,
		            /^sept/i,
		            /^oct/i,
		            /^nov/i,
		            /^déc/i,
		        ];

		    var fr = moment.defineLocale('fr', {
		        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split(
		            '_'
		        ),
		        monthsShort:
		            'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split(
		                '_'
		            ),
		        monthsRegex: monthsRegex,
		        monthsShortRegex: monthsRegex,
		        monthsStrictRegex: monthsStrictRegex,
		        monthsShortStrictRegex: monthsShortStrictRegex,
		        monthsParse: monthsParse,
		        longMonthsParse: monthsParse,
		        shortMonthsParse: monthsParse,
		        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
		        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
		        weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
		        weekdaysParseExact: true,
		        longDateFormat: {
		            LT: 'HH:mm',
		            LTS: 'HH:mm:ss',
		            L: 'DD/MM/YYYY',
		            LL: 'D MMMM YYYY',
		            LLL: 'D MMMM YYYY HH:mm',
		            LLLL: 'dddd D MMMM YYYY HH:mm',
		        },
		        calendar: {
		            sameDay: '[Aujourd’hui à] LT',
		            nextDay: '[Demain à] LT',
		            nextWeek: 'dddd [à] LT',
		            lastDay: '[Hier à] LT',
		            lastWeek: 'dddd [dernier à] LT',
		            sameElse: 'L',
		        },
		        relativeTime: {
		            future: 'dans %s',
		            past: 'il y a %s',
		            s: 'quelques secondes',
		            ss: '%d secondes',
		            m: 'une minute',
		            mm: '%d minutes',
		            h: 'une heure',
		            hh: '%d heures',
		            d: 'un jour',
		            dd: '%d jours',
		            w: 'une semaine',
		            ww: '%d semaines',
		            M: 'un mois',
		            MM: '%d mois',
		            y: 'un an',
		            yy: '%d ans',
		        },
		        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
		        ordinal: function (number, period) {
		            switch (period) {
		                // TODO: Return 'e' when day of month > 1. Move this case inside
		                // block for masculine words below.
		                // See https://github.com/moment/moment/issues/3375
		                case 'D':
		                    return number + (number === 1 ? 'er' : '');

		                // Words with masculine grammatical gender: mois, trimestre, jour
		                default:
		                case 'M':
		                case 'Q':
		                case 'DDD':
		                case 'd':
		                    return number + (number === 1 ? 'er' : 'e');

		                // Words with feminine grammatical gender: semaine
		                case 'w':
		                case 'W':
		                    return number + (number === 1 ? 're' : 'e');
		            }
		        },
		        week: {
		            dow: 1, // Monday is the first day of the week.
		            doy: 4, // The week that contains Jan 4th is the first week of the year.
		        },
		    });

		    return fr;

		}))); 
	} ());
	return fr$1.exports;
}

requireFr();

var he$1 = {exports: {}};

var he = he$1.exports;

var hasRequiredHe;

function requireHe () {
	if (hasRequiredHe) return he$1.exports;
	hasRequiredHe = 1;
	(function (module, exports) {
(function (global, factory) {
		   typeof commonjsRequire === 'function' ? factory(requireMoment()) :
		   factory(global.moment);
		}(he, (function (moment) {
		    //! moment.js locale configuration

		    var he = moment.defineLocale('he', {
		        months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split(
		            '_'
		        ),
		        monthsShort:
		            'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
		        weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
		        weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
		        weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
		        longDateFormat: {
		            LT: 'HH:mm',
		            LTS: 'HH:mm:ss',
		            L: 'DD/MM/YYYY',
		            LL: 'D [ב]MMMM YYYY',
		            LLL: 'D [ב]MMMM YYYY HH:mm',
		            LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
		            l: 'D/M/YYYY',
		            ll: 'D MMM YYYY',
		            lll: 'D MMM YYYY HH:mm',
		            llll: 'ddd, D MMM YYYY HH:mm',
		        },
		        calendar: {
		            sameDay: '[היום ב־]LT',
		            nextDay: '[מחר ב־]LT',
		            nextWeek: 'dddd [בשעה] LT',
		            lastDay: '[אתמול ב־]LT',
		            lastWeek: '[ביום] dddd [האחרון בשעה] LT',
		            sameElse: 'L',
		        },
		        relativeTime: {
		            future: 'בעוד %s',
		            past: 'לפני %s',
		            s: 'מספר שניות',
		            ss: '%d שניות',
		            m: 'דקה',
		            mm: '%d דקות',
		            h: 'שעה',
		            hh: function (number) {
		                if (number === 2) {
		                    return 'שעתיים';
		                }
		                return number + ' שעות';
		            },
		            d: 'יום',
		            dd: function (number) {
		                if (number === 2) {
		                    return 'יומיים';
		                }
		                return number + ' ימים';
		            },
		            M: 'חודש',
		            MM: function (number) {
		                if (number === 2) {
		                    return 'חודשיים';
		                }
		                return number + ' חודשים';
		            },
		            y: 'שנה',
		            yy: function (number) {
		                if (number === 2) {
		                    return 'שנתיים';
		                } else if (number % 10 === 0 && number !== 10) {
		                    return number + ' שנה';
		                }
		                return number + ' שנים';
		            },
		        },
		        meridiemParse:
		            /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
		        isPM: function (input) {
		            return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
		        },
		        meridiem: function (hour, minute, isLower) {
		            if (hour < 5) {
		                return 'לפנות בוקר';
		            } else if (hour < 10) {
		                return 'בבוקר';
		            } else if (hour < 12) {
		                return isLower ? 'לפנה"צ' : 'לפני הצהריים';
		            } else if (hour < 18) {
		                return isLower ? 'אחה"צ' : 'אחרי הצהריים';
		            } else {
		                return 'בערב';
		            }
		        },
		    });

		    return he;

		}))); 
	} ());
	return he$1.exports;
}

requireHe();

var pl$1 = {exports: {}};

var pl = pl$1.exports;

var hasRequiredPl;

function requirePl () {
	if (hasRequiredPl) return pl$1.exports;
	hasRequiredPl = 1;
	(function (module, exports) {
(function (global, factory) {
		   typeof commonjsRequire === 'function' ? factory(requireMoment()) :
		   factory(global.moment);
		}(pl, (function (moment) {
		    //! moment.js locale configuration

		    var monthsNominative =
		            'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split(
		                '_'
		            ),
		        monthsSubjective =
		            'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split(
		                '_'
		            ),
		        monthsParse = [
		            /^sty/i,
		            /^lut/i,
		            /^mar/i,
		            /^kwi/i,
		            /^maj/i,
		            /^cze/i,
		            /^lip/i,
		            /^sie/i,
		            /^wrz/i,
		            /^paź/i,
		            /^lis/i,
		            /^gru/i,
		        ];
		    function plural(n) {
		        return n % 10 < 5 && n % 10 > 1 && ~~(n / 10) % 10 !== 1;
		    }
		    function translate(number, withoutSuffix, key) {
		        var result = number + ' ';
		        switch (key) {
		            case 'ss':
		                return result + (plural(number) ? 'sekundy' : 'sekund');
		            case 'm':
		                return withoutSuffix ? 'minuta' : 'minutę';
		            case 'mm':
		                return result + (plural(number) ? 'minuty' : 'minut');
		            case 'h':
		                return withoutSuffix ? 'godzina' : 'godzinę';
		            case 'hh':
		                return result + (plural(number) ? 'godziny' : 'godzin');
		            case 'ww':
		                return result + (plural(number) ? 'tygodnie' : 'tygodni');
		            case 'MM':
		                return result + (plural(number) ? 'miesiące' : 'miesięcy');
		            case 'yy':
		                return result + (plural(number) ? 'lata' : 'lat');
		        }
		    }

		    var pl = moment.defineLocale('pl', {
		        months: function (momentToFormat, format) {
		            if (!momentToFormat) {
		                return monthsNominative;
		            } else if (/D MMMM/.test(format)) {
		                return monthsSubjective[momentToFormat.month()];
		            } else {
		                return monthsNominative[momentToFormat.month()];
		            }
		        },
		        monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
		        monthsParse: monthsParse,
		        longMonthsParse: monthsParse,
		        shortMonthsParse: monthsParse,
		        weekdays:
		            'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
		        weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
		        weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
		        longDateFormat: {
		            LT: 'HH:mm',
		            LTS: 'HH:mm:ss',
		            L: 'DD.MM.YYYY',
		            LL: 'D MMMM YYYY',
		            LLL: 'D MMMM YYYY HH:mm',
		            LLLL: 'dddd, D MMMM YYYY HH:mm',
		        },
		        calendar: {
		            sameDay: '[Dziś o] LT',
		            nextDay: '[Jutro o] LT',
		            nextWeek: function () {
		                switch (this.day()) {
		                    case 0:
		                        return '[W niedzielę o] LT';

		                    case 2:
		                        return '[We wtorek o] LT';

		                    case 3:
		                        return '[W środę o] LT';

		                    case 6:
		                        return '[W sobotę o] LT';

		                    default:
		                        return '[W] dddd [o] LT';
		                }
		            },
		            lastDay: '[Wczoraj o] LT',
		            lastWeek: function () {
		                switch (this.day()) {
		                    case 0:
		                        return '[W zeszłą niedzielę o] LT';
		                    case 3:
		                        return '[W zeszłą środę o] LT';
		                    case 6:
		                        return '[W zeszłą sobotę o] LT';
		                    default:
		                        return '[W zeszły] dddd [o] LT';
		                }
		            },
		            sameElse: 'L',
		        },
		        relativeTime: {
		            future: 'za %s',
		            past: '%s temu',
		            s: 'kilka sekund',
		            ss: translate,
		            m: translate,
		            mm: translate,
		            h: translate,
		            hh: translate,
		            d: '1 dzień',
		            dd: '%d dni',
		            w: 'tydzień',
		            ww: translate,
		            M: 'miesiąc',
		            MM: translate,
		            y: 'rok',
		            yy: translate,
		        },
		        dayOfMonthOrdinalParse: /\d{1,2}\./,
		        ordinal: '%d.',
		        week: {
		            dow: 1, // Monday is the first day of the week.
		            doy: 4, // The week that contains Jan 4th is the first week of the year.
		        },
		    });

		    return pl;

		}))); 
	} ());
	return pl$1.exports;
}

requirePl();

var ru$1 = {exports: {}};

var ru = ru$1.exports;

var hasRequiredRu;

function requireRu () {
	if (hasRequiredRu) return ru$1.exports;
	hasRequiredRu = 1;
	(function (module, exports) {
(function (global, factory) {
		   typeof commonjsRequire === 'function' ? factory(requireMoment()) :
		   factory(global.moment);
		}(ru, (function (moment) {
		    //! moment.js locale configuration

		    function plural(word, num) {
		        var forms = word.split('_');
		        return num % 10 === 1 && num % 100 !== 11
		            ? forms[0]
		            : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)
		              ? forms[1]
		              : forms[2];
		    }
		    function relativeTimeWithPlural(number, withoutSuffix, key) {
		        var format = {
		            ss: withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
		            mm: withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
		            hh: 'час_часа_часов',
		            dd: 'день_дня_дней',
		            ww: 'неделя_недели_недель',
		            MM: 'месяц_месяца_месяцев',
		            yy: 'год_года_лет',
		        };
		        if (key === 'm') {
		            return withoutSuffix ? 'минута' : 'минуту';
		        } else {
		            return number + ' ' + plural(format[key], +number);
		        }
		    }
		    var monthsParse = [
		        /^янв/i,
		        /^фев/i,
		        /^мар/i,
		        /^апр/i,
		        /^ма[йя]/i,
		        /^июн/i,
		        /^июл/i,
		        /^авг/i,
		        /^сен/i,
		        /^окт/i,
		        /^ноя/i,
		        /^дек/i,
		    ];

		    // http://new.gramota.ru/spravka/rules/139-prop : § 103
		    // Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
		    // CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
		    var ru = moment.defineLocale('ru', {
		        months: {
		            format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split(
		                '_'
		            ),
		            standalone:
		                'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split(
		                    '_'
		                ),
		        },
		        monthsShort: {
		            // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку?
		            format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split(
		                '_'
		            ),
		            standalone:
		                'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split(
		                    '_'
		                ),
		        },
		        weekdays: {
		            standalone:
		                'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split(
		                    '_'
		                ),
		            format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split(
		                '_'
		            ),
		            isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/,
		        },
		        weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
		        weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
		        monthsParse: monthsParse,
		        longMonthsParse: monthsParse,
		        shortMonthsParse: monthsParse,

		        // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
		        monthsRegex:
		            /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,

		        // копия предыдущего
		        monthsShortRegex:
		            /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,

		        // полные названия с падежами
		        monthsStrictRegex:
		            /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,

		        // Выражение, которое соответствует только сокращённым формам
		        monthsShortStrictRegex:
		            /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
		        longDateFormat: {
		            LT: 'H:mm',
		            LTS: 'H:mm:ss',
		            L: 'DD.MM.YYYY',
		            LL: 'D MMMM YYYY г.',
		            LLL: 'D MMMM YYYY г., H:mm',
		            LLLL: 'dddd, D MMMM YYYY г., H:mm',
		        },
		        calendar: {
		            sameDay: '[Сегодня, в] LT',
		            nextDay: '[Завтра, в] LT',
		            lastDay: '[Вчера, в] LT',
		            nextWeek: function (now) {
		                if (now.week() !== this.week()) {
		                    switch (this.day()) {
		                        case 0:
		                            return '[В следующее] dddd, [в] LT';
		                        case 1:
		                        case 2:
		                        case 4:
		                            return '[В следующий] dddd, [в] LT';
		                        case 3:
		                        case 5:
		                        case 6:
		                            return '[В следующую] dddd, [в] LT';
		                    }
		                } else {
		                    if (this.day() === 2) {
		                        return '[Во] dddd, [в] LT';
		                    } else {
		                        return '[В] dddd, [в] LT';
		                    }
		                }
		            },
		            lastWeek: function (now) {
		                if (now.week() !== this.week()) {
		                    switch (this.day()) {
		                        case 0:
		                            return '[В прошлое] dddd, [в] LT';
		                        case 1:
		                        case 2:
		                        case 4:
		                            return '[В прошлый] dddd, [в] LT';
		                        case 3:
		                        case 5:
		                        case 6:
		                            return '[В прошлую] dddd, [в] LT';
		                    }
		                } else {
		                    if (this.day() === 2) {
		                        return '[Во] dddd, [в] LT';
		                    } else {
		                        return '[В] dddd, [в] LT';
		                    }
		                }
		            },
		            sameElse: 'L',
		        },
		        relativeTime: {
		            future: 'через %s',
		            past: '%s назад',
		            s: 'несколько секунд',
		            ss: relativeTimeWithPlural,
		            m: relativeTimeWithPlural,
		            mm: relativeTimeWithPlural,
		            h: 'час',
		            hh: relativeTimeWithPlural,
		            d: 'день',
		            dd: relativeTimeWithPlural,
		            w: 'неделя',
		            ww: relativeTimeWithPlural,
		            M: 'месяц',
		            MM: relativeTimeWithPlural,
		            y: 'год',
		            yy: relativeTimeWithPlural,
		        },
		        meridiemParse: /ночи|утра|дня|вечера/i,
		        isPM: function (input) {
		            return /^(дня|вечера)$/.test(input);
		        },
		        meridiem: function (hour, minute, isLower) {
		            if (hour < 4) {
		                return 'ночи';
		            } else if (hour < 12) {
		                return 'утра';
		            } else if (hour < 17) {
		                return 'дня';
		            } else {
		                return 'вечера';
		            }
		        },
		        dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
		        ordinal: function (number, period) {
		            switch (period) {
		                case 'M':
		                case 'd':
		                case 'DDD':
		                    return number + '-й';
		                case 'D':
		                    return number + '-го';
		                case 'w':
		                case 'W':
		                    return number + '-я';
		                default:
		                    return number;
		            }
		        },
		        week: {
		            dow: 1, // Monday is the first day of the week.
		            doy: 4, // The week that contains Jan 4th is the first week of the year.
		        },
		    });

		    return ru;

		}))); 
	} ());
	return ru$1.exports;
}

requireRu();

var uk$1 = {exports: {}};

var uk = uk$1.exports;

var hasRequiredUk;

function requireUk () {
	if (hasRequiredUk) return uk$1.exports;
	hasRequiredUk = 1;
	(function (module, exports) {
(function (global, factory) {
		   typeof commonjsRequire === 'function' ? factory(requireMoment()) :
		   factory(global.moment);
		}(uk, (function (moment) {
		    //! moment.js locale configuration

		    function plural(word, num) {
		        var forms = word.split('_');
		        return num % 10 === 1 && num % 100 !== 11
		            ? forms[0]
		            : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)
		              ? forms[1]
		              : forms[2];
		    }
		    function relativeTimeWithPlural(number, withoutSuffix, key) {
		        var format = {
		            ss: withoutSuffix ? 'секунда_секунди_секунд' : 'секунду_секунди_секунд',
		            mm: withoutSuffix ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
		            hh: withoutSuffix ? 'година_години_годин' : 'годину_години_годин',
		            dd: 'день_дні_днів',
		            MM: 'місяць_місяці_місяців',
		            yy: 'рік_роки_років',
		        };
		        if (key === 'm') {
		            return withoutSuffix ? 'хвилина' : 'хвилину';
		        } else if (key === 'h') {
		            return withoutSuffix ? 'година' : 'годину';
		        } else {
		            return number + ' ' + plural(format[key], +number);
		        }
		    }
		    function weekdaysCaseReplace(m, format) {
		        var weekdays = {
		                nominative:
		                    'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split(
		                        '_'
		                    ),
		                accusative:
		                    'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split(
		                        '_'
		                    ),
		                genitive:
		                    'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split(
		                        '_'
		                    ),
		            },
		            nounCase;

		        if (m === true) {
		            return weekdays['nominative']
		                .slice(1, 7)
		                .concat(weekdays['nominative'].slice(0, 1));
		        }
		        if (!m) {
		            return weekdays['nominative'];
		        }

		        nounCase = /(\[[ВвУу]\]) ?dddd/.test(format)
		            ? 'accusative'
		            : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(format)
		              ? 'genitive'
		              : 'nominative';
		        return weekdays[nounCase][m.day()];
		    }
		    function processHoursFunction(str) {
		        return function () {
		            return str + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';
		        };
		    }

		    var uk = moment.defineLocale('uk', {
		        months: {
		            format: 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split(
		                '_'
		            ),
		            standalone:
		                'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split(
		                    '_'
		                ),
		        },
		        monthsShort: 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split(
		            '_'
		        ),
		        weekdays: weekdaysCaseReplace,
		        weekdaysShort: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
		        weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
		        longDateFormat: {
		            LT: 'HH:mm',
		            LTS: 'HH:mm:ss',
		            L: 'DD.MM.YYYY',
		            LL: 'D MMMM YYYY р.',
		            LLL: 'D MMMM YYYY р., HH:mm',
		            LLLL: 'dddd, D MMMM YYYY р., HH:mm',
		        },
		        calendar: {
		            sameDay: processHoursFunction('[Сьогодні '),
		            nextDay: processHoursFunction('[Завтра '),
		            lastDay: processHoursFunction('[Вчора '),
		            nextWeek: processHoursFunction('[У] dddd ['),
		            lastWeek: function () {
		                switch (this.day()) {
		                    case 0:
		                    case 3:
		                    case 5:
		                    case 6:
		                        return processHoursFunction('[Минулої] dddd [').call(this);
		                    case 1:
		                    case 2:
		                    case 4:
		                        return processHoursFunction('[Минулого] dddd [').call(this);
		                }
		            },
		            sameElse: 'L',
		        },
		        relativeTime: {
		            future: 'за %s',
		            past: '%s тому',
		            s: 'декілька секунд',
		            ss: relativeTimeWithPlural,
		            m: relativeTimeWithPlural,
		            mm: relativeTimeWithPlural,
		            h: 'годину',
		            hh: relativeTimeWithPlural,
		            d: 'день',
		            dd: relativeTimeWithPlural,
		            M: 'місяць',
		            MM: relativeTimeWithPlural,
		            y: 'рік',
		            yy: relativeTimeWithPlural,
		        },
		        // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
		        meridiemParse: /ночі|ранку|дня|вечора/,
		        isPM: function (input) {
		            return /^(дня|вечора)$/.test(input);
		        },
		        meridiem: function (hour, minute, isLower) {
		            if (hour < 4) {
		                return 'ночі';
		            } else if (hour < 12) {
		                return 'ранку';
		            } else if (hour < 17) {
		                return 'дня';
		            } else {
		                return 'вечора';
		            }
		        },
		        dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
		        ordinal: function (number, period) {
		            switch (period) {
		                case 'M':
		                case 'd':
		                case 'DDD':
		                case 'w':
		                case 'W':
		                    return number + '-й';
		                case 'D':
		                    return number + '-го';
		                default:
		                    return number;
		            }
		        },
		        week: {
		            dow: 1, // Monday is the first day of the week.
		            doy: 7, // The week that contains Jan 7th is the first week of the year.
		        },
		    });

		    return uk;

		}))); 
	} ());
	return uk$1.exports;
}

requireUk();

/**
 * The single configured moment instance for the whole app. Import `momentHijri` from here —
 * never `'moment-hijri'` directly, and never `'moment/min/moment-with-locales'` (that is a
 * *third copy* of moment with its own locale registry, invisible to this one).
 *
 * **`momentHijri` and a bare `import moment from 'moment'` are NOT the same object in the
 * browser bundle.** `moment-hijri` requires `'moment/moment'` while the bare specifier resolves
 * through the package entry, and the bundler emits two copies. The `moment/locale/*` files
 * require `'../moment'`, so their data lands on moment-hijri's copy — which is why every
 * locale-registry write below goes through `momentHijri`, not `moment`. Writing to `moment`
 * here silently does nothing: the update lands on a copy nothing formats with.
 *
 * **Importing `moment-hijri` sets moment's GLOBAL locale to `ar-sa`**, and each
 * `moment/locale/*` import below sets it again to whichever loaded last. The `ar`/`ar-sa`
 * locales carry an Arabic-Indic `postformat`, so an unguarded import silently turns every
 * `format('YYYY-MM-DD')` in the codebase into `٢٠٢٦-٠٨-٢٧` and breaks all 268 API-payload call
 * sites. {@link configureMoment} pins the global locale back to `'en'`.
 *
 * {@link configureMoment} is invoked lazily — from `ir-date.ts` on every format, and once from
 * `src/global/app.ts` at boot — and deliberately NOT from this module's body. The bundler does
 * not guarantee that the body runs after the side-effect locale imports below; when it does not,
 * `updateLocale('ar', …)` would create a stub that the real `moment/locale/ar` then overwrites,
 * silently losing the Arabic Hijri month names. Do not "optimise" it back to a top-level call.
 *
 * Latin digits are enforced by post-processing the formatted string in `ir-date.ts`, not by
 * deriving `parentLocale` variants here. `moment.defineLocale(…, { parentLocale })` returns null
 * when the parent has not been evaluated yet, which is exactly the ordering we cannot rely on.
 */
/**
 * Arabic Hijri month names, attached to every Arabic locale so each renders Arabic weekdays
 * *and* Arabic Hijri months from a single locale.
 *
 * moment-hijri ships these on `ar-sa` alone, and its `ar-sa` definition carries no weekday data
 * — routing Arabic+Hijri there produced Arabic months with English weekdays
 * (`Tue, 19 ربيع 1`). Copying the tables onto each variant avoids that and keeps the dialects
 * interchangeable.
 */
const ARABIC_LOCALES = ['ar', 'ar-dz', 'ar-kw', 'ar-ly', 'ar-ma', 'ar-ps', 'ar-sa', 'ar-tn'];
const ARABIC_HIJRI_MONTHS = ['محرم', 'صفر', 'ربيع الأول', 'ربيع الثاني', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'];
const ARABIC_HIJRI_MONTHS_SHORT = ['محرم', 'صفر', 'ربيع ١', 'ربيع ٢', 'جمادى ١', 'جمادى ٢', 'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'];
/**
 * Best-effort early reset. This may run *before* the locale imports above are evaluated, in
 * which case the last of them wins and the global is left at `uk` — harmless (it still renders
 * Latin digits) and corrected by the first {@link configureMoment} call.
 */
momentHijri.locale('en');
hooks.locale('en');
let configured = false;
/**
 * Idempotently applies the Arabic Hijri month tables to every Arabic variant and pins moment's
 * global locale to `'en'`.
 * Safe (and cheap) to call on every format. Runs lazily so that it is guaranteed to execute
 * after the side-effect locale imports above, whatever order the bundler emits them in.
 */
function configureMoment() {
    if (configured)
        return;
    configured = true;
    // `updateLocale` merges into the already-loaded `ar` and switches the global locale to it,
    // so the reset below must stay last.
    for (const locale of ARABIC_LOCALES) {
        momentHijri.updateLocale(locale, { iMonths: ARABIC_HIJRI_MONTHS, iMonthsShort: ARABIC_HIJRI_MONTHS_SHORT });
    }
    // Reset both copies: moment-hijri's (used for display) and the bare one the ~268
    // `format('YYYY-MM-DD')` identity call sites across the app import.
    momentHijri.locale('en');
    hooks.locale('en');
}

/**
 * Maps an app language code (the `EntryLanguage` union in `src/utils/utils.ts`) to the moment
 * locale to format with, per calendar system.
 *
 * Under Hijri, each language keeps its **own** locale rather than falling back to English: a
 * non-Arabic moment locale carries no `iMonths` table, so moment-hijri supplies its
 * transliterated Hijri month names (`Rabi' al-Awwal`) while the locale still renders its own
 * weekday names (`jeudi`, `четверг`). Falling back to `en` wholesale would have anglicised the
 * weekdays too.
 *
 * Arabic uses the same `ar` locale for both calendars: `moment-setup.ts` attaches the Arabic
 * Hijri month tables to it, so Arabic weekdays and Arabic Hijri months come from one locale.
 * `ar` emits Arabic-Indic digits, which `ir-date.ts` converts back to Latin after formatting.
 *
 * `ua` is not a moment locale — Ukrainian is `uk`.
 */
const LOCALE_MAP = {
    'en': { gregory: 'en', hijri: 'en' },
    'ar': { gregory: 'ar', hijri: 'ar' },
    // Arabic regional variants — different Gregorian month names and native digits, same Hijri
    // month table (attached to all of them in `moment-setup.ts`).
    'ar-dz': { gregory: 'ar-dz', hijri: 'ar-dz' },
    'ar-kw': { gregory: 'ar-kw', hijri: 'ar-kw' },
    'ar-ly': { gregory: 'ar-ly', hijri: 'ar-ly' },
    'ar-ma': { gregory: 'ar-ma', hijri: 'ar-ma' },
    'ar-ps': { gregory: 'ar-ps', hijri: 'ar-ps' },
    'ar-sa': { gregory: 'ar-sa', hijri: 'ar-sa' },
    'ar-tn': { gregory: 'ar-tn', hijri: 'ar-tn' },
    'de': { gregory: 'de', hijri: 'de' },
    'el': { gregory: 'el', hijri: 'el' },
    'fr': { gregory: 'fr', hijri: 'fr' },
    'he': { gregory: 'he', hijri: 'he' },
    'pl': { gregory: 'pl', hijri: 'pl' },
    'ru': { gregory: 'ru', hijri: 'ru' },
    'ua': { gregory: 'uk', hijri: 'uk' },
    'uk': { gregory: 'uk', hijri: 'uk' },
};
/**
 * Resolves the moment locale for a language + calendar pair, falling back to `en` for anything
 * unrecognised. Region-tagged input resolves to an exact match when one exists (`ar-MA` →
 * `ar-ma`) and otherwise falls back to the primary subtag (`en-GB` → `en`).
 */
// Deliberately not memoized: benchmarking showed the cache key cost more to build than the
// lookup it replaced (0.11µs vs 0.03µs), and this now runs only on a result-cache miss anyway.
function toMomentLocale(language, calendar = 'gregory') {
    const tag = (language ?? '').toLowerCase().replace('_', '-');
    // Exact regional match first (`ar-ma`), then the primary subtag (`ar-EG` → `ar`), then English.
    const entry = LOCALE_MAP[tag] ?? LOCALE_MAP[tag.split('-')[0]] ?? LOCALE_MAP.en;
    return calendar === 'islamic-umalqura' ? entry.hijri : entry.gregory;
}

/**
 * Translates a Gregorian moment format string into its moment-hijri equivalent, so that call
 * sites can keep passing one plain format string (`'ddd, DD MMM YYYY'`) and get Hijri output
 * when the Hijri calendar is active — without knowing moment-hijri's `i`-prefixed token set.
 *
 * Only the tokens that actually name a *calendar* field are rewritten. Day-of-week and
 * clock-time are calendar-independent — Thursday is Thursday in both systems — so `dddd`, `ddd`,
 * `HH`, `mm`, `A`, `Z` and friends pass through untouched and still localize via the moment
 * locale.
 *
 * Deliberately NOT handled: moment's *localized* tokens (`L`, `LL`, `ll`, `LT`, `LLLL`) have no
 * `i`-prefixed counterpart in moment-hijri. Nothing in this codebase uses them, and
 * `STYLE_FORMATS` in `ir-date.ts` is written with plain tokens precisely so they never reach
 * here. The same applies to week/week-year tokens (`w`, `ww`, `gggg`), which are unused in this
 * codebase. Anything unmapped is passed through, yielding a Gregorian field under a Hijri
 * preference — extend `HIJRI_TOKENS` rather than working around it at the call site.
 */
/** Gregorian token → moment-hijri token. Order in the regex below is longest-match-first. */
const HIJRI_TOKENS = {
    // Year
    YYYY: 'iYYYY',
    YY: 'iYY',
    Y: 'iYYYY',
    // Month
    MMMM: 'iMMMM',
    MMM: 'iMMM',
    MM: 'iMM',
    Mo: 'iMo',
    M: 'iM',
    // Day of month / day of year
    DDDD: 'iDDDD',
    DDD: 'iDDD',
    DD: 'iDD',
    Do: 'iDo',
    D: 'iD',
};
/**
 * Matches, in priority order: a `[bracketed literal]`, then any translatable token
 * longest-first, then any single remaining character (separators, weekday/time tokens, stray
 * letters). Bracketed literals are matched first so `'[MMM]'` stays the text `MMM`.
 */
const TOKEN_PATTERN = /\[[^\]]*\]|YYYY|YY|Y|MMMM|MMM|MM|Mo|M|DDDD|DDD|DD|Do|D|./g;
/**
 * Translations are cached: format strings come from a small fixed vocabulary (~20 distinct
 * strings across the codebase) but are translated on every formatted cell, so the regex pass is
 * pure repeated work.
 */
const translationCache = new Map();
/**
 * @param format A moment format string using ordinary Gregorian tokens.
 * @returns The same string with calendar-field tokens rewritten for moment-hijri.
 */
function toHijriFormat(format) {
    if (!format)
        return format;
    let translated = translationCache.get(format);
    if (translated === undefined) {
        translated = format.replace(TOKEN_PATTERN, match => (match.startsWith('[') ? match : (HIJRI_TOKENS[match] ?? match)));
        translationCache.set(format, translated);
    }
    return translated;
}

/** `YYYY-MM-DD` — the canonical app date form, and by far the most common input here. */
const PLAIN_DATE = /^(\d{4})-(\d{2})-(\d{2})$/;
/**
 * Normalizes any accepted date input to a native `Date`, or `null` for empty/unparseable input.
 *
 * The `YYYY-MM-DD` fast path builds the `Date` directly instead of going through moment's
 * parser. That form dominates this codebase (API payloads, `data-date` attributes, calendar cell
 * keys), and moment's strict parse costs ~6µs against ~0.1µs here — with thousands of cells
 * formatted per calendar render, it was a quarter of the whole formatting budget.
 *
 * `new Date(y, m - 1, d)` yields local midnight, exactly matching what
 * `moment(value, 'YYYY-MM-DD')` produced, so the fast path is not a behaviour change. Anything
 * that is not a plain date still falls through to moment: strict ISO-8601, then the loose
 * parser, so canonical dates never reach the slow/ambiguous path.
 *
 * This exists only to feed the formatter a native `Date` — it is not a general-purpose moment
 * replacement, and nothing outside `src/utils/date/` should depend on it.
 */
function toDate(value) {
    if (!value)
        return null;
    if (value instanceof Date)
        return isNaN(value.getTime()) ? null : value;
    if (typeof value === 'string') {
        const plain = PLAIN_DATE.exec(value);
        if (plain) {
            const year = +plain[1];
            const month = +plain[2];
            const day = +plain[3];
            if (month >= 1 && month <= 12 && day >= 1 && day <= 31) {
                const date = new Date(year, month - 1, day);
                // Rejects overflow such as 2026-02-31, which `new Date` would roll into March.
                return date.getMonth() === month - 1 && date.getDate() === day ? date : null;
            }
            return null;
        }
    }
    else if (hooks.isMoment(value)) {
        return value.isValid() ? value.toDate() : null;
    }
    const iso = hooks(value, hooks.ISO_8601, true);
    if (iso.isValid())
        return iso.toDate();
    const loose = hooks(value);
    return loose.isValid() ? loose.toDate() : null;
}

/**
 * Digit-script conversion for formatted date strings.
 *
 * moment renders numerals in whatever script its locale prefers — `ar`, `ar-ps` and `ar-sa`
 * emit Arabic-Indic (`٢٠٢٦`), the Maghrebi variants emit Latin. This module makes that a
 * deliberate choice rather than a side effect of which locale happens to be selected.
 *
 * Conversion is done on the formatted string rather than through a locale `postformat`, because
 * some locales embed digits directly in their month-name tables (`ar-sa`'s abbreviated Hijri
 * month `'ربيع ١'`), which no `postformat` hook can reach.
 */
/** Code point of digit zero in each supported script. All ten digits are contiguous from it. */
const DIGIT_ZERO = {
    latn: 0x0030, // 0123456789
    arab: 0x0660, // ٠١٢٣٤٥٦٧٨٩  Arabic-Indic
    arabext: 0x06f0, // ۰۱۲۳۴۵۶۷۸۹  Eastern Arabic-Indic (Persian/Urdu)
};
/**
 * The digit script each locale conventionally uses, for resolving `'auto'`.
 *
 * This table exists so `'auto'` means the same thing for dates and for numbers. The two
 * subsystems disagree on their own: moment's `ar` locale renders Arabic-Indic, while CLDR (and
 * therefore `Intl.NumberFormat`) defaults `ar` to Latin. The values below follow moment/regional
 * convention — Arabic-Indic in the Mashriq, Latin across the Maghreb.
 */
const LOCALE_DEFAULT_SCRIPT = {
    'ar': 'arab',
    'ar-ps': 'arab',
    'ar-sa': 'arab',
    'ar-dz': 'latn',
    'ar-kw': 'latn',
    'ar-ly': 'latn',
    'ar-ma': 'latn',
    'ar-tn': 'latn',
};
/**
 * Turns a preference into a concrete script. `'auto'` consults {@link LOCALE_DEFAULT_SCRIPT},
 * matching an exact regional tag before the primary subtag, and falls back to Latin.
 */
const scriptCache = new Map();
function resolveNumberingScript(locale, preference) {
    if (preference !== 'auto')
        return preference;
    let script = scriptCache.get(locale);
    if (script === undefined) {
        const tag = (locale ?? '').toLowerCase().replace('_', '-');
        script = LOCALE_DEFAULT_SCRIPT[tag] ?? LOCALE_DEFAULT_SCRIPT[tag.split('-')[0]] ?? 'latn';
        scriptCache.set(locale, script);
    }
    return script;
}
/** Any digit in a script we know how to convert between. */
const KNOWN_DIGITS = /[0-9٠-٩۰-۹]/g;
/** Non-Latin digits only — lets the common `latn` case skip the rewrite entirely. */
const NON_LATIN_DIGITS = /[٠-٩۰-۹]/;
/** The numeric value 0–9 of a digit character in any of the supported scripts. */
function digitValue(char) {
    const code = char.charCodeAt(0);
    if (code >= 0x0030 && code <= 0x0039)
        return code - 0x0030;
    return code & 0xf; // both Arabic-Indic ranges end on the digit value
}
/**
 * Rewrites every digit in `value` into `system`. Digits already in the target script are
 * unchanged, so this is safe to apply to mixed input and safe to apply twice.
 */
function toNumerals(value, system) {
    // By far the hottest case: Latin target, Latin output — nothing to rewrite.
    if (system === 'latn' && !NON_LATIN_DIGITS.test(value))
        return value;
    const zero = DIGIT_ZERO[system] ?? DIGIT_ZERO.latn;
    return value.replace(KNOWN_DIGITS, d => String.fromCharCode(zero + digitValue(d)));
}

/**
 * The one global entry point for calendar-aware date DISPLAY (Gregorian or Hijri).
 *
 * Pass an ordinary moment format string and it renders in the active language, switching to the
 * Hijri calendar when that is the resolved preference — the call site never changes:
 *
 *   formatDate('2026-08-27', 'ddd, DD MMM YYYY')
 *     en           → Thu, 27 Aug 2026
 *     ar           → خميس, 27 أغسطس 2026
 *     ar + hijri   → الخميس، 14 ربيع الأول 1448
 *
 * Never used for parsing or identity. `data-date` attributes, API payloads, calendar cell keys
 * and every persisted value stay Gregorian ISO strings — use {@link toApiDate} for that
 * boundary. The global moment locale is left at `'en'` by `moment-setup.ts` and nothing here
 * mutates it; every format call sets its locale per instance, so a raw
 * `moment(x).format('YYYY-MM-DD')` elsewhere in the codebase always yields Latin-digit ISO.
 */
/**
 * One-time initialisation of the date layer: moment locale configuration plus the calendar /
 * numbering-system preference resolution. Runs on the first format rather than from
 * `src/global/app.ts`, so that both the moment instance and the preference store initialise
 * inside the component-chunk graph — see the comment in `app.ts` for why that matters.
 */
let dateLayerReady = false;
function ensureDateLayer() {
    configureMoment();
    if (dateLayerReady)
        return;
    dateLayerReady = true;
    CalendarPreferenceController.init();
}
/**
 * Semantic styles map onto plain moment tokens (never moment's localized `L`/`ll` tokens, which
 * have no Hijri counterpart — see `tokens.ts`). The English output of each reproduces exactly
 * what the previous `Intl.DateTimeFormat` implementation produced, so existing screens and the
 * assertions in `ir-date.spec.ts` are unchanged.
 */
const STYLE_FORMATS = {
    'short': 'M/D/YYYY', // 8/27/2026
    'medium': 'MMM D, YYYY', // Aug 27, 2026
    'long': 'MMMM D, YYYY', // August 27, 2026
    'weekday-medium': 'ddd, MMM D, YYYY', // Thu, Aug 27, 2026
    'month-year': 'MMMM YYYY', // August 2026
    'day-only': 'D', // 27
};
/** Zero-pads to two digits without allocating a format string. */
function pad2(value) {
    return value < 10 ? `0${value}` : `${value}`;
}
/**
 * Whether the platform prefers a 12-hour clock. Cached — `Intl` resolution is not free and this
 * cannot change within a session. Preserves the behaviour introduced for `_formatTime`.
 */
let cachedHour12;
function prefersHour12() {
    if (cachedHour12 === undefined) {
        try {
            cachedHour12 = new Intl.DateTimeFormat(undefined, { hour: 'numeric' }).resolvedOptions().hour12 ?? false;
        }
        catch {
            cachedHour12 = false;
        }
    }
    return cachedHour12;
}
const TIME_FORMATS = {
    short: () => (prefersHour12() ? 'h:mm A' : 'HH:mm'),
};
/**
 * Resolution order: an explicit per-call override, then the language the locale store was loaded
 * with, then `<html lang>`, then English. Exported because `@/utils/number` resolves the same
 * display locale and digit-script preference — they are one user-facing setting, not two.
 */
function resolveLocale(options) {
    return options?.locale ?? locales.language ?? LanguageObserver.getLang() ?? 'en';
}
function resolveCalendar(options) {
    return options?.calendar ?? calendarPreference.resolved;
}
function resolveNumberingSystem(options) {
    return options?.numberingSystem ?? calendarPreference.numberingSystem;
}
/**
 * Formatted results are memoized. A calendar view formats the same handful of dates in the same
 * handful of formats on every re-render — thousands of calls, a few hundred distinct results.
 *
 * The key carries every input that can change the output (timestamp, format, locale, calendar,
 * digit script), so a preference change simply lands on different keys; there is no invalidation
 * to get wrong. The store reads that build the key still happen on every call, which is what
 * keeps `@stencil/store`'s render tracking working — returning a cached string must not skip
 * them, or components would stop re-rendering when the language or calendar changes.
 */
const MAX_CACHED_RESULTS = 5000;
const resultCache = new Map();
/** The single formatting primitive every other export in this module funnels through. */
function render(value, format, options) {
    ensureDateLayer();
    const date = toDate(value);
    if (!date)
        return '';
    // Read every preference first: these store reads are what register the component's dependency.
    const calendar = resolveCalendar(options);
    const locale = resolveLocale(options);
    const script = resolveNumberingScript(locale, resolveNumberingSystem(options));
    const cacheKey = `${date.getTime()}|${format}|${locale}|${calendar}|${script}`;
    const cached = resultCache.get(cacheKey);
    if (cached !== undefined)
        return cached;
    const pattern = calendar === 'islamic-umalqura' ? toHijriFormat(format) : format;
    const formatted = toNumerals(momentHijri(date).locale(toMomentLocale(locale, calendar)).format(pattern), script);
    // Crude but sufficient bound: a full clear is rare and far cheaper than tracking LRU order.
    if (resultCache.size >= MAX_CACHED_RESULTS)
        resultCache.clear();
    resultCache.set(cacheKey, formatted);
    return formatted;
}
function formatDate(value, formatOrOptions, maybeOptions) {
    const options = typeof formatOrOptions === 'string' ? maybeOptions : formatOrOptions;
    const base = typeof formatOrOptions === 'string' ? formatOrOptions : STYLE_FORMATS[options?.style ?? 'medium'];
    const format = options?.withTime ? `${base} ${TIME_FORMATS[options.withTime]()}` : base;
    return render(value, format, options);
}
/**
 * Formats the time portion only, honouring the platform's 12h/24h preference by default.
 * Time-of-day is calendar-independent, so this is unaffected by the Hijri preference.
 */
function formatTime(value, options) {
    return render(value, TIME_FORMATS['short'](), options);
}
/**
 * The API/persistence boundary: always Gregorian, always Latin digits, always `YYYY-MM-DD`,
 * regardless of the active language or calendar preference. Use this for request payloads,
 * `data-date` attributes, calendar cell keys and anything persisted.
 */
function toApiDate(value) {
    const date = toDate(value);
    if (!date)
        return '';
    // Built from the Date's own fields rather than through moment: this is Gregorian Latin ISO by
    // construction, so no locale, calendar preference or digit script can reach it — and it is on
    // the request path, where it was costing ~21µs a call for a nine-character string.
    return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
}
/**
 * Weekday abbreviations, Sunday-first. Day-of-week is a property of the week, not of the
 * calendar system, so this deliberately has no Hijri branch — only the names are localized.
 * Grid column order is Sunday-first everywhere; see {@link getFirstDayOfWeek}.
 */
function getWeekdayLabels(options) {
    ensureDateLayer();
    const data = momentHijri.localeData(toMomentLocale(options?.locale ?? resolveLocale(), options?.calendar ?? 'gregory'));
    // `options.style` here is the weekday width, not a DateStyle — pass only the numbering system.
    // Resolve the script once rather than per label — this maps over seven strings.
    const script = resolveNumberingScript(resolveLocale(options), resolveNumberingSystem(options));
    return (options?.style === 'narrow' ? data.weekdaysMin() : data.weekdaysShort()).map(label => toNumerals(label, script));
}
/** Month name (+ year), respecting the resolved calendar — used for header/month-grid labels. */
function getMonthLabel(value, options) {
    return render(value, 'MMMM YYYY', options);
}
/**
 * The locale's conventional first day of the week (0 = Sunday … 6 = Saturday; Arabic reports 6).
 * Exposed for callers that want it — the calendar grids deliberately stay Sunday-first, so
 * changing their column order is an opt-in change, not a side effect of switching language.
 */
function getFirstDayOfWeek(locale) {
    ensureDateLayer();
    return momentHijri.localeData(toMomentLocale(resolveLocale(), 'gregory')).firstDayOfWeek();
}

export { CalendarPreferenceController as C, LanguageObserver as L, resolveNumberingScript as a, resolveNumberingSystem as b, formatTime as c, getMonthLabel as d, toDate as e, formatDate as f, getWeekdayLabels as g, calendarPreference as h, toApiDate as i, getFirstDayOfWeek as j, resolveLocale as r, toNumerals as t };
