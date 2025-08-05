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
        return (h(Host, { key: '83143d272b2c04c57d75f2c369dd6093a9a5c825', class: "footerContainer" }, h("div", { key: 'b1656f40cc4be3e9db26464f03409ccb2e480b2c', class: "footerCell bottomLeftCell align-items-center preventPageScroll" }, h("div", { key: '9652e43d4340f425e0dbc2a37e4a5ef21d5fd091', class: "legendBtn", onClick: () => this.handleOptionEvent('showLegend') }, h("i", { key: 'c2a73bb04a05e330ce6279c50abe572814a332e5', class: "la la-square" }), h("u", { key: '18f0afd7e873650ae446729f0f8ef58acb7f9b4e' }, locales.entries.Lcz_Legend), h("span", { key: 'caf3438686a703073132ea283a8e60c4851c3660' }, " - v1.0125"))), this.calendarData.days.map(dayInfo => (h("div", { class: "footerCell align-items-center" }, h("div", { class: `dayTitle full-height align-items-center ${dayInfo.day === this.today || this.highlightedDate === dayInfo.day ? 'currentDay' : ''}` }, dayInfo.dayDisplayName))))));
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