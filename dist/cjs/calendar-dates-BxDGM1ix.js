'use strict';

var moment = require('./moment-CdViwxPQ.js');

const ISO_FORMAT = 'YYYY-MM-DD';
/** Reads the leading `YYYY-MM-DD` as a local calendar day (a trailing time, if any, is ignored). */
const parse = (d) => moment.hooks(d, ISO_FORMAT);
const todayISO = () => moment.hooks().format(ISO_FORMAT);
const addDaysISO = (d, n) => parse(d).add(n, 'days').format(ISO_FORMAT);
const addMonthsISO = (d, n) => parse(d).add(n, 'months').format(ISO_FORMAT);
/** Whole nights from `from` to `to` (negative when `to` is earlier). */
const nightsBetween = (from, to) => parse(to).diff(parse(from), 'days');

exports.ISO_FORMAT = ISO_FORMAT;
exports.addDaysISO = addDaysISO;
exports.addMonthsISO = addMonthsISO;
exports.nightsBetween = nightsBetween;
exports.todayISO = todayISO;
