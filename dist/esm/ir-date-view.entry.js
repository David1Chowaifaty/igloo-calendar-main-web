import { r as registerInstance, h, H as Host } from './index-D7D7fhZS.js';
import { l as locales } from './locales.store-C0aS6UDK.js';
import { c as calculateDaysBetweenDates } from './booking-Dz6T4kdw.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import './index-TzZ5wfUy.js';
import './utils-BhGSDnBq.js';
import './index-DeW5X45W.js';
import './calendar-data-15-64PrB.js';
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
        return (h(Host, { key: '867b86a21539c3e9471aabddc2d638958f9df70e' }, h("span", { key: '79eb75bf20a9e7af07ff7ad1280b818c64690014', part: "base" }, h("span", { key: 'b576d2a9e8789c52d012bebc433bf7b735643b20', part: "from-date" }, fromStr), h("span", { key: 'a4a981abd985b1f56514dc858b1b837a170be9ec', part: "separator", "aria-hidden": "true" }, h("svg", { key: '7d7ebf986a129a0422d0fc440d37151e9b266281', xmlns: "http://www.w3.org/2000/svg", part: "separator-icon", viewBox: "0 0 512 512", "aria-hidden": "true", focusable: "false" }, h("path", { key: '8b1a2b17745a0b54b481988a3da629ab1c49e4f1', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" }))), h("span", { key: 'be2234fc9474d8e9521ffd8bb95b5c642a61c2b0', part: "to-date" }, toStr), this.showDateDifference && diff > 0 && (h("span", { key: '55705b6e62f031fdb503fc0abc1811d82967cc99', part: "night-count" }, diff, "\u00A0", nightLabel)))));
    }
};
IrDateView.style = irDateViewCss();

export { IrDateView as ir_date_view };
