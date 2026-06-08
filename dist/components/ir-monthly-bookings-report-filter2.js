import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$4 } from './ir-button2.js';
import { d as defineCustomElement$3 } from './ir-checkbox2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-select2.js';

const irMonthlyBookingsReportFilterCss = ".sc-ir-monthly-bookings-report-filter-h{display:flex;height:100%;flex:1 1 0%}.sales-filters-card.sc-ir-monthly-bookings-report-filter{min-width:max-content;flex:1 1 0%}#salesFiltersCollapse.collapse.sc-ir-monthly-bookings-report-filter:not(.show){display:block}";
const IrMonthlyBookingsReportFilterStyle0 = irMonthlyBookingsReportFilterCss;

const IrMonthlyBookingsReportFilter = /*@__PURE__*/ proxyCustomElement(class IrMonthlyBookingsReportFilter extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.applyFilters = createEvent(this, "applyFilters", 7);
    }
    isLoading;
    baseFilters;
    filters;
    collapsed = false;
    window;
    applyFilters;
    dates = [];
    componentWillLoad() {
        this.dates = this.generateMonths();
        this.filters = this.baseFilters;
    }
    updateFilter(params) {
        this.filters = { ...this.filters, ...params };
    }
    applyFiltersEvt(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.applyFilters.emit(this.filters);
    }
    resetFilters(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = this.baseFilters;
        this.applyFilters.emit(this.filters);
    }
    // private generateMonths(): ReportDate[] {
    //   const firstOfThisMonth = moment().startOf('month');
    //   const startDate = moment().subtract(1, 'year').startOf('month');
    //   const dates = [];
    //   const format = 'YYYY-MM-DD';
    //   let cursor = startDate.clone();
    //   while (cursor.format(format) !== firstOfThisMonth.format(format)) {
    //     dates.push({
    //       description: cursor.format('MMMM YYYY'),
    //       firstOfMonth: cursor.format('YYYY-MM-DD'),
    //       lastOfMonth: cursor.clone().endOf('month').format('YYYY-MM-DD'),
    //     });
    //     cursor.add(1, 'month');
    //   }
    //   dates.push({
    //     description: firstOfThisMonth.format('MMMM YYYY'),
    //     firstOfMonth: firstOfThisMonth.format('YYYY-MM-DD'),
    //     lastOfMonth: firstOfThisMonth.clone().endOf('month').format('YYYY-MM-DD'),
    //   });
    //   return dates.reverse();
    // }
    generateMonths() {
        const format = 'YYYY-MM-DD';
        const firstOfThisMonth = hooks().startOf('month');
        const startDate = hooks().subtract(1, 'year').startOf('month');
        const dates = [];
        let cursor = startDate.clone();
        // Past → current month
        while (cursor.isSameOrBefore(firstOfThisMonth, 'month')) {
            dates.push({
                description: cursor.format('MMMM YYYY'),
                firstOfMonth: cursor.format(format),
                lastOfMonth: cursor.clone().endOf('month').format(format),
            });
            cursor.add(1, 'month');
        }
        // Add 6 future months
        const futureCursor = firstOfThisMonth.clone().add(1, 'month');
        for (let i = 0; i < 6; i++) {
            dates.push({
                description: futureCursor.format('MMMM YYYY'),
                firstOfMonth: futureCursor.format(format),
                lastOfMonth: futureCursor.clone().endOf('month').format(format),
            });
            futureCursor.add(1, 'month');
        }
        return dates.reverse();
    }
    render() {
        return (h("div", { key: 'aedd436a8e6575617b0a459d59971cd6b9c0b32c', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '40b230a313fb388992b8a4d0df104d6b0f421d02', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '024a21ef82768fb2bf6e840fa33ed38e7c7089d1', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '0ae0335e54bfa16f780432a7166f7cd35b735c52', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'a3e779433313c6328b36ed3c13442a8205e1a322', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'b6e30890114e4e66f5a3dc35c630b8d144abb23e', class: "m-0 p-0 flex-grow-1" }, locales.entries?.Lcz_Filters || 'Filters'))), h("div", { key: '3ca266f7cb01f79eb5eea37bcdc728ca3a248ced', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("fieldset", { key: 'c0c86bfbfdb4b4d29926e53a409510097cf6b823', class: "pt-1 filter-group" }, h("label", { key: '5666325a8a4dc67d10509e1feb04a24496e8132a', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "For"), h("ir-select", { key: '0c941d37ffbfe9730f1bb55e40550bc1ac019717', showFirstOption: false, selectedValue: this.filters?.date?.description, onSelectChange: e => {
                this.updateFilter({ date: this.dates.find(d => d.description === e.detail) });
            }, data: this.dates.map(d => ({
                text: d.description,
                value: d.description,
            })) })), h("div", { key: '77b75a10a4e3e6d5e5c669fafcdc485f2113c6d2', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: '9f07f465f843970e3285dd6b679637fe976f4fcb', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), h("ir-checkbox", { key: 'afd30350747c89c2322ea4ed34f9c967dd6f061d', checked: this.filters?.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), h("div", { key: '7cec47c9cf5659e61c87328fe82556d8e1751bd7', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: 'b329242a88b56b2b81072468d78fb5db61b39d5e', btn_type: "button", "data-testid": "reset", text: locales.entries?.Lcz_Reset ?? 'Reset', size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'e849c046f37c9a1ed25cc10bbb7aecaa8a237951', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries?.Lcz_Apply ?? 'Apply', size: "sm", onClickHandler: e => this.applyFiltersEvt(e) })))));
    }
    static get style() { return IrMonthlyBookingsReportFilterStyle0; }
}, [2, "ir-monthly-bookings-report-filter", {
        "isLoading": [4, "is-loading"],
        "baseFilters": [16],
        "filters": [32],
        "collapsed": [32],
        "window": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-monthly-bookings-report-filter", "ir-button", "ir-checkbox", "ir-icons", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-monthly-bookings-report-filter":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrMonthlyBookingsReportFilter);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrMonthlyBookingsReportFilter as I, defineCustomElement as d };

//# sourceMappingURL=ir-monthly-bookings-report-filter2.js.map