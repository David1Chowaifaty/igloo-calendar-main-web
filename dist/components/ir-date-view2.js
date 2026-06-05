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
        return (h(Host, { key: '28fc6d15bdcba65689d537197c3b3cb4657a0cf9' }, h("span", { key: '6786ebab35d97b9ad7826227a4ccacc72736b2fc', part: "base" }, h("span", { key: '602179f40b96d5d5860e357c03b4fc9dc2a8fde7', part: "from-date" }, fromStr), h("span", { key: 'e6d8052f75724745b296e242fb9dbb1cb8ac6d72', part: "separator", "aria-hidden": "true" }, h("svg", { key: 'b820dc06ea88d5f9457295c595a77459eeb86644', xmlns: "http://www.w3.org/2000/svg", part: "separator-icon", viewBox: "0 0 512 512", "aria-hidden": "true", focusable: "false" }, h("path", { key: 'b22bd37b2b9175c8fb994ca8da84b969847bc3f2', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" }))), h("span", { key: '642897bc3b9e29139bf82ff5b35782271453b660', part: "to-date" }, toStr), this.showDateDifference && diff > 0 && (h("span", { key: 'de85bf8ba31acc716848f809dc692015ccae3e5c', part: "night-count" }, diff, "\u00A0", nightLabel)))));
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