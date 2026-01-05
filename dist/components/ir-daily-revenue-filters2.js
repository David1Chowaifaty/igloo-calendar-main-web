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
    }
    payments;
    isLoading;
    collapsed = false;
    users = new Set();
    filters;
    baseFilters = {
        date: hooks().format('YYYY-MM-DD'),
        users: null,
    };
    fetchNewReports;
    componentWillLoad() {
        this.filters = { ...this.baseFilters };
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
        this.filters = { ...this.baseFilters };
        this.fetchNewReports.emit(this.filters);
    }
    updateFilter(params) {
        this.filters = { ...this.filters, ...params };
    }
    render() {
        return (h("div", { key: 'b0ee9980895f5e5df480ba58a1dd98a61c288754', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '3f48fa3156df01ed51f35d0b2143a64d5a96833f', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '506ff32a68625158fe1418c8279ebe695f8f192e', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '07f1a7e1ac8cba25882d8e1c0a5a8c51a22a11b1', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '8debe301e0106a5276f3d2a45751adf4736520f3', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'af7608c64b36498f1f8dd0bf72fcaf0ac89a2c0b', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: 'bdaf1ded89ccc331e376204265c63f0bc7400c79', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#dailyRevenueFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "dailyRevenueFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'aa68e32eb72b8690dd9de6b4254fe98191a21fb7', class: "m-0 p-0 collapse filters-section", id: "dailyRevenueFiltersCollapse" }, h("div", { key: '14e74c30d9151ecba8813c12b5d0acd7772d9445', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'b4d8f9556b7f5cdae8ffa535aeba5edb50d59fd0', class: "pt-1 filter-group" }, h("label", { key: '86b6f1a73a69a58f309952625e71195b34806781', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: '57afea0af7ed3b6c798b8253d36ea1641e2ad3a7', class: "w-100 d-flex" }, h("style", { key: '95834c4bce0b141194c24acffeb667bca356eecd' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: '0b9c8a3d4ee209f040d5cc7d4c9923e70fc62fb2', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, h("input", { key: '747b52efb8cf907ef0d204652692487db654cd37', slot: "trigger", type: "text", value: this?.filters?.date, class: `revenue-table__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("div", { key: '347e63e1240c86f56f0488f668dcd0b54b499926', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: 'dc169ee126f4a0b1d614e7212d0878d66827a837', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'bcd0798a67aa4d017b5b5c4b2e667441eb750b57', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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