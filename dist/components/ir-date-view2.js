import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { c as calculateDaysBetweenDates } from './booking.js';
import { h as hooks } from './moment.js';

const irDateViewCss = ":host{display:inline-flex;align-items:center;font-size:var(--ir-date-view-font-size, 0.8125rem);color:var(--ir-date-view-color, inherit);line-height:1.4}[part='base']{display:inline-flex;align-items:center;flex-wrap:wrap;gap:var(--ir-date-view-gap, 0.3125rem);}[part='from-date'],[part='to-date']{white-space:nowrap;font-weight:var(--ir-date-view-date-font-weight, 400);color:var(--ir-date-view-date-color, inherit)}[part='separator']{display:inline-flex;align-items:center;flex-shrink:0}[part='separator-icon']{width:var(--ir-date-view-separator-size, 0.75rem);height:var(--ir-date-view-separator-size, 0.75rem);display:block}";
const IrDateViewStyle0 = irDateViewCss;

const IrDateView = /*@__PURE__*/ proxyCustomElement(class IrDateView extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
        return (h(Host, { key: 'c50c9b34abe928afc622bf1c436b81762b57a226' }, h("span", { key: '0740ad9ece7cd8935e56890cbd282713e9b51adc', part: "base" }, h("span", { key: '3bd42691193bd910f735a88cf07f4baa613e112a', part: "from-date" }, fromStr), h("span", { key: 'a0751c723d9d9f5a95b8e8db02537be3d805b309', part: "separator", "aria-hidden": "true" }, h("svg", { key: '776c98052d82667e9189cdd5863bcfe0b3628ee1', xmlns: "http://www.w3.org/2000/svg", part: "separator-icon", viewBox: "0 0 512 512", "aria-hidden": "true", focusable: "false" }, h("path", { key: '9ba4c7ab9dcf817ff7125cd8d683cefb766d8fa4', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" }))), h("span", { key: 'fc0d0758309ccd6a6eb9f40c45b9758d45a2d951', part: "to-date" }, toStr), this.showDateDifference && diff > 0 && (h("span", { key: '1cb7c5a6edbe134d76d9878d8ef1aee2a25c0065', part: "night-count" }, diff, "\u00A0", nightLabel)))));
    }
    static get style() { return IrDateViewStyle0; }
}, [1, "ir-date-view", {
        "from_date": [1],
        "to_date": [1],
        "showDateDifference": [4, "show-date-difference"],
        "dateOption": [1, "date-option"],
        "format": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-date-view"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrDateView);
            }
            break;
    } });
}

export { IrDateView as I, defineCustomElement as d };

//# sourceMappingURL=ir-date-view2.js.map