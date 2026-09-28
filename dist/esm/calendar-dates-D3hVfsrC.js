import { h as hooks } from './moment-Mki5YqAR.js';

const ISO_FORMAT = 'YYYY-MM-DD';
/** Reads the leading `YYYY-MM-DD` as a local calendar day (a trailing time, if any, is ignored). */
const parse = (d) => hooks(d, ISO_FORMAT);
const todayISO = () => hooks().format(ISO_FORMAT);
const addDaysISO = (d, n) => parse(d).add(n, 'days').format(ISO_FORMAT);
const addMonthsISO = (d, n) => parse(d).add(n, 'months').format(ISO_FORMAT);
/** Whole nights from `from` to `to` (negative when `to` is earlier). */
const nightsBetween = (from, to) => parse(to).diff(parse(from), 'days');

export { ISO_FORMAT as I, addDaysISO as a, addMonthsISO as b, nightsBetween as n, todayISO as t };
