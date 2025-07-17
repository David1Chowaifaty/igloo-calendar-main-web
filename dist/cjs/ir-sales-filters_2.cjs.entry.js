'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4fe8bc8a.js');
const locales_store = require('./locales.store-0cac7e5d.js');
const utils = require('./utils-12ac7153.js');
const calendarData = require('./calendar-data-b2787812.js');
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
        return (index.h("div", { key: 'eb9d6196b27d23cea5eaa65240e3109718486905', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: 'ac6692d6818c9e18d5020fb0ac44f4237725bd37', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: '073c887cc5acde5a509a95f56b0e64bd2d04d6d5', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: '3571c367f68c8466c0496fda38285c108e5a731a', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: 'd763c049daec5ce0b8e83db86d02f0b6878540fc', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: '3e3404cb5b0e816c60447b987e44b72abc48ec5b', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries.Lcz_Filters)), index.h("ir-button", { key: '43911fa1f462e01d471e1b8998a5ed1048a2f59f', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: '8e93ceb0f9f9c516bdbcde9953db7f2e86c2d6bd', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, index.h("div", { key: '60e0a7199340aff323e11086eca2cbdbd1f7c9fa', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: '998701a88175497d66aa8632e23b5db1663ddec6', class: "pt-1 filter-group" }, index.h("label", { key: '88e70f871cd52797e761b39e0c5d8bbb2a2614b1', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Rooms"), index.h("ir-select", { key: '7c12006dce583dbdfa5dfd886091592d5df080a4', selectedValue: (_a = this.filters) === null || _a === void 0 ? void 0 : _a.BOOK_CASE, select_id: "rooms", LabelAvailable: false, showFirstOption: false, onSelectChange: e => this.updateFilter({
                BOOK_CASE: e.detail,
            }), data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), index.h("fieldset", { key: '7acc33cda7a9e390c47a2420ad822ff0207e0f9a', class: "pt-1 filter-group" }, index.h("label", { key: '34a2c4d95df262800bd430ad370e24a694a676ba', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), index.h("div", { key: 'af5603ace8c08aa2f9eb2cd153df47386b3d9254', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, index.h("ir-select", { key: '89777b591bc122a6f5bd62620ddce099f30b4a61', selectedValue: this.window, onSelectChange: e => {
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
            ] }), index.h("p", { key: 'd9736021a17a7291324e4431a408b7c127f89c52', class: "m-0 p-0 text-center" }, "Or"), index.h("ir-range-picker", { key: 'dff5d495cafa93cf54f0f3e8f4a55017246cd4f7', onDateRangeChanged: e => {
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
            }, fromDate: utils.hooks(this.filters.FROM_DATE, 'YYYY-MM-DD'), toDate: utils.hooks(this.filters.TO_DATE, 'YYYY-MM-DD'), maxDate: utils.hooks().format('YYYY-MM-DD'), withOverlay: false }))), index.h("div", { key: 'acc380a8b1f826627e1c77e1e99d69d0410104c6', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, index.h("label", { key: 'a2cec77043d07278fa3213825bd4343904ea7aab', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), index.h("ir-checkbox", { key: '79f7ee17819cd32ee615b73bc2073d7b745e20ea', checked: (_b = this.filters) === null || _b === void 0 ? void 0 : _b.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), index.h("div", { key: '879558de3b732e7348629096129e217f194ec862', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: 'a4866540db83122730f849b261750f44f7a7fc6c', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: '507c45277b3a7180374c90ad7165a0dcb2b5585e', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
        return (index.h("div", { key: '5a030b5b2d002caa325f1aa4029feefc1fe882c1', class: "table-container h-100 p-1 m-0 table-responsive" }, index.h("table", { key: 'facfff8513d3fc65df4d5c44caf1b775198cd36c', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: 'b56e8e1a33b58acdfbc772480d9e959f2c0b289d', class: "table-header" }, index.h("tr", { key: '194d7dde6c5923167b14adff6463df0bc976a7ef' }, index.h("th", { key: 'bbe7d61b9657a531388ce9e880e20653b431d814', class: "text-left" }, "Country"), index.h("th", { key: 'b01ce839d04d9ec62eb721a79e7796c696c8fa2b', class: "text-center" }, "Room nights"), index.h("th", { key: 'b4a7a18c8f9b59873639344123d6e65dd4c1571e', class: "text-right" }, "Revenue"), index.h("th", { key: '7507e8c4005453fbf982e083fee6b556636e2f33', class: "" }))), index.h("tbody", { key: '8e7f2a0449d64761fe68bd7e1d586ffbc924c3f0' }, this.records.length === 0 && (index.h("tr", { key: '09c4838c4f210dd79ff42629e44d6ca2c6bcaede' }, index.h("td", { key: '692801f3eacdabacfa81d958a2b3369840086c2d', colSpan: 4, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (index.h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, index.h("td", { class: "text-left" }, index.h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && index.h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), index.h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), index.h("td", { class: "text-center" }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), index.h("td", { class: "text-right" }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.revenue) ? 'font-weight-bold' : ''}` }, utils.formatAmount(calendarData.calendar_data.currency.symbol, record.revenue)), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.revenue) && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, utils.formatAmount(calendarData.calendar_data.currency.symbol, record.last_year.revenue))))), index.h("td", null, index.h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("div", { class: "progress-main" }, index.h("span", { class: "progress-totle" }, mainPercentage), index.h("div", { class: "progress-line" }, index.h("div", { class: "progress bg-primary mb-0", style: { width: mainPercentage } }))), ((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.percentage) && (index.h("div", { class: "progress-main" }, index.h("span", { class: "progress-totle" }, secondaryPercentage), index.h("div", { class: "progress-line" }, index.h("div", { class: "progress secondary mb-0", style: { width: secondaryPercentage } }))))))));
        })), index.h("tfoot", { key: 'a3222c5737ce6c42ebce33acf475417a539f02f3' }, index.h("tr", { key: 'b23580ba3cac03a74b97d6cd42278768eb5e966e', style: { fontSize: '12px' } }, index.h("td", { key: '32ed3f6aaa1b8906dd0263d4855c15edd11c04fd', colSpan: 3 }), index.h("td", { key: '77f64beb71aeb5436c3f616e7f2759a07fed4f39', style: { width: '250px' } }, index.h("div", { key: '2504975646f231dbb176e391df9bbe431bb6f91a', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, this.visibleCount < this.records.length && index.h("ir-button", { key: 'ab8900ed855d6f47da8c8d4a6322507759c1a24d', size: "sm", text: "Load More", onClickHandler: this.handleLoadMore }), index.h("div", { key: '8c31e1f5a101af89e3788120c5666603ce10834a', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: '36d384349191cb465028ab67d8cc12e884c0ac61', class: "legend bg-primary" }), index.h("p", { key: '650feea8b32eeb7e231d5d7e71c21d545b1746e8', class: "p-0 m-0" }, "Selected period ")), index.h("div", { key: 'ef89f96a5c9bc12222d235aabb2fa464f640a25d', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: 'b6c3299d14ea75b2ce803410096168f0e4c2ce4d', class: "legend secondary" }), index.h("p", { key: 'a8958205895641ef650733c955a4727976dfd424', class: "p-0 m-0" }, "Previous year")))))))));
    }
};
IrSalesTable.style = IrSalesTableStyle0 + IrSalesTableStyle1;

exports.ir_sales_filters = IrSalesFilters;
exports.ir_sales_table = IrSalesTable;

//# sourceMappingURL=ir-sales-filters_2.cjs.entry.js.map