'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4fe8bc8a.js');
const locales_store = require('./locales.store-0cac7e5d.js');
const moment = require('./moment-1780b03a.js');
const utils = require('./utils-92c1b8ab.js');
const calendarData = require('./calendar-data-b2787812.js');
require('./index-467172e1.js');
require('./index-63734c32.js');
require('./axios-6e678d52.js');

const irSalesFiltersCss = ".sc-ir-sales-filters-h{display:block;height:100%;flex:1 1 0%}@media (min-width: 768px){.collapse-btn.sc-ir-sales-filters{display:none}#salesFiltersCollapse.collapse.sc-ir-sales-filters:not(.show){display:block}}";
const IrSalesFiltersStyle0 = irSalesFiltersCss;

const IrSalesFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.applyFilters = index.createEvent(this, "applyFilters", 7);
        this.collapsed = false;
    }
    componentWillLoad() {
        this.filters = this.baseFilters;
        this.window = this.baseFilters.WINDOW.toString();
    }
    updateFilter(params) {
        this.filters = Object.assign(Object.assign({}, this.filters), params);
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
        var _a, _b;
        return (index.h("div", { key: 'cba6afdff2110a5365745ba339e7decfa7ffc30e', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: 'd480c94df6511a8b4bcfabf6f1aef65b439ee8b9', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: 'e22b8bc21ee56d5e1144dfca48e7b91ff2897d66', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: '128b996969df98280ba8f8bf26ac943432affaf5', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: '6fe432481f49f9e92454bd2ecc74eff86dcfe7fa', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: 'b4cdabdeafa468befdd0f9fb34f424d363d70088', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries.Lcz_Filters)), index.h("ir-button", { key: '3b8511d730739d858b61397656cf1172690027d5', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: 'fba3504a323824479a9525bdd241c7814b9a4a86', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, index.h("div", { key: '5a28abc52d4f2ac6f2c83678309cab9a0620d1ad', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: '0c6aaa375cc4504a5594b4bb74ec7546b52474fd', class: "pt-1 filter-group" }, index.h("label", { key: '245314384df9d1795b992b1fa3195790c7e73152', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Rooms"), index.h("ir-select", { key: '93f85a784de3e22eab0d00a6b17d97517a5a0d8a', selectedValue: (_a = this.filters) === null || _a === void 0 ? void 0 : _a.BOOK_CASE, select_id: "rooms", LabelAvailable: false, showFirstOption: false, onSelectChange: e => this.updateFilter({
                BOOK_CASE: e.detail,
            }), data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), index.h("fieldset", { key: '187e0ba805affffbef65b3ed66fde3fe0c62448f', class: "pt-1 filter-group" }, index.h("label", { key: '12c793c0f2166e3027ac6dcbe0bc25191e508331', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), index.h("div", { key: '2924e730c47ea3a764f856835b42eb0b55c9cd24', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, index.h("ir-select", { key: '0af791aae20d4a3b7b975fb61eb61f01585912bc', selectedValue: this.window, onSelectChange: e => {
                const dateDiff = Number(e.detail);
                const today = moment.hooks();
                this.updateFilter({
                    WINDOW: dateDiff,
                    TO_DATE: today.format('YYYY-MM-DD'),
                    FROM_DATE: today.add(-dateDiff, 'days').format('YYYY-MM-DD'),
                });
                this.window = e.detail;
            }, select_id: "period", LabelAvailable: false,
            // showFirstOption={false}
            firstOption: "...", data: [
                { text: 'For the past 7 days', value: '7' },
                { text: 'For the past 14 days', value: '14' },
                { text: 'For the past 30 days', value: '30' },
                { text: 'For the past 60 days', value: '60' },
                { text: 'For the past 90 days', value: '90' },
                { text: 'For the past 365 days', value: '365' },
            ] }), index.h("p", { key: '71ef2ee205496b038939c10197736e585b722ceb', class: "m-0 p-0 text-center" }, "Or"), index.h("ir-range-picker", { key: 'f29b056346fffa8aa4fdd75fd83a5bab67a02a0b', onDateRangeChanged: e => {
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
            }, fromDate: moment.hooks(this.filters.FROM_DATE, 'YYYY-MM-DD'), toDate: moment.hooks(this.filters.TO_DATE, 'YYYY-MM-DD'), maxDate: moment.hooks().format('YYYY-MM-DD'), withOverlay: false }))), index.h("div", { key: '69476c96f33fa378abe46d43ef68b92edcde944c', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, index.h("label", { key: 'fd194e5dedfa1f5aff70146a9988e9edf80a2b89', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), index.h("ir-checkbox", { key: 'a0b4b5ff7562a6402bb905c13c7d0510ae2d8687', checked: (_b = this.filters) === null || _b === void 0 ? void 0 : _b.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), index.h("div", { key: '8831e8797faa45818c3c9b3eefbc177f66624700', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: '1011d1cdf3edc98efcde22310e5aa0c1bea5d1df', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: '5a5e4c7745105a00c9c99702a56d708df8cc3725', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrSalesFilters.style = IrSalesFiltersStyle0;

const irSalesTableCss = ".sc-ir-sales-table-h{display:block;width:100%}.legend.sc-ir-sales-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-sales-table{background:#6692b3}.channel-cell.sc-ir-sales-table{width:100%}.task-row.sc-ir-sales-table,.table.sc-ir-sales-table th.sc-ir-sales-table,.table.sc-ir-sales-table td.sc-ir-sales-table{white-space:nowrap;max-width:max-content !important;padding:0.25rem 1rem !important}.table-container.sc-ir-sales-table{overflow-y:auto;max-height:70vh;max-height:70dvh}.outer-container.sc-ir-sales-table{padding:1rem;box-sizing:border-box}.table.sc-ir-sales-table tfoot.sc-ir-sales-table td.sc-ir-sales-table{border-bottom:0}.flag.sc-ir-sales-table{height:16px;width:23px;border-radius:3px}";
const IrSalesTableStyle0 = irSalesTableCss;

const tableCss = ".ir-table-row.sc-ir-sales-table td.sc-ir-sales-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-sales-table td.sc-ir-sales-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sc-ir-sales-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-sales-table td.sc-ir-sales-table{background:#e3f3fa !important}.selected.sc-ir-sales-table td.sc-ir-sales-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table,.ir-table-row.sc-ir-sales-table{text-transform:capitalize;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-sales-table:hover td.sc-ir-sales-table{background:#e2e6ea3f !important}.sortable.sc-ir-sales-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-sales-table svg.sc-ir-sales-table{color:var(--blue)}";
const IrSalesTableStyle1 = tableCss;

const IrSalesTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.records = [];
        this.visibleCount = 10;
        this.handleLoadMore = () => {
            this.visibleCount = Math.min(this.visibleCount + 10, this.records.length);
        };
    }
    render() {
        const visibleRecords = this.records.slice(0, this.visibleCount);
        return (index.h("div", { key: '9bc67cfcb4a3177968d8e1cc8249b7ecd800065c', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, index.h("table", { key: 'eada5630c83ba5aed7200118456d99f56591b268', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: '089bb8d31dfb27a7cc433166c9673c5bc9a34c85', class: "table-header" }, index.h("tr", { key: 'ebe4814507e1fb9be7f9ade9251eec5bb8bd2ead' }, index.h("th", { key: '8b8dd2a15501a3930f80f873efff6d899f46e2cd', class: "text-left" }, "Country"), index.h("th", { key: '7d13b42c1113847467551acd80aa27f46131f2c3', class: "text-center" }, "Room nights"), index.h("th", { key: 'a66bb1c52655d0c953109d026812ebdd09996fc6', class: "text-center" }, "No of guests"), index.h("th", { key: 'f289dcd1cdf1a8e286cccba9463034bb22f427ec', class: "text-right" }, "Revenue"), index.h("th", { key: '77e975d4ef9be0c2da2668265255beb86607e576', class: "" }))), index.h("tbody", { key: '02710a2a255d7178c03d4c4a5298f95f1c9a3a2f' }, this.records.length === 0 && (index.h("tr", { key: 'bfce54297d5cde25be99f15f56d9186b45545157' }, index.h("td", { key: '757e281913eb159721fa92cb1066cd462dff8a6b', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (index.h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, index.h("td", { class: "text-left" }, index.h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && index.h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), index.h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), index.h("td", { class: "text-center" }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), index.h("td", { class: "text-center" }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), index.h("td", { class: "text-right" }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, utils.formatAmount(calendarData.calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, utils.formatAmount(calendarData.calendar_data.currency.symbol, record.last_year.revenue))))), index.h("td", null, index.h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && index.h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), index.h("tfoot", { key: '7e6e9d5e7d82fc6a4a368d10dbed0dfc655b13b4' }, index.h("tr", { key: '0ee90e770ad26f8ec3c1ed1b40d37c04d48ecf32', style: { fontSize: '12px' } }, index.h("td", { key: '4a6880cbc55654dcdee191025f0f669ccf9a40f5', colSpan: 4 }), index.h("td", { key: '78c7a99f266a90f4691b340da72e5c68f10958b5', style: { width: '250px' } }, index.h("div", { key: '488d65f88c2f619b3eddd7fc52663c04f41e8ab7', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, index.h("div", { key: '5e155ea6cbce520df71685d1c1cc0f7c24e9df36', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: 'f41afdd44eec1bf624e0001b5022751d88dc8801', class: "legend bg-primary" }), index.h("p", { key: '90fa8563549e8f16497b593dfd9ff97cbe8f81c9', class: "p-0 m-0" }, "Selected period ")), index.h("div", { key: 'd218674931f1e5948665a3d72a15e2149e6bdc38', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: '6646596b91d2390d44b3f20d4a48a30f447b8d7b', class: "legend secondary" }), index.h("p", { key: 'ef1bd84acdc5208a88bd72b412ba6ea8749c58ae', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (index.h("div", { key: 'a46732a94d2ede6436c0cc8b3c54fdf4031bc975', class: 'd-flex mx-auto' }, index.h("ir-button", { key: '25cbbfad5226f1fee4db59eae77ab966935f4204', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
    }
};
IrSalesTable.style = IrSalesTableStyle0 + IrSalesTableStyle1;

exports.ir_sales_filters = IrSalesFilters;
exports.ir_sales_table = IrSalesTable;

//# sourceMappingURL=ir-sales-filters_2.cjs.entry.js.map