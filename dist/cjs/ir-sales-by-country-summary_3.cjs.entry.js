'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');
const utils = require('./utils-9892967b.js');
const calendarData = require('./calendar-data-e7cdcfec.js');
const locales_store = require('./locales.store-4eb57996.js');
const moment = require('./moment-1780b03a.js');
require('./index-8bb117a0.js');
require('./axios-6e678d52.js');
require('./index-6299b0f7.js');

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
        return (index.h("div", { key: 'ed3aecee51ea53d242ce2a458226508310babee3', class: "sales-by-country-summary__container" }, index.h("ir-stats-card", { key: 'c7135488325402191d8ad124f1ae1fc02a273e4d', cardTitle: "Total Room Nights", icon: this.getIcon(totalRoomNights, lastYearTotalRoomNights), value: totalRoomNights.toString(), subtitle: lastYearTotalRoomNights ? `Last year ${lastYearTotalRoomNights}` : undefined }), index.h("ir-stats-card", { key: '444abcf53a2dc6dc5ade3156bf911a894feb7ce5', icon: this.getIcon(totalGuests, lastYearTotalGuests), cardTitle: "Total Guests", value: totalGuests.toString(), subtitle: lastYearTotalGuests ? `Last year ${lastYearTotalGuests}` : undefined }), index.h("ir-stats-card", { key: '72b97cb7bae4190598430cee935cc16505614245', icon: this.getIcon(totalRevenue, lastYearTotalRevenue), cardTitle: "Total Revenue", value: utils.formatAmount(calendarData.calendar_data.currency.symbol, totalRevenue), subtitle: lastYearTotalRevenue ? `Last year ${utils.formatAmount(calendarData.calendar_data.currency.symbol, lastYearTotalRevenue)}` : undefined })));
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
        return (index.h("div", { key: 'dc2e5aae5a6ccfbacb62e735210d135d06d47b8c', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: 'e2aa80807d9f65a886fd999d461306ce76f534b5', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: '5927727b3257002e5c9dbf5a45ec1a26978ea934', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: '2bf4b57573dc65ee7d2b0407b9d8bb9b55235e25', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: 'd965ab5cfa0580067bd3cf6673f9cf26cd75464c', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: '971f7f90a5e68bc88a22d04306a4a09cb7b1cbda', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries.Lcz_Filters)), index.h("ir-button", { key: 'a0023fcffda68abe022247293b21a703b24a8cab', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: '524f869aadef556ac5919a3023f921a9389f0f8d', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, index.h("div", { key: '8f3f3476461e5cdfa9b15ba1360f4e300bd1e2b0', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: '60dbe56a7023ca12013aa02043fc0e9676334d45', class: "pt-1 filter-group" }, index.h("label", { key: 'accfa5b2184fe766396a9ca75302441c8679685d', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Rooms"), index.h("ir-select", { key: '8f0f7ab88bdc0f311822a581336c7e510cd24a3d', selectedValue: this.filters?.BOOK_CASE, selectId: "rooms", showFirstOption: false, onSelectChange: e => this.updateFilter({
                BOOK_CASE: e.detail,
            }), data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), index.h("fieldset", { key: 'f867d1c5332346bfd6594a701a8a451e215b05aa', class: "pt-1 filter-group" }, index.h("label", { key: 'a506c482d2705f025e31371e4f1663d641f2ea55', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), index.h("div", { key: 'dab7f0797791bda10fdc87dad966681ed07a8b46', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, index.h("ir-select", { key: '65ae5d2855646d8f80baac5fd60c0ca3dd6171c7', selectedValue: this.window, onSelectChange: e => {
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
            ] }), index.h("p", { key: 'b116fb73551fe5ffb005109b394177fd872ec938', class: "m-0 p-0 text-center" }, "Or"), index.h("ir-range-picker", { key: 'f7b749fe9c8b3d11282a7e56acd90e79909d9c05', onDateRangeChanged: e => {
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
            }, fromDate: moment.hooks(this.filters.FROM_DATE, 'YYYY-MM-DD'), toDate: moment.hooks(this.filters.TO_DATE, 'YYYY-MM-DD'), maxDate: moment.hooks().format('YYYY-MM-DD'), withOverlay: false }))), index.h("div", { key: 'c6c73c7cff69fea8633574a506e6c5bb5fecf128', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, index.h("label", { key: '45af5509576a3ef232499a1d4f3d26263d249ce2', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), index.h("ir-checkbox", { key: '36feb1c499c13be46f573bb8cdce90b062656ada', checked: this.filters?.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), index.h("div", { key: '8408bc8326d3aea878be0aa8ee3ca29826bb8349', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: '7fe433296995533fc076c321e3bdfb48bf8c8cee', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: '164bb77e1f0198eb6a8f23146e40be05e970a971', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrSalesFilters.style = IrSalesFiltersStyle0;

const irSalesTableCss = ".sc-ir-sales-table-h{display:block;width:100%}.legend.sc-ir-sales-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-sales-table{background:#6692b3}.channel-cell.sc-ir-sales-table{width:100%}.task-row.sc-ir-sales-table,.table.sc-ir-sales-table th.sc-ir-sales-table,.table.sc-ir-sales-table td.sc-ir-sales-table{white-space:nowrap;max-width:max-content !important;padding:0.25rem 1rem !important}.outer-container.sc-ir-sales-table{padding:1rem;box-sizing:border-box}.table.sc-ir-sales-table tfoot.sc-ir-sales-table td.sc-ir-sales-table{border-bottom:0}.flag.sc-ir-sales-table{height:16px;width:23px;border-radius:3px}";
const IrSalesTableStyle0 = irSalesTableCss;

const tableCss = ".ir-table-row.sc-ir-sales-table td.sc-ir-sales-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-sales-table{flex:1 1 0%}.table--container.sc-ir-sales-table{overflow-x:auto}.table.sc-ir-sales-table td.sc-ir-sales-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-sales-table tbody.sc-ir-sales-table tr.sc-ir-sales-table:last-child>td.sc-ir-sales-table{border-bottom:0 !important}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sc-ir-sales-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-sales-table thead.sc-ir-sales-table th.sc-ir-sales-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-sales-table .empty-row.sc-ir-sales-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-sales-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-sales-table td.sc-ir-sales-table{background:#e3f3fa !important}.selected.sc-ir-sales-table td.sc-ir-sales-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table,.ir-table-row.sc-ir-sales-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table{text-transform:capitalize}.sortable.sc-ir-sales-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-sales-table:hover td.sc-ir-sales-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-sales-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-sales-table svg.sc-ir-sales-table{color:var(--blue)}.sticky-column.sc-ir-sales-table{position:sticky !important;right:0;background-color:white}";
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
        return (index.h("div", { key: '2cd57fe200f9a1a0ba0be92d0fa5dcfb3d35a70d', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, index.h("table", { key: 'e7d2e6d31fda032979f1fe92d4fb82a5e55c44ef', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: '15967b9fb5c98644e0fb991b3361eb3600c222aa', class: "table-header" }, index.h("tr", { key: '23f22c042d06b1f6c5808ebdc758889021a861e3' }, index.h("th", { key: 'd07d24647339affd062777d7089a0dd55d173e0a', class: "text-left" }, "Country"), index.h("th", { key: 'a5ca378c3068550f364ce7c5da4f50b8eb106950', class: "text-center" }, "Room nights"), index.h("th", { key: 'efc21781df4b30b2b9cf4c07aa6ee210144eb77c', class: "text-center" }, "No of guests"), index.h("th", { key: 'e4da0147aab499ee4bb9de39460ab24b3d56d13c', class: "text-right" }, "Revenue"), index.h("th", { key: 'acafb615f2f1212d95d0de7acaf6cf89733f9629', class: "" }))), index.h("tbody", { key: '57799044f1bf46a9518c95418dc962039e0ad89f' }, this.records.length === 0 && (index.h("tr", { key: 'dab8fac0949878ad3097a848d9e0b5e803c4c25f' }, index.h("td", { key: 'c69687d61723d51b314ac1ddf1ae0fc1c1614fbe', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (index.h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, index.h("td", { class: "text-left" }, index.h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && index.h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), index.h("span", null, mappedCountry?.name ?? record.country))), index.h("td", { class: "text-center" }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), index.h("td", { class: "text-center" }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), index.h("td", { class: "text-right" }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, utils.formatAmount(calendarData.calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, utils.formatAmount(calendarData.calendar_data.currency.symbol, record.last_year.revenue))))), index.h("td", null, index.h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && index.h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), index.h("tfoot", { key: '56220ed9e5f27435581ce0ded54c19695967de6a' }, index.h("tr", { key: '5b83012a7e67674b6243d81ca2162ad493190a0b', style: { fontSize: '12px' } }, index.h("td", { key: '3dddf140adaeea6051bd752102a4783eb3400d32', colSpan: 4 }), index.h("td", { key: 'c12f716040ec714d1d8963436d92a556228f5764', style: { width: '250px' } }, index.h("div", { key: 'd07aa7e81ea69392624a9a866176b135f392935c', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, index.h("div", { key: 'a59f2dd5ec2631f772f7f907898ab926df8691aa', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: '06bc15f10aa635ee701f915ab4d19b27c5a1e271', class: "legend bg-primary" }), index.h("p", { key: 'ac414aeb6c72ef0dc2f53dfe84729a9bd53b4d2a', class: "p-0 m-0" }, "Selected period ")), index.h("div", { key: '51962f485062bf09d54c8f25afece4b92edf34e5', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: '6950e31626c288e078da06e715b2c4d0c40ed5fa', class: "legend secondary" }), index.h("p", { key: '38faa10aa28758d68ef6970e9343462ffb5726ee', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (index.h("div", { key: '95e22eb012f2ebe3b81def9bf0c6cf42859fa26b', class: 'd-flex mx-auto' }, index.h("ir-button", { key: '2d19f7292549249b19e991ba073ddc3c3cb29ea9', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
    }
};
IrSalesTable.style = IrSalesTableStyle0 + IrSalesTableStyle1;

exports.ir_sales_by_country_summary = IrSalesByCountrySummary;
exports.ir_sales_filters = IrSalesFilters;
exports.ir_sales_table = IrSalesTable;

//# sourceMappingURL=ir-sales-by-country-summary_3.cjs.entry.js.map