import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';

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
        return (h(Host, { key: 'c1e80a82c616f424fa4915a3d443af8db7eba435', class: "footerContainer" }, h("div", { key: '6ad24e188ecc0240bc652db90c4b7a7c26a7738e', class: "footerCell bottomLeftCell align-items-center preventPageScroll" }, h("div", { key: 'e7eb92c0a57f58f54ab349d8dc75642f8ac50841', class: "legendBtn", onClick: () => this.handleOptionEvent('showLegend') }, h("i", { key: 'ec7d93258618295e740ba65b90f10e28ecd4e1f0', class: "la la-square" }), h("u", { key: 'f29eca8c46aac405c4eb72e03884b9effbe3138d' }, locales.entries.Lcz_Legend), h("span", { key: '2bc43c1bd49287626fa96f41da0301d994b018e7' }, " - v1.007"))), this.calendarData.days.map(dayInfo => (h("div", { class: "footerCell align-items-center" }, h("div", { class: `dayTitle full-height align-items-center ${dayInfo.day === this.today || this.highlightedDate === dayInfo.day ? 'currentDay' : ''}` }, dayInfo.dayDisplayName))))));
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
    const components = ["igl-cal-footer"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-cal-footer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglCalFooter);
            }
            break;
    } });
}

export { IglCalFooter as I, defineCustomElement as d };

//# sourceMappingURL=igl-cal-footer2.js.map