import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$1 } from './ir-new-badge2.js';

const iglCalFooterCss = ".sc-igl-cal-footer-h{display:block;position:sticky;bottom:0;width:max-content;z-index:3}.footerCell.sc-igl-cal-footer{display:-moz-inline-grid;display:-ms-inline-grid;display:inline-grid;position:-webkit-sticky;position:sticky;bottom:0;width:58px;height:40px;background:#fff;vertical-align:top;border-top:1px solid #e0e0e0}.bottomLeftCell.sc-igl-cal-footer{left:-1px;z-index:2;width:170px;text-align:left;padding-left:15px;color:#000000}.footerCell.sc-igl-cal-footer i.sc-igl-cal-footer{margin-right:5px}.legendBtn.sc-igl-cal-footer{color:#41bff3;cursor:pointer}.isOnline.sc-igl-cal-footer i.sc-igl-cal-footer{color:#2f9c3f;font-weight:bold}.isOffline.sc-igl-cal-footer i.sc-igl-cal-footer{font-weight:bold}.isOffline.sc-igl-cal-footer{color:#a40000}.dayTitle.sc-igl-cal-footer{font-size:0.8em;font-weight:600;display:grid;user-select:none}.currentDay.sc-igl-cal-footer .dayTitle.sc-igl-cal-footer{font-weight:bold}.currentDay.sc-igl-cal-footer{background-color:#e3f3fa}.dayCapacityPercent.sc-igl-cal-footer{font-size:0.75em}.badge-pill.sc-igl-cal-footer{padding-left:1em;padding-right:1em;font-size:0.7em;margin-bottom:2px}";
const IglCalFooterStyle0 = iglCalFooterCss;

const IglCalFooter = /*@__PURE__*/ proxyCustomElement(class IglCalFooter extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.optionEvent = createEvent(this, "optionEvent", 7);
    }
    // private isOnline:boolean = false;
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (h(Host, { key: 'f34f33edecc7417ca79eb772ee3a9359167c7962', class: "footerContainer" }, h("div", { key: '9c466094129caf11c8f112c7ac9df42ad2372ace', class: "footerCell bottomLeftCell align-items-center preventPageScroll" }, h("div", { key: '443bc0f4c22c55568aa4e1e650024674fa7b9276', class: "legendBtn d-flex align-items-center", style: { gap: '0.5rem' }, onClick: () => this.handleOptionEvent('showLegend') }, h("i", { key: 'e5a795e9ae1e2479a2cce53397683669a0d89ddf', class: "la la-square" }), h("u", { key: '4aadbaf06a83ab361dc5aea499bc2dabfc8e6c54' }, locales.entries.Lcz_Legend), h("span", { key: '1f525f84f17082a00d2b3e7f1ab215b9d7da1a1e' }, " - v1.01"), h("ir-new-badge", { key: '0c0f3cdd68d487ff0f35d7eaa7d7414dc7921db9' }))), this.calendarData.days.map(dayInfo => (h("div", { class: "footerCell align-items-center" }, h("div", { class: `dayTitle full-height align-items-center ${dayInfo.day === this.today || this.highlightedDate === dayInfo.day ? 'currentDay' : ''}` }, dayInfo.dayDisplayName))))));
    }
    static get style() { return IglCalFooterStyle0; }
}, [2, "igl-cal-footer", {
        "calendarData": [16],
        "today": [16],
        "highlightedDate": [1, "highlighted-date"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-cal-footer", "ir-new-badge"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-cal-footer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglCalFooter);
            }
            break;
        case "ir-new-badge":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglCalFooter as I, defineCustomElement as d };

//# sourceMappingURL=igl-cal-footer2.js.map