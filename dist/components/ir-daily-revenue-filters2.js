import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$5 } from './ir-button2.js';
import { d as defineCustomElement$4 } from './ir-custom-date-range2.js';
import { d as defineCustomElement$3 } from './ir-date-range2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

const irDailyRevenueFiltersCss = ".sc-ir-daily-revenue-filters-h{display:block}.revenue-filter__date-picker-icon.sc-ir-daily-revenue-filters{position:absolute;inset:0;left:0.75rem;display:flex;align-items:center;width:fit-content;transform:translateY(-0.15rem)}.sc-ir-daily-revenue-filters-h{display:block;height:100%}.or-divider.sc-ir-daily-revenue-filters{display:flex;align-items:center;gap:0.5rem;margin:1rem 0}.or-divider__line.sc-ir-daily-revenue-filters{flex:1;height:1px;background-color:#dee2e6}.or-divider__text.sc-ir-daily-revenue-filters{font-size:0.75rem;color:#6c757d;white-space:nowrap;text-transform:uppercase;letter-spacing:0.05em}@media (min-width: 768px){.sc-ir-daily-revenue-filters-h{width:300px}.collapse-btn.sc-ir-daily-revenue-filters{display:none}#dailyRevenueFiltersCollapse.collapse.sc-ir-daily-revenue-filters:not(.show){display:block}}";
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
        from_date: hooks().add(-1, 'days').format('YYYY-MM-DD'),
        to_date: hooks().format('YYYY-MM-DD'),
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
    getLast30Days() {
        return Array.from({ length: 30 }, (_, i) => {
            const date = hooks().subtract(i, 'days');
            const label = i === 0 ? 'Today' : i === 1 ? 'Yesterday' : i < 7 ? `${i} days ago` : date.format('MMM DD, YYYY');
            return { label, value: date.format('YYYY-MM-DD') };
        });
    }
    render() {
        return (h("div", { key: 'd691b03bf794e3f282576c23c06cc300aaef7908', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'e1303b9d50719d4535fee1477de9e3d4f1c9ae6e', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '9c139c688430ec21e12750aa0c6c7a1a909dec92', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '434819621ccd1ab9f1f53f32a8a1afff3d87e0b6', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '69f97d44876ee13a643225243de8561823bac5e5', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'a60365f7d7b2873a1114ae21a866f7c8e8b2ef46', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: '1900662c3886f378e91f0ec8e0e849331dcfd17c', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#dailyRevenueFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "dailyRevenueFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '9a9be2295a6b329a5e8423ee4a21553ef0ff948f', class: "m-0 p-0 collapse filters-section", id: "dailyRevenueFiltersCollapse" }, h("div", { key: '5feb816b0b16f9396a0a5121474d3e40433034d2', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'eee60da150d2b8070d6d567acd752ff2d1a17721', class: "pt-1 filter-group" }, h("wa-select", { key: '769f68b75cb1c6f6602a5f7fd25cf140d7ad1d16', onchange: e => {
                const value = e.target.value;
                this.updateFilter({
                    date: value,
                    from_date: hooks(value, 'YYYY-MM-DD').add(-1, 'days').format('YYYY-MM-DD'),
                    to_date: hooks(value, 'YYYY-MM-DD').format('YYYY-MM-DD'),
                });
            }, placeholder: "Select a date", size: "small", value: this.filters?.date, defaultValue: this.filters?.date }, this.getLast30Days().map(({ label, value }) => (h("wa-option", { key: value, value: value }, label)))), h("div", { key: '0b1aed928bf955bfe3c550f0bcb4cd6e423bb865', class: "or-divider" }, h("span", { key: '53e21b895ee22caa42fcc325252b0dc66d3a8adf', class: "or-divider__line" }), h("span", { key: 'af3cea85485c203d465d894e7fd3377b9c422e49', class: "or-divider__text" }, "Or"), h("span", { key: 'a08b4dea061a58a889d78d8ecba8853a29f26872', class: "or-divider__line" })), h("ir-date-range", { key: '1cadfc361062c1bd2682e815070c0ba4c2bf89c1', dateLabel: "Select a date range", withDateDifference: false, defaultData: { fromDate: this.filters?.from_date, toDate: this.filters?.to_date }, onDateRangeChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({
                    date: null,
                    from_date: e.detail.checkIn.format('YYYY-MM-DD'),
                    to_date: e.detail.checkOut.format('YYYY-MM-DD'),
                });
            } })), h("div", { key: '8725cd31d70319ad31ce047fb55444eade2de882', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '8ff193f110cac53be48da78df123b6612d7a1bf9', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '86df86f84a6603c4e5a697d7be80231bdc037148', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
    const components = ["ir-daily-revenue-filters", "ir-button", "ir-custom-date-range", "ir-date-range", "ir-icons", "ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-daily-revenue-filters":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrDailyRevenueFilters);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-custom-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrDailyRevenueFilters as I, defineCustomElement as d };

//# sourceMappingURL=ir-daily-revenue-filters2.js.map