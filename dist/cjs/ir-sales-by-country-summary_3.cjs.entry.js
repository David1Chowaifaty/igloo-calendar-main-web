'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');
const utils = require('./utils-ee4f3fbf.js');
const calendarData = require('./calendar-data-d2bec4fe.js');
const locales_store = require('./locales.store-a1ac5174.js');
const moment = require('./moment-1780b03a.js');
require('./index-63734c32.js');
require('./axios-6e678d52.js');
require('./index-7564ffa1.js');

const irSalesByCountrySummaryCss = ".sc-ir-sales-by-country-summary-h{display:block}.sales-by-country-summary__container.sc-ir-sales-by-country-summary{display:grid;grid-template-columns:repeat(1, 1fr);gap:0.5rem}@media (min-width: 640px){.sales-by-country-summary__container.sc-ir-sales-by-country-summary{grid-template-columns:repeat(3, 1fr);gap:1rem}}";
const IrSalesByCountrySummaryStyle0 = irSalesByCountrySummaryCss;

const IrSalesByCountrySummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    calculateTotalValues(field, lastYear = false) {
        var _a;
        return (_a = this.salesReports) === null || _a === void 0 ? void 0 : _a.reduce((prev, curr) => {
            const value = lastYear ? (curr.last_year ? curr.last_year[field] : 0) : curr[field];
            return prev + value;
        }, 0);
    }
    getIcon(val1, val2) {
        var _a;
        if (((_a = this.salesReports) === null || _a === void 0 ? void 0 : _a.length) && this.salesReports[0].last_year) {
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
        return (index.h("div", { key: '018c8af3c1ea5297580cfb15ec99f0112d324841', class: "sales-by-country-summary__container" }, index.h("ir-stats-card", { key: '3ef5ca8cca6bb51dc00c66b2728270f0494f5613', cardTitle: "Total Room Nights", icon: this.getIcon(totalRoomNights, lastYearTotalRoomNights), value: totalRoomNights.toString(), subtitle: lastYearTotalRoomNights ? `Last year ${lastYearTotalRoomNights}` : undefined }), index.h("ir-stats-card", { key: '991972349f3e4f4332f6c0e68334b356e8262371', icon: this.getIcon(totalGuests, lastYearTotalGuests), cardTitle: "Total Guests", value: totalGuests.toString(), subtitle: lastYearTotalGuests ? `Last year ${lastYearTotalGuests}` : undefined }), index.h("ir-stats-card", { key: '3899f10ba8b57f85d13d885bf77b7fb6883c4e81', icon: this.getIcon(totalRevenue, lastYearTotalRevenue), cardTitle: "Total Revenue", value: utils.formatAmount(calendarData.calendar_data.currency.symbol, totalRevenue), subtitle: lastYearTotalRevenue ? `Last year ${utils.formatAmount(calendarData.calendar_data.currency.symbol, lastYearTotalRevenue)}` : undefined })));
    }
};
IrSalesByCountrySummary.style = IrSalesByCountrySummaryStyle0;

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
        return (index.h("div", { key: 'b35d92bf6a36b0a61b8ddaa644b08ee71e681247', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: 'e74113f8c6b94ed87e53f2ce2c71115c18854124', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: 'e96761eb4eaf4a06efe38b18cd6ba443f86be94b', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: '31b22c55fe1b6b5fa4bb6090e41c0c65c8ee3d95', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: '25aa7c5e00a2a39e4e2e440e7196a06594dceb55', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: 'cb22ee44cad4327aadc3c9f7e28896680d8f3a9f', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries.Lcz_Filters)), index.h("ir-button", { key: '3d3b8e0003e926a7f5d15ae9a42e28ce0ade6e95', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: 'a1b51d985c665cebb27b91dd1fc6b553d1febcdc', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, index.h("div", { key: '080a8159212261528b3d615e8a127cde0863c24b', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: 'b018dbc5ac10e7de44224884418934c81b616774', class: "pt-1 filter-group" }, index.h("label", { key: '25832960e3d6724324a530e410f756507cd68a07', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Rooms"), index.h("ir-select", { key: '59e7e9b312c7ee2c135319d2ec1d59641d8f65c0', selectedValue: (_a = this.filters) === null || _a === void 0 ? void 0 : _a.BOOK_CASE, selectId: "rooms", showFirstOption: false, onSelectChange: e => this.updateFilter({
                BOOK_CASE: e.detail,
            }), data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), index.h("fieldset", { key: '3992ff952b785d83c18425e0c31e026fdfae5a9d', class: "pt-1 filter-group" }, index.h("label", { key: '5d26835c12c9b537aae1351ec61dc46e63e7e36d', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), index.h("div", { key: '29a31e5a280e80a56f9287f96026b08332bc1286', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, index.h("ir-select", { key: '880ac29899500f63d48e02817cdb6461d19f6542', selectedValue: this.window, onSelectChange: e => {
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
            ] }), index.h("p", { key: '36a656207ad9b7e5773c3af5e258a5e28a84d38f', class: "m-0 p-0 text-center" }, "Or"), index.h("ir-range-picker", { key: '237713a1eb1f10a087cdc7d9732689453d027bec', onDateRangeChanged: e => {
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
            }, fromDate: moment.hooks(this.filters.FROM_DATE, 'YYYY-MM-DD'), toDate: moment.hooks(this.filters.TO_DATE, 'YYYY-MM-DD'), maxDate: moment.hooks().format('YYYY-MM-DD'), withOverlay: false }))), index.h("div", { key: '1543d91a421ebe7f409b3d966fecca0a46dd2611', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, index.h("label", { key: '449166c25725b96e8042d002c1f8f840069fc8aa', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), index.h("ir-checkbox", { key: 'c4f4c14069020d99f5eafde99f9ed20f4dee45e3', checked: (_b = this.filters) === null || _b === void 0 ? void 0 : _b.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), index.h("div", { key: '8c7db200b9e1ee89ac7491fd6290378ea0ce6a2c', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: '343c85efbfe29854ec3d417db2627694b5ea0ee3', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: '15b9d11fd38196e0d229d2e853ec3a041235483e', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrSalesFilters.style = IrSalesFiltersStyle0;

const irSalesTableCss = ".sc-ir-sales-table-h{display:block;width:100%}.legend.sc-ir-sales-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-sales-table{background:#6692b3}.channel-cell.sc-ir-sales-table{width:100%}.task-row.sc-ir-sales-table,.table.sc-ir-sales-table th.sc-ir-sales-table,.table.sc-ir-sales-table td.sc-ir-sales-table{white-space:nowrap;max-width:max-content !important;padding:0.25rem 1rem !important}.outer-container.sc-ir-sales-table{padding:1rem;box-sizing:border-box}.table.sc-ir-sales-table tfoot.sc-ir-sales-table td.sc-ir-sales-table{border-bottom:0}.flag.sc-ir-sales-table{height:16px;width:23px;border-radius:3px}";
const IrSalesTableStyle0 = irSalesTableCss;

const tableCss = ".ir-table-row.sc-ir-sales-table td.sc-ir-sales-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-sales-table td.sc-ir-sales-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sc-ir-sales-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-sales-table td.sc-ir-sales-table{background:#e3f3fa !important}.selected.sc-ir-sales-table td.sc-ir-sales-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table,.ir-table-row.sc-ir-sales-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table{text-transform:capitalize}.sortable.sc-ir-sales-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-sales-table:hover td.sc-ir-sales-table{background:#e2e6ea3f !important}.sortable.sc-ir-sales-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-sales-table svg.sc-ir-sales-table{color:var(--blue)}";
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
        return (index.h("div", { key: '62a98eafc8417d5368c5e48408fc59db6cfa34f4', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, index.h("table", { key: '5268e4f4862575d40411f09f606757c8340eb369', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: '29ac2167fcde3988f4565f57b88b13b80f668383', class: "table-header" }, index.h("tr", { key: '2dfeefff12920a0474101bae4a2e7d7cb79eb0ea' }, index.h("th", { key: '8ff93716529c112230a144c661232c2fea6e0c50', class: "text-left" }, "Country"), index.h("th", { key: '3ecd231ed23b13da05b44f35cfd12ae622ca2c7f', class: "text-center" }, "Room nights"), index.h("th", { key: 'b788f1f095a306547cd05df2054bbd746b507ad9', class: "text-center" }, "No of guests"), index.h("th", { key: '7e16ed68608d4975d0c1837e88d7145b3d34270f', class: "text-right" }, "Revenue"), index.h("th", { key: 'f7861b7053962f8d2fc6c63c703c671df4ec143f', class: "" }))), index.h("tbody", { key: 'a308b19a3789a025896b3c32cba20ea98b194f40' }, this.records.length === 0 && (index.h("tr", { key: '217dd2b36ecf1091a8dac27c7bdaef5333e3907b' }, index.h("td", { key: '8cb83b907af1813d8356d6f934ffca9ee4ff7065', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (index.h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, index.h("td", { class: "text-left" }, index.h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && index.h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), index.h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), index.h("td", { class: "text-center" }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), index.h("td", { class: "text-center" }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), index.h("td", { class: "text-right" }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, utils.formatAmount(calendarData.calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, utils.formatAmount(calendarData.calendar_data.currency.symbol, record.last_year.revenue))))), index.h("td", null, index.h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && index.h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), index.h("tfoot", { key: 'd8b44857dfbfa0fe2872510fdf4c8a57d90ad830' }, index.h("tr", { key: '78819c5d18ebe11bf7dd70c819e2d63823206bbb', style: { fontSize: '12px' } }, index.h("td", { key: '01ef26dea9b5528f3fb650c7c9a5280436d5e6ed', colSpan: 4 }), index.h("td", { key: '0aaa615b42864954649c0d972d1642ffe5a97e7c', style: { width: '250px' } }, index.h("div", { key: '620886f147f3bb96a25428bd4738c8bbf60d3cf7', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, index.h("div", { key: 'e329b09e91e891cd8335de9977cb24119beae4bb', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: '3f8d66d9767d635806e1c9861a40da6f9eb17992', class: "legend bg-primary" }), index.h("p", { key: 'd87be84c45a4ac5ae7dd305a31c04c911a68518a', class: "p-0 m-0" }, "Selected period ")), index.h("div", { key: '470735b7c87b1c39d90a30287a278a4745c1fcac', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: 'e92440cc8942169f7ad271b2246b215c91286420', class: "legend secondary" }), index.h("p", { key: '8f57f512c01c0d51eeac31a52e0f7c0e8e93270b', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (index.h("div", { key: 'b26f3ad73a1a1e3d3d179634d902cac76d69575f', class: 'd-flex mx-auto' }, index.h("ir-button", { key: 'e3ae069ab55c760682a5643a75fd1b486d550c3a', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
    }
};
IrSalesTable.style = IrSalesTableStyle0 + IrSalesTableStyle1;

exports.ir_sales_by_country_summary = IrSalesByCountrySummary;
exports.ir_sales_filters = IrSalesFilters;
exports.ir_sales_table = IrSalesTable;

//# sourceMappingURL=ir-sales-by-country-summary_3.cjs.entry.js.map