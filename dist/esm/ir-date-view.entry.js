import { r as registerInstance, h, H as Host } from './index-D8DCR0yx.js';
import { l as locales } from './locales.store-ChFOK43k.js';
import { c as calculateDaysBetweenDates } from './booking-CvTMLWU-.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import './index-D5oXdmCj.js';
import './utils-1CCVam5W.js';
import './index-DeW5X45W.js';
import './calendar-data-BIZ201rH.js';
import './type-D7rOPtKA.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';

const irDateViewCss = () => `:host{display:inline-flex;align-items:center;font-size:var(--ir-date-view-font-size, 0.8125rem);color:var(--ir-date-view-color, inherit);line-height:1.4}[part='base']{display:inline-flex;align-items:center;flex-wrap:wrap;gap:var(--ir-date-view-gap, 0.3125rem);}[part='from-date'],[part='to-date']{white-space:nowrap;font-weight:var(--ir-date-view-date-font-weight, 400);color:var(--ir-date-view-date-color, inherit)}[part='separator']{display:inline-flex;align-items:center;flex-shrink:0}[part='separator-icon']{width:var(--ir-date-view-separator-size, 0.75rem);height:var(--ir-date-view-separator-size, 0.75rem);display:block}`;

const IrDateView = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            return hooks(date, this.dateOption).format(this.format);
        if (date instanceof Date)
            return hooks(date).format(this.format);
        if (hooks.isMoment(date))
            return date.format(this.format);
        return '';
    }
    render() {
        const fromStr = this.formatDate(this.from_date);
        const toStr = this.formatDate(this.to_date);
        const diff = calculateDaysBetweenDates(hooks(fromStr, this.format).format('YYYY-MM-DD'), hooks(toStr, this.format).format('YYYY-MM-DD'));
        const nightLabel = diff === 1 ? locales.entries.Lcz_Night : locales.entries.Lcz_Nights;
        return (h(Host, { key: '1498056356ce3925546a6e9de954878910b4e23c' }, h("span", { key: '1f11b702a9e0e7982e048d747112e1ee1cf7ef33', part: "base" }, h("span", { key: '023107294348739b479854048e2fc92321e3c677', part: "from-date" }, fromStr), h("span", { key: '5de748d1e8c27df7a34cc27d6aee85bc7abc60f2', part: "separator", "aria-hidden": "true" }, h("svg", { key: '468ea8cf0213d74f572b9953c18d6133d576c5f3', xmlns: "http://www.w3.org/2000/svg", part: "separator-icon", viewBox: "0 0 512 512", "aria-hidden": "true", focusable: "false" }, h("path", { key: 'fd7a27ff25f0b68610f35e28e8867a0196d373d1', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" }))), h("span", { key: '8b002c053df129d39edf9d603895bab5eb24d247', part: "to-date" }, toStr), this.showDateDifference && diff > 0 && (h("span", { key: 'a69ac24a9734b68d904227972725a0bd99cf29d3', part: "night-count" }, diff, "\u00A0", nightLabel)))));
    }
};
IrDateView.style = irDateViewCss();

export { IrDateView as ir_date_view };
