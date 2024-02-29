import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';

const iglCalFooterCss = ".sc-igl-cal-footer-h{display:block;position:sticky;bottom:0;width:max-content;z-index:3}.footerCell.sc-igl-cal-footer{display:-moz-inline-grid;display:-ms-inline-grid;display:inline-grid;position:-webkit-sticky;position:sticky;bottom:0;width:70px;height:40px;background:#fff;vertical-align:top;border-top:1px solid #e0e0e0}.bottomLeftCell.sc-igl-cal-footer{left:-1px;z-index:2;width:170px;text-align:left;padding-left:15px;color:#000000}.footerCell.sc-igl-cal-footer i.sc-igl-cal-footer{margin-right:5px}.legendBtn.sc-igl-cal-footer{color:#41bff3;cursor:pointer}.isOnline.sc-igl-cal-footer i.sc-igl-cal-footer{color:#2f9c3f;font-weight:bold}.isOffline.sc-igl-cal-footer i.sc-igl-cal-footer{font-weight:bold}.isOffline.sc-igl-cal-footer{color:#a40000}.dayTitle.sc-igl-cal-footer{font-size:0.8em;font-weight:600;display:grid;user-select:none}.currentDay.sc-igl-cal-footer .dayTitle.sc-igl-cal-footer{font-weight:bold}.currentDay.sc-igl-cal-footer{background-color:#e3f3fa}.dayCapacityPercent.sc-igl-cal-footer{font-size:0.75em}.badge-pill.sc-igl-cal-footer{padding-left:1em;padding-right:1em;font-size:0.7em;margin-bottom:2px}";
const IglCalFooterStyle0 = iglCalFooterCss;

const IglCalFooter = /*@__PURE__*/ proxyCustomElement(class IglCalFooter extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.optionEvent = createEvent(this, "optionEvent", 7);
        this.calendarData = undefined;
        this.today = undefined;
        this.highlightedDate = undefined;
    }
    // private isOnline:boolean = false;
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (h(Host, { key: '178733e2f7648a2e5f7692c58e5898e9cff8a8a2', class: "footerContainer" }, h("div", { key: '736bdf25b566dbc7b773a203f9e01e13182240b8', class: "footerCell bottomLeftCell align-items-center preventPageScroll" }, h("div", { key: 'c093f37a2be3a0bb315062533b71d0b7af47bd46', class: "legendBtn", onClick: () => this.handleOptionEvent('showLegend') }, h("i", { key: '2e72d84d898ea69b38bd6cd03fa616cdb860b2b3', class: "la la-square" }), h("u", { key: '900ac489e6f098a6f7d310f172a40164f4d3a6ef' }, locales.entries.Lcz_Legend), h("span", { key: '7bdb3c4a38084a496c1df16d66c961bf2c467e0d' }, " - v16"))), this.calendarData.days.map(dayInfo => (h("div", { class: "footerCell align-items-center" }, h("div", { class: `dayTitle full-height align-items-center ${dayInfo.day === this.today || this.highlightedDate === dayInfo.day ? 'currentDay' : ''}` }, dayInfo.dayDisplayName))))));
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