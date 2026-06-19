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
        return (index.h(index.Host, { key: '3e8fbd7d3b8fa535232e9328df042ab46358aedb' }, index.h("span", { key: '1debcccd040d0bd33b5696d3a03db64682171638', part: "base" }, index.h("span", { key: '77e7ac22a2bba460f139cff3ce68b7654745efe7', part: "from-date" }, fromStr), index.h("span", { key: '16abd4490c1b68ceff48ab5a8379d7150555d4f5', part: "separator", "aria-hidden": "true" }, index.h("svg", { key: '8ac2dfb854ee26946eb2524f96ccb215d31b2b28', xmlns: "http://www.w3.org/2000/svg", part: "separator-icon", viewBox: "0 0 512 512", "aria-hidden": "true", focusable: "false" }, index.h("path", { key: '5670a29664d5481b56c50e09930338a362f9c5d2', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" }))), index.h("span", { key: '89687a3c71f00c523c13432816b037f7f14a9783', part: "to-date" }, toStr), this.showDateDifference && diff > 0 && (index.h("span", { key: '2bfb0dd487f8bf0b4182881a4fd2335bb7fd5a06', part: "night-count" }, diff, "\u00A0", nightLabel)))));
    }
};
IrDateView.style = irDateViewCss();

exports.ir_date_view = IrDateView;
