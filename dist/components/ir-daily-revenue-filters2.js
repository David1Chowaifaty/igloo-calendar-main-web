import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$3 } from './ir-button2.js';
import { d as defineCustomElement$2 } from './ir-date-picker2.js';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const irDailyRevenueFiltersCss = ".sc-ir-daily-revenue-filters-h{display:block}.revenue-filter__date-picker-icon.sc-ir-daily-revenue-filters{position:absolute;inset:0;left:0.75rem;display:flex;align-items:center;width:fit-content;transform:translateY(-0.15rem)}.sc-ir-daily-revenue-filters-h{display:block;height:100%}@media (min-width: 768px){.sc-ir-daily-revenue-filters-h{width:300px}.collapse-btn.sc-ir-daily-revenue-filters{display:none}#dailyRevenueFiltersCollapse.collapse.sc-ir-daily-revenue-filters:not(.show){display:block}}";
const IrDailyRevenueFiltersStyle0 = irDailyRevenueFiltersCss;

const IrDailyRevenueFilters = /*@__PURE__*/ proxyCustomElement(class IrDailyRevenueFilters extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.fetchNewReports = createEvent(this, "fetchNewReports", 7);
        this.collapsed = false;
        this.users = new Set();
        this.baseFilters = {
            date: hooks().format('YYYY-MM-DD'),
            users: null,
        };
    }
    componentWillLoad() {
        this.filters = Object.assign({}, this.baseFilters);
        this.updateGuests();
    }
    handlePaymentChange() {
        this.updateGuests();
    }
    updateGuests() {
        const set = new Set();
        this.payments.forEach(payment => {
            payment.forEach(p => {
                set.add(p.user);
            });
        });
        this.users = new Set(set);
    }
    applyFiltersEvt(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.fetchNewReports.emit(this.filters);
    }
    resetFilters(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = Object.assign({}, this.baseFilters);
        this.fetchNewReports.emit(this.filters);
    }
    updateFilter(params) {
        this.filters = Object.assign(Object.assign({}, this.filters), params);
    }
    render() {
        var _a, _b;
        return (h("div", { key: '1b2c1b6ff79a2be9f7855b4b49094389205275a9', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '9ebd491cbaaf9534c3a7d6adc384149f1907011b', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '49b3efb71131aed0658031b595894ca3627695d9', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '85a969d340bf6bfd1d85ce7f7e64aa377ff00da9', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '4abf9ceb2fc30846d9320f5c276c86e9e8d10e6a', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '3f643658664b2f04c34956969382df17c0b2163d', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: '5e3bd7648df2e695ab13781358fe00265cd7ac3c', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#dailyRevenueFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "dailyRevenueFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'f004fd28a0e8924be3d153c08f09f9b9bd5cfb89', class: "m-0 p-0 collapse filters-section", id: "dailyRevenueFiltersCollapse" }, h("div", { key: 'd6e5cd3e87d1559d49f4ede828d1eca4f2473cca', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'a6ea20fc86411b24fe63287cb53f39848a489ea4', class: "pt-1 filter-group" }, h("label", { key: '8775691bfb0a946975467cde005615a8902da60f', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: 'd23c891b557aabccb4566420b5af63f59ca4dc94', class: "w-100 d-flex" }, h("style", { key: '6b180fc02d2c82bfb19ed429040a92ea6c2133d3' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: 'd26fde78a8625634ecdc12cc679d778a17538439', "data-testid": "pickup_date", date: (_a = this.filters) === null || _a === void 0 ? void 0 : _a.date, class: "w-100", emitEmptyDate: true, maxDate: hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                var _a;
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, h("input", { key: '15351ea18bb1c69ef2170458d82c8930f3681957', slot: "trigger", type: "text", value: (_b = this === null || this === void 0 ? void 0 : this.filters) === null || _b === void 0 ? void 0 : _b.date, class: `revenue-table__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("div", { key: 'da2ad48bbd4bb112068a98e4c500ca67ae5c556d', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: 'd8bae6d012812480d8eb9b79ce93b39f4bb2d442', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '529e0f4fb23528e78049b4a320bf9faf2ce681fa', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
    static get watchers() { return {
        "payments": ["handlePaymentChange"]
    }; }
    static get style() { return IrDailyRevenueFiltersStyle0; }
}, [2, "ir-daily-revenue-filters", {
        "payments": [16],
        "isLoading": [4, "is-loading"],
        "collapsed": [32],
        "users": [32],
        "filters": [32]
    }, undefined, {
        "payments": ["handlePaymentChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-daily-revenue-filters", "ir-button", "ir-date-picker", "ir-icons"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-daily-revenue-filters":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrDailyRevenueFilters);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrDailyRevenueFilters as I, defineCustomElement as d };

//# sourceMappingURL=ir-daily-revenue-filters2.js.map