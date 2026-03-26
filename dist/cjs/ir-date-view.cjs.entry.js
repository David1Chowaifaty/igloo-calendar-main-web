'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const locales_store = require('./locales.store-32782582.js');
const booking = require('./booking-77542ea5.js');
const moment = require('./moment-1780b03a.js');
require('./index-fbf1fe1d.js');
require('./utils-dc8cc4b1.js');
require('./index-8bb117a0.js');
require('./calendar-data-0598de26.js');
require('./type-393ac773.js');
require('./axios-6e678d52.js');

const irDateViewCss = ":host{display:inline-flex;align-items:center;font-size:var(--ir-date-view-font-size, 0.8125rem);color:var(--ir-date-view-color, inherit);line-height:1.4}[part='base']{display:inline-flex;align-items:center;flex-wrap:wrap;gap:var(--ir-date-view-gap, 0.3125rem);}[part='from-date'],[part='to-date']{white-space:nowrap;font-weight:var(--ir-date-view-date-font-weight, 400);color:var(--ir-date-view-date-color, inherit)}[part='separator']{display:inline-flex;align-items:center;flex-shrink:0}[part='separator-icon']{width:var(--ir-date-view-separator-size, 0.75rem);height:var(--ir-date-view-separator-size, 0.75rem);display:block}";
const IrDateViewStyle0 = irDateViewCss;

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
        return (index.h(index.Host, { key: 'c50c9b34abe928afc622bf1c436b81762b57a226' }, index.h("span", { key: '0740ad9ece7cd8935e56890cbd282713e9b51adc', part: "base" }, index.h("span", { key: '3bd42691193bd910f735a88cf07f4baa613e112a', part: "from-date" }, fromStr), index.h("span", { key: 'a0751c723d9d9f5a95b8e8db02537be3d805b309', part: "separator", "aria-hidden": "true" }, index.h("svg", { key: '776c98052d82667e9189cdd5863bcfe0b3628ee1', xmlns: "http://www.w3.org/2000/svg", part: "separator-icon", viewBox: "0 0 512 512", "aria-hidden": "true", focusable: "false" }, index.h("path", { key: '9ba4c7ab9dcf817ff7125cd8d683cefb766d8fa4', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" }))), index.h("span", { key: 'fc0d0758309ccd6a6eb9f40c45b9758d45a2d951', part: "to-date" }, toStr), this.showDateDifference && diff > 0 && (index.h("span", { key: '1cb7c5a6edbe134d76d9878d8ef1aee2a25c0065', part: "night-count" }, diff, "\u00A0", nightLabel)))));
    }
};
IrDateView.style = IrDateViewStyle0;

exports.ir_date_view = IrDateView;

//# sourceMappingURL=ir-date-view.cjs.entry.js.map