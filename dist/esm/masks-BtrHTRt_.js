import { M as MaskedRange } from './index-BQB1ooJC.js';
import { h as hooks } from './moment-Mki5YqAR.js';

const masks = {
    price: {
        mask: Number,
        scale: 2,
        radix: '.',
        mapToRadix: [','],
        normalizeZeros: true,
        padFractionalZeros: true,
        thousandsSeparator: ',',
    },
    email: {
        mask: /^\S*@?\S*$/,
        overwrite: false,
        prepare(value) {
            // Remove spaces
            return value
                .toLowerCase()
                .replace(/\s+/g, '') // remove all whitespace
                .replace(/[^a-z0-9@._'+\-]/g, '') // only allow chars from EMAIL_REGEX
                .replace(/\.{2,}/g, '.') // collapse multiple dots
                .replace(/@\./, '@'); // no dot immediately after @;
        },
        validate(value) {
            // Allow partial input while typing
            // but restrict characters to valid email charset
            return /^[a-zA-Z0-9._%+-]*(@?[a-zA-Z0-9.-]*)?$/.test(value);
        },
    },
    url: {
        mask: /^\S*$/,
        overwrite: false,
        prepare(appended /* string */) {
            return appended.replace(/^https?:\/\//i, '');
        },
        commit(value, masked) {
            masked._value = 'https://' + value.replace(/^https?:\/\//i, '');
        },
    },
    time: {
        mask: 'HH:mm',
        blocks: {
            HH: {
                mask: MaskedRange,
                from: 0,
                to: 23,
                placeholderChar: 'H',
            },
            mm: {
                mask: MaskedRange,
                from: 0,
                to: 59,
                placeholderChar: 'm',
            },
        },
        lazy: true,
        placeholderChar: '_',
    },
    date: {
        mask: Date,
        pattern: 'DD/MM/YYYY',
        lazy: false,
        min: hooks('1900-01-01', 'YYYY-MM-DD').toDate(),
        max: new Date(),
        format: date => hooks(date).format('DD/MM/YYYY'),
        parse: str => hooks(str, 'DD/MM/YYYY').toDate(),
        autofix: true,
        placeholderChar: '_',
        blocks: {
            YYYY: {
                mask: MaskedRange,
                from: 1900,
                to: hooks().format('YYYY'),
                placeholderChar: 'Y',
            },
            MM: {
                mask: MaskedRange,
                from: 1,
                to: 12,
                placeholderChar: 'M',
            },
            DD: {
                mask: MaskedRange,
                from: 1,
                to: 31,
                placeholderChar: 'D',
            },
        },
    },
};
function buildTimeToMask(minHour) {
    return {
        ...masks.time,
        blocks: {
            ...masks.time.blocks,
            HH: {
                ...masks.time.blocks.HH,
                from: minHour,
            },
        },
    };
}
/**
 * "to" time mask for a from/to time pair — same shape as `masks.time`, but the hour block's
 * lower bound is raised to `minHour` so the field can't accept an hour earlier than the paired
 * "from" time. Cached per hour (0-23) so the same `minHour` always yields the same object
 * reference — `ir-input` rebuilds its IMask instance whenever the `mask` prop reference changes,
 * so a fresh object on every render would tear down/recreate the mask on every keystroke.
 */
const timeToMaskCache = new Map();
function createTimeToMask(minHour) {
    const clampedMinHour = Math.min(Math.max(Math.trunc(minHour) || 0, 0), 23);
    const cached = timeToMaskCache.get(clampedMinHour);
    if (cached) {
        return cached;
    }
    const mask = buildTimeToMask(clampedMinHour);
    timeToMaskCache.set(clampedMinHour, mask);
    return mask;
}

export { createTimeToMask as c, masks as m };
