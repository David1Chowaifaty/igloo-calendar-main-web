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
        return (h("div", { key: '4f16a376ba39acac5b8aa3b83abaf1b9f5737189', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'd0034e26c7393fc7c8c7c4d6b690d07622bb1a9e', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: 'e8a243e601a4a365197b42611735ceb8f583d4b1', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'd888490e639208641e93a7f727c50fc2e1bed6b8', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '587fe49956106393f35be5122a155acc0f183293', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '42d9abb181798ad6975c97a37a1e9762571d0f04', class: "m-0 p-0 flex-grow-1" }, locales.entries?.Lcz_Filters || 'Filters'))), h("div", { key: '019c666b2451e8a50a27dcea312c9dfd38c06327', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("fieldset", { key: '340678cfbe337fa8e942809ad580f5f725a8fc02', class: "pt-1 filter-group" }, h("label", { key: '4984b77e4c61c15903c6b5e8ba57fde5e0497250', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "For"), h("ir-select", { key: 'c26c762370a67078850f884dc9cec7cee0c56b54', showFirstOption: false, selectedValue: this.filters?.date?.description, onSelectChange: e => {
                this.updateFilter({ date: this.dates.find(d => d.description === e.detail) });
            }, data: this.dates.map(d => ({
                text: d.description,
                value: d.description,
            })) })), h("div", { key: '61697094afe3efe0fab3ebb260394bd3b7bf4b9d', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: '3033ce684cb19fd34a786bd631e5d0ce64a87651', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), h("ir-checkbox", { key: 'f578f2e720c5c2c3029918b8a9ecde149942e3d9', checked: this.filters?.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), h("div", { key: 'eb7b583f719481d05cc018b189f2ead94b6e7c57', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: 'c317051202e423f17d3d1f37aa2ac724867156e9', btn_type: "button", "data-testid": "reset", text: locales.entries?.Lcz_Reset ?? 'Reset', size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'cf819b08bd4a4d37cbefefa1ef83e817bdbdc0c8', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries?.Lcz_Apply ?? 'Apply', size: "sm", onClickHandler: e => this.applyFiltersEvt(e) })))));
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