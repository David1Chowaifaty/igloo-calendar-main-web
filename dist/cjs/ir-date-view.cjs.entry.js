'use strict';

var index = require('./index-CJ0kc5p1.js');
var locales_store = require('./locales.store-BfrChT1G.js');
var booking = require('./booking-BiLyxhv-.js');
var moment = require('./moment-CdViwxPQ.js');
require('./index-dbmC5P-h.js');
require('./utils-CHYeTDt_.js');
require('./index-CLqkDPTC.js');
require('./calendar-data-CTxCbso4.js');
require('./type-Dy9pVS4V.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');

const irDateViewCss = () => `:host{display:inline-flex;align-items:center;font-size:var(--ir-date-view-font-size, 0.8125rem);color:var(--ir-date-view-color, inherit);line-height:1.4}[part='base']{display:inline-flex;align-items:center;flex-wrap:wrap;gap:var(--ir-date-view-gap, 0.3125rem);}[part='from-date'],[part='to-date']{white-space:nowrap;font-weight:var(--ir-date-view-date-font-weight, 400);color:var(--ir-date-view-date-color, inherit)}[part='separator']{display:inline-flex;align-items:center;flex-shrink:0}[part='separator-icon']{width:var(--ir-date-view-separator-size, 0.75rem);height:var(--ir-date-view-separator-size, 0.75rem);display:block}`;

const IrDateView = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /** Raw from-date — accepts ISO string, JS Date, or Moment */
    from_date;
    /** Raw to-date — accepts ISO string, JS Date, or Moment */
    to_date;
    /** Show the night-count badge after the to-date */
    showDateDifference = true;
    /** Input format used when `from_date` / `to_date` are plain strings */
    dateOption = 'YYYY-MM-DD';
    /** Display format for both dates */
    format = 'MMM DD, YYYY';
    formatDate(date) {
        if (!date)
            return '';
        if (typeof date === 'string')
            return moment.hooks(date, this.dateOption).format(this.format);
        if (date instanceof Date)
            return moment.hooks(date).format(this.format);
        if (moment.hooks.isMoment(date))
            return date.format(this.format);
        return '';
    }
    render() {
        const fromStr = this.formatDate(this.from_date);
        const toStr = this.formatDate(this.to_date);
        const diff = booking.calculateDaysBetweenDates(moment.hooks(fromStr, this.format).format('YYYY-MM-DD'), moment.hooks(toStr, this.format).format('YYYY-MM-DD'));
        const nightLabel = diff === 1 ? locales_store.locales.entries.Lcz_Night : locales_store.locales.entries.Lcz_Nights;
        return (index.h(index.Host, { key: '108de051816396e29c5ae8f13526804673ecbc3e' }, index.h("span", { key: '8b6572cc4a0cddbfc6219a4e3030521818cc5f9d', part: "base" }, index.h("span", { key: '113a7f7ed20e61cc8fb84e031c878a4ce6bc8f18', part: "from-date" }, fromStr), index.h("span", { key: '6291d1b38e27271a9020a7148ebbb82e2c7e59ec', part: "separator", "aria-hidden": "true" }, index.h("svg", { key: '0970e31b7d541572c60c6dbe760db0cef95e2ad6', xmlns: "http://www.w3.org/2000/svg", part: "separator-icon", viewBox: "0 0 512 512", "aria-hidden": "true", focusable: "false" }, index.h("path", { key: '92b207f8604832bb760106732a8fe195cd202b34', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" }))), index.h("span", { key: '7528ed1eea51192b97ddc210c3cc36e40c9e7a08', part: "to-date" }, toStr), this.showDateDifference && diff > 0 && (index.h("span", { key: '9d32e2e3a8f116f57bd592c55904643ba0dc82ac', part: "night-count" }, diff, "\u00A0", nightLabel)))));
    }
};
IrDateView.style = irDateViewCss();

exports.ir_date_view = IrDateView;
