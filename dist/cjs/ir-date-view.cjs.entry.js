'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const locales_store = require('./locales.store-32782582.js');
const booking = require('./booking-9b5a7f1e.js');
const moment = require('./moment-1780b03a.js');
require('./index-fbf1fe1d.js');
require('./utils-7364dac0.js');
require('./index-8bb117a0.js');
require('./calendar-data-70bc3b4b.js');
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
        return (index.h(index.Host, { key: 'a5b38dd69f433344847132d80b1229b1aaf4bab5' }, index.h("span", { key: '7babb5d6a69793f0949ef619debea29efcfb4bdd', part: "base" }, index.h("span", { key: '4674c8e22614ecd31eb0a28726ce0158c60f2c79', part: "from-date" }, fromStr), index.h("span", { key: 'd76ac9271a0ec2b6d8ef6fb6f218f461f5116541', part: "separator", "aria-hidden": "true" }, index.h("svg", { key: '04dc635f397537ecf2609cc8a1208cfb465a682e', xmlns: "http://www.w3.org/2000/svg", part: "separator-icon", viewBox: "0 0 512 512", "aria-hidden": "true", focusable: "false" }, index.h("path", { key: '9f8763d59e91ad81043de2c1dfe6e37f22ce6a02', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" }))), index.h("span", { key: '9da718e46ba59b9d9c37ce19c986db0c2ca5cdd1', part: "to-date" }, toStr), this.showDateDifference && diff > 0 && (index.h("span", { key: '001bb40944fcb8ff00bb452443272949ce9576ff', part: "night-count" }, diff, "\u00A0", nightLabel)))));
    }
};
IrDateView.style = IrDateViewStyle0;

exports.ir_date_view = IrDateView;

//# sourceMappingURL=ir-date-view.cjs.entry.js.map