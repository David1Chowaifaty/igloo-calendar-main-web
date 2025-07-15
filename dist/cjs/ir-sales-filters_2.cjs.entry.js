'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4fe8bc8a.js');
const locales_store = require('./locales.store-0cac7e5d.js');
const utils = require('./utils-50be1245.js');
const calendarData = require('./calendar-data-99f4dccd.js');
require('./index-467172e1.js');
require('./index-db8b30d9.js');
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
        return (index.h("div", { key: 'ddf16a85cfe1e03ea48a239b69ca3b933f1a5ec1', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: '65e227576376ef653dc2f6241bd49e61574311eb', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: 'bd552b5f7b32e7968dc4ca032591d031c9264801', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: '0886f23767ca48c26222ea79f1053b32646fd651', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: 'b1a4450d0fd7c0a74f0a670c50c31c05125ea5de', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: '85e4fd6864eada624d75a6b1a02561c7bcb7a3bd', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries.Lcz_Filters)), index.h("ir-button", { key: '1b617ab4dacf239aa7b5aea58a94c0a906dad046', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: 'f07610015efb4081bc1091b4da6cf58b33d6e63e', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, index.h("div", { key: '726f7730a50c7575cf16bca036f56e8f510aa58d', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: '36ca7619faf54f10802897ec4d31daf1bae6572a', class: "pt-1 filter-group" }, index.h("label", { key: '81c203cf63d364b5f8eb45d07e204f2cf050e89d', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Rooms"), index.h("ir-select", { key: 'ef7efd87077702930422fa39f930fff7816b3cc7', selectedValue: (_a = this.filters) === null || _a === void 0 ? void 0 : _a.BOOK_CASE, select_id: "rooms", LabelAvailable: false, showFirstOption: false, onSelectChange: e => this.updateFilter({
                BOOK_CASE: e.detail,
            }), data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), index.h("fieldset", { key: '6e792dcc18837af79694aac3d9d60d9562a03897', class: "pt-1 filter-group" }, index.h("label", { key: '06a6d0a6302bff383e520654434bb88ed228fcc5', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), index.h("div", { key: '565be951a152436a317c8d1ed0a582c3cd00275b', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, index.h("ir-select", { key: '6844ae7236f115aa33b0da24f81a27b7137760da', selectedValue: this.window, onSelectChange: e => {
                const dateDiff = Number(e.detail);
                const today = utils.hooks();
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
            ] }), index.h("p", { key: 'b727d075ec8cf87878932a8a7c2e3e67c0a8c5e6', class: "m-0 p-0 text-center" }, "Or"), index.h("ir-range-picker", { key: '31d66ef1b508c30ba3487606147f52082f257df6', onDateRangeChanged: e => {
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
            }, fromDate: utils.hooks(this.filters.FROM_DATE, 'YYYY-MM-DD'), toDate: utils.hooks(this.filters.TO_DATE, 'YYYY-MM-DD'), maxDate: utils.hooks().format('YYYY-MM-DD'), withOverlay: false }))), index.h("div", { key: '7c61bfab4967b65091f9c38462f1d23a7d744951', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, index.h("label", { key: '4912cce719f6a05d65439a900a3241909c7191d3', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), index.h("ir-checkbox", { key: '7a72e55467e2673908d921b5ffac433b5c920137', checked: (_b = this.filters) === null || _b === void 0 ? void 0 : _b.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), index.h("div", { key: '5b8d1edf2aa5750e9e082c924cf782564d1f3738', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: 'f4dbb6bdada4e315180833679620575edfbce04c', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: 'e49613bc0f606e142aaafdbd97d92da2b81c7169', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrSalesFilters.style = IrSalesFiltersStyle0;

const irSalesTableCss = ".sc-ir-sales-table-h{display:block;width:100%}.legend.sc-ir-sales-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-sales-table{background:#6692b3}.channel-cell.sc-ir-sales-table{width:100%}.task-row.sc-ir-sales-table,.table.sc-ir-sales-table th.sc-ir-sales-table,.table.sc-ir-sales-table td.sc-ir-sales-table{white-space:nowrap;max-width:max-content !important;padding:0.25rem 1rem !important}.table-container.sc-ir-sales-table{overflow-y:auto;max-height:70vh;max-height:70dvh}.outer-container.sc-ir-sales-table{padding:1rem;box-sizing:border-box}.table.sc-ir-sales-table tfoot.sc-ir-sales-table td.sc-ir-sales-table{border-bottom:0}.flag.sc-ir-sales-table{height:16px;width:23px;border-radius:3px}";
const IrSalesTableStyle0 = irSalesTableCss;

const tableCss = ".ir-table-row.sc-ir-sales-table td.sc-ir-sales-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-sales-table td.sc-ir-sales-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sc-ir-sales-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-sales-table td.sc-ir-sales-table{background:#e3f3fa !important}.selected.sc-ir-sales-table td.sc-ir-sales-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table{text-transform:capitalize;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.sortable.sc-ir-sales-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-sales-table svg.sc-ir-sales-table{color:var(--blue)}";
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
        return (index.h("div", { key: '20a5208a478a1a760c044385da0ca48eda1cdf3b', class: "table-container h-100 p-1 m-0 table-responsive" }, index.h("table", { key: '9809666d0b28b28dd1bfc4470e77bcbc7e2ff8ed', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: 'dd9261313044acca423359c520257449cf25b725', class: "table-header" }, index.h("tr", { key: '52a4a6419207ccab9ff8ff19ed85b4988d05e83e' }, index.h("th", { key: '89352b2caa576a30ff1ae2b5b4ff52fb0658439a', class: "text-left" }, "Country"), index.h("th", { key: 'ae6ab6bc4676ce8a6f7d17d3dd71754f2e15b965', class: "text-center" }, "Room nights"), index.h("th", { key: '4c02e413da23eeaf7f9a6fa835f88d7f3448c481', class: "text-right" }, "Revenue"), index.h("th", { key: '140578f987b2a52470c91d13285da4c8631b9d4b', class: "" }))), index.h("tbody", { key: '144bee1b21bc99cd73bfac0abd2f0d50aa7cc529' }, this.records.length === 0 && (index.h("tr", { key: 'a8c8818fc0df2011daa6804fcaf991ca9b1b3385' }, index.h("td", { key: 'aa70a2bcaac04c08991adf9dd157bba8bf63ee66', colSpan: 4, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (index.h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, index.h("td", { class: "text-left" }, index.h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && index.h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), index.h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), index.h("td", { class: "text-center" }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), index.h("td", { class: "text-right" }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.revenue) ? 'font-weight-bold' : ''}` }, utils.formatAmount(calendarData.calendar_data.currency.symbol, record.revenue)), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.revenue) && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, utils.formatAmount(calendarData.calendar_data.currency.symbol, record.last_year.revenue))))), index.h("td", null, index.h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("div", { class: "progress-main" }, index.h("span", { class: "progress-totle" }, mainPercentage), index.h("div", { class: "progress-line" }, index.h("div", { class: "progress bg-primary mb-0", style: { width: mainPercentage } }))), ((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.percentage) && (index.h("div", { class: "progress-main" }, index.h("span", { class: "progress-totle" }, secondaryPercentage), index.h("div", { class: "progress-line" }, index.h("div", { class: "progress secondary mb-0", style: { width: secondaryPercentage } }))))))));
        })), index.h("tfoot", { key: '42ae2e1851de812f55a037391e7c95b09d8bd307' }, index.h("tr", { key: 'b56326d91714c1f22f2846841c6944d22715dbdf', style: { fontSize: '12px' } }, index.h("td", { key: '34c23a44ede29a30d92ccedaed1e70b3ce90f24d', colSpan: 3 }), index.h("td", { key: 'a65e34e4f022e8e2ac2f64d05cd6c3fbbbb656a6', style: { width: '250px' } }, index.h("div", { key: 'a8b8ed19076a2ecbe0ed4ff73c053fbbcbf46aa9', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem' } }, index.h("div", { key: 'e148ef759d99731c514d6a06c8adfb21a39a242b', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: 'b08566dd3a99dd72a630b4f6e8632460a625f19c', class: "legend bg-primary" }), index.h("p", { key: '55c2b34930436aeff51e87e1ff4d32080bfcf5a3', class: "p-0 m-0" }, "Selected period ")), index.h("div", { key: '59c538845fd46de6e7373d5724d1f9c956f5ceca', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: '2b05e40065fdadf0d8921d8dec8de1aee65cdf66', class: "legend secondary" }), index.h("p", { key: '97f2faa68a3b50ba8667ac939c4c574250bb1237', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (index.h("div", { key: '64d011a3b985c0cd8890639c7182c289fa65d342', class: "d-flex justify-content-center my-2" }, index.h("ir-button", { key: '64bfded441fb7d45a370cdf2d210195991702b6b', size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
    }
};
IrSalesTable.style = IrSalesTableStyle0 + IrSalesTableStyle1;

exports.ir_sales_filters = IrSalesFilters;
exports.ir_sales_table = IrSalesTable;

//# sourceMappingURL=ir-sales-filters_2.cjs.entry.js.map