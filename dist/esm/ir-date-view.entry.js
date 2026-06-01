import { r as registerInstance, h, H as Host } from './index-7e96440e.js';
import { l as locales } from './locales.store-cb784e95.js';
import { c as calculateDaysBetweenDates } from './booking-a1364eab.js';
import { h as hooks } from './moment-ab846cee.js';
import './index-f100e9d2.js';
import './utils-da0c0412.js';
import './index-87419685.js';
import './calendar-data-b1f645da.js';
import './type-501de9b6.js';
import './axios-aa1335b8.js';

const irDateViewCss = ":host{display:inline-flex;align-items:center;font-size:var(--ir-date-view-font-size, 0.8125rem);color:var(--ir-date-view-color, inherit);line-height:1.4}[part='base']{display:inline-flex;align-items:center;flex-wrap:wrap;gap:var(--ir-date-view-gap, 0.3125rem);}[part='from-date'],[part='to-date']{white-space:nowrap;font-weight:var(--ir-date-view-date-font-weight, 400);color:var(--ir-date-view-date-color, inherit)}[part='separator']{display:inline-flex;align-items:center;flex-shrink:0}[part='separator-icon']{width:var(--ir-date-view-separator-size, 0.75rem);height:var(--ir-date-view-separator-size, 0.75rem);display:block}";
const IrDateViewStyle0 = irDateViewCss;

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
        return (h(Host, { key: '73fa565103ee5a42793cbb6c955d388dca93ed05' }, h("span", { key: '2618158052e9b2af5b06443cc7c716b3dce79e13', part: "base" }, h("span", { key: 'e9ea5fc5b82fe84892850e49f4963e3c580f8074', part: "from-date" }, fromStr), h("span", { key: '473fd62512df4a18b6288f9f42e23a0c0c75f614', part: "separator", "aria-hidden": "true" }, h("svg", { key: 'c1a61b58bafe9cb74950885ba1fe7e497cf9eb5a', xmlns: "http://www.w3.org/2000/svg", part: "separator-icon", viewBox: "0 0 512 512", "aria-hidden": "true", focusable: "false" }, h("path", { key: 'd8e4cd5836e2acbb4b06c1b33fb0c58ab61a050a', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" }))), h("span", { key: 'f0373d5db6ac8d3e3a300b78cfbde2fe61bccf3f', part: "to-date" }, toStr), this.showDateDifference && diff > 0 && (h("span", { key: 'be5ea92f0fd919cb5e1599123129bdea9252b2b2', part: "night-count" }, diff, "\u00A0", nightLabel)))));
    }
};
IrDateView.style = IrDateViewStyle0;

export { IrDateView as ir_date_view };

//# sourceMappingURL=ir-date-view.entry.js.map