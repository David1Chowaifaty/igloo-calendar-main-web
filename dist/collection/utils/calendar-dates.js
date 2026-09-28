import moment from "moment";
export const ISO_FORMAT = 'YYYY-MM-DD';
/** Reads the leading `YYYY-MM-DD` as a local calendar day (a trailing time, if any, is ignored). */
const parse = (d) => moment(d, ISO_FORMAT);
export const todayISO = () => moment().format(ISO_FORMAT);
export const addDaysISO = (d, n) => parse(d).add(n, 'days').format(ISO_FORMAT);
export const addMonthsISO = (d, n) => parse(d).add(n, 'months').format(ISO_FORMAT);
/** Whole nights from `from` to `to` (negative when `to` is earlier). */
export const nightsBetween = (from, to) => parse(to).diff(parse(from), 'days');
