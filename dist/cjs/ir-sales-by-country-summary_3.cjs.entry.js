'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const utils = require('./utils-54f6f6b7.js');
const calendarData = require('./calendar-data-0598de26.js');
const locales_store = require('./locales.store-32782582.js');
const moment = require('./moment-1780b03a.js');
require('./index-8bb117a0.js');
require('./index-fbf1fe1d.js');

const irSalesByCountrySummaryCss = ".sc-ir-sales-by-country-summary-h{display:block}.sales-by-country-summary__container.sc-ir-sales-by-country-summary{display:grid;grid-template-columns:repeat(1, 1fr);gap:0.5rem}@media (min-width: 640px){.sales-by-country-summary__container.sc-ir-sales-by-country-summary{grid-template-columns:repeat(3, 1fr);gap:1rem}}";
const IrSalesByCountrySummaryStyle0 = irSalesByCountrySummaryCss;

const IrSalesByCountrySummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    salesReports;
    calculateTotalValues(field, lastYear = false) {
        return this.salesReports?.reduce((prev, curr) => {
            const value = lastYear ? (curr.last_year ? curr.last_year[field] : 0) : curr[field];
            return prev + value;
        }, 0);
    }
    getIcon(val1, val2) {
        if (this.salesReports?.length && this.salesReports[0].last_year) {
            return val1 > val2 ? 'arrow-trend-up' : 'arrow-trend-down';
        }
        return;
    }
    render() {
        const totalRoomNights = this.calculateTotalValues('nights');
        const totalGuests = this.calculateTotalValues('number_of_guests');
        const totalRevenue = this.calculateTotalValues('revenue');
        const lastYearTotalRoomNights = this.calculateTotalValues('nights', true);
        const lastYearTotalGuests = this.calculateTotalValues('number_of_guests', true);
        const lastYearTotalRevenue = this.calculateTotalValues('revenue', true);
        return (index.h("div", { key: '22b036c733c3c87bae53da9f9eb53bdfef073ffe', class: "sales-by-country-summary__container" }, index.h("ir-stats-card", { key: '17625d8c2e0a08a2b596983bd3551d73f1041a56', cardTitle: "Total Room Nights", icon: this.getIcon(totalRoomNights, lastYearTotalRoomNights), value: totalRoomNights.toString(), subtitle: lastYearTotalRoomNights ? `Last year ${lastYearTotalRoomNights}` : undefined }), index.h("ir-stats-card", { key: '058ed761a59418fc12bf309ca6d8b983348e8f89', icon: this.getIcon(totalGuests, lastYearTotalGuests), cardTitle: "Total Guests", value: totalGuests.toString(), subtitle: lastYearTotalGuests ? `Last year ${lastYearTotalGuests}` : undefined }), index.h("ir-stats-card", { key: 'c41ab2591ed6d023a619cfa3b23f5fa9126a7847', icon: this.getIcon(totalRevenue, lastYearTotalRevenue), cardTitle: "Total Revenue", value: utils.formatAmount(calendarData.calendar_data.currency.symbol, totalRevenue), subtitle: lastYearTotalRevenue ? `Last year ${utils.formatAmount(calendarData.calendar_data.currency.symbol, lastYearTotalRevenue)}` : undefined })));
    }
};
IrSalesByCountrySummary.style = IrSalesByCountrySummaryStyle0;

const irSalesFiltersCss = ".sc-ir-sales-filters-h{display:block;height:100%;flex:1 1 0%}@media (min-width: 768px){.collapse-btn.sc-ir-sales-filters{display:none}#salesFiltersCollapse.collapse.sc-ir-sales-filters:not(.show){display:block}}";
const IrSalesFiltersStyle0 = irSalesFiltersCss;

const IrSalesFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.applyFilters = index.createEvent(this, "applyFilters", 7);
    }
    isLoading;
    baseFilters;
    filters;
    collapsed = false;
    window;
    applyFilters;
    componentWillLoad() {
        this.filters = this.baseFilters;
        this.window = this.baseFilters.WINDOW.toString();
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
    render() {
        return (index.h("div", { key: 'd835932ba984e29a5f0c2544df0f1a07f7543312', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: 'fd663e85297f4a90b3775d8cd81104bbb85011ed', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: '11e92502ab313089ca1184172702d3a1896ff268', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: '175a191179d66257ff12437119c5ca0505273138', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: '995b1a6cec691c0c113af4dbba1360c0bcb8deb0', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: 'c832af1b4d117dc412f9f86b80b882ccf7f97a1e', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries.Lcz_Filters)), index.h("ir-button", { key: '22d50c08c4a59deadd7869ab095ad4a51a790ca0', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: 'f1c7537a55a52aa25e54f230cedfc50c1329074a', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, index.h("div", { key: '8a1c954f73dde471729f0107ce76a65481f45d03', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: '4f1e96bd252207e48c0165abc87b67b14ef4ec25', class: "pt-1 filter-group" }, index.h("label", { key: '65001b4d4765f0a23ffe2cf29f3eb5570f452ce0', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Rooms"), index.h("ir-select", { key: 'fcdf78c0ff544eddc3617a289a76651aeef7105b', selectedValue: this.filters?.BOOK_CASE, selectId: "rooms", showFirstOption: false, onSelectChange: e => this.updateFilter({
                BOOK_CASE: e.detail,
            }), data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), index.h("fieldset", { key: 'b9caf174844d106e6508cfe75d4d7013bdc669ba', class: "pt-1 filter-group" }, index.h("label", { key: '4587de36b9d2983ca165a808cbe38a0526b71e47', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), index.h("div", { key: 'e65198d5fd5ca305f670713815127798977b37af', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, index.h("ir-select", { key: '28b4704185d42bbce54587daa67a157c86716034', selectedValue: this.window, onSelectChange: e => {
                const dateDiff = Number(e.detail);
                const today = moment.hooks();
                this.updateFilter({
                    WINDOW: dateDiff,
                    TO_DATE: today.format('YYYY-MM-DD'),
                    FROM_DATE: today.add(-dateDiff, 'days').format('YYYY-MM-DD'),
                });
                this.window = e.detail;
            }, selectId: "period",
            // showFirstOption={false}
            firstOption: "...", data: [
                { text: 'For the past 7 days', value: '7' },
                { text: 'For the past 14 days', value: '14' },
                { text: 'For the past 30 days', value: '30' },
                { text: 'For the past 60 days', value: '60' },
                { text: 'For the past 90 days', value: '90' },
                { text: 'For the past 365 days', value: '365' },
            ] }), index.h("p", { key: 'efac6093d512b10033ddd837c94cf3f74d78bb5b', class: "m-0 p-0 text-center" }, "Or"), index.h("ir-range-picker", { key: '88188ab69c1364f2d89c3754c711ca1e47b3a0c7', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate, wasFocused } = e.detail;
                this.updateFilter({
                    FROM_DATE: fromDate.format('YYYY-MM-DD'),
                    TO_DATE: toDate.format('YYYY-MM-DD'),
                });
                if (wasFocused)
                    this.window = '';
                // this.dates = { from: fromDate, to: toDate };
            }, fromDate: moment.hooks(this.filters.FROM_DATE, 'YYYY-MM-DD'), toDate: moment.hooks(this.filters.TO_DATE, 'YYYY-MM-DD'), maxDate: moment.hooks().format('YYYY-MM-DD'), withOverlay: false }))), index.h("div", { key: 'f3d8cd6d22259a81cc4d3985c920d9ebb7376ab2', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, index.h("label", { key: 'db740a3dda00fe881019eeac4c47418c6fc2995f', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), index.h("ir-checkbox", { key: '0c2c2125f593f4a990e5d950f09eba0fb4755b8b', checked: this.filters?.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), index.h("div", { key: 'ecc97fd6d7a0417e64fdae019a86c29ea0388dcc', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: 'c903595b348d50022ce86c9ad3f7774cc5d12cbd', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: '125dd14dd85e10fc46b6a1a8e79c1d080bf4dc8c', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrSalesFilters.style = IrSalesFiltersStyle0;

const irSalesTableCss = ".sc-ir-sales-table-h{display:block;width:100%}.legend.sc-ir-sales-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-sales-table{background:#6692b3}.channel-cell.sc-ir-sales-table{width:100%}.task-row.sc-ir-sales-table,.table.sc-ir-sales-table th.sc-ir-sales-table,.table.sc-ir-sales-table td.sc-ir-sales-table{white-space:nowrap;max-width:max-content !important;padding:0.25rem 1rem !important}.outer-container.sc-ir-sales-table{padding:1rem;box-sizing:border-box}.table.sc-ir-sales-table tfoot.sc-ir-sales-table td.sc-ir-sales-table{border-bottom:0}.flag.sc-ir-sales-table{height:16px;width:23px;border-radius:3px}";
const IrSalesTableStyle0 = irSalesTableCss;

const tableCss = ".ir-table-row.sc-ir-sales-table td.sc-ir-sales-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-sales-table{overflow-x:auto}.table.sc-ir-sales-table td.sc-ir-sales-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-sales-table tbody.sc-ir-sales-table tr.sc-ir-sales-table:last-child>td.sc-ir-sales-table{border-bottom:0 !important}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sc-ir-sales-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-sales-table thead.sc-ir-sales-table th.sc-ir-sales-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-sales-table .empty-row.sc-ir-sales-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-sales-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-sales-table td.sc-ir-sales-table{background:#e3f3fa !important}.selected.sc-ir-sales-table td.sc-ir-sales-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table,.ir-table-row.sc-ir-sales-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table{text-transform:capitalize}.sortable.sc-ir-sales-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-sales-table:hover td.sc-ir-sales-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-sales-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-sales-table svg.sc-ir-sales-table{color:var(--blue)}.sticky-column.sc-ir-sales-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-sales-table,.data-table.sc-ir-sales-table{height:100%}";
const IrSalesTableStyle1 = tableCss;

const IrSalesTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    records = [];
    mappedCountries;
    visibleCount = 10;
    handleLoadMore = () => {
        this.visibleCount = Math.min(this.visibleCount + 10, this.records.length);
    };
    render() {
        const visibleRecords = this.records.slice(0, this.visibleCount);
        return (index.h("div", { key: '7e6342dcd07d2163a6f6845cb2a5cf1c80aea3bd', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, index.h("table", { key: '3807ada29162df5e7599240bbe2a1d50f78779b5', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: '2680a93a2b5986d03db0ae659c77d3b1106866ec', class: "table-header" }, index.h("tr", { key: '13a606fd0c5337c86c5476a5a6ce276206c8714e' }, index.h("th", { key: '9cb9e30bed743b6fb46f98905e0952c880b4c2ae', class: "text-left" }, "Country"), index.h("th", { key: 'aec0e77138df4fe21ed9a800be2e858d1cc5ac24', class: "text-center" }, "Room nights"), index.h("th", { key: '3d6afaf365367214ed950f3979f34dc4aec224d4', class: "text-center" }, "No of guests"), index.h("th", { key: '68091af029ff4b80b9cdb844a20da9efb51a888a', class: "text-right" }, "Revenue"), index.h("th", { key: 'cd76b6d2e33b52b48f7ee4be5249d24107969fd1', class: "" }))), index.h("tbody", { key: 'f1868afcb002a88edc94dd7c4403d78e17e99560' }, this.records.length === 0 && (index.h("tr", { key: 'fad160611d7f91f312a273e48885d7b8b354cad0' }, index.h("td", { key: '1f2ca7f0a451eb7ec6e4fb15ceed68494dc1f1e9', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (index.h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, index.h("td", { class: "text-left" }, index.h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && index.h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), index.h("span", null, mappedCountry?.name ?? record.country))), index.h("td", { class: "text-center" }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), index.h("td", { class: "text-center" }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), index.h("td", { class: "text-right" }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, utils.formatAmount(calendarData.calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, utils.formatAmount(calendarData.calendar_data.currency.symbol, record.last_year.revenue))))), index.h("td", null, index.h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && index.h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), index.h("tfoot", { key: '944f5c945292ccb69467c88fcf130d442f7cfa12' }, index.h("tr", { key: '6ead48306e6646363abd68f0de76e121901c9ea7', style: { fontSize: '12px' } }, index.h("td", { key: '441bb0cbc5df1c69648811b43d72e7ce4eb11250', colSpan: 4 }), index.h("td", { key: '46ef822c4b6ced58a3d2d1ca7b5f486b3bcf43ac', style: { width: '250px' } }, index.h("div", { key: '51e5fad16806cc439ba56fbc9cb47f710d9d0fb7', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, index.h("div", { key: 'f6db6cdfdad43218be6f06eb0cca1d4d36721d86', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: 'd8801709569704c9cfd7d5aa1e34dd03abacaa5f', class: "legend bg-primary" }), index.h("p", { key: '3ba65870be4568f88335545c1f0723c799d09b16', class: "p-0 m-0" }, "Selected period ")), index.h("div", { key: '67c551224c1d9a8d89e1ad8a6e24f0cb130a3146', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: '0b7784d6ba6330841ab9a65561e834fd41c23ffc', class: "legend secondary" }), index.h("p", { key: 'ccece61f97aed290b400ba29bea9564874b974f8', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (index.h("div", { key: '82e8e90012c818ed61c9d3731bb6e183ddd5f526', class: 'd-flex mx-auto' }, index.h("ir-button", { key: '36a529f261723e9781ee2781aa232dca314d2582', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
    }
};
IrSalesTable.style = IrSalesTableStyle0 + IrSalesTableStyle1;

exports.ir_sales_by_country_summary = IrSalesByCountrySummary;
exports.ir_sales_filters = IrSalesFilters;
exports.ir_sales_table = IrSalesTable;

//# sourceMappingURL=ir-sales-by-country-summary_3.cjs.entry.js.map